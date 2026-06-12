import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FloralDivider } from "./floral-svg";

export default function Maps() {
  const { maps } = weddingData;

  return (
    <section className="bg-gradient-to-b from-rose-pink/5 to-cream px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          Location
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Maps
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <FadeIn className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border-4 border-rose-pink/20 shadow-lg">
          <div className="absolute inset-x-0 top-0 z-10 flex justify-center">
            <div className="-mt-3 flex h-8 items-center justify-center rounded-full bg-rose-pink/80 px-6 shadow-md backdrop-blur">
              <span className="font-body text-[10px] tracking-wider text-white uppercase">
                Gedung Floral Garden
              </span>
            </div>
          </div>

          <div className="absolute -bottom-1 -left-1 -right-1 -top-1 -m-1 rounded-[18px] border-2 border-soft-green/30 pointer-events-none z-20" />
          <div className="absolute -bottom-2 -left-2 -right-2 -top-2 -m-2 rounded-[20px] border border-rose-pink/20 pointer-events-none z-20" />

          <iframe
            src={maps.src}
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Acara"
            className="relative z-0"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="font-body text-sm text-stone-500">
            Gedung Floral Garden, Jl. Melati Indah No. 45, Jakarta Selatan
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
