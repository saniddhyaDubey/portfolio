import { Resend } from "resend";
import { EmailTemplate } from "./email-template";

const resend = new Resend("re_9dzW4EUo_AoU4yMpLXDexvXmwYpdkNvsi");

export async function sendEmail(name: string, email: string, message: string) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dubeysaniddhya@gmail.com",
      subject: `Message from ${name}: visited your profile!`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    return {
      success: true,
      message: "email sent successfully!",
    };
  } catch (emailError) {
    console.error("Error sending email: ", emailError);
    return {
      success: false,
      message: "Failed to send the email",
    };
  }
}
