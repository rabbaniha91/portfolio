import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="w-full  h-screen mx-auto relative">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row 
      items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello I a'm <span className="text-[#915eff]">Heydar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop reusable and scalable components <br className="sm:block hidden" /> to create dynamic user interfaces
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center 
          items-start p-2">
            <motion.div animate={{
              y: [0, 30, 0]
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1
              }} 
              className="size-3 bg-secondary rounded-full"
              />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero