"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion"; // we'll use your helper
import Image from "next/image";
import * as Icons from "lucide-react";
import { Plane, GlassWater, Briefcase, ShoppingBag, Music, Bus, Car } from "lucide-react";

const ServicesCard = ({ service }) => {
  const IconComponent = Icons[service.icon];

  return (
    <motion.article
      variants={fadeIn("up", "tween", service.id * 0.15, 0.6)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-[0px_4px_20px_var(--tertiary-color)] transition-shadow duration-300"
    >
      {/* Image */}
      <figure className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
          priority={service.id <= 2} // only critical for first 2 for perf
        />
        {IconComponent && (
          <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
            <IconComponent size={24} strokeWidth={2} />
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[var(--tertiary-color)] mb-4">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-6 flex-grow">{service.text}</p>

        {service.cta && (
          <button className="mt-6 px-6 py-3 bg-[var(--tertiary-color)] text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-300 self-start">
            {service.cta}
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default ServicesCard;
