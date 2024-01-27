import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { BookmarkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
          <SheetDescription>You decide, We create</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-10">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="text-foreground hover:bg-muted transition-colors p-4 w-full rounded-lg"
            >
              {link.tag}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">Contact</Button>
          <Button variant="outline">Chatbot</Button>
          <Button variant="outline">Email</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
