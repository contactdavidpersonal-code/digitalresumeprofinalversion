"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-24 text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      <div className="z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Your Career Story, <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Reimagined with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
        >
          Transform your boring PDF resume into a stunning, interactive personal
          website in seconds. Powered by Gemini AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-12 rounded-full bg-white px-8 text-black hover:bg-zinc-200"
            >
              Build My Site
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-zinc-800 bg-black/50 text-white backdrop-blur-sm hover:bg-zinc-900"
            >
              View Examples
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
