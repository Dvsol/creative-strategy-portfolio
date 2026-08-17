import type { Breakdown } from "./types";
import { whyThisYoutubeChannelExploded } from "./data/why-this-youtube-channel-exploded";
import { howABrandTurnedAttentionIntoDistribution } from "./data/how-a-brand-turned-attention-into-distribution";
import { theThumbnailPatternNobodyNotices } from "./data/the-thumbnail-pattern-nobody-notices";
import { whyThisProductLaunchWasEverywhere } from "./data/why-this-product-launch-was-everywhere";
import { theWeb3ProjectThatOutlivedItsMarket } from "./data/the-web3-project-that-outlived-its-market";
import { theCampaignThatLetTheAudienceFinishIt } from "./data/the-campaign-that-let-the-audience-finish-it";

/**
 * To add a new breakdown:
 *  1. Create a file in ./data following the existing structure.
 *  2. Import it here and add it to RAW (order doesn't matter).
 * Numbering, sorting, related items, and prev/next all derive automatically.
 */
const RAW: Omit<Breakdown, "number">[] = [
  whyThisYoutubeChannelExploded,
  howABrandTurnedAttentionIntoDistribution,
  theThumbnailPatternNobodyNotices,
  whyThisProductLaunchWasEverywhere,
  theWeb3ProjectThatOutlivedItsMarket,
  theCampaignThatLetTheAudienceFinishIt,
];

/** All breakdowns, newest first, with stable BD-numbers (oldest = 001). */
export const breakdowns: Breakdown[] = [...RAW]
  .sort((a, b) => a.date.localeCompare(b.date))
  .map((b, i) => ({ ...b, number: `BD—${String(i + 1).padStart(3, "0")}` }))
  .reverse();

export function getBreakdown(slug: string): Breakdown | undefined {
  return breakdowns.find((b) => b.slug === slug);
}

export function getFeatured(): Breakdown[] {
  return breakdowns.filter((b) => b.featured).slice(0, 4);
}

/** Previous = older, next = newer (list is newest-first). */
export function getAdjacent(slug: string): {
  previous?: Breakdown;
  next?: Breakdown;
} {
  const i = breakdowns.findIndex((b) => b.slug === slug);
  if (i === -1) return {};
  return {
    next: i > 0 ? breakdowns[i - 1] : undefined,
    previous: i < breakdowns.length - 1 ? breakdowns[i + 1] : undefined,
  };
}

/** Related = shared category first, then shared tags. */
export function getRelated(slug: string, limit = 3): Breakdown[] {
  const current = getBreakdown(slug);
  if (!current) return [];
  return breakdowns
    .filter((b) => b.slug !== slug)
    .map((b) => {
      let score = 0;
      if (b.category === current.category) score += 3;
      score += b.tags.filter((t) => current.tags.includes(t)).length;
      return { b, score };
    })
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.b);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
