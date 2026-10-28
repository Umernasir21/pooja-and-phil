import { promises as fs } from "fs";
import path from "path";

// Lightweight JSON-file persistence for newsletter signups and contact
// messages. This works for local development and any traditional
// always-on Node server. It does NOT reliably persist on Vercel's default
// serverless deployment (ephemeral, per-invocation filesystem) — see
// LAUNCH_CHECKLIST.md before relying on this in production on Vercel.

const DATA_DIR = path.join(process.cwd(), ".data");

export type NewsletterEntry = {
  email: string;
  subscribedAt: string;
};

export type ContactEntry = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, data: unknown) {
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), "utf-8");
}

export async function addNewsletterSignup(email: string): Promise<{ alreadySubscribed: boolean }> {
  const entries = await readJson<NewsletterEntry[]>("newsletter.json", []);
  if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
    return { alreadySubscribed: true };
  }
  entries.unshift({ email, subscribedAt: new Date().toISOString() });
  await writeJson("newsletter.json", entries);
  return { alreadySubscribed: false };
}

export async function getNewsletterSignups(): Promise<NewsletterEntry[]> {
  return readJson<NewsletterEntry[]>("newsletter.json", []);
}

export async function addContactMessage(entry: Omit<ContactEntry, "submittedAt">): Promise<void> {
  const entries = await readJson<ContactEntry[]>("contact.json", []);
  entries.unshift({ ...entry, submittedAt: new Date().toISOString() });
  await writeJson("contact.json", entries);
}

export async function getContactMessages(): Promise<ContactEntry[]> {
  return readJson<ContactEntry[]>("contact.json", []);
}
