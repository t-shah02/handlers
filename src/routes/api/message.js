
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

    

    // make some 3rd party API calls here to handle Email composition and sending (Sendgrid might be a good option)

    return { status: 200, body: { message: "The message was sent successfully!" } };
}

