import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-wash/60">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="display text-xl font-semibold">Field Notes</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-soft">
              A working library of YouTube strategy breakdowns — channels,
              ideas, packaging, and audience behavior, taken apart to
              understand why they worked.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="annotation text-faint">Index</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="link-editorial" href="/">Home</Link></li>
              <li><Link className="link-editorial" href="/breakdowns">Breakdowns</Link></li>
              <li><Link className="link-editorial" href="/about">About</Link></li>
              <li><Link className="link-editorial" href="/work-with-me">Work With Me</Link></li>
            </ul>
          </nav>

          <div>
            <p className="annotation text-faint">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="link-editorial" href="mailto:dekisola@gmail.com">
                  Email
                </a>
              </li>
              <li>
                <a
                  className="link-editorial"
                  href="https://t.me/Dvsol2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram · @Dvsol2
                </a>
              </li>
              <li>
                <a
                  className="link-editorial"
                  href="https://x.com/Dv_sol1"
                  target="_blank"
                  rel="noreferrer"
                >
                  X / Twitter · @Dv_sol1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="annotation text-faint">
            © {new Date().getFullYear()} Field Notes
          </p>
          <p className="annotation text-faint">Observe → Understand → Apply</p>
        </div>
      </div>
    </footer>
  );
}
