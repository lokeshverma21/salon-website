'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { ContactDetails } from '@/lib/contact';

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Staggered animation variants for nav items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      } as const
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-[#FAF4EE]/70 backdrop-blur-2xl border-b border-[#EBDBC2]/50 py-3 shadow-sm"
            : "bg-secondary/90 py-4" // Taller/Transparent when at top
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-50"
            >
              <Link href={"/"} className="group">
                <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#462B18] transition-colors duration-300">
                  Sirsa Salon<span className="text-[#6F512B] group-hover:text-[#462B18] transition-colors">.</span>
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
               variants={containerVariants}
               initial="hidden"
               animate="show"
               className="hidden lg:flex items-center gap-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.title} variants={itemVariants}>
                  <Link 
                    href={link.href}
                    className="relative text-[#6F512B] text-sm uppercase tracking-widest font-medium hover:text-[#462B18] transition-colors duration-300 py-2 group"
                  >
                    {link.title}
                    {/* Artistic Line Hover Effect */}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#462B18] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left" />
                  </Link>
                </motion.div>
              ))}

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 pl-4 border-l border-[#EBDBC2]">
                 {/* WhatsApp Icon Button */}
                 <a
                    href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(ContactDetails.WHATSAPP_MSG)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBDBC2]/30 text-[#462B18] hover:bg-[#25D366] hover:text-white transition-all duration-300 ease-out hover:scale-110 shadow-sm"
                    aria-label="WhatsApp Us"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                  {/* Primary CTA */}
                  <a
                    href={`tel:${ContactDetails.WHATSAPP_NUMBER}`}
                    className="relative px-6 py-2.5 overflow-hidden rounded-full bg-[#462B18] text-[#FAF4EE] shadow-lg group hover:ring-2 hover:ring-[#462B18] hover:ring-offset-2 hover:ring-offset-[#FAF4EE] transition-all duration-300"
                  >
                     <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5e3a22] to-[#462B18] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     <span className="relative flex items-center gap-2 font-medium text-xs tracking-wider uppercase">
                        <Phone className="w-3.5 h-3.5" /> Book Now
                     </span>
                  </a>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#462B18] p-2 relative z-50 rounded-full hover:bg-[#EBDBC2]/20 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#FAF4EE]/95 backdrop-blur-3xl lg:hidden flex items-center justify-center"
          >
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBDBC2]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6F512B]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <motion.div
              className="flex flex-col items-center gap-8 relative z-10 w-full px-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.title}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-heading font-medium text-[#462B18] hover:text-[#6F512B] transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              <div className="w-16 h-px bg-[#EBDBC2] my-2" />

              <motion.div 
                 variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                 className="flex flex-col gap-4 w-full max-w-xs"
              >
                  <a
                    href={`tel:${ContactDetails.WHATSAPP_NUMBER}`}
                    className="w-full py-4 bg-[#462B18] text-[#FAF4EE] rounded-xl flex items-center justify-center gap-3 font-medium shadow-xl active:scale-95 transition-transform"
                  >
                     <Phone size={20} /> Call for Booking
                  </a>
                  <a
                      href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(ContactDetails.WHATSAPP_MSG)}`}
                      className="w-full py-4 bg-white border border-[#EBDBC2] text-[#462B18] rounded-xl flex items-center justify-center gap-3 font-medium shadow-sm active:scale-95 transition-transform"
                   >
                      <MessageCircle size={20} className="text-[#25D366]" /> WhatsApp
                   </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer removed because Navbar overlays content now for better aesthetics, but added padding to body or first section usually handles this. 
          Actually, keeping a small spacer or handling it in layout is good. 
          The user wanted 'more beautiful', often meaning the hero image goes BEHIND the nav.
          The previous code had a spacer. I will remove the spacer so the hero bleeds to the top, which is a common 'beautiful' pattern 
          and handles the 'transparent at top' logic correctly. */}
    </>
  );
}
