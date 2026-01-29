"use client";

import { motion } from "framer-motion";

const packages = [
  {
    title: "Classic Bride",
    description:
      "For intimate weddings and traditional ceremonies with a refined, timeless look.",
    features: [
      "HD bridal makeup",
      "Hair styling & draping",
      "Lashes & base prep",
      "Single function coverage",
    ],
  },
  {
    title: "Signature Bride",
    description:
      "Our most booked plan for brides who want perfection across key functions.",
    features: [
      "HD / Airbrush makeup",
      "Hair, draping & jewelry setting",
      "Makeup for 2 functions",
      "Skin prep & touch-ups",
    ],
    highlight: true,
  },
  {
    title: "Luxury Wedding",
    description:
      "Designed for multi-day weddings where every look must feel flawless.",
    features: [
      "Airbrush bridal makeup",
      "Multiple functions coverage",
      "Hairstyle changes",
      "On-site assistance & touch-ups",
    ],
  },
];

export default function BridalPackagesSection() {
  return (
    <section className="bg-[#FDFAF5] py-20 md:py-28">
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
            BRIDAL PLANS
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#462B18] md:text-5xl">
            Choose the level
            <br />
            of care you want
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#6F512B]/90">
            Our bridal packages are built around real wedding schedules, real
            lighting, and real expectations — not shortcuts.
          </p>
        </motion.div>

        {/* Packages */}
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
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-3xl border p-8 transition ${
                pkg.highlight
                  ? "border-[#6F512B] bg-[#F8F0EB] shadow-lg"
                  : "border-[#EBDBC2] bg-white"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-[#6F512B] px-4 py-1 text-xs font-medium text-white">
                  Most Chosen
                </span>
              )}

              <h3 className="text-2xl font-semibold text-[#462B18]">
                {pkg.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6F512B]/90">
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[#462B18]/90">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6F512B]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
                  pkg.highlight
                    ? "bg-[#6F512B] text-white hover:bg-[#462B18]"
                    : "border border-[#6F512B] text-[#6F512B] hover:bg-[#6F512B] hover:text-white"
                }`}
              >
                Request consultation
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 max-w-2xl text-sm text-[#6F512B]/80"
        >
          Final pricing may vary based on location, functions, and custom
          requirements. A consultation helps us recommend the right plan.
        </motion.p>
      </div>
    </section>
  );
}
