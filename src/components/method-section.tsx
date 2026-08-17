const STEPS = [
  {
    title: "Observe",
    text: "Watch what's actually winning — content, creators, brands, products — without an agenda. Collect anomalies.",
  },
  {
    title: "Question",
    text: "Refuse the obvious explanation. 'It went viral' and 'the algorithm liked it' are descriptions, not answers.",
  },
  {
    title: "Deconstruct",
    text: "Take the thing apart: the packaging, the timing, the audience, the incentives, the format, the context.",
  },
  {
    title: "Find the Pattern",
    text: "Compare against everything else in the library. One success is an anecdote; the same mechanism three times is a pattern.",
  },
  {
    title: "Extract the Principle",
    text: "Strip away the specifics until what's left is transferable — a mechanism that works outside its original context.",
  },
  {
    title: "Apply",
    text: "Turn the principle into concrete strategic decisions for a different creator, brand, or product. This is the test.",
  },
];

/**
 * "How I Think" — the six-step methodology, presented as a numbered
 * process rail. Used on the homepage and the About page.
 */
export function MethodSection({ id = "how-i-think" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line bg-wash/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="annotation text-accent">§ Method</p>
        <h2 id={`${id}-title`} className="display mt-3 text-3xl font-semibold md:text-5xl">
          How I Think
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-soft">
          Strategy doesn&apos;t start with what worked — anyone can see what
          worked. It starts with <em className="text-ink">why</em> it worked.
          Copying the visible result is imitation; understanding the mechanism
          underneath it is what transfers.
        </p>

        {/* Process rail */}
        <div className="mt-10 hidden items-center gap-2 lg:flex" aria-hidden="true">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2">
              <span
                className={`annotation border px-3 py-1.5 ${
                  i === 4
                    ? "border-accent bg-accentwash text-accentink"
                    : "border-linedark bg-paper text-soft"
                }`}
              >
                {step.title}
              </span>
              {i < STEPS.length - 1 && <span className="text-faint">→</span>}
            </div>
          ))}
        </div>

        <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="group bg-card p-6 transition-colors hover:bg-paper">
              <div className="flex items-baseline justify-between">
                <span className="display text-2xl font-semibold text-linedark transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < STEPS.length - 1 ? (
                  <span aria-hidden="true" className="annotation text-faint">→</span>
                ) : (
                  <span aria-hidden="true" className="annotation text-accent">■</span>
                )}
              </div>
              <h3 className="display mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="annotation mt-8 text-faint">
          <span className="text-accent">*</span> Every breakdown in the library
          runs through this exact sequence.
        </p>
      </div>
    </section>
  );
}
