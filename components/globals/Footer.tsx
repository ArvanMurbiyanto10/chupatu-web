"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Chupatu.</h2>
        <p className="mb-8">
          Aplikasi usaha jasa perawatan sepatu terbaik di genggamanmu.
        </p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chupatu App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
