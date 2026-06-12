"use client";

import { useState } from "react";
import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FloralDivider } from "./floral-svg";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    presence: "hadir",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${form.name}. Saya ${form.presence === "hadir" ? "akan hadir" : "tidak bisa hadir"} di acara pernikahan. ${form.message ? `Pesan: ${form.message}` : ""}`;
    window.open(
      `https://wa.me/${weddingData.rsvp.phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-cream to-rose-pink/10 px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          RSVP
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Konfirmasi Kehadiran
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <FadeIn className="mx-auto max-w-lg">
        {submitted ? (
          <div className="rounded-2xl border border-soft-green/20 bg-white p-10 text-center shadow-sm">
            <svg
              className="mx-auto h-12 w-12 text-soft-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 font-heading text-xl font-semibold text-rose-pink-dark">
              Terima Kasih!
            </h3>
            <p className="mt-2 font-body text-sm text-stone-500">
              Konfirmasi Anda telah terkirim. Kami tunggu kehadirannya!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-rose-pink/20 bg-white p-8 shadow-sm"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block font-body text-sm font-medium text-stone-600"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-rose-pink/20 bg-cream/50 px-4 py-3 font-body text-sm text-stone-700 outline-none transition-colors focus:border-rose-pink focus:bg-white"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-body text-sm font-medium text-stone-600">
                Konfirmasi Kehadiran
              </label>
              <div className="flex gap-3">
                <label
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border-2 px-4 py-3 transition-colors ${
                    form.presence === "hadir"
                      ? "border-rose-pink bg-rose-pink/5 text-rose-pink-dark"
                      : "border-stone-200 bg-white text-stone-400 hover:border-rose-pink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="presence"
                    value="hadir"
                    checked={form.presence === "hadir"}
                    onChange={() => setForm({ ...form, presence: "hadir" })}
                    className="sr-only"
                  />
                  <span className="font-body text-sm font-medium">Hadir</span>
                </label>
                <label
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border-2 px-4 py-3 transition-colors ${
                    form.presence === "tidak"
                      ? "border-rose-pink bg-rose-pink/5 text-rose-pink-dark"
                      : "border-stone-200 bg-white text-stone-400 hover:border-rose-pink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="presence"
                    value="tidak"
                    checked={form.presence === "tidak"}
                    onChange={() => setForm({ ...form, presence: "tidak" })}
                    className="sr-only"
                  />
                  <span className="font-body text-sm font-medium">
                    Tidak Hadir
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block font-body text-sm font-medium text-stone-600"
              >
                Pesan (opsional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-rose-pink/20 bg-cream/50 px-4 py-3 font-body text-sm text-stone-700 outline-none transition-colors focus:border-rose-pink focus:bg-white"
                placeholder="Tulis pesan untuk pengantin..."
              />
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-rose-pink to-rose-pink-dark px-6 py-3.5 font-body text-sm font-medium text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <span className="relative z-10">Kirim via WhatsApp</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-pink-dark to-rose-pink transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
