"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled || !isHome ? "text-heading" : "text-primary-foreground"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-background transition-all duration-500 z-40",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container-wide py-8 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-2xl text-heading hover:text-primary transition-colors",
                isMobileMenuOpen && "animate-fade-up",
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="accent" size="lg" className="mt-4" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}