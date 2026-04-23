import Container from "@/components/ui/Container";
import { testimonialsData } from "@/data/landing-page";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" id="testimonials">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            {testimonialsData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {testimonialsData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {testimonialsData.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonialsData.items.map((item) => (
            <article
              key={item.name}
              className="card-hover rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-1 text-teal-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="text-base leading-8 text-slate-700">
                “{item.quote}”
              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">
                  {item.role} • {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
