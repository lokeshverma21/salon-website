"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=2400&auto=format&fit=crop&q=60",
      alt: "Bridal makeup transformation",
      className: "col-span-2 row-span-2", // Large Square
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=2600&q=90",
      alt: "Event glam makeup",
      className: "col-span-1 row-span-2 hidden md:block", // Tall Portrait
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?auto=format&fit=crop&w=2600&q=90",
      alt: "Luxury nail artistry",
      className: "col-span-1 row-span-1", // Small Square
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1767027151400-fa6a3d905e7c?auto=format&fit=crop&w=1600&q=90",
      alt: "Skin treatments",
      className: "col-span-1 row-span-1", // Small Square
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1575939238474-c8ada13b2724?w=2400&auto=format&fit=crop",
      alt: "Hair styling expertise",
      className: "col-span-2 row-span-1", // Wide Landscape
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?w=2400&auto=format&fit=crop&q=60",
      alt: "Premium salon experience",
      className: "col-span-1 row-span-1", // Small
    },
     {
      id: 7,
      src: "https://images.unsplash.com/photo-1739010577139-6f904e57fe41?w=2400&auto=format&fit=crop&q=90",
      alt: "Bridal portrait",
      className: "col-span-1 row-span-1", // Small
    },
  ];

  return (
    <section className="bg-[#F8F0EB] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="block text-xs uppercase tracking-widest text-[#6F512B] font-semibold mb-3"
          >
            A Glimpse of Perfection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-[#462B18] max-w-3xl mx-auto leading-tight"
          >
            Where Artistry Meets Soul
          </motion.h2>
        </div>

        {/* Creative Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Artistic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#462B18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="translate-y-4 text-white font-heading text-xl md:text-2xl transform group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt}
                </p>
                <div className="h-0.5 w-12 bg-[#EBDBC2] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
