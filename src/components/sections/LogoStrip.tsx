import Container from "@/components/ui/Container";
import { logoStripData } from "@/data/landing-page";

export default function LogoStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-medium text-slate-500">
            {logoStripData.heading}
          </p>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {logoStripData.logos.map((logo) => (
              <div
                key={logo}
                className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold tracking-tight text-slate-700 shadow-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
