"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { services } from "@/lib/enums";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{
          opacity: 0
        }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return <div className="flex flex-col  justify-center gap-6 group" key={index}>
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                <Link href={item.path} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-90">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
              {/* descripton */}
              <p className="text-white/80">{item.description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services