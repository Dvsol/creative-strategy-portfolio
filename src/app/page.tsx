import Link from "next/link";
import { BreakdownCard } from "@/components/breakdown-card";
import { MethodSection } from "@/components/method-section";
import { breakdowns, getFeatured } from "@/lib/breakdowns";

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
        <div className="graph-paper absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
          <p className="annotation rise text-accent">
            Field Notes — a strategy breakdown library · {breakdowns.length} studies and counting
          </p>

          <h1
            id="hero-title"
            className="display rise rise-1 mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            I study{" "}
            <span className="relative inline-block">
              why
              {/* hand-drawn circle annotation */}
              <svg
                aria-hidden="true"
                viewBox="0 0 120 60"
                className="absolute -inset-x-3 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1.5rem)]"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M8 30 C 10 10, 50 4, 78 8 C 106 12, 118 26, 110 40 C 100 54, 40 58, 18 48 C 4 41, 5 34, 12 26"
                  stroke="#d9481f"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            things work.
          </h1>

          <p className="rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-soft">
            Then I turn those observations into YouTube strategies creators
            and brands can actually use.
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/breakdowns"
              className="annotation bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-accent"
            >
              Explore Breakdowns →
            </Link>
            <Link
              href="/work-with-me"
              className="annotation border border-ink px-6 py-3.5 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Work With Me
            </Link>
          </div>

          {/* Analytical margin notes */}
          <div className="rise rise-3 mt-14 grid max-w-3xl gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ["Subjects", "YouTube · creators · brands · channels"],
              ["Method", "Deconstruct the win, extract the mechanism"],
              ["Output", "Principles that transfer, not tactics that expire"],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper/90 p-4">
                <p className="annotation text-accent">▸ {label}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-soft">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED BREAKDOWNS ---------------- */}
      <section aria-labelledby="featured-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="annotation text-accent">§ Featured breakdowns</p>
            <h2 id="featured-title" className="display mt-3 text-3xl font-semibold md:text-5xl">
              Things I&apos;ve Been Studying
            </h2>
          </div>
          <Link href="/breakdowns" className="link-editorial annotation text-soft">
            Full library →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((b) => (
            <BreakdownCard key={b.slug} breakdown={b} variant="feature" />
          ))}
        </div>
      </section>

      {/* ---------------- HOW I HELP ---------------- */}
      <section aria-labelledby="help-title" className="border-t border-line bg-wash/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="annotation text-accent">§ YouTube strategy</p>
              <h2 id="help-title" className="display mt-3 text-3xl font-semibold md:text-5xl">
                From diagnosis to direction.
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.8] text-ink/90">
              I help creators and brands understand what is limiting their
              YouTube channel, what their audience is responding to, and what
              to test next.
            </p>
          </div>

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Diagnosis", "Find what is actually limiting the channel."],
              ["Ideas", "Identify topics and formats worth testing."],
              ["Packaging", "Improve the relationship between idea, title and thumbnail."],
              ["Audience", "Understand who the channel is really attracting."],
              ["Testing", "Turn observations into a clear next-video strategy."],
            ].map(([label, text], i) => (
              <div key={label} className="bg-card p-5">
                <p className="annotation text-accent">
                  {String(i + 1).padStart(2, "0")} · {label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-soft">{text}</p>
              </div>
            ))}
          </div>

          <Link href="/work-with-me" className="link-editorial annotation mt-7 inline-block text-soft">
            See how I work with channels →
          </Link>
        </div>
      </section>

      {/* ---------------- HOW I THINK ---------------- */}
      <MethodSection />

      {/* ---------------- ABOUT TEASER ---------------- */}
      <section aria-labelledby="about-title" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:px-8 md:py-28">
          <div>
            <p className="annotation text-accent">§ About</p>
            <h2 id="about-title" className="display mt-3 text-3xl font-semibold md:text-4xl">
              A strategist who works like a researcher
            </h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.8] text-ink/90">
              I&apos;m not interested in what&apos;s trending — I&apos;m
              interested in <span className="marker">why it&apos;s trending</span>.
              Every viral video, breakout brand, and overnight success has a
              mechanism underneath it. My work is finding that mechanism,
              naming it, and turning it into something you can use on purpose.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-soft">
              Pattern recognition, audience psychology, packaging, and
              distribution — studied in public, one breakdown at a time.
            </p>
            <Link href="/about" className="link-editorial annotation mt-7 inline-block text-soft">
              More about how I work →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section aria-labelledby="cta-title" className="border-t border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div>
            <p className="annotation text-accent">§ Work with me</p>
            <h2 id="cta-title" className="display mt-3 max-w-xl text-3xl font-semibold md:text-4xl">
              Want this kind of thinking applied to your work?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/60">
              Creative strategy, YouTube strategy, audits, and research-heavy
              breakdowns — for founders, creators, brands, and teams.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/70">
              <a className="link-editorial" href="mailto:dekisola@gmail.com">
                dekisola@gmail.com
              </a>
              <a
                className="link-editorial"
                href="https://t.me/Dvsol2"
                target="_blank"
                rel="noreferrer"
              >
                Telegram · @Dvsol2
              </a>
            </p>
          </div>
          <Link
            href="/work-with-me"
            className="annotation shrink-0 border border-paper/40 px-6 py-3.5 text-paper transition-colors hover:border-accent hover:bg-accent"
          >
            See services →
          </Link>
        </div>
      </section>
    </>
  );
}
