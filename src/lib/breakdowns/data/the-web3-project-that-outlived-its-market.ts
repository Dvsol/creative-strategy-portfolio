import type { Breakdown } from "../types";

export const theWeb3ProjectThatOutlivedItsMarket: Omit<Breakdown, "number"> = {
  slug: "the-web3-project-that-outlived-its-market",
  title: "The Web3 Project That Outlived Its Market",
  category: "Web3",
  tags: ["community", "identity", "web3", "retention"],
  insight:
    "When the market collapsed, thousands of projects with better tech and bigger treasuries disappeared. This one kept shipping and kept its community. The asset that survived wasn't on-chain — it was identity.",
  subject: "An anonymized NFT-native community, observed across a full market cycle (28 months).",
  readingTime: 10,
  date: "2025-05-14",
  visual: "orbit",
  sections: {
    observation: [
      {
        type: "paragraph",
        text: "During the downturn I kept a private list of Web3 communities and checked their activity monthly. Most followed the same curve: activity tracked price with a few weeks of lag, then flatlined. One community's Discord activity barely moved while its floor price dropped over 90%.",
      },
      {
        type: "highlight",
        text: "When engagement decouples from price, you're no longer looking at speculation. You're looking at belonging.",
      },
    ],
    whatHappened: [
      {
        type: "paragraph",
        text: "The project launched mid-hype like everyone else. But while comparable projects spent the bull market promising utility, roadmaps, and returns, this team spent it doing something slower: building rituals. Weekly member-run events. Insider vocabulary. Member-created lore. Visible roles that had to be earned, not bought.",
      },
      {
        type: "paragraph",
        text: "When prices collapsed, projects built on financial expectation lost their only reason to exist. This community's reason to exist — the people, the rituals, the shared identity — was untouched by the chart.",
      },
      {
        type: "callout",
        tone: "note",
        title: "Context",
        text: "Nothing about the project's tech was unusual. Same chain, same standards, comparable art quality. The differentiation was entirely social architecture.",
      },
    ],
    evidence: [
      {
        type: "stats",
        items: [
          { value: "-90%+", label: "Floor price through the downturn", note: "In line with the broader market" },
          { value: "~flat", label: "Weekly active participation", note: "Discord + member events, tracked monthly" },
          { value: "28 mo", label: "Observation window", note: "Full cycle: hype, collapse, stagnation, partial recovery" },
        ],
      },
      {
        type: "figure",
        kind: "chart",
        caption: "Price vs. participation over 28 months. Comparable projects show the two lines glued together. Here they separate at month 9 — and never reconverge.",
      },
      {
        type: "figure",
        kind: "comment",
        caption: "Member posts during the worst month of the drawdown are about an internal event, not the market. In comparable projects' channels, the same month is entirely price talk and exit discussion.",
      },
    ],
    whyItWorked: [
      {
        type: "paragraph",
        text: "Every community answers one implicit question for its members: 'what do I get by being here?' If the answer is financial, the community's health is chained to an asset price it can't control. If the answer is identity — status, friendship, meaning, a role — the community's health is chained to things the team can actually build.",
      },
      {
        type: "framework",
        title: "The social architecture that held",
        steps: [
          { title: "Earned status, not bought status", text: "Visible roles came from contribution and time, so members had sunk identity — not just sunk cost — in the community." },
          { title: "Rituals over announcements", text: "Recurring member-run events created habit. Habit survives sentiment; announcements don't." },
          { title: "Lore over roadmap", text: "Shared stories and vocabulary made membership feel like citizenship. You can dump a token; it's much harder to dump a citizenship." },
          { title: "Small surface for speculation", text: "The team consistently refused to make price the main channel topic, which kept mercenary capital from setting the culture." },
        ],
      },
    ],
    principle: {
      statement: "Communities built on upside dissolve with the upside. Communities built on identity survive their own asset.",
      expansion:
        "Speculation recruits fast and retains nothing. Identity recruits slowly and retains through collapse. Any community strategy — Web3 or otherwise — should be honest about which of the two it's actually building, because the difference is invisible in a bull market and decisive in a bear one.",
    },
    whatMostPeopleMiss: [
      {
        type: "paragraph",
        text: "The easy conclusion is 'community matters'. The harder observation is about sequencing: this team built identity infrastructure during the hype, when it looked like a waste of momentum. Every incentive said to monetize attention; they spent it on rituals instead.",
      },
      {
        type: "callout",
        tone: "insight",
        title: "The bull market was the construction window",
        text: "You cannot build belonging during a collapse — trust-building requires surplus attention, and collapses have none. The downturn didn't test what the team did in the downturn. It tested what they had built before it.",
      },
    ],
    howIWouldApply: [
      {
        type: "framework",
        title: "For any community-dependent product or brand",
        steps: [
          { title: "Run the decoupling test", text: "Ask: if the financial or growth upside vanished tomorrow, what specifically would members stay for? If the honest answer is 'nothing', that's the roadmap." },
          { title: "Convert attention into ritual while you have it", text: "During growth phases, invest surplus attention into recurring, member-owned structures — not just more acquisition." },
          { title: "Make status earnable", text: "Design roles that must be earned through contribution. Purchased status churns; earned status retains." },
          { title: "Track participation separately from performance", text: "Dashboard the two lines independently. The gap between them is your real community equity." },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Transfers directly to",
        text: "Creator memberships, paid communities, fandoms, loyalty programs, even internal company culture. Anywhere people can leave freely, the price/participation decoupling test applies.",
      },
    ],
    keyTakeaways: [
      "Engagement that tracks price is speculation wearing a community costume.",
      "Identity — rituals, earned status, shared lore — is the only community glue that survives a drawdown.",
      "Belonging must be built during surplus; it cannot be built during collapse.",
      "Refusing to let speculation dominate the culture is an active, ongoing moderation choice.",
      "Measure community equity as the gap between participation and performance.",
    ],
  },
};
