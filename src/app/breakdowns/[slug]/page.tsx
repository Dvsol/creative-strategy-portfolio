import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks, countFigures } from "@/components/blocks";
import { BreakdownCard } from "@/components/breakdown-card";
import { BreakdownVisual } from "@/components/breakdown-visual";
import {
  breakdowns,
  formatDate,
  getAdjacent,
  getBreakdown,
  getRelated,
} from "@/lib/breakdowns";
import type { Block } from "@/lib/breakdowns/types";

export function generateStaticParams() {
  return breakdowns.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBreakdown(slug);
  if (!b) return { title: "Breakdown not found" };
  return {
    title: b.title,
    description: b.insight,
    alternates: { canonical: `/breakdowns/${b.slug}` },
    openGraph: {
      type: "article",
      title: b.title,
      description: b.insight,
      url: `/breakdowns/${b.slug}`,
    },
  };
}

const SECTION_INDEX = [
  { id: "observation", label: "The Observation" },
  { id: "what-happened", label: "What Happened" },
  { id: "evidence", label: "The Evidence" },
  { id: "why-it-worked", label: "Why It Worked" },
  { id: "principle", label: "The Principle" },
  { id: "what-most-miss", label: "What Most People Would Miss" },
  { id: "how-to-apply", label: "How I Would Apply It" },
  { id: "takeaways", label: "Key Takeaways" },
];

