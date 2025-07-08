"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Navigation {
  id: number;
  name: string;
  href: string;
}

const navigations: Navigation[] = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Features", href: "#features" },
  { id: 3, name: "Join Now", href: "#join" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full h-[var(--header-height)] p-4 bg-transparent backdrop-blur-xs sticky top-0 flex items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            className="w-16 h-auto object-contain aspect-square"
            src={"/assets/slerate-logo.webp"}
            alt="Slerate Logo"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          className="gap-4 hidden sm:flex text-sm"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {navigations.map((item, i) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -2,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={item.href}
                className="cursor-pointer text-xs md:text-sm font-semibold transition-colors hover:text-(--color-primary)"
              >
                <p>{item.name}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Nav */}
        <button
          type="button"
          className="-m-2.5 p-2.5 text-black sm:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Buka menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-center justify-center"
                      >
                        <Image
                          className="w-20 h-auto object-contain rounded-md"
                          src={"/assets/slerate-logo.webp"}
                          width={100}
                          height={100}
                          alt="Logo Play Fields"
                        />
                      </motion.div>

                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="w-full gap-1 flex flex-col">
                      {navigations.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.3,
                              delay: 0.2 + index * 0.1,
                              ease: "easeOut",
                            },
                          }}
                          whileHover={{
                            x: 8,
                            transition: {
                              duration: 0.2,
                              ease: "easeOut",
                            },
                          }}
                          className="w-full p-1 hover:bg-(--color-primary)/10 text-black rounded-md transition-colors duration-200 ease-in-out cursor-pointer group"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link
                            href={`${item.href}`}
                            className="text-xs font-semibold"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
