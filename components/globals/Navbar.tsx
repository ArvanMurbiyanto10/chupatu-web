"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Untuk mendeteksi halaman aktif saat ini

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sembunyikan Navbar jika berada di halaman admin
  if (pathname?.startsWith("/admin")) return null;

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan", path: "/services" },
    { name: "Artikel", path: "/artikel" },
    { name: "Kontak", path: "/contact" },
  ];

  // Link Google Drive untuk Aplikasi Chupatu
  const appDownloadLink =
    "https://drive.usercontent.google.com/download?id=1qFRCiwx-w7gygMkrSIL_8G8ZZTePX5PW&export=download&authuser=0";

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

        {/* MENU NAVIGASI DESKTOP */}
        <ul className="hidden md:flex space-x-8 items-center h-full">
          {navLinks.map((link, index) => {
            // Mengecek apakah path menu ini sama dengan URL yang sedang aktif
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

                    {/* Garis Bawah Biru (Active State & Hover) */}
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

        {/* TOMBOL DOWNLOAD APP */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            className="!py-2 !px-5 !text-sm hover:scale-105 transition-transform"
            // Fungsi onClick untuk membuka link di tab baru
            onClick={() => window.open(appDownloadLink, "_blank")}
          >
            Download App
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
