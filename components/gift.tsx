import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FlowerIcon, FloralDivider } from "./floral-svg";

export default function Gift() {
  const { gift } = weddingData;

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          Wedding Gift
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Gift
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <FadeIn className="mx-auto max-w-md">
        <div className="relative overflow-hidden rounded-2xl border border-rose-pink/20 bg-white p-8 text-center shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-rose-pink via-soft-green to-rose-pink" />
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-rose-pink via-soft-green to-rose-pink" />

          <FlowerIcon className="mx-auto h-8 w-8" color="#EAA6B6" />

          <h3 className="mt-4 font-heading text-xl font-semibold text-rose-pink-dark">
            Kirim Hadiah
          </h3>
          <p className="mt-2 font-body text-sm text-stone-400">
            Doa restu adalah hadiah terindah. Jika ingin memberikan hadiah
            lainnya, dapat melalui:
          </p>

          <div className="mx-auto mt-6 max-w-xs rounded-xl border border-dashed border-soft-green/40 bg-soft-green/5 p-5">
            <p className="font-body text-xs tracking-wider text-soft-green-dark uppercase">
              {gift.bank}
            </p>
            <p className="mt-3 font-heading text-2xl font-semibold tracking-wider text-rose-pink-dark">
              {gift.accountNumber}
            </p>
            <div className="mx-auto my-3 h-px w-16 bg-rose-pink/20" />
            <p className="font-body text-sm text-stone-600">
              {gift.accountName}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <svg
              className="h-4 w-4 text-soft-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a3.75 3.75 0 01-1.935 3.047 3.75 3.75 0 01-2.796.222 3.75 3.75 0 01-2.047-1.997 3.75 3.75 0 01-.222-2.796 3.75 3.75 0 013.048-1.935 3.75 3.75 0 013.806 1.279.75.75 0 101.12-.998 5.25 5.25 0 00-5.246-1.456 5.25 5.25 0 00-3.16 3.715 5.25 5.25 0 003.01 5.496 5.25 5.25 0 005.525-1.297.75.75 0 00-1.12-.998z"
              />
            </svg>
            <span className="font-body text-xs text-stone-400">
  Via transfer / e-wallet
</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
