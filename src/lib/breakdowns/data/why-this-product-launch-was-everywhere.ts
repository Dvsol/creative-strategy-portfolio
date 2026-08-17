import type { Breakdown } from "../types";

export const whyThisProductLaunchWasEverywhere: Omit<Breakdown, "number"> = {
  slug: "why-this-product-launch-was-everywhere",
  title: "Why This Product Launch Was Everywhere",
  category: "Growth",
  tags: ["launch strategy", "remixability", "creator seeding", "growth loops"],
  insight:
    "A small team's product launch felt omnipresent for two weeks — without a big ad budget. The launch wasn't a announcement; it was a kit of remixable pieces that let every audience tell the story as their own.",
  subject: "An anonymized consumer software launch, reconstructed from public posts across 6 platforms.",
  readingTime: 11,
  date: "2025-07-21",
  featured: true,
  visual: "ripple",
  sections: {
    observation: [
      {
        type: "paragraph",
        text: "For about two weeks, one product launch showed up everywhere I looked — in newsletters, on X, in YouTube reviews, in niche Discords, even in a subreddit about a completely different topic. The strange part: each appearance felt native to where it appeared, not like a coordinated campaign.",
      },
      {
        type: "highlight",
        text: "Coordinated campaigns feel like the same message everywhere. This felt like a different message everywhere — about the same product. That's much harder, and much more deliberate.",
      },
    ],
    whatHappened: [
      {
        type: "paragraph",
        text: "I reverse-engineered the launch from public posts. The team hadn't produced one announcement — they had produced roughly a dozen distinct 'entry points': a technical deep-dive for builders, a controversy-adjacent opinion post for commentators, a before/after visual for casual audiences, a benchmark for the data crowd, a founder story for the narrative crowd.",
      },
      {
        type: "paragraph",
        text: "Each piece could stand alone, carried its own hook, and was trivially easy to screenshot, quote, or argue with. The launch didn't spread as one story. It spread as twelve stories that all resolved to the same product page.",
      },
      {
        type: "figure",
        kind: "embed",
        caption: "Map of first-wave posts by platform. No single 'announcement' dominates — six near-simultaneous entry points, each formatted for its native platform.",
      },
    ],
    evidence: [
      {
        type: "stats",
        items: [
          { value: "~12", label: "Distinct launch assets", note: "Each with its own hook, audience, and format" },
          { value: "6+", label: "Platforms with organic first-wave coverage", note: "X, YouTube, Reddit, newsletters, Discord, LinkedIn" },
          { value: "3 waves", label: "Distinct spread phases", note: "Insiders → commentators → general audience, each with matching material" },
        ],
      },
      {
        type: "figure",
        kind: "chart",
        caption: "Mention volume over 14 days: three distinct waves rather than one spike-and-decay. Each wave corresponds to assets designed for that audience layer.",
      },
      {
        type: "quote",
        text: "Half the posts about it weren't sharing the product. They were sharing an opinion the product made possible to have.",
        attribution: "Field note, day 4 of tracking",
      },
    ],
    whyItWorked: [
      {
        type: "paragraph",
        text: "People don't share products. People share things that make them look perceptive, informed, early, or right. This launch systematically manufactured those opportunities for every audience type it cared about.",
      },
      {
        type: "framework",
        title: "The launch as a supply chain for other people's content",
        steps: [
          { title: "Arguable claims", text: "The launch included a deliberately strong opinion, giving commentators something to agree or fight with. Both reactions spread it." },
          { title: "Extractable artifacts", text: "Benchmarks, before/afters, and one-line stats were pre-formatted for screenshots — zero effort to repost, full context preserved." },
          { title: "Layered depth", text: "Insiders got a deep-dive worth summarizing for their audiences, which turned experts into distribution without paying them." },
          { title: "Staggered waves", text: "Material for each audience layer released as the previous layer peaked, so the story had somewhere to go instead of dying in one spike." },
        ],
      },
      {
        type: "highlight",
        text: "The team didn't try to reach every audience. They armed every audience to reach their own.",
      },
    ],
    principle: {
      statement: "Don't launch an announcement. Launch raw material for other people's content.",
      expansion:
        "A launch spreads in proportion to how easily others can build their own content on top of it. The strategic question isn't 'how do we tell our story?' — it's 'what do we hand a YouTuber, a skeptic, a fan, and an analyst so that telling our story benefits them?'",
    },
    whatMostPeopleMiss: [
      {
        type: "paragraph",
        text: "The obvious read is 'they made lots of assets'. The non-obvious read is that they gave up narrative control on purpose. Most brands want the story told their way, so they produce one polished, closed narrative — which leaves nothing for anyone else to add.",
      },
      {
        type: "callout",
        tone: "insight",
        title: "The trade nobody wants to make",
        text: "Remixability and message control are opposites. This launch was everywhere precisely because the team accepted hostile takes, wrong summaries, and off-brand memes as the cost of ubiquity. The product page was the only surface they fully controlled — and the only one that needed to be.",
      },
      {
        type: "comparison",
        left: {
          title: "Controlled launch",
          points: ["One polished narrative", "On-message everywhere", "Spreads only as far as your own reach", "Dies in 48 hours"],
        },
        right: {
          title: "Remixable launch",
          points: ["Twelve open-ended entry points", "Frequently off-message", "Spreads on other people's reach", "Waves sustain for weeks"],
        },
      },
    ],
    howIWouldApply: [
      {
        type: "framework",
        title: "Designing a remixable launch",
        steps: [
          { title: "List the audience layers", text: "Insiders, commentators, practitioners, casuals. Each layer shares for different reasons — write those reasons down first." },
          { title: "Build one artifact per sharing motive", text: "An opinion to argue with, a stat to cite, a visual to react to, a deep-dive to summarize. Every artifact must work with zero context." },
          { title: "Pre-format for theft", text: "If quoting you requires cropping, editing, or explaining, it won't happen. Make the screenshot the finished asset." },
          { title: "Sequence by layer, not by calendar", text: "Release material for the next audience layer as the current one peaks. Watch the conversation, not the content calendar." },
          { title: "Control exactly one surface", text: "Let the story mutate everywhere except the destination. Every remix must resolve to one page you fully control." },
        ],
      },
    ],
    keyTakeaways: [
      "Launches spread in proportion to how much content other people can build from them.",
      "People share what makes them look perceptive — manufacture those opportunities per audience.",
      "Remixability and message control are opposites; ubiquity is bought with control.",
      "Sequence launch material by audience layer so the story has three waves instead of one spike.",
      "Control the destination, not the conversation.",
    ],
  },
};
