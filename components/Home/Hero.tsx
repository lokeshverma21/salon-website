"use client";

import { ContactDetails } from "@/lib/contact";
import { motion } from "framer-motion";
import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1732550216149-41c470c95e53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBmZW1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1677537946831-4590ff82359c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGZlbWFsZSUyMGltYWdlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1669829528850-959d7b08278b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBmZW1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1652953233042-35a88a3e3388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGZlbWFsZSUyMGltYWdlfGVufDB8fDB8fHww",
]


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={"https://images.unsplash.com/photo-1559599101-f09722fb4948?w=2600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNhbG9ufGVufDB8fDB8fHww"}
        alt="Beauty salon hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-none md:p-10 mt-10"
        >
          {/* Small label */}
          <p className="mb-3 text-sm tracking-wide text-white/80">
            Premium Beauty Studio
          </p>

          {/* Heading */}
          <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl">
            Our Luxury
            <br />
            Beauty Collections
          </h1>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Bridal makeup, flawless nails, and personalized beauty services
            crafted to elevate your most important moments.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-4">
            <a href={`tel:${ContactDetails.WHATSAPP_NUMBER}`} className="rounded-full bg-[#6F512B] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#462B18]">
              Book Appointment
            </a>

            <a href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(ContactDetails.WHATSAPP_MSG)}`} target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/20">
              →
            </a>
          </div>

          {/* Social proof / stat */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 overflow-hidden rounded-full border border-white/60"
                >
                  <Image
                    src={src}
                    alt={`Happy client ${i + 1}`}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80">
              <span className="font-medium text-white">230+</span> happy brides
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
