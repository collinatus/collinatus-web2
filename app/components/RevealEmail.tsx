// app/components/RevealEmail.tsx
"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // npm install react-google-recaptcha
import { verifyAndReveal } from "../actions";

export default function RevealEmail() {
  const [view, setView] = useState<"button" | "captcha" | "revealed">("button");
  const [email, setEmail] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleCaptchaChange(token: string | null) {
    const result = await verifyAndReveal(token);
    if (result.success && result.email) {
      setEmail(result.email);
      setView("revealed");
    } else {
      alert("Verification failed.");
      recaptchaRef.current?.reset();
    }
  }

  return (
    <div className="p-4 border rounded-lg max-w-sm bg-white shadow-sm">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Business Inquiries</h3>
      
      {view === "button" && (
        <button 
          onClick={() => setView("captcha")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Email Address
        </button>
      )}

      {view === "captcha" && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleCaptchaChange}
        />
      )}

      {view === "revealed" && (
        <a href={`mailto:${email}`} className="text-blue-500 underline font-medium">
          {email}
        </a>
      )}
    </div>
  );
}