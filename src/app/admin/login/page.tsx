"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect password.");
        setStatus("error");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-ivory py-24 min-h-[70vh] flex items-center">
      <Container className="max-w-sm">
        <h1 className="font-serif-display text-2xl font-medium text-ink mb-6">
          Admin Sign In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink/70">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="rounded-sm border border-ink/20 px-4 py-2.5 text-ink focus-visible:outline-3 focus-visible:outline-orange"
            />
          </label>
          {error ? (
            <p role="alert" className="text-sm text-rust">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-cream hover:bg-rust transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </Container>
    </section>
  );
}
