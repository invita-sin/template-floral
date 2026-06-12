import { FlowerIcon } from "./floral-svg";
import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";

export default function HeroCouple() {
  const { fullBride, fullGroom } = weddingData.couple;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-rose-pink/10 px-6 py-24 sm:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #EAA6B6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C8D9BA 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-4xl text-center">
        <FlowerIcon className="mx-auto mb-8 h-10 w-10" color="#EAA6B6" />

        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl md:text-6xl">
          {fullBride}
        </h2>
        <p className="mx-auto my-6 max-w-xs font-body text-sm text-stone-400 leading-relaxed">
          Putri dari Bapak H. Suharto & Ibu Hj. Siti Fatimah
        </p>

        <div className="mx-auto flex w-20 items-center gap-3">
          <div className="h-px flex-1 bg-rose-pink/30" />
          <span className="font-heading text-2xl text-soft-green">&</span>
          <div className="h-px flex-1 bg-rose-pink/30" />
        </div>

        <h2 className="mt-6 font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl md:text-6xl">
          {fullGroom}
        </h2>
        <p className="mx-auto mt-6 max-w-xs font-body text-sm text-stone-400 leading-relaxed">
          Putra dari Bapak Drs. H. Maulana & Ibu Hj. Dewi Sartika
        </p>

        <div className="mx-auto mt-12 max-w-lg border-t border-rose-pink/20 pt-8">
          <p className="font-heading text-xl italic text-stone-500 sm:text-2xl">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya.&rdquo;
          </p>
          <p className="mt-4 font-body text-xs text-stone-400">
            QS. Ar-Rum: 21
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
