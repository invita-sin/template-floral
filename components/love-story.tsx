import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FloralDivider } from "./floral-svg";

export default function LoveStory() {
  const { loveStory } = weddingData;

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          Our Story
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Love Story
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-rose-pink/40 via-soft-green/40 to-rose-pink/40 sm:left-1/2" />

        {loveStory.map((item, i) => (
          <FadeIn
            key={item.year}
            delay={i * 150}
            className={`relative mb-16 last:mb-0 ${
              i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
            } sm:w-1/2 ${i % 2 === 0 ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"}`}
          >
            <div
              className={`relative rounded-2xl border border-rose-pink/20 bg-white p-6 shadow-sm ${
                i % 2 === 0 ? "sm:mr-0" : "sm:ml-0"
              }`}
            >
              <div
                className={`absolute top-8 h-4 w-4 rounded-full border-2 border-white bg-rose-pink shadow ${
                  i % 2 === 0
                    ? "-right-2 sm:-right-[34px]"
                    : "-right-2 sm:-left-[34px] sm:right-auto"
                }`}
              />
              <span className="mb-2 inline-block font-heading text-sm font-semibold text-soft-green-dark">
                {item.year}
              </span>
              <h3 className="mb-2 font-heading text-xl font-semibold text-rose-pink-dark">
                {item.title}
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
