import Link from "next/link";
import type { BreakdownSummary } from "@/lib/breakdowns/types";
import { BreakdownVisual } from "./breakdown-visual";

/**
 * Editorial research card. Two variants:
 *  - "feature": large card used on the homepage
 *  - "library": compact card for the /breakdowns grid
 */
export function BreakdownCard({
  breakdown,
  variant = "library",
}: {
  breakdown: BreakdownSummary;
  variant?: "feature" | "library";
}) {
  const b = breakdown;
  const isFeature = variant === "feature";

  return (
    <article className="group h-full">
      <Link
        href={`/breakdowns/${b.slug}`}
        className="card-hover flex h-full flex-col border border-line bg-card"
      >
        <BreakdownVisual kind={b.visual} className={isFeature ? "h-52 md:h-60" : "h-40"} />

        <div className={`flex flex-1 flex-col ${isFeature ? "p-6 md:p-7" : "p-5"}`}>
          <div className="flex items-center justify-between gap-3">
            <span className="annotation text-accent">
              {b.eyebrow ?? b.category}
            </span>
            <span className="annotation text-faint">{b.number}</span>
          </div>

          <h3
            className={`display mt-3 font-semibold leading-snug group-hover:underline group-hover:decoration-linedark group-hover:underline-offset-4 ${
              isFeature ? "text-2xl md:text-[1.7rem]" : "text-lg"
            }`}
          >
            {b.title}
          </h3>

          <p className={`mt-3 leading-relaxed text-soft ${isFeature ? "text-[15px]" : "text-sm"}`}>
            {!isFeature && b.question ? b.question : b.insight}
          </p>

          {!isFeature && (b.channel || b.problem) && (
            <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line text-xs">
              {b.channel && (
                <div className="bg-card p-3">
                  <dt className="annotation text-faint">Channel</dt>
                  <dd className="mt-1 text-ink">{b.channel}</dd>
                </div>
              )}
              {b.problem && (
                <div className="bg-card p-3">
                  <dt className="annotation text-faint">Problem</dt>
                  <dd className="mt-1 text-ink">{b.problem}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-1.5">
              {b.tags.slice(0, isFeature ? 4 : 3).map((tag) => (
                <span key={tag} className="annotation border border-line px-2 py-1 text-faint">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
              <span className="annotation text-faint">{b.readingTime} min study</span>
              <span className="annotation text-ink transition-colors group-hover:text-accent">
                Read the breakdown →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
