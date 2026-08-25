"use client";

import { useMemo, useState } from "react";
import type { BreakdownSummary, Category } from "@/lib/breakdowns/types";
import { BreakdownCard } from "./breakdown-card";

type Filter = "All" | Category;

/**
 * Client-side search + category filtering for the breakdown library.
 * Receives lightweight, serializable summaries from the server page so full
 * article bodies remain server-side.
 */
export function LibraryExplorer({ breakdowns }: { breakdowns: BreakdownSummary[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return breakdowns.filter((b) => {
      if (filter !== "All" && b.category !== filter) return false;
      if (!q) return true;
      const haystack = [
        b.title,
        b.insight,
        b.subject,
        b.category,
        b.categoryLabel,
        b.channel,
        b.comparisonChannel,
        b.problem,
        b.question,
        ...b.tags,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });
  }, [breakdowns, filter, query]);

  const filters: Filter[] = [
    "All",
    ...Array.from(new Set(breakdowns.map((b) => b.category))),
  ];
  const showControls = breakdowns.length > 2 || filters.length > 2;

  return (
    <div>
      {/* Controls stay available as the archive grows, but add noise for two studies. */}
      {showControls && <div className="flex flex-col gap-5 border-y border-line py-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f;
            const count =
              f === "All"
                ? breakdowns.length
                : breakdowns.filter((b) => b.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`annotation border px-3 py-1.5 transition-colors ${
                  active
                    ? "border-accent bg-accent text-paper"
                    : "border-line bg-card text-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f}
                <span className={active ? "ml-1.5 text-paper/70" : "ml-1.5 text-faint"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative lg:w-72">
          <label htmlFor="library-search" className="sr-only">
            Search breakdowns
          </label>
          <input
            id="library-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, tags, subjects…"
            className="w-full border border-line bg-card px-4 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
          />
          <span aria-hidden="true" className="annotation absolute right-3 top-1/2 -translate-y-1/2 text-faint">
            ⌕
          </span>
        </div>
      </div>}

      {/* Result annotation */}
      <p className={`annotation text-faint ${showControls ? "mt-5" : "border-y border-line py-5"}`} aria-live="polite">
        {results.length} {results.length === 1 ? "study" : "studies"}
        {filter !== "All" && <> · filed under <span className="text-accent">{filter}</span></>}
        {query.trim() && <> · matching “{query.trim()}”</>}
      </p>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((b) => (
            <BreakdownCard key={b.slug} breakdown={b} />
          ))}
        </div>
      ) : (
        <div className="graph-paper mt-6 border border-dashed border-linedark p-12 text-center">
          <p className="display text-xl font-semibold">Nothing filed here yet.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-soft">
            {filter !== "All" && !query.trim()
              ? `The ${filter} shelf is waiting for its first breakdown — the library grows every time something interesting works.`
              : "No study matches that search. Try a broader term, or clear the filters."}
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="annotation mt-5 border border-ink px-4 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
