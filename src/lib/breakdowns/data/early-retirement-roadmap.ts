import type { BreakdownInput } from "../types";

export const earlyRetirementRoadmap: BreakdownInput = {
  slug: "early-retirement-roadmap",
  number: "FN—004",
  title: "A Retirement Channel Found a Bigger Audience Hiding Outside Retirement",
  category: "Creators",
  categoryLabel: "Finance / Creator Strategy",
  channel: "Early Retirement Roadmap",
  problem: "Audience expansion / identity-led positioning",
  question:
    "What do the channel's recent breakout videos reveal about the larger desire beneath retirement advice?",
  eyebrow: "Audience & Positioning · Field Note 004",
  tags: [
    "Audience & Positioning",
    "Topic Strategy",
    "Audience Identity",
    "Content Systems",
    "Sequencing",
    "Rapid Growth",
  ],
  insight:
    "A retirement channel's biggest recent winners were not really about retirement mechanics. They were about work, time, identity, and the cost of waiting.",
  subject: "Early Retirement Roadmap — a retirement and financial education channel",
  readingTime: 19,
  date: "2026-08-31",
  researchDate: "2026-08-31",
  featured: true,
  visual: "ripple",
  sources: [
    { label: "Early Retirement Roadmap public channel screenshots supplied by the researcher" },
    { label: "Public YouTube titles, upload dates and view counts visible in the supplied screenshots" },
    { label: "Public video transcripts reviewed for audience-language patterns" },
  ],
  sections: {
    observation: [
      {
        type: "section-heading",
        eyebrow: "01 · The observation",
        title: "The channel's strongest recent ideas reach beyond retirement mechanics.",
      },
      {
        type: "paragraph",
        text: "Early Retirement Roadmap teaches retirement, money and life after work. But the most revealing recent public results are not simply technical answers about portfolios or withdrawal rules. They speak to people who feel their relationship with work and time changing.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/channel-overview-and-recent-uploads.png",
        fit: "contain",
        caption:
          "The public channel and its recent uploads. The professional crop removes browser chrome while preserving the visible channel context, titles and metrics.",
      },
      {
        type: "callout",
        title: "Observed",
        tone: "note",
        text: "Why Gen X is Quietly Done With Work showed roughly 167K views after two weeks. I Retired at 55 — Here's What I Wish I Knew at 40 showed roughly 84K over a similar period.",
      },
      {
        type: "callout",
        title: "Interpretation",
        tone: "insight",
        text: "The channel may be reaching a larger audience of late-career people questioning how long work should control their lives. Public results support that hypothesis; they do not prove causation.",
      },
      {
        type: "highlight",
        text: "The deeper desire is not merely to retire. It is to own more of the healthy life you have left.",
      },
    ],

    whatHappened: [
      {
        type: "section-heading",
        eyebrow: "02 · What happened",
        title: "Two identity-led ideas created unusually broad recognition.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/breakout-genx-and-future-self.png",
        fit: "contain",
        caption:
          "The breakout pair: a Gen X identity statement at roughly 167K views and a future-self warning at roughly 84K views when captured.",
      },
      {
        type: "matched-performance",
        title: "Public performance snapshots",
        matches: [
          {
            topic: "Identity and work",
            left: { label: "Quietly Done With Work", value: "167K" },
            right: { label: "Burned Out at Work", value: "12K" },
            ratio: "≈14×",
          },
          {
            topic: "Future self versus narrow fear",
            left: { label: "Wish I Knew at 40", value: "84K" },
            right: { label: "Afraid to Spend Money", value: "3K" },
            ratio: "≈28×",
          },
        ],
        note:
          "Views were captured at different ages and are not controlled experiments. The comparison is useful for generating hypotheses, not declaring a single cause.",
      },
      {
        type: "paragraph",
        text: "‘Burned out’ describes a condition. ‘Quietly done’ describes a decision forming inside an identity. Likewise, ‘what I wish I knew at 40’ lets Mike appear as a credible future self rather than only a teacher of retirement mechanics.",
      },
      {
        type: "callout",
        title: "Prescription",
        tone: "insight",
        text: "Treat the winners as clues to a repeatable audience promise: help late-career people make sense of work, money and time from the other side of retirement.",
      },
    ],

    evidence: [
      {
        type: "section-heading",
        eyebrow: "03 · The evidence",
        title: "The wider pattern combines identity, future self and obstacle removal.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/popular-winner-pattern.png",
        fit: "contain",
        caption:
          "A selection of visible public winners spans Gen X identity, future-self reflection, healthcare and retirement mistakes. Counts describe the captured moment only.",
      },
      {
        type: "stats",
        items: [
          { value: "167K", label: "Quietly Done With Work", note: "2 weeks" },
          { value: "123K", label: "$175/Month Healthcare", note: "1 year" },
          { value: "84K", label: "Wish I Knew at 40", note: "2 weeks" },
          { value: "78K", label: "7 Early Retirement Mistakes", note: "5 months" },
        ],
      },
      {
        type: "paragraph",
        text: "The public transcripts reinforce the pattern. The 167K video frames retirement as an identity shift and argues that remaining healthy time can matter more than maximizing money. The 84K video uses regret and hindsight to let a younger viewer meet a possible future version of themselves.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/identity-versus-technical-topics.png",
        fit: "contain",
        caption:
          "Identity and future-self ideas sit alongside narrower retirement mechanics. The difference is not quality; it is the size and urgency of the audience state each idea can activate.",
      },
      {
        type: "callout",
        title: "Important limitation",
        tone: "caution",
        text: "Public views cannot reveal impressions, click-through rate, retention, subscriber conversion, traffic source or revenue. The strategy must be validated inside YouTube Studio.",
      },
    ],

    whyItWorked: [
      {
        type: "section-heading",
        eyebrow: "04 · Why it worked",
        title: "The videos connect retirement advice to a human transition already underway.",
      },
      {
        type: "framework",
        title: "The audience model",
        steps: [
          { title: "Retirement", text: "The solution space." },
          { title: "Gen X", text: "The identity doorway." },
          { title: "Work", text: "The conflict." },
          { title: "Time", text: "The scarce resource." },
          { title: "Money", text: "The mechanism." },
          { title: "Freedom", text: "The transformation." },
        ],
      },
      {
        type: "comparison",
        left: {
          title: "Topic-first promise",
          points: ["Learn retirement rules", "Optimize money", "Solve a technical question"],
        },
        right: {
          title: "Human promise",
          points: ["Recognize what changed in you", "Understand the cost of waiting", "Build a self-directed life"],
        },
      },
      {
        type: "framework",
        title: "Three content engines",
        steps: [
          {
            title: "Recognition",
            text: "Name the feeling the audience has not yet articulated. This is the discovery engine.",
          },
          {
            title: "Future self",
            text: "Use Mike's lived experience to show what the choice looks like from the other side. This creates discovery and trust.",
          },
          {
            title: "Obstacle removal",
            text: "Answer healthcare, spending, Social Security and portfolio questions once the viewer has deeper intent.",
          },
        ],
      },
      {
        type: "highlight",
        text: "The emotional sequence is recognition → relief → permission → possibility.",
      },
    ],

    principle: {
      statement: "Gen X is the doorway, not the niche.",
      expansion:
        "The durable content world is the transition from a career-controlled life to a self-directed one. Gen X makes that conflict immediate, but the human desire underneath it is broader: control over the healthy time that remains.",
    },

    whatMostPeopleMiss: [
      {
        type: "section-heading",
        eyebrow: "05 · What most people miss",
        title: "A broad discovery video and a narrow retirement answer do different jobs.",
      },
      {
        type: "comparison",
        left: {
          title: "Discovery",
          points: [
            "Names a life-stage tension",
            "Builds recognition before intent",
            "Examples: done with work, wish I knew, Gen X",
          ],
        },
        right: {
          title: "Deeper intent",
          points: [
            "Removes a practical barrier",
            "Serves someone already considering change",
            "Examples: healthcare, spending, 401(k), Social Security",
          ],
        },
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/lower-view-retirement-mechanics.png",
        fit: "contain",
        caption:
          "Lower-view mechanics may still serve high-intent viewers. Public reach alone cannot tell us their business value or conversion quality.",
      },
      {
        type: "paragraph",
        text: "A video about fear of spending can be thoughtful and useful while reaching fewer people. Its audience has already crossed several psychological gates. Calling it a weak idea solely from public views would confuse reach with role.",
      },
      {
        type: "ekis-note",
        text: "Sometimes the biggest opportunity isn't a new niche. It's discovering the larger human desire that was hiding underneath the niche you already had.",
      },
    ],

    howIWouldApply: [
      {
        type: "section-heading",
        eyebrow: "06 · How I would apply it",
        title: "Build one connected journey from recognition to transition.",
      },
      {
        type: "framework",
        title: "The audience journey",
        steps: [
          { title: "Something changed in me", text: "Recognition and identity." },
          { title: "Do I actually want out?", text: "Permission and future-self thinking." },
          { title: "Can I afford to leave?", text: "Financial and healthcare obstacles." },
          { title: "What happens after I leave?", text: "Purpose, identity and daily life." },
          { title: "Help me make the transition", text: "Planning, tools and community." },
        ],
      },
      {
        type: "section-heading",
        eyebrow: "07 · The strategy system",
        title: "Use one lens across work, money and time.",
      },
      {
        type: "framework",
        title: "World → lens → engines → emotion",
        steps: [
          {
            title: "World",
            text: "The transition from a career-controlled life to a self-directed life.",
          },
          {
            title: "Lens",
            text: "I retired at 55. Here's what work, money and time look like from the other side.",
          },
          {
            title: "Engines",
            text: "Recognition, future self and obstacle removal.",
          },
          {
            title: "Emotion",
            text: "Recognition → relief → permission → possibility.",
          },
        ],
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/content-family-comparison.png",
        fit: "contain",
        caption:
          "The same channel can sequence identity, future-self and practical topics as one journey instead of treating every upload as an isolated retirement lesson.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/field-notes/004/follow-up-and-obstacle-removal.png",
        fit: "contain",
        caption:
          "Follow-ups can move from a recognizable work tension into concrete transition barriers such as healthcare and the hidden costs of working longer.",
      },
      {
        type: "section-heading",
        eyebrow: "08 · Title tests",
        title: "Extend the mechanism, not only the surface topic.",
      },
      {
        type: "table",
        headers: ["Engine", "Title test"],
        rows: [
          ["Recognition", "Why Gen X Is Starting to Question the Last 10 Years of Work"],
          ["Recognition", "You Don't Hate Work. You Hate What It Is Costing You"],
          ["Future self", "I Retired at 55. Here Is What I Would Tell My 45-Year-Old Self"],
          ["Future self", "The Retirement Decision I Almost Waited Too Long to Make"],
          ["Obstacle", "How Much Security Is Enough Before You Buy Back Your Time?"],
          ["Obstacle", "The Healthcare Question Keeping People in Jobs They Have Outgrown"],
          ["After work", "What Nobody Tells You About the First Year Without a Career"],
          ["After work", "Retirement Is Not the Goal. This Is."],
          ["Sequence", "Working One More Year: What You Gain and What You Give Up"],
        ],
      },
      {
        type: "diagnosis-card",
        items: [
          {
            label: "Main opportunity",
            value: "Audience expansion through identity and life-stage recognition",
          },
          { label: "Second opportunity", value: "A repeatable future-self engine" },
          { label: "Risk", value: "Copying the surface topic instead of the recognition mechanism" },
          {
            label: "Possible problem",
            value: "Logical follow-ups may lose the identity and emotional recognition that created discovery",
          },
          {
            label: "What looks strong",
            value:
              "Personal authority, lived experience, clear teaching, finance expertise, a recognizable visual system, audience feedback loops, tools and community",
          },
          { label: "Confidence", value: "Moderate-high" },
        ],
      },
      {
        type: "section-heading",
        eyebrow: "09 · What Studio must confirm",
        title: "Use private analytics to separate a compelling story from a repeatable system.",
      },
      {
        type: "table",
        headers: ["Signal", "Question"],
        rows: [
          ["Impressions and CTR", "Do identity-led ideas earn broader distribution and stronger choice?"],
          ["Audience retention", "Which promise holds attention after the click?"],
          ["Traffic source", "Are winners driven by Browse, Suggested or Search?"],
          ["Returning viewers", "Do recognition videos bring people back for practical follow-ups?"],
          ["Next-video behavior", "Does the audience move from work and identity into retirement mechanics?"],
          ["Subscriber conversion", "Which engine creates lasting channel value?"],
          ["Business conversion", "Which deeper-intent topics lead to tools, community or services?"],
        ],
      },
    ],

    keyTakeaways: [
      "The channel's biggest recent public winners speak to work, time and identity—not only retirement mechanics.",
      "The deeper audience desire is control over the healthy life that remains.",
      "Gen X is a powerful identity doorway, but the durable content world is the transition to a self-directed life.",
      "Recognition, future-self and obstacle-removal videos can form one connected audience journey.",
      "Discovery and deeper-intent videos should be judged according to the jobs they perform.",
      "The next strategic test should extend the winner's mechanism, not merely repeat its wording.",
      "YouTube Studio data is required to confirm which public patterns are truly repeatable.",
    ],
    closingNote:
      "The channel may have started by helping people retire early. Its recent winners point toward a larger question: when does another year of security stop being worth another year of your life?",
  },
};
