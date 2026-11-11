import { NextResponse } from "next/server";
import { updateSettings, type PriceEntry } from "@/lib/settings";
import { isAdminRequest } from "@/lib/requireAdmin";

export async function PUT(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: { prices?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!Array.isArray(body.prices)) {
    return NextResponse.json({ error: "Invalid prices payload." }, { status: 400 });
  }

  const prices: PriceEntry[] = [];
  for (const entry of body.prices) {
    const format = String((entry as Record<string, unknown>)?.format ?? "").trim();
    const price = String((entry as Record<string, unknown>)?.price ?? "").trim();
    if (!format || format.length > 40) {
      return NextResponse.json({ error: "Each format name must be 1-40 characters." }, { status: 400 });
    }
    if (!price || price.length > 20) {
      return NextResponse.json({ error: "Each price must be 1-20 characters." }, { status: 400 });
    }
    prices.push({ format, price });
  }

  await updateSettings({ prices });
  return NextResponse.json({ ok: true, prices });
}
