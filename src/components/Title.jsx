"use client";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";

const Title = ({text, textStyles}) => {
  return (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`mt-2 text-[var(--tertiary-color)] font-bold md:text-[64px] text-[36px] text-center ${textStyles}`}
    >
        {text}
    </motion.h2>
  )
}

export default Title