import { promises as fs } from "fs";
import path from "path";
import { randomBytes } from "crypto";
import sharp from "sharp";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/requireAdmin";

// Images uploaded from /admin land directly in public/images/uploads — Next
// serves the public/ folder straight off disk per request, so a file written
// here is live immediately, no rebuild or redeploy needed.
const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "uploads");
const MAX_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be smaller than 8MB." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const name = `${Date.now()}-${randomBytes(4).toString("hex")}.webp`;

  try {
    const optimized = await sharp(buffer).webp({ quality: 85 }).toBuffer();
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    await fs.writeFile(path.join(UPLOAD_DIR, name), optimized);
  } catch {
    return NextResponse.json({ error: "Could not process this image." }, { status: 500 });
  }

  return NextResponse.json({ path: `/images/uploads/${name}` });
}
