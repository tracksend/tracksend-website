"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          <a
            href="https://app.tracksend.co/login"
            className={`text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
          >
            Login
          </a>
          <button className="rounded-full bg-secondary px-8 py-3 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            <Link href="https://app.tracksend.co/register">Start Free</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
