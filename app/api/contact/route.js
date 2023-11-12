import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextResponse } from "next/server";
dotenv.config();

export async function POST(request) {
  const data = await request.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const subject = "Mail from " + data.name;

  const mail = {
    from: data.email,
    to: process.env.EMAIL,
    subject: subject,
    html: `
         <h3>Hello Manish mail from ${data.email}</h3>
         <p>message: ${data.message}</p>
     `,
  };

  await transporter.sendMail(mail);

  return NextResponse.json({ response: data });
}
export const dynamic = "force-static";
