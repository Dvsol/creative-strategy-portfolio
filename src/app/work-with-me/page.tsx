import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Creative strategy, YouTube strategy, audits, and research-heavy strategic breakdowns for founders, creators, brands, and teams.",
};

const SERVICES = [
  {
    n: "S·01",
    title: "Creative Strategy",
    text: "Content positioning, concepts, campaigns, audience strategy, and creative direction — built on how attention actually behaves, not on how we wish it did.",
    fit: "For brands and teams whose content is good but strategically adrift.",
  },
  {
    n: "S·02",
    title: "YouTube Strategy",
    text: "Channel positioning, topic strategy, packaging, thumbnails, retention, and growth systems — the same lenses used in the breakdowns, applied to your channel.",
    fit: "For creators and channel teams who've plateaued and don't know which variable is the ceiling.",
  },
  {
    n: "S·03",
    title: "Strategy Audits",
    text: "A deep, evidence-first analysis of an existing creator, brand, channel, product, or campaign: what's working, why, what isn't, and the order in which to fix it.",
    fit: "For anyone who wants one of these breakdowns — pointed at their own work, in private.",
  },
  {
    n: "S·04",
    title: "Research & Strategic Breakdowns",
    text: "Research-heavy strategic analysis for teams that need to genuinely understand an audience, competitor, category, or opportunity before committing resources.",
    fit: "For teams making a bet that's too expensive to make on intuition alone.",
  },
];

const PROCESS = [
  { title: "You write", text: "A few sentences about what you're working on and what's not working." },
  { title: "We talk", text: "A short call to establish whether the problem is one I can actually help with. If it isn't, I'll say so." },
  { title: "I study", text: "Your situation gets the breakdown treatment: evidence, mechanisms, principles." },
  { title: "You get decisions", text: "Not a slide deck of observations — a prioritized set of strategic moves and the reasoning behind each." },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="annotation rise text-accent">§ Work with me</p>
          <h1 className="display rise rise-1 mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">
            The breakdowns are public. <span className="marker">The application is the work.</span>
          </h1>
          <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            Everything in the library — the deconstruction, the pattern-finding,
            the principle extraction — can be pointed at your channel, brand,
            product, or campaign. That&apos;s the job.
          </p>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <h2 id="services-title" className="sr-only">
          Services
        </h2>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {SERVICES.map((service) => (
            <article key={service.title} className="group flex flex-col bg-card p-7 transition-colors hover:bg-paper md:p-9">
              <p className="annotation text-faint transition-colors group-hover:text-accent">{service.n}</p>
              <h3 className="display mt-4 text-2xl font-semibold md:text-[1.7rem]">{service.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/85">{service.text}</p>
              <p className="mt-auto border-t border-line pt-4 text-sm leading-relaxed text-soft">
                <span className="annotation text-accent">Fit · </span>
                {service.fit}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="border-y border-line bg-wash/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="annotation text-accent">§ How it goes</p>
          <h2 id="process-title" className="display mt-3 text-3xl font-semibold md:text-4xl">
            No pitch theater. Just the work.
          </h2>
          <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="bg-card p-6">
                <span className="display text-2xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="annotation mt-6 text-faint">
            <span className="text-accent">*</span> No testimonials wall, no
            logo carousel, no invented numbers. Read the{" "}
            <Link href="/breakdowns" className="link-editorial text-soft">
              breakdowns
            </Link>{" "}
            — they&apos;re a more honest signal of how I think than anything I
            could claim here.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="annotation text-accent">§ Start here</p>
            <h2 id="contact-title" className="display mt-3 text-3xl font-semibold md:text-4xl">
              Tell me what you&apos;re trying to make work.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-soft">
              The most useful first message describes the problem, not the
              deliverable: what you&apos;ve tried, what happened, and what
              you&apos;re unsure about. I&apos;ll take it from there.
            </p>
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="annotation text-faint">A good first line looks like</p>
              <p className="display mt-2 text-lg leading-snug text-ink">
                “Our videos are good, our growth isn&apos;t, and we can&apos;t
                tell which of five theories is right.”
              </p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
