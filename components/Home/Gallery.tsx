// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww",
//     alt: "Indian bridal makeup close-up",
//     className: "col-span-2 row-span-2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww",
//     alt: "Wedding makeup look",
//     className: "",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5haWwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
//     alt: "Luxury nail studio",
//     className: "",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1767027151400-fa6a3d905e7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5JTIwbWFrZXVwfGVufDB8fDB8fHww",
//     alt: "Party makeup look",
//     className: "col-span-2",
//   },
// ];


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=2400&auto=format&fit=crop&q=60",
      alt: "Bridal makeup transformation",
      className: "md:row-span-2 md:col-span-1 col-span-1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=2600&q=90",
      alt: "Event glam makeup look",
      className: "md:row-span-1 md:col-span-1 row-span-2 hidden md:block col-span-1",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?auto=format&fit=crop&w=2600&q=90",
      alt: "Luxury nail artistry",
      className: "row-span-1 col-span-1",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1767027151400-fa6a3d905e7c?auto=format&fit=crop&w=1600&q=90",
      alt: "Skin glow treatment",
      className: "row-span-1 col-span-1",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1575939238474-c8ada13b2724?w=2400&auto=format&fit=crop",
      alt: "Premium hair styling2",
      className: "row-span-2 col-span-1",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?w=2400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHNhbG9uJTIwYmVhdXR5fGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Premium hair styling1",
      className: "row-span-1 col-span-1",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1739010577139-6f904e57fe41?w=2400&auto=format&fit=crop&q=90",
      alt: "Premium hair styling",
      className: "row-span-1 col-span-1",
    },
    // {
    //   id: 8,
    //   src: "https://images.unsplash.com/photo-1739010577139-6f904e57fe41?w=600&auto=format&fit=crop&q=90",
    //   alt: "Premium hair styling",
    //   className: "row-span-2 col-span-1",
    // },
  ];

  return (
    <section className="bg-[#F8F0EB] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="block text-xs uppercase tracking-wider text-[#6F512B] font-medium mb-3"
          >
            Our Transformations
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#462B18] max-w-3xl mx-auto"
          >
            Where Elegance Meets Expertise
          </motion.h2>
        </div>

        {/* ✅ TRUE BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.className} relative overflow-hidden rounded-xl shadow-lg`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                />

                <motion.div
                  className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-white text-lg font-medium px-4 text-center">
                    {item.alt}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
