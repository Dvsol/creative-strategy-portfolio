import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breakdowns, getBreakdown } from "@/lib/breakdowns";
import ziadEvidence from "../../public/images/breakdowns/ziad-shares/ziad-shares-case-interview-325k.png";
import managementEvidence from "../../public/images/field-notes/003/latest-uploads-low-hundreds.png";
import retirementEvidence from "../../public/images/field-notes/004/breakout-genx-and-future-self.png";

export const metadata: Metadata = {
  title: "David Ekis — YouTube Creative Strategist",
  description: "I help creators and brands figure out why videos work, why channels stall, and what to make next. Explore my public Field Notes or work with me.",
};

// Homepage presentation only. Published studies and the library stay unchanged.
const SELECTED_PROOF = [
  {
    slug: "ziad-shares-325k-video-audience-demand",
    image: ziadEvidence,
    alt: "Ziad Shares' consulting case interview video, showing 325K public views.",
    hook: "325K breakout studied",
    caption: "How one consulting topic revealed what the audience actually wanted.",
  },
  {
    slug: "management-consulted-youtube-audience-sequencing",
    image: managementEvidence,
    alt: "Management Consulted's Toothbrush Test case interview video, showing 209 public views.",
    hook: "Audience journey studied",
    caption: "Strong expertise. Weak audience journey.",
  },
  {
    slug: "early-retirement-roadmap",
    image: retirementEvidence,
    alt: "Early Retirement Roadmap's Why Gen X is Quietly Done With Work video, showing 167K public views.",
    hook: "167K breakout studied",
    caption: "How a retirement channel found a bigger audience hiding outside retirement.",
  },
];

const PRIMARY_CTA = "annotation inline-flex min-h-12 items-center justify-center gap-4 bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const SECONDARY_CTA = "annotation inline-flex min-h-12 items-center justify-center px-6 py-3.5 text-ink underline decoration-linedark underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-9 text-center md:px-8 md:pb-14 md:pt-14">
          <p className="annotation font-medium text-accentink">David Ekis</p>
          <p className="mt-2 text-sm text-soft md:text-base">YouTube Creative Strategist</p>
          <h1 id="hero-title" className="display mx-auto mt-6 max-w-4xl text-[2.75rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">I study why things work.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-soft md:text-lg">
            I help creators and brands figure out why videos work, why channels stall, and what to make next.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Link href="/work-with-me" className={PRIMARY_CTA}>Work With Me <span aria-hidden="true">→</span></Link>
            <Link href="/breakdowns" className={SECONDARY_CTA}>See My Work</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="proof-title" className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="proof-title" className="annotation font-medium text-accentink">Selected Field Notes</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft">Public breakdowns of what makes YouTube channels and videos work.</p>
          </div>
          <Link href="/breakdowns" className="link-editorial annotation inline-flex min-h-11 items-center text-ink">View all {breakdowns.length} Field Notes →</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SELECTED_PROOF.map((proof, i) => {
            const study = getBreakdown(proof.slug);
            if (!study) return null;
            return (
              <article key={study.slug} className="group min-w-0">
                <Link href={`/breakdowns/${study.slug}`} className="flex h-full flex-col border border-line bg-card transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
                    <span className="annotation text-soft">{study.number.replace("FN—", "Field Note #")}</span>
                    <span aria-hidden="true" className="text-accent">↗</span>
                  </div>
                  <div className="relative aspect-[6/5] overflow-hidden bg-[#101010]">
                    <Image src={proof.image} alt={proof.alt} fill sizes="(min-width: 1152px) 700px, (min-width: 768px) 60vw, 200vw" loading={i === 0 ? "eager" : "lazy"} className={i === 0 ? "object-contain" : "object-cover object-left"} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="annotation text-accentink">{proof.hook}</p>
                    <h3 className="display mt-2 text-2xl font-semibold leading-tight group-hover:underline group-hover:underline-offset-4">{study.channel}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-soft">{proof.caption}</p>
                    <span className="annotation mt-auto block pt-5 text-ink">Read Field Note <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-soft">Independent analysis of public channels. View counts shown are from videos I studied, not results I generated.</p>
      </section>

      <section aria-labelledby="help-title" className="border-y border-line bg-wash/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-14">
          <div>
            <p className="annotation text-accentink">Work With Me</p>
            <h2 id="help-title" className="display mt-3 max-w-md text-3xl font-semibold leading-tight md:text-4xl">Need this for your channel?</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-soft">Send me your channel and what you&apos;re trying to solve.</p>
            <Link href="/work-with-me" className={`${PRIMARY_CTA} mt-6`}>Work With Me <span aria-hidden="true">→</span></Link>
          </div>
          <div>
            <p className="annotation mb-3 text-soft">I help with</p>
            <ul className="grid gap-x-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {[
                "Channel diagnosis", "Topic and audience strategy", "Titles and thumbnails",
                "Hooks and retention direction", "Positioning", "Content systems and what to make next",
              ].map((service) => <li key={service} className="border-t border-linedark py-3 text-sm leading-relaxed">{service}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="method-title" className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="method-title" className="annotation text-accentink">How I Think</h2>
          <Link href="/about" className="link-editorial annotation inline-flex min-h-11 items-center text-soft">More about me →</Link>
        </div>
        <ol className="mt-4 grid gap-5 sm:grid-cols-3 sm:gap-8">
          {[
            ["Diagnose", "Find what is actually limiting the channel."],
            ["Test", "Turn the diagnosis into specific ideas and experiments."],
            ["Build", "Create a repeatable direction for what comes next."],
          ].map(([title, text], i) => (
            <li key={title} className="border-t border-line pt-4">
              <p className="annotation text-soft">0{i + 1}</p>
              <h3 className="display mt-2 text-2xl font-semibold">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-soft">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="cta-title" className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <p className="annotation text-paper/70">Let&apos;s find the next move</p>
          <div className="mt-3 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
            <h2 id="cta-title" className="display max-w-xl text-3xl font-semibold leading-tight md:text-4xl">Have a channel that should be doing better?</h2>
            <p className="max-w-md text-sm leading-relaxed text-paper/80">I can help you figure out what the audience is responding to, where the bottleneck is, and what to test next.</p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/work-with-me" className="annotation inline-flex min-h-12 items-center justify-center gap-4 bg-paper px-6 py-3.5 text-ink transition-colors hover:bg-accentwash focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">Work With Me <span aria-hidden="true">→</span></Link>
            <Link href="/breakdowns" className="annotation inline-flex min-h-12 items-center px-5 py-3.5 text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper">See Field Notes</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-paper/80">
            <a href="mailto:dekisola@gmail.com" className="underline decoration-paper/40 underline-offset-4 hover:decoration-paper">dekisola@gmail.com</a>
            <a href="https://t.me/Dvsol2" target="_blank" rel="noreferrer" className="underline decoration-paper/40 underline-offset-4 hover:decoration-paper">Telegram · @Dvsol2</a>
          </div>
        </div>
      </section>
    </>
  );
}
