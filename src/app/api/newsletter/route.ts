import { NextResponse } from "next/server";
import { addNewsletterSignup } from "@/lib/store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never fill in.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email ?? "").trim();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { alreadySubscribed } = await addNewsletterSignup(email);
  return NextResponse.json({ ok: true, alreadySubscribed });
}
