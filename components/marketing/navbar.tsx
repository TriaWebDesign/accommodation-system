"use client";

import { links } from "@/lib/globals";
import { BookmarkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "../theme-provider";
import { Button } from "../ui/button";
import { SideBar } from "./sidebar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between gap-4 bg-background/30 backdrop-blur-lg border-b-2">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <BookmarkIcon />
          <h1>School</h1>
        </div>
        <div className="gap-4 hidden md:flex">
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
        <div className="md:hidden">
          <SideBar />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Apply Now!</Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
