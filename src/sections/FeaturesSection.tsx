"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    id: "01",
    title: "Smart Sales Assitant",
    desc: "Automate repetitive tasks, follow-ups, and lead scoring — so you can focus on selling, not spreadsheeting.",
  },
  {
    id: "02",
    title: "Real Time Insight",
    desc: "Get instant visibility into your team’s performance. Track KPIs, conversions, and pipeline health in one powerful dashboard.",
  },
  {
    id: "03",
    title: "Seamless Integration",
    desc: "Connect with your favorite tools like CRM, email, and calendar in seconds. No dev needed. Just plug and play.",
  },
];

const FeatureItem = ({ data, index }: { data: Feature; index: number }) => {
  return (
    <motion.div
      className="w-full p-4 gap-4 rounded-lg flex items-start justify-between border-b border-b-gray-100 hover:bg-gray-100 transition-colors duration-200 ease-in-out group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.15,
        ease: "easeOut",
      }}
    >
      <div className="gap-4 flex">
        <p className="text-xs mt-[5px] font-bold">{data.id}</p>

        <div className="gap-0 flex flex-col">
          <p className="text-lg font-semibold">{data.title}</p>
          <p className="secondary-text text-xs">{data.desc}</p>
        </div>
      </div>

      <div className="p-3 rounded-full aspect-square group-hover:bg-(--color-primary) group-hover:text-white transition-colors duration-200 ease-in-out">
        <ArrowUpRightIcon className="size-6 font-semibold" />
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="scroll-section w-full max-w-4xl mx-auto px-8 py-10 gap-8 flex flex-col"
    >
      <motion.div
        className="w-full gap-2 flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">
          Everything You Need to Sell Smarter
        </h1>

        <h5 className="secondary-text text-xs">
          Slerate Sales Boost is packed with powerful features that streamline
          your sales process, eliminate bottlenecks, and help your team perform
          at their best — every day.
        </h5>
      </motion.div>

      <div className="w-full gap-4 flex flex-col">
        {features.map((item, i) => (
          <FeatureItem key={item.id} data={item} index={i} />
        ))}
      </div>
    </section>
  );
};
