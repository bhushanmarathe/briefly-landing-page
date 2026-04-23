import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <div className="grid h-5 w-5 grid-cols-2 gap-1">
                <span className="rounded-sm bg-teal-400" />
                <span className="rounded-sm bg-white/90" />
                <span className="rounded-sm bg-white/90" />
                <span className="rounded-sm bg-teal-400" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                Briefly
              </p>
              <p className="text-xs text-slate-500">AI meeting assistant</p>
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#faq"
              className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline-flex"
            >
              Contact sales
            </a>

            <Button href="#cta" className="px-4 py-2.5">
              Start free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
