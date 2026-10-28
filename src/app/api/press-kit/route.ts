import { readFile } from "node:fs/promises";
import { join } from "node:path";
import JSZip from "jszip";

// Only assets approved for promotional distribution — see ASSET_MAP.md.
const PRESS_KIT_FILES = [
  { path: "images/author/bansi-pattni.png", name: "bansi-pattni-author-photo.png" },
  { path: "images/books/book-cover-front.png", name: "pooja-and-phil-cover.png" },
  { path: "images/books/book-standing-with-shadow.png", name: "pooja-and-phil-book-mockup.png" },
];

export async function GET() {
  const zip = new JSZip();
  const publicDir = join(process.cwd(), "public");

  for (const file of PRESS_KIT_FILES) {
    const buffer = await readFile(join(publicDir, file.path));
    zip.file(file.name, buffer);
  }

  const archive = await zip.generateAsync({ type: "nodebuffer" });

  return new Response(new Uint8Array(archive), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="pooja-and-phil-press-kit.zip"',
    },
  });
}
