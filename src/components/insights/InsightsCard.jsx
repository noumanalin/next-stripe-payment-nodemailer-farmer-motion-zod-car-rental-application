"use client";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion"
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const InsightsCard = ({imgUrl, title, subtitle, index, isForm, form }) => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const router = useRouter();

  return (
    <motion.article
    variants={fadeIn("up", "string", index * 0.5, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="flex justify-center flex-col md:flex-row gap-4"
    >
      <Image
        src={imgUrl}
          width={320}
          height={320}
        className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
        alt="fleet image"
      /> 
      <section>
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-500 lg:text-[42px] text-[26px]">{title}</h2>
        {!isForm && (
          <button
          onClick={()=>{

          }}
          className={`${option==index?"bg-[var()] text-white":"bg-gray-300 text-slate-600"} h-12 px-7 rounded-full`}
          disabled={option == index?true:false}
          >
            Select
          </button>
        )}
      </div>
      <footer className="mt-4 text-sm md:text-lg text-gray-700">
        {subtitle}
      </footer>
      </section>
    </motion.article>
  )
}

export default InsightsCard;