"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarushi Mehta",
    event: "Bride • Delhi",
    quote:
      "I didn’t want heavy makeup — I wanted to look like myself, just elevated. They understood that instantly. Every look photographed beautifully.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
  },
  {
    name: "Ritika Sharma",
    event: "Bride • Jaipur",
    quote:
      "Calm, professional, and punctual. On a stressful wedding morning, that matters more than anything. I trusted them completely.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Neha Kapoor",
    event: "Reception Makeup",
    quote:
      "Makeup stayed perfect for hours without touch-ups. Everyone kept asking who did my look — that says enough.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8F0EB] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="mb-4 text-xs font-medium tracking-widest text-[#6F512B]">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#462B18] md:text-5xl">
            Brides who trusted us
            <br />
            — and were glad they did
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#6F512B]/90">
            Real experiences from brides and clients who cared about how they
            looked — and how they felt.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-[#EBDBC2] bg-white/70 p-8 backdrop-blur-md"
            >
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#462B18]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#6F512B]/80">{t.event}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-6 text-sm leading-relaxed text-[#462B18]/90">
                “{t.quote}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
