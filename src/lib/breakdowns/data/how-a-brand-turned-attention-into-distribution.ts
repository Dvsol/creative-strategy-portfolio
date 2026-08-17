import type { Breakdown } from "../types";

export const howABrandTurnedAttentionIntoDistribution: Omit<Breakdown, "number"> = {
  slug: "how-a-brand-turned-attention-into-distribution",
  title: "How a Brand Turned Attention Into Distribution",
  category: "Brands",
  tags: ["distribution", "earned media", "brand strategy", "leverage"],
  insight:
    "A small beverage brand got one viral moment — and instead of chasing the next one, converted it into shelf space, wholesale interest, and creator supply lines. Attention was the raw material, not the goal.",
  subject: "An anonymized independent beverage brand, tracked across a 9-month post-viral window.",
  readingTime: 10,
  date: "2025-10-02",
  featured: true,
  visual: "network",
  sections: {
    observation: [
      {
        type: "paragraph",
        text: "Viral moments are usually a sugar rush: a spike in awareness, a bump in sales, then a slow fade back to baseline. I've watched dozens of small brands go through this cycle. This one didn't fade — nine months later, its baseline had permanently moved.",
      },
      {
        type: "highlight",
        text: "Most brands treat attention as the outcome. This brand treated attention as an input — a currency to be spent, immediately, on things that don't decay.",
      },
    ],
    whatHappened: [
      {
        type: "paragraph",
        text: "An independent beverage brand was featured, unprompted, in a creator's video that crossed several million views. The classic playbook says: run ads against the moment, push follower growth, ride the algorithm. They did almost none of that.",
      },
      {
        type: "paragraph",
        text: "Instead, within roughly two weeks, the team did three unglamorous things: they turned the moment into a retail sell-in story, opened a lightweight creator seeding program, and rebuilt their site around a single high-intent action instead of brand storytelling.",
      },
      {
        type: "figure",
        kind: "post",
        caption: "The founder's follow-up post didn't celebrate the virality — it documented the stockists added because of it. The moment was reframed as proof, not as content.",
      },
    ],
    evidence: [
      {
        type: "stats",
        items: [
          { value: "~14 days", label: "Window used to convert the spike", note: "Retail outreach began while the moment was still citable" },
          { value: "3 channels", label: "Attention converted into", note: "Retail listings, creator seeding, email capture" },
          { value: "9 months", label: "Baseline still elevated", note: "Long after the original video stopped circulating" },
        ],
      },
      {
        type: "figure",
        kind: "chart",
        caption: "Search interest for the brand: the spike decays as expected — but the post-spike plateau settles meaningfully above the pre-spike baseline. That gap is the converted attention.",
      },
      {
        type: "quote",
        text: "We knew we had maybe two weeks where buyers would take our call. The video wasn't the win. The video was the excuse to make the calls.",
        attribution: "Founder, in a podcast interview after the fact",
      },
    ],
    whyItWorked: [
      {
        type: "paragraph",
        text: "Attention is the fastest-decaying asset in marketing. Distribution is one of the slowest. The entire strategy reduces to a single trade: swap a decaying asset for a durable one before the decay completes.",
      },
      {
        type: "framework",
        title: "The conversion chain",
        steps: [
          { title: "Attention → Credibility", text: "A viral moment is third-party proof. For two to four weeks, it makes gatekeepers — buyers, distributors, journalists, creators — take the meeting." },
          { title: "Credibility → Placement", text: "They spent that credibility on retail listings and creator relationships: channels that keep selling when nobody is talking about you." },
          { title: "Placement → Compounding", text: "Shelf presence generated its own discovery, which fed repurchase and word of mouth — a loop that no longer depended on the original moment." },
        ],
      },
      {
        type: "highlight",
        text: "The brand understood that virality opens doors — but only distribution keeps them open.",
      },
    ],
    principle: {
      statement: "Attention is a currency. Spend it on assets that don't expire.",
      expansion:
        "The value of a viral moment isn't the audience it reaches — it's the short window in which gatekeepers say yes. Brands that reinvest attention into distribution, relationships, and owned channels convert a spike into a new baseline. Brands that reinvest attention into chasing more attention convert it into nothing.",
    },
    whatMostPeopleMiss: [
      {
        type: "paragraph",
        text: "The counterintuitive part: the brand deliberately under-exploited the moment as content. No trend-chasing follow-ups, no 'we went viral' victory lap, minimal paid amplification. From the outside it looked like they fumbled the moment.",
      },
      {
        type: "callout",
        tone: "insight",
        title: "The less obvious insight",
        text: "Chasing a second viral moment competes for the same internal resources as converting the first one. The teams that 'ride the wave' publicly are often the ones with nothing structural to show for it a year later. Conversion happens off-feed.",
      },
      {
        type: "paragraph",
        text: "There's also a sequencing detail that's easy to miss: the site rebuild came before the outreach. Every buyer and creator who checked them out mid-conversation landed on a page engineered for exactly one next step. The conversion surface was ready before the traffic arrived.",
      },
    ],
    howIWouldApply: [
      {
        type: "framework",
        title: "A standing 'attention conversion' protocol",
        steps: [
          { title: "Decide the trade in advance", text: "Before any spike: list the three durable assets attention should buy — e.g. retail intros, a hiring pipeline, creator relationships, email capture. Never decide during the spike." },
          { title: "Prepare the conversion surface", text: "Keep one page, one offer, and one email sequence permanently ready for a surge. The window is too short to build these reactively." },
          { title: "Spend credibility within 14 days", text: "Make the gatekeeper calls while the moment is still citable. 'As seen last week' opens doors; 'as seen last quarter' doesn't." },
          { title: "Measure the plateau, not the peak", text: "The success metric of a viral moment is where the baseline settles 90 days later. Peaks are entertainment; plateaus are strategy." },
        ],
      },
    ],
    keyTakeaways: [
      "Attention decays in weeks; distribution compounds for years. The strategy is the exchange rate between them.",
      "A viral moment's real product is a short window of gatekeeper credibility. Spend it fast.",
      "Prepare conversion infrastructure before you need it — spikes don't wait for redesigns.",
      "Publicly riding a wave and privately converting it compete for the same resources. Choose conversion.",
      "Judge any spike by the 90-day plateau it leaves behind, not the peak.",
    ],
  },
};
