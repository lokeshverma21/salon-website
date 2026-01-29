'use client'

import { ContactDetails } from '@/lib/contact'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#462B18]">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#6F512B]/40 via-transparent to-black/40" />
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-175 h-175 rounded-full bg-[#6F512B]/30 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 text-center"
      >
        {/* Label */}
        <p className="mb-6 text-xs tracking-[0.3em] uppercase text-[#F8F0EB]/70">
          Ready When You Are
        </p>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F8F0EB] leading-tight">
          Your Look Matters.
          <br />
          <span className="italic">Trust It to Experts.</span>
        </h2>

        {/* Supporting copy */}
        <p className="mt-6 max-w-2xl mx-auto text-[#F8F0EB]/80 text-base md:text-lg leading-relaxed">
          Bridal, party, and luxury beauty services crafted with precision,
          experience, and an uncompromising eye for detail.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <a
            href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(
              ContactDetails.WHATSAPP_MSG
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#F8F0EB] px-9 py-4 text-sm font-medium text-[#462B18] shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            Book on WhatsApp
            <span className="absolute inset-0 rounded-full ring-1 ring-black/5 group-hover:ring-black/10 transition" />
          </a>

          {/* Secondary CTA */}
          <a
            href={`tel:${ContactDetails.WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#F8F0EB]/40 px-8 py-4 text-sm font-medium text-[#F8F0EB] transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Call Studio
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-xs text-[#F8F0EB]/60 tracking-wide">
          Limited daily bookings • Advance appointments recommended
        </p>
      </motion.div>
    </section>
  )
}
