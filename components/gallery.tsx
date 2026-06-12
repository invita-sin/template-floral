import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FloralDivider } from "./floral-svg";

export default function Gallery() {
  const { gallery } = weddingData;

  const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          Our Moments
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Gallery
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((photo, i) => (
          <FadeIn key={photo.alt} delay={i * 100}>
            <div
              className={`group cursor-pointer bg-white p-3 shadow-md transition-shadow hover:shadow-xl ${rotations[i % rotations.length]}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-soft-green/20">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-10 w-10 text-rose-pink/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l5.159 5.159M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <p className="mt-2 font-body text-xs text-stone-400">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
