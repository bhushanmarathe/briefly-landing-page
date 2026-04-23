import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroData } from "@/data/landing-page";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-14 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-20" />

      <Container>
        <div className="grid gap-14 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              {heroData.badge}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
              {heroData.heading}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {heroData.subheading}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#cta">{heroData.primaryCta}</Button>

              <Button href="#how-it-works" variant="secondary">
                {heroData.secondaryCta}
              </Button>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              {heroData.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-200/70 sm:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-300">
                      Weekly product sync
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-teal-300">
                      AI summary generated
                    </p>
                  </div>

                  <div className="rounded-full bg-teal-400/15 px-3 py-1 text-xs font-semibold text-teal-300">
                    Ready to share
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Summary
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Team aligned on onboarding improvements, support handoff
                      changes, and launch timing for the new billing flow.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Decisions
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                      <li>• Release billing update next Tuesday</li>
                      <li>• Add CS follow-up template for trial users</li>
                      <li>• Review onboarding metrics after launch</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Action items
                    </p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Update onboarding checklist
                          </p>
                          <p className="text-xs text-slate-400">
                            Owner: Maya • Due tomorrow
                          </p>
                        </div>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                          Assigned
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Send recap to revenue team
                          </p>
                          <p className="text-xs text-slate-400">
                            Owner: Daniel • Due today
                          </p>
                        </div>
                        <span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold text-sky-300">
                          Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {heroData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/80 sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Shared automatically
              </p>
              <p className="mt-2 text-sm font-medium text-slate-900">
                Recap sent to Slack + Notion
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
