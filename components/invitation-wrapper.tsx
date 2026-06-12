"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { weddingData } from "@/lib/data";
import { FloralCorner, FlowerIcon } from "./floral-svg";

export default function InvitationWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { bride, groom, fullBride, fullGroom, parentsBride, parentsGroom, photoCouple } =
    weddingData.couple;
  const { full, time } = weddingData.date;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
          isOpen
            ? "pointer-events-none opacity-0 scale-105"
            : "opacity-100 scale-100"
        }`}
      >
        {/* Background photo */}
        <div className="absolute inset-0">
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
                ? "bg-gradient-to-br from-rose-pink/20 via-cream to-soft-green/20"
                : "bg-gradient-to-t from-cream via-cream/60 to-cream/30"
            }`}
          />
        </div>

        {/* Floral corners */}
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

        {/* Content */}
        <div className="relative z-10 mx-6 max-w-lg text-center">
          <FlowerIcon className="mx-auto mb-6 h-10 w-10" color="#EAA6B6" />

          <p className="mb-3 font-body text-sm tracking-[0.3em] text-rose-pink-dark uppercase">
            The Wedding of
          </p>

          <h1 className="font-heading text-4xl font-semibold tracking-wide text-rose-pink-dark sm:text-6xl">
            {bride}
            <span className="mx-3 text-soft-green">&</span>
            {groom}
          </h1>

          <p className="mt-3 font-body text-sm text-stone-500">
            {fullBride} &amp; {fullGroom}
          </p>

          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-pink to-transparent" />

          <p className="font-heading text-lg text-rose-pink sm:text-xl">
            {full}
          </p>
          <p className="mt-1 font-body text-xs text-stone-400">{time}</p>

          <div className="mx-auto mt-8 max-w-xs border-t border-rose-pink/20 pt-5">
            <p className="font-body text-xs text-stone-400">
              Putra &amp; Putri dari
            </p>
            <p className="mt-1 font-heading text-sm text-stone-500">
              {parentsGroom}
            </p>
            <p className="my-1 font-body text-xs text-rose-pink/40">&amp;</p>
            <p className="font-heading text-sm text-stone-500">
              {parentsBride}
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="group relative mx-auto mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-pink to-rose-pink-dark px-10 py-4 font-body text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.97]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FlowerIcon className="h-4 w-4" color="#FFF8F0" />
              Buka Undangan
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-pink-dark to-rose-pink transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </div>
      </div>

      {/* Main content — rendered behind overlay, fades in when opened */}
      <div
        className={`transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
