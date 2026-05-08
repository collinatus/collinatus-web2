"use server";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const PRIVATE_EMAIL = "collinatus@gmail.com"; // Your actual email

export async function verifyAndReveal(token: string | null) {
  if (!token) return { success: false, message: "No token provided" };

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();

  if (data.success) { // Assuming v3, or just data.success for v2
    return { success: true, email: PRIVATE_EMAIL };
  }

  return { success: false, message: "Captcha failed" };
}