import { CodeIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 px-6 flex items-center justify-between gap-4 bg-background/30 backdrop-blur-lg border-t-2">
      <div className="flex items-center gap-4">
        <CodeIcon />
        <h1>Logo</h1>
      </div>
      <div>
        <Button variant="ghost">Terms</Button>
        <Button variant="ghost">Privacy</Button>
      </div>
    </footer>
  );
}
