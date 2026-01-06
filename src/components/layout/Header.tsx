"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : isHome
          ? "bg-transparent py-6"
          : "bg-background py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-heading text-2xl tracking-tight transition-colors duration-300",
              isScrolled || !isHome ? "text-heading" : "text-primary-foreground"
            )}
          >
            Bravura
          </span>
          <span
            className={cn(
              "font-body text-xs uppercase tracking-[0.3em] transition-colors duration-300",
              isScrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/70"
            )}
          >
            Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm tracking-wide transition-colors duration-300 link-underline",
                pathname === link.href
                  ? isScrolled || !isHome
                    ? "text-primary"
                    : "text-primary-foreground"
                  : isScrolled || !isHome
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant={isScrolled || !isHome ? "accent" : "heroOutline"}
            size="sm"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu (Sheet) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled || !isHome
                  ? "text-heading"
                  : "text-primary-foreground"
              )}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
             {/* Accessibility requirements */}
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation links for mobile devices
            </SheetDescription>
            
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-heading text-2xl hover:text-primary transition-colors",
                    pathname === link.href ? "text-primary" : "text-heading"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" size="lg" className="mt-4 w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}