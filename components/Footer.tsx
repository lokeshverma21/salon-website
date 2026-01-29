'use client'

import { ContactDetails } from '@/lib/contact'
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react'

const WHATSAPP_NUMBER = '91XXXXXXXXXX'
const WHATSAPP_MSG =
  'Hello! I would like to book an appointment for your beauty services.'

export default function Footer() {
  return (
    <footer className="bg-[#3A2416] text-[#F8F0EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        {/* Top grid */}
        <div className="grid gap-14 md:grid-cols-12">

          {/* Brand / Statement */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl mb-4">
              Bagira Beauty Studio
            </h3>
            <p className="max-w-md text-sm text-[#F8F0EB]/75 leading-relaxed">
              A luxury beauty studio specialising in bridal, event makeup,
              nail artistry, and skin treatments. Designed for women who
              value precision, hygiene, and timeless elegance.
            </p>
          </div>

          {/* Quick actions */}
          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-wider text-[#F8F0EB]/60 mb-5">
              Book
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`https://wa.me/${ContactDetails.WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  ContactDetails.WHATSAPP_MSG
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                WhatsApp Appointment
              </a>
              <a href={`tel:${ContactDetails.WHATSAPP_NUMBER}`} className="hover:opacity-80 transition">
                Call Studio
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-wider text-[#F8F0EB]/60 mb-5">
              Visit
            </p>
            <div className="space-y-4 text-sm text-[#F8F0EB]/80">
              <p className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 mt-[2px]" />
                <span>
                  2nd Floor, Luxury Plaza,<br />
                  Opposite Grand Circle,<br />
                  Mumbai – 400050
                </span>
              </p>

              <p>
                Mon – Sun: 10:00 AM – 8:00 PM
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 hover:opacity-80 transition"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row gap-4 justify-between text-xs text-[#F8F0EB]/60">
          <p>
            © {new Date().getFullYear()} Bagira Beauty Studio. All rights reserved.
          </p>
          <p className='text-white'>
            <a href="https://lokeshverma.in/">Designed & crafted by Lokesh Verma</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
