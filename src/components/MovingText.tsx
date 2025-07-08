"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

const texts = ["CONSULTING", "TECHNOLOGY", "AUGMENTATION", "TALENT"];

export const MovingText = ({ className = "" }: { className?: string }) => {
  const content = (
    <>
      {texts.map((text) => (
        <div key={text} className="flex items-center">
          <span className="text-4xl md:text-6xl font-bold tracking-wider">
            {text}
          </span>

          <div className="flex items-center justify-center flex-shrink-0 mx-4">
            <Image
              src={"/assets/icon-star.webp"}
              alt={"Icon Star"}
              width={40}
              height={40}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div
      className={clsx(
        "overflow-hidden whitespace-nowrap bg-black text-white py-4",
        className
      )}
    >
      <motion.div
        className="flex gap-8"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {content}
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
};
