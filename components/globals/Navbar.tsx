"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan", path: "/services" },
    { name: "Artikel", path: "/artikel" },
    { name: "Kontak", path: "/contact" },
  ];

  const appDownloadLink =
    "https://drive.usercontent.google.com/download?id=1qFRCiwx-w7gygMkrSIL_8G8ZZTePX5PW&export=download&authuser=0";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <Link href="/" className="relative w-32 h-10 flex items-center">
          <Image
            src="/images/logo_chupatu.png"
            alt="Chupatu Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <ul className="hidden md:flex space-x-8 items-center h-full">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={index}
                className="relative group flex items-center h-full"
              >
                <Link href={link.path}>
                  <span
                    className={`text-sm font-bold transition-colors duration-300 relative py-2 ${
                      isActive
                        ? "text-blue-600"
                        : "text-[#0F172A] group-hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* AREA TOMBOL KANAN */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors duration-300"
          >
            Masuk
          </Link>
          <Button
            variant="primary"
            className="!py-2 !px-5 !text-sm hover:scale-105 transition-transform"
            onClick={() => window.open(appDownloadLink, "_blank")}
          >
            Download App
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
