"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ContactDetails } from "@/lib/contact"; // Assuming this exists based on Home page usage, otherwise I'll need to check or mock it.

// Fallback if ContactDetails isn't available, but it was in Hero.tsx so it should be fine.
// I will just use hardcoded values if the import fails during my thought process, 
// but since I saw it in Hero.tsx (Step 11), I'll try to use it. 
// Actually, to be safe and self-contained, I'll define local constants or just use the import.
// Let's stick to the import since it's cleaner project structure.

const stats = [
  { label: "Happy Brides", value: "500+" },
  { label: "Years Experience", value: "8+" },
  { label: "Team Members", value: "12" },
];

const values = [
  {
    title: "Cleanliness & Safety",
    description: "We adhere to hospital-grade hygiene standards because your safety is beautiful.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    title: "Expert Artistry",
    description: "Our stylists are constantly trained in the latest global trends and techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    ),
  },
  {
    title: "Relaxing Atmosphere",
    description: "A sanctuary designed to help you unwind, recharge, and leave feeling refreshed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FDFAF5] text-[#462B18]">
      {/* Hero Section */}
      <section className="relative flex mt-18 h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop"
          alt="Salon Interior"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium tracking-widest text-white/90 uppercase"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl text-white md:text-6xl lg:text-7xl"
          >
            Where Artistry <br className="hidden md:block" /> Meets Soul
          </motion.h1>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full overflow-hidden rounded-3xl"
          >
             <Image
              src="https://images.unsplash.com/photo-1675034741473-afed58a142e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3R5bGlzdCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Stylist working"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl leading-tight md:text-5xl mb-6 text-[#462B18]">
              More than just a <br/> salon visit.
            </h2>
            <p className="text-lg leading-relaxed text-[#6F512B]/90 mb-6">
              Founded in 2018, Sirsa Salon began with a simple mission: to create a space where beauty isn't just about how you look, but how you feel. We noticed a gap in the local market for a truly premium, hygiene-focused, and relaxation-oriented beauty destination.
            </p>
            <p className="text-lg leading-relaxed text-[#6F512B]/90">
              Today, we are proud to be the trusted choice for hundreds of brides and style-conscious individuals who value expertise and a calm, professional environment.
            </p>
            
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-[#EBDBC2] pt-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-[#462B18]">{stat.value}</p>
                  <p className="text-sm text-[#6F512B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values/Philosophy Section */}
      <section className="bg-[#F8F0EB] py-20 px-6 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-[#462B18] mb-4">Our Core Philosophy</h2>
            <p className="text-[#6F512B]/80">The pillars that define every service we provide.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FDFAF5] p-8 rounded-2xl border border-[#EBDBC2] hover:shadow-sm transition-shadow"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EBDBC2]/30 text-[#6F512B]">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl text-[#462B18] mb-3">{item.title}</h3>
                <p className="text-[#6F512B]/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Vibe Section (Optional Visual) */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
             <div className="grid gap-10 md:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-3xl md:text-5xl text-[#462B18] mb-6">Meet the Experts</h2>
                    <p className="text-lg text-[#6F512B]/90 mb-8 max-w-md">
                        Our team is a collective of passionate artists, each with specialized training in hair, skin, and makeup. We don’t just follow trends; we tailor them to suit your unique personality.
                    </p>
                    <Link href="/contact" className="inline-block rounded-full bg-[#6F512B] px-8 py-4 text-white hover:bg-[#462B18] transition-colors duration-300">
                        Join Our Team
                    </Link>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-64 rounded-2xl overflow-hidden mt-8"
                     >
                        <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="Team member" fill className="object-cover" />
                     </motion.div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative h-64 rounded-2xl overflow-hidden"
                     >
                         <Image src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1978&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
                     </motion.div>
                </div>
             </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 text-center">
         <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" alt="Background" fill className="object-cover opacity-10" />
         </div>
         <div className="relative z-10 container mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-6xl text-[#462B18] mb-6">Ready to Transform?</h2>
            <p className="text-lg text-[#6F512B] mb-10 max-w-xl mx-auto">Book an appointment today and experience the difference of a true premium beauty studio.</p>
            <Link href="/" className="inline-block rounded-full bg-[#462B18] text-[#FDFAF5] px-10 py-4 font-medium hover:bg-[#6F512B] transition-colors">
                Book Appointment
            </Link>
         </div>
      </section>
    </main>
  );
}
