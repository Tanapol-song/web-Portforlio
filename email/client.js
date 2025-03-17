import nodemailer from "nodemailer";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const tramsporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure: true,
    auth : {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    }
})

export const mailOptions = {
    from: adminEmailFull,
    to: adminEmailFull,
}