import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <div className="grid h-5 w-5 grid-cols-2 gap-1">
                  <span className="rounded-sm bg-teal-400" />
                  <span className="rounded-sm bg-white/90" />
                  <span className="rounded-sm bg-white/90" />
                  <span className="rounded-sm bg-teal-400" />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Briefly</p>
                <p className="text-xs text-slate-500">
                  AI meeting assistant for modern teams
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Turn meetings into summaries, decisions, and next steps without
              slowing your team down.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            © 2026 Briefly. Designed as a product landing page concept.
          </p>
        </div>
      </Container>
    </footer>
  );
}
