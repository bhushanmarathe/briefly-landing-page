import Container from "@/components/ui/Container";
import { trustSectionData } from "@/data/landing-page";
import { Lock, ShieldCheck, Settings2, PlugZap } from "lucide-react";

const icons = [Lock, ShieldCheck, Settings2, PlugZap];

export default function TrustSection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24" id="security">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              {trustSectionData.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {trustSectionData.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {trustSectionData.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustSectionData.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {trustSectionData.trustPoints.map((point, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={point.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                Integrations
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {trustSectionData.integrations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-sm font-medium text-slate-200">
                  Teams use Briefly because it fits naturally into existing
                  workflows without adding another system people need to learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
