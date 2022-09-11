import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const BOT_SENDER_EMAIL = process.env.VITE_BOT_EMAIL;
export const RECEPIENT_EMAIL = process.env.VITE_BUSINESS_EMAIL;


export const zohoTransporter = nodemailer.createTransport({
    host : "smtp.zoho.com",
    secure : true,
    port : 465,
    auth : {
        user : BOT_SENDER_EMAIL,
        pass : process.env.VITE_BOT_EMAIL_PW
    }
});

