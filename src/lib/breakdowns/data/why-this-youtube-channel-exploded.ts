import type { Breakdown } from "../types";

export const whyThisYoutubeChannelExploded: Omit<Breakdown, "number"> = {
  slug: "why-this-youtube-channel-exploded",
  title: "Why This YouTube Channel Exploded",
  category: "YouTube",
  tags: ["packaging", "retention", "format design", "positioning"],
  insight:
    "A mid-sized history channel 40×'d its average views in five months. The growth didn't come from better videos — it came from redesigning the promise each video made before the click.",
  subject: "An anonymized mid-sized history channel, studied over 14 months of uploads.",
  readingTime: 12,
  date: "2025-11-18",
  featured: true,
  visual: "spike",
  sections: {
    observation: [
      {
        type: "paragraph",
        text: "A history channel I'd been tracking for over a year was averaging 20–30k views per upload. Solid, consistent, unremarkable. Then one video did 1.2M. Then the next did 900k. Then the channel never dropped below 500k again.",
      },
      {
        type: "highlight",
        text: "When a channel spikes once, that's the algorithm. When a channel spikes and stays up, something structural changed.",
      },
      {
        type: "paragraph",
        text: "So I went back through 60 uploads and compared everything: topics, titles, thumbnails, pacing, intros, video length. The production quality was almost identical before and after the inflection point. What changed was much smaller — and much more interesting.",
      },
    ],
    whatHappened: [
      {
        type: "paragraph",
        text: "For its first two years, the channel made videos with titles like 'The History of the Hanseatic League' and 'Byzantine Trade Routes Explained'. Textbook chapter titles. The content inside was genuinely excellent — dense research, good narration, clean editing.",
      },
      {
        type: "paragraph",
        text: "At the inflection point, the same team started publishing videos like 'The Medieval Trade Cartel That Made Kings Beg' and 'Rome's Most Profitable Mistake'. Same research depth. Same narrator. Same editor. Radically different framing.",
      },
      {
        type: "callout",
        tone: "note",
        title: "Context",
        text: "The channel's creator later confirmed in a community post that nothing changed in production. They described the shift as 'finally titling for curiosity instead of accuracy'.",
      },
    ],
    evidence: [
      {
        type: "stats",
        items: [
          { value: "40×", label: "Average views per upload", note: "20–30k → 900k–1.2M within 5 months" },
          { value: "+2.1pp", label: "Click-through rate", note: "Reconstructed from creator's own shared analytics" },
          { value: "≈0", label: "Change in production quality", note: "Same length, pacing, narration, and editing style" },
        ],
      },
      {
        type: "figure",
        kind: "chart",
        caption: "Views per upload across 60 videos. The inflection aligns exactly with the retitling pattern — not with any topic or quality change.",
      },
      {
        type: "table",
        caption: "Before / after framing on comparable topics",
        headers: ["Old framing", "New framing", "Views"],
        rows: [
          ["The History of the Hanseatic League", "The Medieval Trade Cartel That Made Kings Beg", "28k → 1.2M"],
          ["Byzantine Trade Routes Explained", "The Empire That Got Rich by Doing Nothing", "31k → 870k"],
          ["The Fall of Venice's Merchant Class", "How the World's Richest City Bankrupted Itself", "24k → 940k"],
        ],
      },
      {
        type: "figure",
        kind: "thumbnail",
        caption: "Thumbnail evolution: from painting + place name to a single face, a single object, and a three-word tension statement.",
      },
    ],
    whyItWorked: [
      {
        type: "paragraph",
        text: "The old titles described the video's subject. The new titles described the video's tension. That's not a stylistic difference — it changes who the video is for.",
      },
      {
        type: "paragraph",
        text: "'The History of the Hanseatic League' only appeals to people who already care about the Hanseatic League — a small, pre-qualified audience. 'The Medieval Trade Cartel That Made Kings Beg' appeals to anyone curious about power, money, and leverage. The subject became a vehicle instead of a gate.",
      },
      {
        type: "framework",
        title: "The mechanism, in sequence",
        steps: [
          { title: "The promise widened", text: "Titles shifted from subject-matter labels to universal human tensions: power, greed, collapse, betrayal." },
          { title: "CTR rose across all audiences", text: "The video became clickable to people with zero prior interest in the topic — a much larger pool." },
          { title: "Retention held", text: "Because the videos were already excellent, new viewers stayed. The packaging wrote a check the content could cash." },
          { title: "The algorithm recalibrated", text: "High CTR + held retention told YouTube the videos worked for general audiences, so it kept widening distribution." },
        ],
      },
      {
        type: "highlight",
        text: "Packaging didn't make the videos better. It made the videos legible to people who didn't know they'd like them.",
      },
    ],
    principle: {
      statement: "Package for the curious, not the converted.",
      expansion:
        "Most creators title their work for the audience that already cares. The growth ceiling isn't the quality of the work — it's the size of the audience the framing permits. Reframe the same substance around a universal tension and the addressable audience expands by orders of magnitude.",
    },
    whatMostPeopleMiss: [
      {
        type: "paragraph",
        text: "Everyone who noticed this channel's growth attributed it to 'better thumbnails'. That's the visible layer. The invisible layer is that the channel spent two years building a retention engine before touching its packaging.",
      },
      {
        type: "comparison",
        left: {
          title: "The copyable surface",
          points: [
            "Curiosity-driven titles",
            "High-contrast thumbnails",
            "Tension-first framing",
          ],
        },
        right: {
          title: "The invisible prerequisite",
          points: [
            "Two years of craft development at low stakes",
            "Retention strong enough to survive wider audiences",
            "A backlog the algorithm could resurface after the spike",
          ],
        },
      },
      {
        type: "paragraph",
        text: "Channels that copy the packaging without the retention foundation get one spike, a wave of dissatisfied viewers, and a CTR that the algorithm learns to distrust. The order of operations was the strategy.",
      },
    ],
    howIWouldApply: [
      {
        type: "framework",
        title: "Applying this to any channel or content brand",
        steps: [
          { title: "Audit the promise, not the product", text: "For the last 20 pieces of content, ask: who does this framing exclude? Most framing quietly excludes 95% of potential viewers." },
          { title: "Find the universal tension inside the niche subject", text: "Every specialist topic contains a general human story — money, status, risk, betrayal, survival. Name it in the title." },
          { title: "Verify retention before widening the promise", text: "If retention is weak, wider packaging accelerates failure. Fix the product for the small audience first." },
          { title: "Change one variable at a time", text: "This channel's history is readable precisely because packaging changed while everything else held constant. Do the same so you can attribute results." },
        ],
      },
      {
        type: "callout",
        tone: "insight",
        title: "Where this transfers",
        text: "This is not a YouTube principle. Newsletter subject lines, product landing pages, pitch decks, and app store listings all fail the same way: framed for insiders, invisible to everyone else.",
      },
    ],
    keyTakeaways: [
      "Sustained growth after a spike signals a structural change, not luck — look for what changed and what deliberately didn't.",
      "Titles that describe subjects gate the audience; titles that describe tensions widen it.",
      "Packaging is a multiplier on retention. Multiplying zero is still zero.",
      "The two 'boring' years weren't wasted — they built the retention floor that made aggressive packaging safe.",
      "Copy the sequence, not the surface: craft first, packaging second.",
    ],
  },
};
