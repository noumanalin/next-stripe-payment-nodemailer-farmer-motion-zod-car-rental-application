"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/utils/motion"

const AboutUs = () => {
    return (
        <article className="my-15">
            <motion.section 
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
             className="wrapper">
                <div className="feedback-gradient" />
                <h4 className="font-bold sm:text-5xl text-[26px] pl-4 border-l-8 border-l-[var(--tertiary-color)] mb-3">
                    Where Luxury Drives Excellence
                </h4>
                <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
                    We is your premier choice for a brand-new chauffeured
                    car service in Melbourne.
                </p>
                <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
                    “We pride ourselves on being just the right size chauffeured car
                    business – not too big, not to small. This means we have a small but
                    experienced team of drivers, dedicated to providing the highest
                    quality service in town. We promise to always have a car that suits
                    your needs and service with a smile. Book your next luxury ride
                    today.”
                </p>
            </motion.section>

            <motion.figure 
            variants={fadeIn("left", "tween", 0.2, 1)} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="px-3 mt-32">
                <Image
                    src="/aboutus.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="px-0 lg:px-4 xl:px-14 w-full h-auto object-cover rounded-3xl"
                    alt="About Us"
                />
            </motion.figure>
        </article>
    )
}

export default AboutUs