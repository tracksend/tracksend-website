"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed top-0 z-50 w-full transition-all duration-300 ${
    isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm h-16" : "h-20"
  }`;

  const textClass =
    isLanding && !isScrolled ? "text-gray-300" : "text-navy-dark";

  return (
    <nav className={navClass}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-navy">
            <span className="material-symbols-outlined font-bold text-lg">
              send
            </span>
          </div>
          <span
            className={`text-lg font-bold tracking-tight ${isLanding && !isScrolled ? "text-white" : "text-navy-dark"}`}
          >
            Tracksend
          </span> */}
          {isLanding && !isScrolled ? (
            <img
              alt="Hero Background"
              className="h-auto w-60 object-fit"
              src="/tracksendlogowhite.png"
            />
          ) : (
            <img
              alt="Hero Background"
              className="h-auto w-60 object-fit"
              src="/tracksendlogo.png"
            />
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* <Link href="/" className={`text-sm font-semibold transition-colors hover:text-primary ${textClass}`}>Platform</Link> */}
          <a
            href="#"
            className={`text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
          >
            Solutions
          </a>
          <Link
            href="/pricing"
            className={`text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
          >
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2">
                <svg
                  className={`w-6 h-6 ${isLanding && !isScrolled ? "text-white" : "text-navy-dark"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-62.5 sm:w-75 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 py-6 border-b">
                  <img
                    alt="Tracksend Logo"
                    className="h-auto w-40"
                    src="/tracksendlogo.png"
                  />
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-1">
                    <a
                      href="#"
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Solutions
                    </a>
                    <Link
                      href="/pricing"
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/resources"
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </div>
                </nav>

                {/* Separator */}
                <Separator />

                {/* CTA Section */}
                <div className="px-6 py-6 flex flex-col gap-3">
                  <a
                    href="https://app.tracksend.co/login"
                    className="px-4 py-3 text-center text-base font-semibold text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                  <Link
                    href="https://app.tracksend.co/register"
                    className="px-5 py-3 rounded-full bg-secondary text-white font-bold text-center hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Free
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <a
            href="https://app.tracksend.co/login"
            className={`hidden md:block text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
          >
            Login
          </a>
          <button className="hidden md:block rounded-full bg-secondary px-5 py-2 md:px-8 md:py-3 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            <Link href="https://app.tracksend.co/register">Start Free</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
