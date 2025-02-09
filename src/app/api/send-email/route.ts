import { sendEmail } from "@/components/emailSend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const emailResponse = await sendEmail(name, email, message);

    if (!emailResponse.success) {
      return Response.json({
        success: false,
        message: emailResponse.message,
      });
    }

    return Response.json({
      success: true,
      message: "Mail Sent!",
    });
  } catch (error) {
    console.error("Error in sending mail to saniddhya: ", error);
    return Response.json({
      success: false,
      message: "Error in sending mail!",
    });
  }
}
