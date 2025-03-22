"use server";
import {
  SITE_MAIL_RECIEVER,
  SMTP_SERVER_PASSWORD,
  SMTP_SERVER_USERNAME,
  transporter,
} from "@/config/mail.config";

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html ? html : "",
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", SITE_MAIL_RECIEVER);
  return info;
}
