"use client";

import { useState } from "react";

const SERVICES = [
  "Creative Strategy",
  "YouTube Strategy",
  "Strategy Audit",
  "Research & Strategic Breakdowns",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent bg-accentwash p-8 text-center" role="status">
        <p className="annotation text-accentink">◆ Inquiry filed</p>
        <p className="display mt-3 text-2xl font-semibold">Got it. I&apos;ll be in touch.</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-soft">
          I read every inquiry personally and reply to the ones that are a fit
          — usually within a few days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="annotation mt-6 border border-ink px-4 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="annotation text-soft">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="annotation text-soft">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="inq-service" className="annotation text-soft">
          What are you looking for? <span className="text-accent">*</span>
        </label>
        <select
          id="inq-service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm focus:border-accent focus:outline-none"
        >
          <option value="" disabled>
            Choose a starting point…
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="inq-message" className="annotation text-soft">
          What are you working on? <span className="text-accent">*</span>
        </label>
        <textarea
          id="inq-message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="mt-2 w-full resize-y border border-line bg-paper px-4 py-3 text-sm leading-relaxed focus:border-accent focus:outline-none"
          placeholder="A few sentences about your channel, brand, product, or question — and what 'working' would look like for you."
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="mt-4 border border-accent bg-accentwash px-4 py-3 text-sm text-accentink">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="annotation text-faint">
          <span className="text-accent">*</span> required · no newsletters, no spam
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="annotation bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry →"}
        </button>
      </div>
    </form>
  );
}
