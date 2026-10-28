import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret(): string {
  // Falls back to a dev-only value so `npm run dev` works out of the box.
  // Set a real ADMIN_PASSWORD env var before deploying — see LAUNCH_CHECKLIST.md.
  return process.env.ADMIN_PASSWORD || "dev-only-change-me";
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function checkPassword(password: string): boolean {
  const expected = getSecret();
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function createSessionToken(): string {
  return sign("admin-session");
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  return token === sign("admin-session");
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
export const ADMIN_COOKIE_MAX_AGE = MAX_AGE_SECONDS;
