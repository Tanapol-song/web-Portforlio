import { mailOptions, tramsporter } from "@/email/client";
import { replaceMergeTags, stripHTMLTags } from "@/email/helpers"

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
    const data = await request.json();
    // console.log("data", data);
    
    //html template
    const htmlFilePaht = path.join(process.cwd(),'email', 'contact-from.html');
    console.log('htmlFilePaht',htmlFilePaht)
    let htmlContent = fs.readFileSync(htmlFilePaht, 'utf8', (err, htmlContent) => {
        if (err) {
            console.error('Error reading HTML file', err)
            return;
        }
    });

    //replsce merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    //send email
    try {
        await tramsporter.sendMail({
            ...mailOptions,
            subject: 'New Contact Inquiry',
            text: plainTextContent,
            html: htmlContent,
        });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ erroe: err.message }, { status: err.status });
    }
}

// export async function GET() {
//     console.log("Hello Get")
// }