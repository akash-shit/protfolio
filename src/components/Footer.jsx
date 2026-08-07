import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/40 mt-12">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Codesky.co. All rights reserved.
        </p>

        <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
        <ArrowUp size={20} />
        </a>
    </div>
    </footer>
  );
};