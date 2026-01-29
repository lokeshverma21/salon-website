"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Bridal Makeup",
    description: "Long-wear, camera-ready bridal looks tailored to your ceremony and skin tone.",
  },
  {
    title: "Party / Event Makeup",
    description: "Polished, modern makeup for weddings, receptions, and special occasions.",
  },
  {
    title: "Nail Studio",
    description: "Clean, precise nail care with premium finishes and long-lasting results.",
  },
  {
    title: "Skin & Glow Treatments",
    description: "Targeted skin treatments designed to enhance natural glow before events.",
  },
];

export default function SignatureServices() {
  return (
    <section className="bg-[#F8F0EB] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="grid items-start gap-16 md:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg"
          >
            <p className="mb-4 text-xs font-medium tracking-widest text-[#6F512B]">
              SIGNATURE SERVICES
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#462B18] md:text-5xl">
              Crafted for brides,
              <br />
              trusted for every occasion
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#6F512B]/90">
              Focused beauty services delivered by professionals who understand
              Indian skin tones, bridal needs, and event-ready finishes.
            </p>

            <button
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#6F512B] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#462B18]"
              aria-label="Book appointment"
            >
              Book Appointment
            </button>
          </motion.div>

          {/* Right Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group rounded-3xl border border-[#EBDBC2] bg-[#FDFAF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-medium text-[#462B18]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#6F512B]/90">
                  {service.description}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-[#6F512B] transition group-hover:translate-x-1">
                  View details →
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
