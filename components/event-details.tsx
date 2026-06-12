import { weddingData } from "@/lib/data";
import FadeIn from "./fade-in";
import { FloralDivider } from "./floral-svg";

export default function EventDetails() {
  const { events } = weddingData;

  return (
    <section className="bg-gradient-to-b from-cream to-rose-pink/5 px-6 py-24 sm:py-32">
      <FadeIn className="mb-16 text-center">
        <p className="mb-2 font-body text-xs tracking-[0.3em] text-rose-pink-dark uppercase">
          Save The Date
        </p>
        <h2 className="font-heading text-4xl font-semibold text-rose-pink-dark sm:text-5xl">
          Event Details
        </h2>
        <FloralDivider className="mx-auto mt-6 h-8 w-48" />
      </FadeIn>

      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {events.map((event, i) => (
          <FadeIn key={event.name} delay={i * 150}>
            <div className="group relative overflow-hidden rounded-2xl border border-rose-pink/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-rose-pink/10 to-transparent" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-pink/10">
                  {event.icon === "ring" ? (
                    <svg
                      className="h-6 w-6 text-rose-pink"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-rose-pink"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.893 13.393l-3.387 3.387a12.039 12.039 0 01-8.887 3.393l-3.037.568a.75.75 0 01-.76-.76l.568-3.037a12.039 12.039 0 013.393-8.887l3.387-3.387a2.25 2.25 0 013.182 0l5.541 5.541a2.25 2.25 0 010 3.182z"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="font-heading text-2xl font-semibold text-rose-pink-dark">
                  {event.name}
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-soft-green-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    <span className="font-body text-sm text-stone-600">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-soft-green-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-body text-sm text-stone-600">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-soft-green-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-medium text-stone-700">
                        {event.location}
                      </p>
                      <p className="font-body text-xs text-stone-400">
                        {event.address}
                      </p>
                    </div>
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
