import { FloralCorner } from "./floral-svg";
import { weddingData } from "@/lib/data";

export default function OpeningCover() {
  const { bride, groom, fullBride, fullGroom, parentsBride, parentsGroom } =
    weddingData.couple;
  const { full, time } = weddingData.date;

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-cream px-6 py-20">
      <FloralCorner
        corner="top-left"
        className="absolute left-4 top-4 w-24 h-24 sm:w-32 sm:h-32"
      />
      <FloralCorner
        corner="top-right"
        className="absolute right-4 top-4 w-24 h-24 sm:w-32 sm:h-32"
      />
      <FloralCorner
        corner="bottom-left"
        className="absolute bottom-4 left-4 w-24 h-24 sm:w-32 sm:h-32"
      />
      <FloralCorner
        corner="bottom-right"
        className="absolute bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32"
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/40 to-transparent" />

      <div className="relative z-10 text-center">
        <p className="mb-4 font-body text-sm tracking-[0.3em] text-rose-pink-dark uppercase sm:text-base">
          The Wedding of
        </p>

        <h1 className="font-heading text-5xl font-semibold tracking-wide text-rose-pink-dark sm:text-7xl md:text-8xl">
          {bride}
          <span className="mx-4 text-soft-green">&</span>
          {groom}
        </h1>

        <div className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-rose-pink to-transparent" />

        <p className="font-body text-sm text-stone-500 sm:text-base">
          {fullBride} & {fullGroom}
        </p>

        <div className="mt-12">
          <p className="mb-2 font-heading text-xl text-rose-pink sm:text-2xl">
            {full}
          </p>
          <p className="font-body text-sm text-stone-400">{time}</p>
        </div>

        <div className="mx-auto mt-16 max-w-md border-t border-rose-pink/20 pt-6">
          <p className="font-body text-xs text-stone-400 leading-relaxed">
            Putra & Putri dari
          </p>
          <p className="mt-1 font-heading text-sm text-stone-500">
            {parentsGroom}
          </p>
          <p className="my-2 font-body text-xs text-rose-pink/40">&</p>
          <p className="font-heading text-sm text-stone-500">
            {parentsBride}
          </p>
        </div>
      </div>
    </section>
  );
}
