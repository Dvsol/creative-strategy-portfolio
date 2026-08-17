import type { Metadata } from "next";
import Link from "next/link";
import { MethodSection } from "@/components/method-section";
import { breakdowns } from "@/lib/breakdowns";

export const metadata: Metadata = {
  title: "About",
  description:
    "A creative strategist who works like a researcher — pattern recognition, audience psychology, and understanding why things work.",
};

const LENSES = [
  {
    title: "Pattern recognition",
    text: "One success is luck. The same mechanism appearing across a YouTube channel, a beverage brand, and a Web3 community is a pattern worth naming.",
  },
  {
    title: "Audience psychology",
    text: "Every result traces back to a human decision: to click, to stay, to share, to buy, to belong. I work backwards from those decisions.",
  },
  {
    title: "Packaging & framing",
    text: "The gap between good work and noticed work is almost always framing. I study how the same substance changes fate with a different promise.",
  },
  {
    title: "Distribution mechanics",
    text: "How things travel — algorithms, gatekeepers, remixes, word of mouth — and how attention converts into assets that don't decay.",
  },
  {
    title: "Experimentation",
    text: "Principles extracted from breakdowns are hypotheses until applied. The library exists to be tested, not admired.",
  },
  {
    title: "Studying failure too",
    text: "Half of understanding why something worked is knowing why the ten nearly identical attempts around it didn't.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="annotation rise text-accent">§ About</p>
            <h1 className="display rise rise-1 mt-4 text-4xl font-semibold leading-[1.08] md:text-6xl">
              Endlessly curious about{" "}
              <span className="marker">why things work</span>.
            </h1>
            <div className="rise rise-2 mt-8 max-w-xl space-y-5">
              <p className="text-[17px] leading-[1.8] text-ink/90">
                This isn&apos;t a biography, because the biography isn&apos;t
                the point. The point is a habit: when something takes off — a
                video, a brand, a product, a campaign — most people scroll
                past it. I stop and take it apart.
              </p>
              <p className="text-[17px] leading-[1.8] text-ink/90">
                Years of making, studying, and advising on content taught me
                one uncomfortable thing: the visible reasons for success are
                almost never the real ones. The real reasons live in
                packaging, timing, psychology, and distribution — and they
                repeat. Which means they can be learned, and applied on
                purpose.
              </p>
              <p className="text-[17px] leading-[1.8] text-ink/90">
                The breakdown library is my working notebook, published. Every
                study follows the same discipline: observe the anomaly,
                deconstruct it, extract the principle, and make it useful to
                someone who isn&apos;t the original winner.
              </p>
            </div>
          </div>

          {/* Portrait slot — intentionally optional */}
          <div className="rise rise-3">
            <div className="graph-paper relative flex aspect-[4/5] items-center justify-center border border-line bg-wash">
              <div className="border border-dashed border-linedark bg-paper px-5 py-4 text-center">
                <p className="annotation text-accent">[ portrait ]</p>
                <p className="annotation mt-1.5 text-faint">
                  reserved — the work matters more
                </p>
              </div>
              <span className="annotation absolute left-3 top-3 text-faint">FIG. 00</span>
              <span aria-hidden="true" className="absolute right-3 top-3 h-2 w-2 border-r border-t border-accent" />
              <span aria-hidden="true" className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-accent" />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line text-sm">
              <div className="bg-card p-4">
                <dt className="annotation text-faint">Studies filed</dt>
                <dd className="display mt-1 text-2xl font-semibold text-accent">
                  {breakdowns.length}
                </dd>
              </div>
              <div className="bg-card p-4">
                <dt className="annotation text-faint">Operating question</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ink/85">
                  “Why did this work — and where else would it?”
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Lenses */}
      <section aria-labelledby="lenses-title" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="annotation text-accent">§ Lenses</p>
        <h2 id="lenses-title" className="display mt-3 text-3xl font-semibold md:text-4xl">
          What I pay attention to
        </h2>
        <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {LENSES.map((lens, i) => (
            <div key={lens.title} className="group bg-card p-6 transition-colors hover:bg-paper">
              <p className="annotation text-faint group-hover:text-accent">
                L·{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-lg font-semibold">{lens.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{lens.text}</p>
            </div>
          ))}
        </div>
      </section>

      <MethodSection id="method" />

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="display max-w-xl text-2xl font-semibold md:text-3xl">
            The library is the résumé.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/breakdowns" className="annotation bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-accent">
              Explore Breakdowns →
            </Link>
            <Link href="/work-with-me" className="annotation border border-ink px-6 py-3.5 transition-colors hover:border-accent hover:text-accent">
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
