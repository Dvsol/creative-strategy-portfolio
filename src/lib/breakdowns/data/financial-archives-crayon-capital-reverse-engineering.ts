import type { BreakdownInput } from "../types";

export const financialArchivesCrayonCapitalReverseEngineering: BreakdownInput = {
  slug: "financial-archives-crayon-capital-reverse-engineering",
  number: "FN—002",
  title: "They Copied the Format. But Did They Copy What Made It Work?",
  category: "Creators",
  categoryLabel: "Finance / Documentary",
  channel: "The Financial Archives",
  comparisonChannel: "Crayon Capital",
  problem: "Format / Content Product",
  question:
    "What happens when you copy the visible parts of a successful format but the results still do not follow?",
  eyebrow: "Reverse Engineering · Field Note 002",
  tags: [
    "Reverse Engineering",
    "Format Strategy",
    "Finance",
    "Storytelling",
    "Packaging",
    "Documentary",
    "Idea Strategy",
    "Audience Expectation",
    "Small Channels",
    "Competitor Analysis",
  ],
  insight:
    "Two illustrated finance channels covered some of the same stories. One reached millions. The other reached hundreds or thousands. I compared the ideas, packaging, and scripts to see what the visible numbers may be hiding.",
  subject: "The Financial Archives, compared with Crayon Capital",
  readingTime: 24,
  date: "2026-08-21",
  researchDate: "2026-08-21",
  featured: true,
  visual: "grid",
  sources: [
    { label: "Crayon Capital channel screenshots supplied by the researcher" },
    { label: "The Financial Archives channel screenshots supplied by the researcher" },
    { label: "Crayon Capital — Wolf of Wall Street script supplied by the researcher" },
    { label: "Crayon Capital — 2008 Financial Crisis script supplied by the researcher" },
    { label: "The Financial Archives — Wolf of Wall Street script supplied by the researcher" },
    { label: "The Financial Archives — 2008 Financial Crisis script supplied by the researcher" },
  ],
  sections: {
    observation: [
      { type: "section-heading", eyebrow: "01 · The puzzle", title: "Two similar subjects. Two very different results." },
      {
        type: "paragraph",
        text: "The Financial Archives is a small illustrated finance channel. Crayon Capital is a much larger illustrated finance channel. At the time of research, Crayon had about 243,000 subscribers and 28 visible videos.",
      },
      {
        type: "paragraph",
        text: "The channels sometimes cover remarkably similar stories. That gives us something useful: we can compare what two creators did with similar raw material.",
      },
      {
        type: "matched-performance",
        title: "Matched public performance",
        matches: [
          {
            topic: "The Wolf of Wall Street",
            left: { label: "Crayon Capital", value: "≈4.1M views" },
            right: { label: "The Financial Archives", value: "≈1.2K views" },
            ratio: "≈3,417× gap",
          },
          {
            topic: "The 2008 Financial Crisis",
            left: { label: "Crayon Capital", value: "≈2.2M views" },
            right: { label: "The Financial Archives", value: "≈570 views" },
            ratio: "≈3,860× gap",
          },
        ],
        note: "Approximate public counts recorded on 21 August 2026. These are labeled comparisons, not a controlled experiment or proof of cause.",
      },
      {
        type: "highlight",
        text: "How can two channels cover nearly the same story and end up with results this different?",
      },
      {
        type: "callout",
        title: "Private data required",
        tone: "caution",
        text: "The gap did not necessarily come from one thing. Public views cannot show us impressions, CTR, retention, traffic sources, audience history or returning viewers. They only give us a puzzle worth investigating.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/breakdowns/financial-archives-crayon-capital/crayon-capital-channel-overview.png",
        fit: "contain",
        caption: "Crayon Capital's channel overview shows a 243K-subscriber benchmark built around singular people, companies and financial stories.",
      },
      { type: "section-heading", eyebrow: "02 · First, look at the channels", title: "They have historically sold different promises." },
      {
        type: "paragraph",
        text: "The Financial Archives historically published many broad educational videos: every financial term, every market crash, every investment type, every fund and every level of wealth. Its thumbnails often split the frame into several ideas, icons or categories.",
      },
      {
        type: "paragraph",
        text: "Crayon Capital more often centers one person, company, scandal, disaster or economic mystery: Elon Musk, NVIDIA, Rockefeller, Theranos, the Great Depression, the 2008 crisis and the Wolf of Wall Street.",
      },
      {
        type: "comparison",
        left: {
          title: "Category education",
          points: ["Learn this whole subject", "Several concepts in one video", "Grid-style visual promise"],
        },
        right: {
          title: "Story-led finance",
          points: ["Let me tell you what happened", "One central story", "One person, event or mystery"],
        },
      },
      {
        type: "paragraph",
        text: "Neither product is automatically bad. But they give viewers different reasons to click.",
      },
      {
        type: "ekis-note",
        text: "A format is not just how the video looks. It is the promise the viewer thinks they are clicking.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/breakdowns/financial-archives-crayon-capital/financial-archives-older-catalogue.png",
        fit: "contain",
        caption: "The Financial Archives' earlier catalogue relied heavily on broad ‘Every X Explained’ formats and multi-subject grid thumbnails.",
      },
      { type: "section-heading", eyebrow: "03 · Something changed", title: "The newer catalogue is already experimenting." },
      {
        type: "paragraph",
        text: "Newer uploads move toward individual stories, famous characters, historical events, POV concepts and more singular thumbnail subjects. The Wolf of Wall Street, life during the Great Depression and the world's first trillionaire are different products from a list of every investment type.",
      },
      {
        type: "callout",
        title: "Observed · catalogue change",
        tone: "note",
        text: "The public catalogue shows stronger stories, people, POV formats, individual events and more focused thumbnail concepts appearing in newer uploads.",
      },
      {
        type: "callout",
        title: "Interpretation · not confirmed intention",
        tone: "insight",
        text: "The creator may have noticed a ceiling in broad category education and may be moving toward story-led finance. We cannot know the private strategy from public evidence.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/breakdowns/financial-archives-crayon-capital/financial-archives-recent-catalogue.png",
        fit: "contain",
        caption: "Recent uploads shift toward individual events, recognizable characters and POV-led story concepts with one dominant visual idea.",
      },
    ],
    whatHappened: [
      { type: "section-heading", eyebrow: "04 · Test the theory", title: "Compare matched subjects, not random uploads." },
      {
        type: "paragraph",
        text: "The channels have different sizes, histories, audiences, upload timing and distribution. These matches are not a controlled experiment. But they let us inspect what each creator did with the same basic story.",
      },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/breakdowns/financial-archives-crayon-capital/2008-financial-crisis-matched-comparison.png",
        fit: "contain",
        caption: "The matched 2008 Financial Crisis videos cover the same event but show a public gap of roughly 2.2M views versus 573 at the research date.",
      },
      { type: "section-heading", eyebrow: "05 · The 2008 crisis", title: "Same event. Different opening." },
      {
        type: "paragraph",
        text: "The Financial Archives begins on 15 September 2008 with Lehman Brothers workers carrying boxes. It then goes back to the 1990s and builds the system: Glass-Steagall, bank types, deregulation and financial instruments.",
      },
      {
        type: "paragraph",
        text: "That is traditional documentary structure. Start near the event, build the historical context, explain the machinery, then move toward the collapse. There is nothing inherently wrong with it.",
      },
      {
        type: "paragraph",
        text: "Crayon starts with the catastrophe: an old bank collapsed, enormous value disappeared, jobs vanished and retirement accounts were hurt. Then it asks whether the real cause began with one simple promise about owning a home.",
      },
      {
        type: "comparison",
        left: {
          title: "Financial Archives opening",
          points: ["Begin near the historical event", "Go back for context", "Explain the system", "Build toward collapse"],
        },
        right: {
          title: "Crayon opening",
          points: ["Show the catastrophe", "Create a mystery", "Ask what caused it", "Explain the machinery afterward"],
        },
      },
      {
        type: "ekis-note",
        text: "Good information answers a question. Good storytelling can make you need the answer first.",
      },
      { type: "section-heading", eyebrow: "06 · Explain versus stage", title: "One describes the system. The other often lets us watch it happen." },
      {
        type: "paragraph",
        text: "Financial Archives often explains what lenders, banks, rating agencies and investors did. Crayon frequently turns the same ideas into small scenes or exaggerated conversations.",
      },
      {
        type: "comparison",
        left: { title: "Financial Archives", points: ["Here is what happened", "Definitions give the animator information to illustrate"] },
        right: { title: "Crayon Capital", points: ["Watch this happen", "Scenes give the animator concrete action to show"] },
      },
      { type: "section-heading", eyebrow: "07 · Translate finance into pictures", title: "The difference may be frequency and rhythm." },
      {
        type: "paragraph",
        text: "Crayon repeatedly turns finance into familiar pictures: a Jenga system, a paid-off food critic and absurd everyday versions of speculative insurance. Financial Archives also uses analogies, including a sausage factory for mortgage-backed securities and an insurance comparison for credit default swaps.",
      },
      {
        type: "callout",
        title: "Interpretation · script rhythm",
        tone: "insight",
        text: "The difference is not that one channel uses analogies and the other does not. Crayon appears to return to pictures, jokes, consequences and new questions more often. Financial Archives spends longer stretches explaining directly.",
      },
      { type: "section-heading", eyebrow: "08 · Information rhythm", title: "Both educate. The experience of receiving the information is different." },
      {
        type: "comparison",
        left: {
          title: "Financial Archives rhythm",
          points: ["Learn", "Learn", "Context", "Learn", "Consequence"],
        },
        right: {
          title: "Crayon rhythm",
          points: ["Question", "Explain", "Scene", "Surprise or joke", "Consequence", "New question"],
        },
      },
      {
        type: "paragraph",
        text: "Crayon also uses small bridges that reopen curiosity: the story is not finished, Wall Street has another move, someone notices the problem, or something impossible happens. Each bridge gives the viewer another reason to stay for the next section.",
      },
    ],
    evidence: [
      { type: "section-heading", eyebrow: "09 · New evidence", title: "The Wolf script breaks the easy diagnosis." },
      {
        type: "paragraph",
        text: "After the 2008 comparison, it would be easy to say Financial Archives simply needs better storytelling. Then I read its Wolf of Wall Street script, and that answer stopped being good enough.",
      },
      {
        type: "paragraph",
        text: "The Wolf script is much more narrative. It quickly gives us Jordan Belfort's age, money, scam, FBI investigation, rise and fall. It uses dialogue, characters, scenes, absurd details, escalating stakes, the yacht, betrayal and arrest.",
      },
      {
        type: "comparison",
        left: {
          title: "Old theory — rejected",
          points: ["The channel does not understand storytelling"],
        },
        right: {
          title: "New question",
          points: ["If the storytelling improved, why did the public result not follow?"],
        },
      },
      {
        type: "ekis-note",
        text: "When new evidence breaks your diagnosis, change the diagnosis. Do not protect your first idea just because it sounded smart.",
      },
      { type: "section-heading", eyebrow: "10 · Wolf versus Wolf", title: "The scripts use different narrative engines." },
      {
        type: "paragraph",
        text: "Crayon frames Belfort around a contradiction: he committed fraud, hurt people, served relatively little prison time and later became a pop-culture figure. Its larger question is how someone who caused harm became someone audiences celebrate.",
      },
      {
        type: "paragraph",
        text: "The Financial Archives focuses more on how Belfort built the machine. A large middle section explains the operation step by step: buy cheap stocks, use the boiler room, create demand, then dump the stock.",
      },
      {
        type: "comparison",
        left: {
          title: "Character-led question",
          points: ["What happens to this man next?", "How does society end up rewarding him?"],
        },
        right: {
          title: "System-led question",
          points: ["How did the criminal operation work?", "What were the mechanics of the scam?"],
        },
      },
      {
        type: "callout",
        title: "Interpretation · emotional pull",
        tone: "insight",
        text: "Both are valid structures. A character-led question may create a different level of emotional pull, but public views cannot prove which script retained viewers better.",
      },
      { type: "section-heading", eyebrow: "11 · The story keeps moving", title: "Crayon keeps changing Jordan's situation." },
      {
        type: "framework",
        title: "Crayon's visible story progression",
        steps: [
          { title: "Young salesman → failed business owner" },
          { title: "Wall Street → penny stocks → partner" },
          { title: "Stratton Oakmont → empire → excess" },
          { title: "Investigation → collapse → prison" },
          { title: "Author → Hollywood → public personality" },
        ],
      },
      {
        type: "paragraph",
        text: "Financial Archives pauses the biography more often to explain Stratton Oakmont's machinery. Crayon more often asks what happens to Jordan next; Financial Archives more often asks how the system worked. That is an interpretation of structure, not proven retention data.",
      },
      { type: "section-heading", eyebrow: "12 · Now we have a problem", title: "The better story still did not travel publicly." },
      {
        type: "figure",
        kind: "screenshot",
        src: "/images/breakdowns/financial-archives-crayon-capital/wolf-of-wall-street-matched-comparison.png",
        fit: "contain",
        caption: "The matched Wolf of Wall Street videos package the same public figure differently and show roughly 4.1M views versus 1.2K at the research date.",
      },
      {
        type: "paragraph",
        text: "The Financial Archives script is not obviously bad. Its storytelling improved. The topic proved capable of attracting a large audience elsewhere. Its packaging moved closer to story-led finance. Yet the visible result remained small by comparison.",
      },
      {
        type: "highlight",
        text: "We cannot simply say the script failed. Public evidence does not tell us that.",
      },
    ],
    whyItWorked: [
      { type: "section-heading", eyebrow: "13 · The invisible part of YouTube", title: "A public result hides several different possible problems." },
      {
        type: "framework",
        title: "What we cannot see",
        steps: [
          { title: "Impressions and click-through rate" },
          { title: "First 30-second retention" },
          { title: "Average percentage viewed and average view duration" },
          { title: "Browse, Suggested and Search distribution" },
          { title: "Returning viewers and subscribers gained" },
          { title: "Audience overlap between old and new formats" },
        ],
      },
      {
        type: "paragraph",
        text: "A better script can still struggle if few people click. Strong packaging can still struggle if the people shown the video do not want that product. A channel can also change faster than its existing audience changes with it.",
      },
      {
        type: "callout",
        title: "Private data required",
        tone: "caution",
        text: "Without YouTube Studio data, we cannot know which explanation survives.",
      },
      { type: "section-heading", eyebrow: "14 · A changing content product", title: "The channel may be teaching viewers to expect a new experience." },
      {
        type: "paragraph",
        text: "A content product is the kind of experience viewers expect when they click your channel. Historically, Financial Archives offered broad finance education, ‘Every X Explained,’ multi-topic videos and grid thumbnails. Newer uploads increasingly offer stories, people, scandals, POV concepts and single narratives.",
      },
      {
        type: "paragraph",
        text: "Someone who subscribed for every investment type may not automatically want a POV story about becoming the first trillionaire. Both are finance, but they satisfy different curiosities.",
      },
      {
        type: "callout",
        title: "Interpretation · transition hypothesis",
        tone: "insight",
        text: "Financial Archives may be improving its storytelling while also teaching its audience to expect a new kind of video. This is a hypothesis, not a fact. Studio data is required.",
      },
      { type: "section-heading", eyebrow: "15 · Copying has layers", title: "The reverse-engineering ladder" },
      {
        type: "framework",
        title: "The reverse-engineering ladder",
        steps: [
          { title: "Visual style", text: "What does the video look like?" },
          { title: "Packaging", text: "What title and thumbnail earn the click?" },
          { title: "Idea", text: "Why would somebody care about this subject?" },
          { title: "Story engine", text: "What question keeps the viewer moving?" },
          { title: "Information rhythm", text: "How are explanation, scenes, jokes, surprises and consequences mixed?" },
          { title: "Audience expectation", text: "What kind of video has this channel trained viewers to expect?" },
          { title: "Distribution and private performance", text: "Who was shown the video, who clicked and who stayed?" },
        ],
      },
      {
        type: "paragraph",
        text: "Most copying stops at visual style. Sometimes it reaches packaging. Real reverse engineering keeps going.",
      },
      {
        type: "ekis-note",
        text: "Do not copy what a successful creator made. Figure out what job each part of the video is doing.",
      },
    ],
    principle: {
      statement: "Copy the job, not just the visible ingredient.",
      expansion:
        "A drawing style, title pattern or subject can be reproduced without recreating the system that earns attention. Reverse engineering asks what each layer does: create curiosity, make a promise, move the story, fit the audience and hold attention.",
    },
    whatMostPeopleMiss: [
      { type: "section-heading", eyebrow: "16 · What already improved", title: "This is not a story about a creator who stopped learning." },
      {
        type: "framework",
        title: "Visible strengths",
        steps: [
          { title: "Story selection", text: "Newer uploads use more people, scandals, historical moments and extreme outcomes." },
          { title: "Packaging", text: "Newer thumbnails appear more focused than many older grid designs." },
          { title: "Scripting", text: "The Wolf script contains scenes, dialogue, progression and escalating stakes." },
          { title: "Explanation", text: "Complicated financial systems are broken into understandable language." },
          { title: "Experimentation", text: "The catalogue tests new formats instead of repeating one template forever." },
        ],
      },
      {
        type: "highlight",
        text: "The diagnosis is not ‘start making good videos.’ It is ‘find which part of the new system is still preventing the better videos from travelling.’",
      },
      { type: "section-heading", eyebrow: "17 · Likely diagnosis", title: "A content-product transition with unanswered distribution questions." },
      {
        type: "diagnosis-card",
        items: [
          { label: "Main problem", value: "Format / Content Product Transition — the channel appears to be moving from broad category explainers toward story-led finance, while its audience and distribution may not have fully moved with it." },
          { label: "Second problem", value: "Idea Strategy — Crayon repeatedly uses people, conflict, power, collapse, money, scams and extreme outcomes; Financial Archives historically leaned more on broad educational categories." },
          { label: "Possible problem", value: "Packaging — newer packaging appears stronger, but competitive CTR cannot be judged publicly." },
          { label: "Possible problem · audience", value: "Older subscribers may associate the channel with a different content product." },
          { label: "What looks strong", value: "Research, explanation, improving storytelling, visual consistency and experimentation." },
          { label: "Confidence", value: "Moderate" },
          { label: "Private data needed", value: "CTR, impressions, retention, traffic sources, returning viewers, subscribers gained and audience overlap." },
        ],
      },
    ],
    howIWouldApply: [
      { type: "section-heading", eyebrow: "18 · What I would not do", title: "Do not tell the creator to copy Crayon harder." },
      {
        type: "paragraph",
        text: "That would miss the point. I also would not abandon the newer story format because several videos underperformed. A format change needs enough tests to separate a weak idea from weak packaging, a weak video, the wrong audience or limited distribution.",
      },
      { type: "section-heading", eyebrow: "19 · What I would test", title: "Run a controlled batch of story-led finance videos." },
      {
        type: "callout",
        title: "Recommendation · repeatable audience promise",
        tone: "insight",
        text: "Test big stories about money, power, scams, companies and economic systems, explained simply. The goal is not to copy one viral title. It is to test one consistent reason to return.",
      },
      {
        type: "framework",
        title: "Three topic groups",
        steps: [
          { title: "Money + people", text: "How one person built, became rich, lost everything or changed an industry." },
          { title: "Scams + collapse", text: "Companies that fooled people, costly scams, collapses and financial lies." },
          { title: "Systems + consequences", text: "Machines behind wealth, company value, personal money and economic change." },
        ],
      },
      { type: "section-heading", eyebrow: "20 · Control the experiment", title: "Change enough to learn, not everything at once." },
      {
        type: "comparison",
        left: {
          title: "Keep relatively stable",
          points: ["Visual style", "Video length range", "Storytelling approach", "Upload cadence", "Thumbnail complexity"],
        },
        right: {
          title: "Deliberately test",
          points: ["Subject strength", "Title angle", "Character versus system", "Current versus evergreen", "Known name versus mystery"],
        },
      },
      {
        type: "ekis-note",
        text: "If everything changes every upload, you learn almost nothing.",
      },
      { type: "section-heading", eyebrow: "21 · Turn observation into a test", title: "Every finding should answer one question: what should change next?" },
      {
        type: "framework",
        title: "The strategy checks",
        steps: [
          { title: "Topic", text: "Does the subject create natural curiosity before packaging?" },
          { title: "Packaging", text: "Do the title and thumbnail make one clear promise together?" },
          { title: "Identity", text: "Who sees themselves as the viewer for this format?" },
          { title: "Hook", text: "What tension or question appears immediately?" },
          { title: "Retention thinking", text: "Where are the open loops, progression, pattern changes and mini-payoffs?" },
          { title: "Repeatability", text: "Can the audience promise support a useful series rather than one imitation?" },
        ],
      },
      { type: "section-heading", eyebrow: "22 · What I would check in Studio", title: "Start with the matched Wolf of Wall Street video." },
      {
        type: "framework",
        title: "Private-data checklist",
        steps: [
          { title: "Impressions", text: "Was YouTube testing the video widely?" },
          { title: "CTR", text: "When viewers saw the newer packaging, did they click?" },
          { title: "First 30 seconds", text: "Did the stronger narrative opening improve early retention?" },
          { title: "Retention curve", text: "Where did viewers leave, especially during the scam explanation?" },
          { title: "Traffic sources", text: "Did discovery come from Browse, Suggested or Search?" },
          { title: "Audience", text: "Were older ‘Every X’ viewers shown the new story format?" },
          { title: "Returning viewers", text: "Did one story-led video lead to another?" },
          { title: "Subscribers gained", text: "Which content product creates future viewers?" },
        ],
      },
      {
        type: "quote",
        text: "Public data can show us where to investigate. Private data tells us which explanation survives.",
        attribution: "David Ekis",
      },
    ],
    keyTakeaways: [
      "A similar visual format does not guarantee a similar audience promise or result.",
      "Category education and story-led finance are different content products, even when both teach finance.",
      "Crayon appears to mix questions, scenes, explanations, surprises and consequences more frequently.",
      "The Financial Archives has already improved its story selection, packaging and narrative scripting.",
      "The next useful step is a controlled story-led batch plus private-data review, not stronger imitation.",
      "Reverse engineering means finding the job each visible and invisible layer performs.",
    ],
    closingNote:
      "You can copy the drawing style.\nYou can copy the title structure.\nYou can even cover the same story.\n\nBut the real thing to reverse-engineer is why the viewer keeps clicking and keeps watching.",
  },
};
