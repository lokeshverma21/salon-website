"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustPoints = [
  {
    title: "Bridal-first expertise",
    description:
      "We specialize in Indian bridal and event makeup — not generic salon services.",
  },
  {
    title: "Skin-tone & lighting precision",
    description:
      "Makeup designed to look flawless in natural light, studio lighting, and photography.",
  },
  {
    title: "Hygiene & premium products",
    description:
      "Strict hygiene standards and high-quality products suitable for sensitive skin.",
  },
  {
    title: "Calm, professional experience",
    description:
      "We work with timelines, ceremonies, and families — without chaos on your big day.",
  },
];

export default function WhyBridesTrustUs() {
  return (
    <section className="bg-[#FDFAF5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            {/* <div> */}
                <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-xl"
                >
                <p className="mb-4 text-xs font-medium tracking-widest text-[#6F512B]">
                    WHY BRIDES TRUST US
                </p>

                <h2 className="text-4xl font-semibold leading-tight text-[#462B18] md:text-5xl">
                    Trusted on the
                    <br />
                    most important day
                </h2>

                <p className="mt-5 text-base leading-relaxed text-[#6F512B]/90">
                    When it comes to weddings, there’s no room for experiments.
                    Brides choose us for consistency, calm execution, and results
                    that hold up through every ritual and every photo.
                </p>
                </motion.div>
            {/* </div> */}

            <div>
                <Image
                    width={400}
                    height={400}
                    src={"https://images.unsplash.com/photo-1717160675489-7779f2c91999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww"}
                    alt=""
                    className="rounded-md"
                />
            </div>
        </div>

        {/* Trust grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-[#EBDBC2] bg-white p-6"
            >
              <h3 className="text-lg font-medium text-[#462B18]">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6F512B]/90">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-wrap items-center gap-6 rounded-3xl bg-[#F8F0EB] px-8 py-6"
        >
          <p className="text-sm text-[#6F512B]">
            <span className="font-semibold text-[#462B18]">500+</span> bridal &
            event clients
          </p>

          <span className="hidden h-4 w-px bg-[#EBDBC2] sm:block" />

          <p className="text-sm text-[#6F512B]">
            <span className="font-semibold text-[#462B18]">8+ years</span> of
            professional experience
          </p>

          <span className="hidden h-4 w-px bg-[#EBDBC2] sm:block" />

          <p className="text-sm text-[#6F512B]">
            <span className="font-semibold text-[#462B18]">Top-rated</span> bridal
            studio locally
          </p>
        </motion.div>
      </div>
    </section>
  );
}
