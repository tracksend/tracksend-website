"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDownIcon, LogOut } from "lucide-react";
import { useLocalUser, getInitials } from "@/hooks/useLocalUser";
import { identifyHeapUser } from "@/components/HeapProvider";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isActive = (path: string) => pathname === path;
  const { user, isLoading } = useLocalUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Identify user with Heap when user loads
  useEffect(() => {
    if (user && !isLoading) {
      identifyHeapUser(user);
    }
  }, [user, isLoading]);

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
              className="h-auto w-35 md:w-40 object-fit"
              src="/tracksendlogowhite.png"
            />
          ) : (
            <img
              alt="Hero Background"
              className="h-auto w-35 md:w-40 object-fit"
              src="/tracksendlogo.png"
            />
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="relative"
          >
            <DropdownMenu
              open={isSolutionsOpen}
              onOpenChange={setIsSolutionsOpen}
              modal={false}
            >
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-semibold transition-colors hover:text-primary ${textClass} outline-none`}
                >
                  Solutions
                  <ChevronDownIcon className="inline-block ml-1 size-4 stroke-current" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-48">
                <DropdownMenuItem asChild>
                  <Link
                    className={`block px-4 py-2 text-sm ${isActive("/solutions/marketers") ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"}`}
                    href="/solutions/marketers"
                  >
                    Marketers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className={`block px-4 py-2 text-sm ${isActive("/solutions/product-managers") ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"}`}
                    href="/solutions/product-managers"
                  >
                    Product Managers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className={`block px-4 py-2 text-sm ${isActive("/solutions/founders") ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"}`}
                    href="/solutions/founders"
                  >
                    Founders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className={`block px-4 py-2 text-sm ${isActive("/solutions/agencies") ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-gray-50"}`}
                    href="/solutions/agencies"
                  >
                    Agencies
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
                    className="h-auto w-35 md:w-40 object-fit"
                    src="/tracksendlogo.png"
                  />
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-1">
                    <div className="px-4 py-3">
                      <div className="text-base font-medium text-gray-700">
                        Solutions
                      </div>
                      <div className="mt-2 flex flex-col gap-1">
                        <Link
                          href="/solutions/product-managers"
                          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Product Managers
                        </Link>
                        <Link
                          href="/solutions/agencies"
                          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Agencies
                        </Link>
                        <Link
                          href="/solutions/founders"
                          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Founders
                        </Link>
                        <Link
                          href="/solutions/marketers"
                          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Marketers
                        </Link>
                      </div>
                    </div>
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
                  {user ? (
                    <>
                      <Link
                        href="https://app.tracksend.co/dashboard"
                        className="px-4 py-3 text-center text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem("ts_user");
                          setIsMobileMenuOpen(false);
                          window.location.reload();
                        }}
                        className="px-4 py-3 text-center text-base font-semibold text-gray-700 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
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
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop CTA Section */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <Avatar className="h-8 w-8 bg-primary">
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  disabled
                  className="flex flex-col gap-1 py-2 pointer-events-none"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </DropdownMenuItem>
                <Separator className="my-2" />
                <DropdownMenuItem asChild>
                  <Link
                    href="https://app.tracksend.co/dashboard"
                    className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer"
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    onClick={() => {
                      localStorage.removeItem("ts_user");
                      window.location.reload();
                    }}
                    className="text-sm font-medium text-red-600 hover:text-red-700 cursor-pointer flex items-center gap-2"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <a
                href="https://app.tracksend.co/login"
                className={`hidden md:block text-sm font-semibold transition-colors hover:text-primary ${textClass}`}
              >
                Login
              </a>
              <button className="hidden md:block rounded-full bg-secondary px-5 py-2 md:px-8 md:py-3 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <Link href="https://app.tracksend.co/register">
                  Get Started
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
