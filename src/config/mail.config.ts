import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export {
  transporter,
  SMTP_SERVER_HOST,
  SMTP_SERVER_PASSWORD,
  SMTP_SERVER_USERNAME,
  SITE_MAIL_RECIEVER,
};
