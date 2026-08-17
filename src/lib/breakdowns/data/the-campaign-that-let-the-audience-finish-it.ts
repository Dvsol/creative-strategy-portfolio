import type { Breakdown } from "../types";

export const theCampaignThatLetTheAudienceFinishIt: Omit<Breakdown, "number"> = {
  slug: "the-campaign-that-let-the-audience-finish-it",
  title: "The Campaign That Let the Audience Finish It",
  category: "Campaigns",
  tags: ["participation", "campaign design", "ugc", "attention"],
  insight:
    "A campaign became a two-week cultural moment not because of its creative execution, but because it was deliberately left incomplete — the audience's contributions were the campaign.",
  subject: "An anonymized consumer brand campaign, reconstructed from archived posts and coverage.",
  readingTime: 8,
  date: "2025-03-09",
  visual: "loop",
  sections: {
    observation: [
      {
        type: "paragraph",
        text: "The campaign's own assets were, honestly, unremarkable — a simple template, a plain prompt, modest production value. Yet for two weeks my feeds were full of it. Crucially: full of other people's versions of it, not the brand's.",
      },
      {
        type: "highlight",
        text: "The brand's content was a fraction of the campaign's total volume. The audience produced the rest — voluntarily, for free, and better targeted than any media buy.",
      },
    ],
    whatHappened: [
      {
        type: "paragraph",
        text: "The brand published a deliberately unfinished format: a recognizable structure with an obvious blank in the middle, plus a handful of official examples that were good enough to set the pattern but imperfect enough to beat.",
      },
      {
        type: "paragraph",
        text: "Within days, the format escaped the brand entirely. Niche communities made insider versions. Rivals made parody versions. Creators made meta-commentary versions. Every variant — supportive, mocking, or off-topic — carried the recognizable structure, and the structure carried the brand.",
      },
      {
        type: "figure",
        kind: "post",
        caption: "Timeline sample from day 6: of 20 consecutive appearances of the format, only one came from the brand's own account.",
      },
    ],
    evidence: [
      {
        type: "stats",
        items: [
          { value: "~2 weeks", label: "Duration of the organic wave", note: "Roughly 5× a typical campaign's feed lifespan" },
          { value: "1:many", label: "Brand posts vs. audience posts", note: "The overwhelming majority of impressions were audience-made" },
          { value: "3 layers", label: "Participation depth", note: "Straight submissions → subculture remixes → meta-commentary" },
        ],
      },
      {
        type: "figure",
        kind: "screenshot",
        caption: "The official template next to three audience remixes. Note what survives every mutation: the compositional structure. That structure was the only branding the campaign needed.",
      },
    ],
    whyItWorked: [
      {
        type: "paragraph",
        text: "Finished campaigns can only be consumed. Unfinished campaigns can be completed — and completion is a fundamentally different psychological offer. It gives the audience authorship, an in-joke to belong to, and a stage to perform on.",
      },
      {
        type: "framework",
        title: "What the 'gap' had to get right",
        steps: [
          { title: "Low floor", text: "Anyone could produce a passable version in minutes. No skill or tooling gate." },
          { title: "High ceiling", text: "Clever versions could genuinely outshine the originals, giving skilled creators a status reason to play." },
          { title: "Recognizable skeleton", text: "The structure survived every remix, so even hostile parodies advertised the source." },
          { title: "Beatable official examples", text: "The brand's own entries set the pattern but left obvious room to do better — an implicit challenge." },
        ],
      },
      {
        type: "highlight",
        text: "People don't share campaigns. People share their own performance inside a campaign's structure.",
      },
    ],
    principle: {
      statement: "Design the gap, not the content. Participation lives in what you deliberately leave unfinished.",
      expansion:
        "A participatory campaign is an architecture problem, not a creative-execution problem. The strategist's job is to design a structure with a low floor, a high ceiling, and a skeleton that survives mutation — then have the discipline to leave the middle empty.",
    },
    whatMostPeopleMiss: [
      {
        type: "paragraph",
        text: "The counterintuitive detail: the brand's restraint after launch. No 'best of' roundups in week one, no rules, no corrections when versions went off-message, no attempt to steer. The moment a brand starts curating a participatory format, participation starts feeling like homework being graded.",
      },
      {
        type: "callout",
        tone: "insight",
        title: "Mediocre-on-purpose",
        text: "The official examples being merely 'good' wasn't a budget limitation — it was the invitation. Flawless official content closes the gap; there's nothing left for the audience to add except applause. Beatable content opens it.",
      },
    ],
    howIWouldApply: [
      {
        type: "framework",
        title: "A participation-first campaign checklist",
        steps: [
          { title: "Define the blank", text: "Before any creative work: what exactly will the audience fill in? If the answer is 'nothing', you're buying reach, not participation." },
          { title: "Prototype the worst entry", text: "Make the laziest possible version. If it's still recognizable and still fun, the floor is low enough." },
          { title: "Seed to performers, not amplifiers", text: "Give early access to creators who win by being clever, not accounts that win by being big. The first entries set the ambition level." },
          { title: "Plan your restraint", text: "Decide in advance what the brand will NOT do for 10 days: no curating, no correcting, no over-posting. Write it down; the pressure to interfere will be enormous." },
        ],
      },
    ],
    keyTakeaways: [
      "Participation is designed into a campaign's structure, not added to its media plan.",
      "Low floor, high ceiling, durable skeleton: the three properties of a remixable format.",
      "Official content that's too good closes the gap the audience was supposed to fill.",
      "Parody and hostile remixes still distribute the skeleton — mutation is a feature.",
      "Post-launch restraint is a strategic act; curation kills participation.",
    ],
  },
};
