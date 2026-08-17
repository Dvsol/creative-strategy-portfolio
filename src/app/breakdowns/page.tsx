import type { Metadata } from "next";
import { LibraryExplorer } from "@/components/library-explorer";
import { breakdowns } from "@/lib/breakdowns";

export const metadata: Metadata = {
  title: "Strategy Breakdown Library",
  description:
    "A growing collection of things I've taken apart to understand why they worked — content, creators, brands, campaigns, and products.",
};

export default function BreakdownsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p className="annotation rise text-accent">
        § The library · {breakdowns.length} studies filed
      </p>
      <h1 className="display rise rise-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
        Strategy Breakdown Library
      </h1>
      <p className="rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-soft">
        A growing collection of things I&apos;ve taken apart to understand why
        they worked.
      </p>

      <div className="rise rise-3 mt-10">
        <LibraryExplorer breakdowns={breakdowns} />
      </div>
    </div>
  );
}
