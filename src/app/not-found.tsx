import Link from "next/link";

export default function NotFound() {
  return (
    <div className="graph-paper border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-28 text-center md:px-8">
        <p className="annotation text-accent">404 — not in the archive</p>
        <h1 className="display mt-4 text-4xl font-semibold md:text-6xl">
          This page didn&apos;t work.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-soft">
          And unlike everything else around here, I can tell you exactly why:
          it doesn&apos;t exist. The library, however, does.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/breakdowns" className="annotation bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-accent">
            Browse the library →
          </Link>
          <Link href="/" className="annotation border border-ink px-6 py-3.5 transition-colors hover:border-accent hover:text-accent">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
