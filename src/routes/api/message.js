
import { zohoTransporter, BOT_SENDER_EMAIL, RECEPIENT_EMAIL } from "../../config/_mail_config";

export async function POST({ request }) {
    const { message } = await request.json();



    if (!message) {
        return {
            status: 400,
            body:
            {
                message: "The following request did not contain a message attribute in its request body! Cannot process this request any further!"
            }
        };
    }

    const mailOptions = {
        from: BOT_SENDER_EMAIL,
        to: RECEPIENT_EMAIL,
        subject: "Automated message from handlers.ca website",
        text: message
    };

    const sendEmail = () => {
        return new Promise((resolve, reject) => {
            zohoTransporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        })
    };

    let emailSent = await sendEmail();

    if (emailSent) {
        return { status: 200, body: { message: "The message was sent successfully!" } };
    }
    else {
        return { status: 503, body: { message: "Error communicating with the SMTP server with gmail, please try again later!" } };
    }


}

