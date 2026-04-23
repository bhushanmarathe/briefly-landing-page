import Container from "@/components/ui/Container";
import { problemSectionData } from "@/data/landing-page";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="problem">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              {problemSectionData.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {problemSectionData.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {problemSectionData.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {problemSectionData.painPoints.map((item) => (
                <article
                  key={item.title}
                  className="card-hover rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                    <AlertCircle className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/60 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              {problemSectionData.solutionCard.label}
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {problemSectionData.solutionCard.title}
            </h3>

            <div className="mt-8 space-y-4">
              {problemSectionData.solutionCard.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="mt-1 text-teal-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
