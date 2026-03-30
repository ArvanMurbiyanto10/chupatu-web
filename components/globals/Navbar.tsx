"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan", path: "/services" },
    { name: "Artikel", path: "/artikel" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* LOGO CHUPATU MENGGUNAKAN IMAGE */}
        <Link href="/" className="relative w-32 h-10 flex items-center">
          <Image
            src="/images/logo_chupatu.png"
            alt="Chupatu Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <span
                  className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                    isScrolled ? "text-[#0F172A]" : "text-[#0F172A]"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="primary" className="!py-2 !px-5 !text-sm">
            Download App
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
