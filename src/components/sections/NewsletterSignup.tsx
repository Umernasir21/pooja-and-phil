"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }
      setMessage(
        data.alreadySubscribed
          ? "You're already on the list."
          : "Thanks — you're on the list."
      );
      setStatus("success");
      setEmail("");
    } catch {
      setMessage("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-sm">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="min-w-0 flex-1 rounded-sm border border-cream/30 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:outline-3 focus-visible:outline-saffron"
        />
        {/* Honeypot — hidden from real visitors */}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-sm bg-orange px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rust transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`text-xs ${status === "error" ? "text-rust" : "text-cream/60"}`}
      >
        {message || "Occasional updates on the book — no spam."}
      </p>
    </form>
  );
}
