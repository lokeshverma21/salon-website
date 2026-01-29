'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { ContactDetails } from '@/lib/contact';

const navLinks = [
  { title: "Home", href: "/" },
  // { title: "Hairdressing", href: "#hairdressing" },
  // { title: "Manicure-pedicure", href: "#manicure" },
  // { title: "Face", href: "#face" },
  { title: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAF4EE]/15 backdrop-blur-xl border-b border-[#e8d9d0]/60"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1>
                <Link href={"/"} className="text-3xl font-bold font-heading tracking-tight text-[#4a3f35]">
                  Sirsa Salon.
                </Link>
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  // href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
                  className="text-[#6b5a4f] text-sm tracking-widest font-medium hover:text-[#4a3f35] transition-all duration-300 relative group"
                >
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4a3f35] group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}

              <motion.div
                  // href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + 1 * 0.1, duration: 0.7 }}
                  className="text-[#6b5a4f] flex gap-4 text-sm tracking-widest font-medium hover:text-[#4a3f35] transition-all duration-300"
                >
                  <a
                    href={`tel:${ContactDetails.WHATSAPP_NUMBER}`}
                    className="group relative px-2 py-2 bg-[#462B18] text-[#F8F0EB] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                      className="group px-2 py-2 bg-white border border-[#EBDBC2] text-[#462B18] rounded-md hover:bg-[#FDFAF5] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span className="font-medium tracking-wide">WhatsApp Us</span>
                    </a>
                 </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#4a3f35] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF4EE] lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="flex flex-col items-center justify-center h-full space-y-10"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-medium text-[#4a3f35] tracking-wide"
                >
                  {link.title}
                </motion.a>
              ))}

                <motion.div
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-4 font-medium text-[#4a3f35] tracking-wide"
                >
                  <a
                    href={`tel:${+919467331009}`}
                    className="group relative px-2 py-2 bg-[#462B18] text-[#F8F0EB] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                      <Phone className="w-4 h-4" /> Call for Booking
                    </span>
                    <div className="absolute inset-0 bg-[#5e3a22] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                  </a>

                    <a
                      href={`https://wa.me/${2}?text=${encodeURIComponent("WHATSAPP_MSG")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group px-2 py-2 bg-white border border-[#EBDBC2] text-[#462B18] rounded-md hover:bg-[#FDFAF5] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span className="font-medium tracking-wide">WhatsApp Us</span>
                    </a>
                </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
}