export default async function BreakdownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = getBreakdown(slug);
  if (!b) notFound();

  const { previous, next } = getAdjacent(slug);
  const related = getRelated(slug);
  const s = b.sections;

  // Continuous FIG. numbering across the whole study.
  const blockSections: Block[][] = [s.observation, s.whatHappened, s.evidence, s.whyItWorked, s.whatMostPeopleMiss, s.howIWouldApply];
  const figureStarts: number[] = [];
  let running = 0;
  for (const section of blockSections) {
    figureStarts.push(running);
    running += countFigures(section);
  }

  return (
    <article>
      {/* ---------- Study header ---------- */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:px-8 md:pt-16">
          <nav aria-label="Breadcrumb" className="annotation text-faint">
            <Link href="/breakdowns" className="transition-colors hover:text-accent">
              Library
            </Link>{" "}
            / <span className="text-accent">{b.number}</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <p className="annotation text-accent">
                {b.eyebrow ?? `${b.category} · Strategy breakdown`}
              </p>
              <h1 className="display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                {b.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">{b.insight}</p>
            </div>

            <dl className="grid grid-cols-2 gap-px border border-line bg-line text-sm">
              {[
                ["Filed", formatDate(b.date)],
                ["Reading time", `${b.readingTime} min study`],
                ["Subject", b.subject],
                ["Tags", b.tags.join(" · ")],
              ].map(([label, value], i) => (
                <div key={label} className={`bg-card p-4 ${i >= 2 ? "col-span-2" : ""}`}>
                  <dt className="annotation text-faint">{label}</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink/85">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <BreakdownVisual kind={b.visual} className="h-40 border-t border-line md:h-56" />
      </header>

      {/* ---------- Body with sticky index ---------- */}
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label="Study contents" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="annotation text-faint">Contents</p>
            <ol className="mt-4 space-y-2.5 border-l border-line">
              {SECTION_INDEX.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-baseline gap-2.5 pl-4 text-[13px] text-soft transition-colors hover:text-accent"
                  >
                    <span className="annotation text-faint group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-2xl space-y-16">
          <Section n="01" id="observation" title="The Observation" note="What caught my attention">
            <Blocks blocks={s.observation} figureStart={figureStarts[0]} />
          </Section>

          <Section n="02" id="what-happened" title="What Happened" note="The necessary context">
            <Blocks blocks={s.whatHappened} figureStart={figureStarts[1]} />
          </Section>

          <Section n="03" id="evidence" title="The Evidence" note="Receipts, numbers, artifacts">
            <Blocks blocks={s.evidence} figureStart={figureStarts[2]} />
          </Section>

          <Section n="04" id="why-it-worked" title="Why It Worked" note="The mechanism underneath">
            <Blocks blocks={s.whyItWorked} figureStart={figureStarts[3]} />
          </Section>

          {/* ---------- The Principle: visually distinct, quotable ---------- */}
          <section id="principle" aria-labelledby="principle-title" className="scroll-mt-24">
            <div className="relative border-2 border-ink bg-ink p-8 text-paper md:p-10">
              <span aria-hidden="true" className="absolute -top-px left-8 h-1 w-16 bg-accent" />
              <p id="principle-title" className="annotation text-accent">
                05 — The Principle
              </p>
              <blockquote className="display mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                “{s.principle.statement}”
              </blockquote>
              <p className="mt-6 border-t border-paper/20 pt-5 text-[15px] leading-relaxed text-paper/70">
                {s.principle.expansion}
              </p>
              <p className="annotation mt-6 text-paper/40">
                {b.number} · extracted principle · quotable
              </p>
            </div>
          </section>

          <Section n="06" id="what-most-miss" title="What Most People Would Miss" note="The less obvious layer">
            <Blocks blocks={s.whatMostPeopleMiss} figureStart={figureStarts[4]} />
          </Section>

          <Section n="07" id="how-to-apply" title="How I Would Apply It" note="From observation to decision">
            <Blocks blocks={s.howIWouldApply} figureStart={figureStarts[5]} />
          </Section>

          <Section n="08" id="takeaways" title="Key Takeaways" note="The strongest lessons">
            <ul className="border border-line bg-card">
              {s.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-4 border-b border-line px-5 py-4 last:border-b-0">
                  <span aria-hidden="true" className="annotation mt-1 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/90">{takeaway}</p>
                </li>
              ))}
            </ul>
            {s.closingNote && (
              <aside className="mt-7 border-l-2 border-accent bg-accentwash px-6 py-5">
                <p className="annotation text-accentink">Final Ekis note</p>
                <p className="display mt-3 whitespace-pre-line text-xl leading-relaxed text-ink md:text-2xl">
                  “{s.closingNote}”
                </p>
              </aside>
            )}
          </Section>

          {/* Contextual conversion path */}
          <aside className="border border-line bg-wash/70 p-6 md:p-8" aria-labelledby="field-note-cta-title">
            <p className="annotation text-accent">§ Work with me</p>
            <h2 id="field-note-cta-title" className="display mt-3 text-2xl font-semibold md:text-3xl">
              Want me to look at your channel?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/90">
              I work with creators and brands on YouTube strategy, from
              diagnosing what may be limiting a channel to building the next
              testing direction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link
                href="/work-with-me"
                className="annotation bg-ink px-5 py-3 text-paper transition-colors hover:bg-accent"
              >
                Work With Me →
              </Link>
              <Link href="/breakdowns" className="link-editorial annotation text-soft">
                More Breakdowns →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ---------- Previous / Next ---------- */}
      <nav aria-label="Adjacent breakdowns" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          {previous ? (
            <Link
              href={`/breakdowns/${previous.slug}`}
              className="group border-b border-line px-5 py-8 transition-colors hover:bg-wash/60 md:border-b-0 md:border-r md:px-8"
            >
              <p className="annotation text-faint">← Previous study · {previous.number}</p>
              <p className="display mt-2 text-xl font-semibold group-hover:text-accent">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div className="hidden border-r border-line px-8 py-8 md:block">
              <p className="annotation text-faint">Start of the archive</p>
            </div>
          )}
          {next ? (
            <Link
              href={`/breakdowns/${next.slug}`}
              className="group px-5 py-8 text-left transition-colors hover:bg-wash/60 md:px-8 md:text-right"
            >
              <p className="annotation text-faint">Next study · {next.number} →</p>
              <p className="display mt-2 text-xl font-semibold group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="px-5 py-8 md:px-8 md:text-right">
              <p className="annotation text-faint">Newest study — the library keeps growing</p>
            </div>
          )}
        </div>
      </nav>

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-line bg-wash/50">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <p className="annotation text-accent">§ Cross-references</p>
            <h2 id="related-title" className="display mt-3 text-2xl font-semibold md:text-3xl">
              Related breakdowns
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BreakdownCard key={r.slug} breakdown={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

/** Numbered study section with an annotated heading. */
function Section({
  n,
  id,
  title,
  note,
  children,
}: {
  n: string;
  id: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6 border-b border-line pb-4">
        <p className="annotation text-faint">
          <span className="text-accent">{n}</span> — {note}
        </p>
        <h2 id={`${id}-title`} className="display mt-2 text-2xl font-semibold md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
