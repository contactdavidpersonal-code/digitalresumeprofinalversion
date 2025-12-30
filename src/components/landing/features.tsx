"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Globe, Layout } from "lucide-react";

const features = [
  {
    title: "Instant Import",
    description: "Upload your current PDF or DOCX resume and we'll extract the data instantly.",
    icon: <Upload className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "AI Enhancement",
    description: "Our Gemini AI engine rewrites your bullet points to be more impactful.",
    icon: <Wand2 className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Premium Templates",
    description: "Choose from 10+ award-winning designs used by FAANG engineers.",
    icon: <Layout className="h-6 w-6 text-pink-400" />,
  },
  {
    title: "Custom Domain",
    description: "Publish to your own domain or use our free .digresumepro.com subdomain.",
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stand out from the crowd
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Recruiters spend 6 seconds looking at a resume. Make them count with a stunning personal website.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-400">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
