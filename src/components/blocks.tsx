import Image from "next/image";
import type { Block } from "@/lib/breakdowns/types";

/**
 * Renders the typed content blocks that make up each breakdown section.
 * Adding a new block type = extend the union in types.ts + add a case here.
 */
export function Blocks({
  blocks,
  figureStart = 0,
}: {
  blocks: Block[];
  /** Cumulative figure count before this section, for continuous FIG numbering. */
  figureStart?: number;
}) {
  let figureIndex = figureStart;
  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        const fig = block.type === "figure" ? ++figureIndex : 0;
        return <BlockRenderer key={i} block={block} figureNumber={fig} />;
      })}
    </div>
  );
}

/** Count figures in a block list — used by the template to keep numbering continuous. */
export function countFigures(blocks: Block[]): number {
  return blocks.filter((b) => b.type === "figure").length;
}

function BlockRenderer({
  block,
  figureNumber,
}: {
  block: Block;
  figureNumber: number;
}) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[17px] leading-[1.8] text-ink/90">{block.text}</p>;

    case "highlight":
      return (
        <p className="display border-l-2 border-accent pl-5 text-xl leading-relaxed text-ink md:text-[1.35rem]">
          <span className="marker">{block.text}</span>
        </p>
      );

    case "quote":
      return (
        <figure className="my-2">
          <blockquote className="display text-2xl leading-snug text-ink md:text-[1.6rem]">
            <span aria-hidden="true" className="text-accent">“</span>
            {block.text}
            <span aria-hidden="true" className="text-accent">”</span>
          </blockquote>
          {block.attribution && (
            <figcaption className="annotation mt-3 text-faint">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
      );

    case "stats":
      return (
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {block.items.map((item) => (
            <div key={item.label} className="bg-card p-5">
              <dd className="display text-3xl font-semibold text-accent">{item.value}</dd>
              <dt className="mt-2 text-sm font-medium text-ink">{item.label}</dt>
              {item.note && <p className="mt-1.5 text-xs leading-relaxed text-soft">{item.note}</p>}
            </div>
          ))}
        </dl>
      );

    case "callout": {
      const tone = block.tone ?? "note";
      const border =
        tone === "insight" ? "border-accent" : tone === "caution" ? "border-linedark" : "border-ink";
      const label =
        block.title ?? (tone === "insight" ? "Insight" : tone === "caution" ? "Caution" : "Note");
      return (
        <aside className={`border ${border} bg-card p-5 md:p-6`}>
          <p className={`annotation ${tone === "insight" ? "text-accent" : "text-soft"}`}>
            {tone === "insight" ? "◆" : "▸"} {label}
          </p>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink/90">{block.text}</p>
        </aside>
      );
    }

    case "figure": {
      const n = String(figureNumber).padStart(2, "0");
      return (
        <figure className="border border-line bg-card">
          {block.src ? (
            <div className="relative aspect-[16/9] w-full">
              <Image src={block.src} alt={block.caption} fill className="object-cover" />
            </div>
          ) : (
            <div className="graph-paper relative flex aspect-[16/9] items-center justify-center bg-wash">
              <div className="border border-dashed border-linedark bg-paper px-5 py-4 text-center">
                <p className="annotation text-accent">[ {block.kind} evidence ]</p>
                <p className="annotation mt-1.5 text-faint">asset pending — placeholder frame</p>
              </div>
              <span className="annotation absolute left-3 top-3 text-faint">FIG. {n}</span>
              <span aria-hidden="true" className="absolute right-3 top-3 h-2 w-2 border-r border-t border-accent" />
              <span aria-hidden="true" className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-accent" />
            </div>
          )}
          <figcaption className="flex gap-3 border-t border-line px-4 py-3">
            <span className="annotation shrink-0 text-accent">FIG. {n}</span>
            <span className="text-[13px] leading-relaxed text-soft">{block.caption}</span>
          </figcaption>
        </figure>
      );
    }

    case "framework":
      return (
        <div className="border border-line bg-card">
          {block.title && (
            <p className="annotation border-b border-line px-5 py-3 text-soft">
              ▸ {block.title}
            </p>
          )}
          <ol className="divide-y divide-line">
            {block.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 px-5 py-4">
                <span className="display mt-0.5 text-lg font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "comparison":
      return (
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {[block.left, block.right].map((side, idx) => (
            <div key={side.title} className="bg-card p-5">
              <p className={`annotation ${idx === 1 ? "text-accent" : "text-soft"}`}>
                {idx === 0 ? "A —" : "B —"} {side.title}
              </p>
              <ul className="mt-3 space-y-2">
                {side.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                    <span aria-hidden="true" className={idx === 1 ? "text-accent" : "text-faint"}>
                      {idx === 1 ? "+" : "–"}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto border border-line bg-card">
          <table className="w-full text-left text-sm">
            {block.caption && (
              <caption className="annotation border-b border-line px-4 py-3 text-left text-soft">
                ▸ {block.caption}
              </caption>
            )}
            <thead>
              <tr className="border-b border-ink">
                {block.headers.map((h) => (
                  <th key={h} scope="col" className="annotation px-4 py-3 font-medium text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 align-top leading-relaxed ${
                        j === row.length - 1 ? "font-medium text-accent" : "text-ink/85"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
