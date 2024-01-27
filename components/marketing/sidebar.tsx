import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { BookmarkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { links } from "@/lib/globals";
import Link from "next/link";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex items-center gap-4">
            <BookmarkIcon />
            <h1>School</h1>
          </div>
          <SheetDescription>How to be millionaire</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-10">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="text-zinc-300 hover:bg-zinc-800 transition-colors p-4 w-full rounded-lg"
            >
              {link.tag}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Contact</Button>
          <Button variant="outline">Become Gay</Button>
          <Button variant="outline">KYS</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
