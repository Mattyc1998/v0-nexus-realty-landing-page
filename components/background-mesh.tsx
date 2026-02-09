"use client"

import { motion } from "framer-motion"

export function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-gold-400/5 blur-[100px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-[50%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[150px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  )
}
