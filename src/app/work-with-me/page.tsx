import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Tell me about your YouTube channel, your goals, and where you need help. Send a short application to work with David Ekis.",
};

export default function WorkWithMePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:px-8 md:py-10">
      <section aria-labelledby="application-title">
        <p className="annotation text-accent">§ Work with me</p>
        <h1 id="application-title" className="display mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          Let’s work on your YouTube.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft md:text-base">
          Tell me about your channel, what you’re trying to achieve, and where you think you’re stuck. I’ll take a look and get back to you.
        </p>
        <a href="#application" className="annotation link-editorial mt-3 inline-flex min-h-11 items-center text-ink">
          Start your application ↓
        </a>
      </section>

      <section id="application" aria-labelledby="form-title" className="mt-4 scroll-mt-24">
        <div className="mb-4">
          <h2 id="form-title" className="annotation text-soft">Your application · about 2–3 minutes</h2>
          <p className="mt-2 text-sm leading-relaxed text-soft">
            Not sure what the problem is? That’s fine. Send the channel anyway.
          </p>
        </div>
        <InquiryForm />
      </section>

      <section aria-label="Alternative contact options" className="mt-8 border-t border-line pt-6">
        <p className="annotation text-faint">Prefer to reach me directly?</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a className="link-editorial" href="mailto:dekisola@gmail.com">dekisola@gmail.com</a>
          <a className="link-editorial" href="https://t.me/Dvsol2" target="_blank" rel="noreferrer">Telegram · @Dvsol2</a>
          <a className="link-editorial" href="https://x.com/Dv_sol1" target="_blank" rel="noreferrer">X / Twitter · @Dv_sol1</a>
        </div>
      </section>
    </div>
  );
}
