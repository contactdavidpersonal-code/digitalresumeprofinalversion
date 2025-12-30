"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const includedFeatures = [
  "Unlimited AI Resume Re-writes",
  "3 Premium Website Templates",
  "Custom Domain Connection",
  "Analytics & Visitor Tracking",
  "Export to PDF",
  "24/7 Support",
];

export const Pricing = () => {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Invest in your career for less than the cost of a LinkedIn Premium subscription.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Pro Membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Get full access to all features including our advanced AI writer and premium hosting.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-400">What’s included</h4>
              <div className="h-px flex-auto bg-gray-800" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-zinc-900 py-10 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">Monthly</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$19</span>
                  <span className="text-sm font-semibold leading-6 text-gray-400">/month</span>
                </p>
                <Link href="/dashboard" className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Get Started
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-400">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
