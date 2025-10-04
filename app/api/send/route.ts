import { sendPasswordResetEmail, sendVerificationMail } from "@/lib/resend";

export async function GET() {
    await sendVerificationMail(
        "quocvietdo4@gmail.com",
        "http://localhost:3000/verify-email?token=1234",
        "MNHTNG"
    )

    await sendPasswordResetEmail(
        "quocvietdo4@gmail.com",
        "http://localhost:3000/reset-password?token=5678",
        "MNHTNG"
    )

    return new Response('OK');
}
