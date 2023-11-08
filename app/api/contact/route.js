import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const subject = "Mail from " + name;

  const mail = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    html: `
        <h3>Hello Manish mail from ${email}</h3>
        <p>message: ${message}</p>
    `,
  };

  await transporter.sendMail(mail);

  return new Response(JSON.stringify({ message: "Email Sent Successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
