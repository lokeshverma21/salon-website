'use client'

import { ContactDetails } from '@/lib/contact'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle, ArrowRight, Instagram } from 'lucide-react'

// --- Constants ---
const WHATSAPP_NUMBER = '91XXXXXXXXXX'
const PHONE_NUMBER = '+91XXXXXXXXXX'
const PHONE_DISPLAY = '+91 98765 43210' // Format for reading
const WHATSAPP_MSG = 'Hello! I would like to inquire about your bridal and beauty services.'

// --- Animation Variants ---
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ContactPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8F0EB] overflow-hidden selection:bg-[#462B18] selection:text-white">
      
      {/* BACKGROUND DECORATIONS (Subtle Gradients) */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-1125 bg-[#EBDBC2] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-[#E5D4C0] rounded-full blur-[120px] opacity-40 pointer-events-none" />

      {/* CONTENT CONTAINER */}
      <motion.div 
        variants={containerVar}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-6"
      >
        
        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div variants={itemVar} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#6F512B]/40"></span>
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#6F512B] uppercase">
              Book Your Appointment
            </span>
            <span className="h-[1px] w-12 bg-[#6F512B]/40"></span>
          </motion.div>

          <motion.h1 
            variants={itemVar}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-[#462B18] leading-[1.1] mb-8"
          >
            Let’s Create Your <br/>
            <span className="italic">Signature Look</span>
          </motion.h1>

          <motion.p 
            variants={itemVar}
            className="text-[#6F512B] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            From bridal radiance to nail artistry. Expertly crafted services 
            designed to make you feel as beautiful as you look.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div variants={itemVar} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${ContactDetails.WHATSAPP_NUMBER}`}
              className="group relative px-8 py-4 bg-[#462B18] text-[#F8F0EB] rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                <Phone className="w-4 h-4" /> Call for Booking
              </span>
              <div className="absolute inset-0 bg-[#5e3a22] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </a>

            <a
              href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(ContactDetails.WHATSAPP_MSG)}`}
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-4 bg-white border border-[#EBDBC2] text-[#462B18] rounded-full hover:bg-[#FDFAF5] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="font-medium tracking-wide">WhatsApp Us</span>
            </a>
          </motion.div>
        </div>

        {/* --- INFO & MAP GRID --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COL: CONTACT CARD */}
          <motion.div 
            variants={itemVar}
            className="lg:col-span-5 bg-[#FDFAF5]/80 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-[#EBDBC2] shadow-sm hover:shadow-md transition-shadow duration-500"
          >
            <h3 className="text-2xl font-serif text-[#462B18] mb-8">Studio Information</h3>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F3EBE3] flex items-center justify-center shrink-0 group-hover:bg-[#462B18] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#462B18] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#462B18] font-semibold mb-1">Visit Us</h4>
                  <p className="text-[#6F512B] text-sm leading-relaxed">
                    2nd Floor, Luxury Plaza,<br />
                    Opposite Grand Circle,<br />
                    Mumbai – 400050
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F3EBE3] flex items-center justify-center shrink-0 group-hover:bg-[#462B18] transition-colors duration-300">
                  <Clock className="w-5 h-5 text-[#462B18] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#462B18] font-semibold mb-1">Opening Hours</h4>
                  <p className="text-[#6F512B] text-sm">Mon – Sun: 10:00 AM – 8:00 PM</p>
                  <p className="text-[#6F512B]/60 text-xs mt-1">Walk-ins welcome</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F3EBE3] flex items-center justify-center shrink-0 group-hover:bg-[#462B18] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#462B18] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#462B18] font-semibold mb-1">Get in Touch</h4>
                  <p className="text-[#6F512B] text-sm mb-1">{PHONE_DISPLAY}</p>
                  <a href={`mailto:hello@yoursalon.com`} className="text-[#6F512B] text-sm underline hover:text-[#462B18]">
                    hello@yoursalon.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#EBDBC2] flex items-center justify-between">
              <span className="text-sm font-serif italic text-[#462B18]">Follow our work</span>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full hover:bg-[#F3EBE3] transition-colors text-[#462B18]">
                   <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COL: MAP */}
          <motion.div 
            variants={itemVar}
            className="lg:col-span-7 h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border border-[#EBDBC2] shadow-lg group"
          >
             {/* Map Overlay for Style */}
             <div className="absolute inset-0 bg-[#462B18]/5 z-10 pointer-events-none mix-blend-multiply" />
             
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              className="w-full h-full min-h-[400px] lg:min-h-full filter grayscale contrast-[0.9] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating 'Get Directions' Badge */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur text-[#462B18] px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}