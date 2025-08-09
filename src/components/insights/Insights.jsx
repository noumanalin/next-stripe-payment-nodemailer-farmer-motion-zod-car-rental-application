"use client"
import { motion } from "framer-motion"
import { staggerContainer } from "@/utils/motion"
import Title from "../Title"
import { insights } from "@/utils/appData"
import InsightsCard from "./InsightsCard"

const Insights = ({isForm}) => {
  return (
    <motion.section
      variants={!isForm && staggerContainer}
      initial={!isForm && "hidden"}
      whileInView={!isForm && "show"}
      viewport={{ once: false, amount: 0.25 }}
      className=""
      >
      {!isForm && <Title text={'Our Fleet'} />}
      <section className="wrapper flex flex-col gap-10 mt-12">
        {insights.map((insight, index)=>(
          <InsightsCard key={index} index={index} {...insight} isForm={isForm} />
        ))}
      </section>
    </motion.section>
  )
}

export default Insights