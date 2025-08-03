// ========================================
// UPDATED HEADER COMPONENT
// ========================================

"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "@/components/icons/micro";
import Link from "next/link";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const DynamicHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const pathname = usePathname();

  const isVisible = scrollDirection === "up" || isAtTop || isMenuOpen;

  return (
    <>
      <div className="h-[72px] md:h-[80px]" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          "border-b backdrop-blur-xl",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isAtTop
            ? "bg-[#0A0E1A] border-[rgba(0,217,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-[rgba(10,14,26,0.95)] border-[rgba(226,232,240,0.1)] shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="container mx-auto px-4 py-4 select-none">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={32}
                  className="md:h-8 h-6 w-auto object-contain filter brightness-110"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <NavLink href="#about" pathname={pathname}>
                About
              </NavLink>
              <NavLink href="#verticals" pathname={pathname}>
                Verticals
              </NavLink>
              <NavLink href="#events" pathname={pathname}>
                Events
              </NavLink>
              <NavLink href="#contact" pathname={pathname}>
                Contact
              </NavLink>

              <SignedOut>
                <Link href="/sign-in">
                  <Button className="bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0">
                    Get Started
                  </Button>
                </Link>
              </SignedOut>

              <SignedIn>
                <Link href="/exhibition">
                  <Button className="bg-gradient-to-r from-[#FF6B9D] to-[#FF8E53] hover:shadow-[0_0_20px_rgba(255,107,157,0.3)] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0">
                    Enter Exhibition
                  </Button>
                </Link>

                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] text-[#0A0E1A] font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0">
                    Dashboard
                  </Button>
                </Link>

                <div className="text-white">
                  <UserButton />
                </div>
              </SignedIn>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[rgba(0,217,255,0.1)] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu
                className={cn(
                  "w-6 h-6 text-[#00D9FF] transition-all duration-200",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <X
                className={cn(
                  "w-6 h-6 text-[#00D9FF] absolute transition-all duration-200",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <nav className="pt-4 pb-2 border-t border-[rgba(226,232,240,0.1)] mt-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  pathname={pathname}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="#verticals"
                  onClick={() => setIsMenuOpen(false)}
                  pathname={pathname}
                >
                  Verticals
                </MobileNavLink>
                <MobileNavLink
                  href="#events"
                  onClick={() => setIsMenuOpen(false)}
                  pathname={pathname}
                >
                  Events
                </MobileNavLink>
                <MobileNavLink
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  pathname={pathname}
                >
                  Contact
                </MobileNavLink>
                {/* Mobile buttons similar to desktop but full width */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default DynamicHeader

// Updated NavLink with modern styling
function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-[#E2E8F0] transition-all duration-300 py-2 group select-none font-medium",
        isActive ? "text-[#00D9FF] font-bold" : "hover:text-[#00D9FF]"
      )}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-[#E2E8F0] transition-all duration-300 py-3 px-4 rounded-lg block font-medium",
        isActive
          ? "text-[#00D9FF] bg-[rgba(0,217,255,0.1)] border border-[rgba(0,217,255,0.3)] font-bold"
          : "hover:text-[#00D9FF] hover:bg-[rgba(0,217,255,0.1)]"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
