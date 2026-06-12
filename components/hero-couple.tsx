"use client";

import { useState } from "react";
import Image from "next/image";
import { FlowerIcon, FloralCorner } from "./floral-svg";
import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";

export default function HeroCouple() {
  const { fullBride, fullGroom, photoCouple } = weddingData.couple;
  const [imgError, setImgError] = useState(false);

  return (
    <section>
      {/* Photo hero area */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {!imgError && (
          <Image
            src={photoCouple}
            alt=""
            fill
            className="object-cover"
            unoptimized
            onError={() => setImgError(true)}
          />
        )}

        <div
          className={`absolute inset-0 ${
            imgError
              ? "bg-gradient-to-br from-rose-pink via-cream to-soft-green"
              : "bg-gradient-to-t from-rose-pink-dark/70 via-rose-pink/30 to-transparent"
          }`}
        />

        <FloralCorner
          corner="top-left"
          className="absolute left-4 top-4 w-20 h-20 sm:w-28 sm:h-28 z-10"
        />
        <FloralCorner
          corner="top-right"
          className="absolute right-4 top-4 w-20 h-20 sm:w-28 sm:h-28 z-10"
        />
        <FloralCorner
          corner="bottom-left"
          className="absolute bottom-4 left-4 w-20 h-20 sm:w-28 sm:h-28 z-10"
        />
        <FloralCorner
          corner="bottom-right"
          className="absolute bottom-4 right-4 w-20 h-20 sm:w-28 sm:h-28 z-10"
        />

        {/* Names over photo */}
        <div className="relative z-10 mx-6 text-center">
          <FlowerIcon className="mx-auto mb-6 h-10 w-10" color="#FFF8F0" />

          <h2 className="font-heading text-4xl font-semibold text-cream sm:text-6xl md:text-7xl">
            {fullBride}
          </h2>

          <div className="mx-auto my-4 flex w-24 items-center gap-3">
            <div className="h-px flex-1 bg-cream/40" />
            <span className="font-heading text-3xl text-soft-green">&</span>
            <div className="h-px flex-1 bg-cream/40" />
          </div>

          <h2 className="font-heading text-4xl font-semibold text-cream sm:text-6xl md:text-7xl">
            {fullGroom}
          </h2>
        </div>
      </div>

      {/* Details below photo */}
      <div className="bg-cream px-6 py-16 sm:py-24">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="mx-auto max-w-xs font-body text-sm text-stone-400 leading-relaxed">
            Putri dari Bapak H. Suharto & Ibu Hj. Siti Fatimah
          </p>

          <div className="mx-auto my-6 flex w-20 items-center gap-3">
            <div className="h-px flex-1 bg-rose-pink/30" />
            <span className="font-body text-xs text-rose-pink/40">&</span>
            <div className="h-px flex-1 bg-rose-pink/30" />
          </div>

          <p className="mx-auto max-w-xs font-body text-sm text-stone-400 leading-relaxed">
            Putra dari Bapak Drs. H. Maulana & Ibu Hj. Dewi Sartika
          </p>

          <div className="mx-auto mt-12 max-w-lg border-t border-rose-pink/20 pt-8">
            <p className="font-heading text-xl italic text-stone-500 sm:text-2xl">
              &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
              menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya
              kamu cenderung dan merasa tenteram kepadanya.&rdquo;
            </p>
            <p className="mt-4 font-body text-xs text-stone-400">
              QS. Ar-Rum: 21
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
