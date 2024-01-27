"use client";

import { links } from "@/lib/globals";
import { CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "../theme-provider";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between gap-4 bg-background/30 backdrop-blur-lg border-b-2">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <CodeIcon />
          <h1>Logo</h1>
        </div>
        <div className="flex gap-4">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="text-zinc-500 hover:text-zinc-400 transition-colors"
            >
              {link.tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Apply Now!</Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
