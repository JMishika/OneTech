"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/#a-propos" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hasScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-bold text-primary-foreground">One<span className="text-primary">Tech</span></span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/#contact">Devis Gratuit</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-6 p-6">
                <div className="flex justify-between items-center">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                        <span className="font-headline text-2xl font-bold text-primary-foreground">One<span className="text-primary">Tech</span></span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Fermer le menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8">
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Devis Gratuit</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
