/**
 * Content model for strategy breakdowns.
 *
 * Every breakdown follows the same eight-part research structure, and each
 * narrative section is composed of typed content blocks. This keeps the
 * rendering template fully reusable and makes it trivial to later swap the
 * data source for a CMS or database — only `src/lib/breakdowns/data/*`
 * would need to change.
 */

export const CATEGORIES = [
  "YouTube",
  "Creators",
  "Brands",
  "Web3",
  "Products",
  "Campaigns",
  "Growth",
  "Content",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Which generative SVG diagram a card renders. */
export type VisualKind =
  | "spike"
  | "network"
  | "grid"
  | "ripple"
  | "orbit"
  | "loop";

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

/** A narrative beat inside one of the eight reusable study sections. */
export interface SectionHeadingBlock {
  type: "section-heading";
  title: string;
  eyebrow?: string;
}

/** A highlighted observation — rendered with a marker underline. */
export interface HighlightBlock {
  type: "highlight";
  text: string;
}

export interface QuoteBlock {
  type: "quote";
  text: string;
  attribution?: string;
}

export interface StatsBlock {
  type: "stats";
  items: { value: string; label: string; note?: string }[];
}

export interface CalloutBlock {
  type: "callout";
  title?: string;
  text: string;
  tone?: "note" | "insight" | "caution";
}

/**
 * Visual evidence placeholder — screenshots, thumbnails, charts, posts,
 * comments, or embedded media. Rendered as an annotated figure frame until
 * real assets are attached via `src`.
 */
export interface FigureBlock {
  type: "figure";
  kind: "screenshot" | "thumbnail" | "chart" | "post" | "comment" | "embed";
  caption: string;
  src?: string;
  note?: string;
  placeholderLabel?: string;
  fit?: "cover" | "contain";
}

/** A compact, data-backed horizontal bar chart. */
export interface BarChartBlock {
  type: "bar-chart";
  title: string;
  items: { label: string; value: number; displayValue: string }[];
  note?: string;
}

/** Side-by-side public results for matched subjects without misleading scale. */
export interface MatchedPerformanceBlock {
  type: "matched-performance";
  title?: string;
  matches: {
    topic: string;
    left: { label: string; value: string };
    right: { label: string; value: string };
    ratio?: string;
  }[];
  note?: string;
}

/** Numbered framework / step list. */
export interface FrameworkBlock {
  type: "framework";
  title?: string;
  steps: { title: string; text?: string }[];
}

/** Reusable top-line diagnosis for research-led channel and brand audits. */
export interface DiagnosisCardBlock {
  type: "diagnosis-card";
  items: { label: string; value: string }[];
}

/** A short, attributable editorial conclusion from David Ekis. */
export interface EkisNoteBlock {
  type: "ekis-note";
  text: string;
}

/** Side-by-side comparison. */
export interface ComparisonBlock {
  type: "comparison";
  left: { title: string; points: string[] };
  right: { title: string; points: string[] };
}

export interface TableBlock {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
}

export type Block =
  | ParagraphBlock
  | SectionHeadingBlock
  | HighlightBlock
  | QuoteBlock
  | StatsBlock
  | CalloutBlock
  | FigureBlock
  | BarChartBlock
  | MatchedPerformanceBlock
  | FrameworkBlock
  | DiagnosisCardBlock
  | EkisNoteBlock
  | ComparisonBlock
  | TableBlock;

/* ------------------------------------------------------------------ */
/* Breakdown                                                           */
/* ------------------------------------------------------------------ */

export interface BreakdownSections {
  /** What caught my attention? */
  observation: Block[];
  /** Necessary context. */
  whatHappened: Block[];
  /** Screenshots, numbers, examples, charts. */
  evidence: Block[];
  /** The mechanism underneath the visible result. */
  whyItWorked: Block[];
  /** The extracted principle — visually distinct and quotable. */
  principle: { statement: string; expansion: string };
  /** The less obvious insight. */
  whatMostPeopleMiss: Block[];
  /** Practical strategic application. */
  howIWouldApply: Block[];
  /** Strongest lessons, summarized. */
  keyTakeaways: string[];
  /** Optional final attributed editorial note. */
  closingNote?: string;
}

export interface Breakdown {
  slug: string;
  /** e.g. "BD—006". Assigned in the data index, newest = highest. */
  number: string;
  title: string;
  category: Category;
  categoryLabel?: string;
  tags: string[];
  /** One-line insight shown on cards. */
  insight: string;
  /** Anonymized description of what was studied. */
  subject: string;
  readingTime: number;
  date: string; // ISO
  featured?: boolean;
  /** Optional article/card label for named Field Notes. */
  eyebrow?: string;
  channel?: string;
  comparisonChannel?: string;
  problem?: string;
  question?: string;
  visual: VisualKind;
  sections: BreakdownSections;
  researchDate?: string;
  sources?: { label: string; url?: string }[];
}

/** Authoring shape; named Field Notes may provide their own public number. */
export type BreakdownInput = Omit<Breakdown, "number"> & { number?: string };

/** Card and search data safe to serialize to the client library explorer. */
export type BreakdownSummary = Omit<Breakdown, "sections" | "sources">;
