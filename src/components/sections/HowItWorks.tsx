import Container from "@/components/ui/Container";
import { howItWorksData } from "@/data/landing-page";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24" id="how-it-works">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              {howItWorksData.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {howItWorksData.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {howItWorksData.description}
            </p>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Meeting flow
              </p>

              <div className="mt-5 space-y-4">
                {howItWorksData.timeline.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-semibold text-white">
                      {index + 1}
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-medium text-slate-700">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {howItWorksData.steps.map((step) => (
              <article
                key={step.number}
                className="card-hover rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold tracking-wide text-white">
                    {step.number}
                  </div>

                  <div className="sm:max-w-[85%]">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
