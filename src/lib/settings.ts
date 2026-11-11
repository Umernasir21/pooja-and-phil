import { promises as fs } from "fs";
import path from "path";

// Site-wide editable settings (currently just book pricing), persisted the
// same way as blog.ts and store.ts — a gitignored JSON file in .data/.
// No price was supplied with the original manuscript/asset pack (see
// CONTENT_SOURCE_NOTES.md) — this lets the author set and change it herself
// from /admin without a code deploy, rather than guessing a number.

const DATA_DIR = path.join(process.cwd(), ".data");
const FILE = "settings.json";

export type PriceEntry = {
  format: string;
  price: string;
};

export type SiteSettings = {
  prices: PriceEntry[];
};

const DEFAULT_SETTINGS: SiteSettings = { prices: [] };

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function getSettings(): Promise<SiteSettings> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, FILE), "utf-8");
    const parsed = JSON.parse(raw) as Partial<SiteSettings>;
    return { prices: Array.isArray(parsed.prices) ? parsed.prices : [] };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function updateSettings(next: SiteSettings): Promise<void> {
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, FILE), JSON.stringify(next, null, 2), "utf-8");
}
