import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { finalCtaData } from "@/data/landing-page";

export default function FinalCTA() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24" id="cta">
      <Container>
        <div className="rounded-[2.5rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl shadow-slate-300/30 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {finalCtaData.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {finalCtaData.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="#"
                className="min-w-[160px] bg-teal-500 text-white hover:bg-teal-400"
              >
                {finalCtaData.primaryCta}
              </Button>

              <Button
                href="#how-it-works"
                variant="secondary"
                className="min-w-[160px] border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
              >
                {finalCtaData.secondaryCta}
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-400">{finalCtaData.proof}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
