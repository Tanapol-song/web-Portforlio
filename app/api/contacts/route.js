import { mailOptions, tramsporter } from "@/email/client";
import { replaceMergeTags, stripHTMLTags } from "@/email/helpers";

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  const data = await request.json();

  // แก้ typo
  const htmlFilePath = path.join(process.cwd(), 'email', 'contact-from.html');

  // อ่านไฟล์แบบ sync ไม่ต้อง callback
  let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

  // Replace merge tags
  htmlContent = replaceMergeTags(data, htmlContent);
  const plainTextContent = stripHTMLTags(htmlContent);

  try {
    await tramsporter.sendMail({
      ...mailOptions,
      subject: 'New Contact Inquiry',
      text: plainTextContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true },
      {
        headers: {
          'Access-Control-Allow-Origin': '*', // ต้องใส่ header นี้ที่ response ทุกครั้งที่ส่งกลับ client
        },
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err.message },
      {
        status: err.status || 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // เช่นกัน
        },
      }
    );
  }
}
