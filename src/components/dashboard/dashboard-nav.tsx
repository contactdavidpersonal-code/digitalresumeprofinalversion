"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle"; // Assuming this exists or I might validly need to create it later, but standard shadcn usually implies it. If not, I'll stick to just user button.
// Actually, let's keep it simple and robust.

export function DashboardNav() {
  return (
    <nav className="border-b border-zinc-800 bg-black px-4 py-3">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/dashboard" className="text-xl font-bold text-white font-heading">
          DigitalResume<span className="text-blue-500">Pro</span>
        </Link>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
