import Container from "@/components/ui/Container";
import { featureSectionData } from "@/data/landing-page";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function FeatureGrid() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" id="features">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            {featureSectionData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {featureSectionData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {featureSectionData.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/60 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              {featureSectionData.primaryFeature.label}
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {featureSectionData.primaryFeature.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {featureSectionData.primaryFeature.description}
            </p>

            <div className="mt-8 grid gap-4">
              {featureSectionData.primaryFeature.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="mt-1 text-teal-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-7 text-slate-200">{bullet}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {featureSectionData.secondaryFeatures.map((feature) => (
              <article
                key={feature.title}
                className="card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
