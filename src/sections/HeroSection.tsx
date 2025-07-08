"use client";

import { Circle } from "@/components/Circle";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home" className="scroll-section">
      <div className="w-full mx-auto px-4 sm:px-8 pt-4 pb-4 sm:pb-0 gap-4 sm:gap-10 flex flex-col overflow-hidden">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center sm:text-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Accelerate Your Sales Results at{" "}
          <span className="text-(--color-primary)">Lightning Speed</span>
        </motion.h1>

        <motion.div
          className="w-full gap-4 sm:gap-10 flex flex-col sm:flex-row items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="gap-4 hidden sm:flex items-center">
            <div className="flex items-center">
              <Circle />
              <Circle className="-ml-4 bg-black" />
            </div>

            <div className="gap-0 flex flex-col text-xs md:text-sm font-semibold whitespace-nowrap">
              <p>15,300+</p>
              <p className="-mt-1">Satisfied Client</p>
            </div>
          </div>

          <p className="text-sm sm:text-md md:text-lg whitespace-pre-wrap secondary-text text-center sm:text-start">
            Take your sales team to the next level with Slerate Sales Boost. A
            smarter way to scale, powered by real-time insights, automation, and
            intelligent outreach.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="relative w-full h-[400px]">
            <Image
              fill
              className="object-cover object-center rounded-t-xl"
              src="/assets/bg-hero.webp"
              alt="People Cheering"
            />
          </div>

          <motion.div
            className="hidden sm:flex absolute -top-10 right-8 p-4 max-w-[140px] gap-1 rounded-xl flex-col bg-white text-xs shadow-lg z-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="font-bold text-(--color-primary)">
              Not Just selling
            </h3>

            <p className="font-light">
              Crafting experiences that move people to act
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
