"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Perawatan Sepatu Premium,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Kini di Genggaman.
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Chupatu mengembalikan pesona sepatu kesayanganmu. Booking layanan,
              lacak secara real-time, dan nikmati hasil magis dengan sentuhan
              profesional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="primary">Download Sekarang</Button>
              <Button variant="outline">Pelajari Lebih Lanjut</Button>
            </div>
          </motion.div>

          {/* Gambar Kanan (Mockup HP) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-20 rounded-full w-3/4 h-3/4 m-auto"></div>
            {/* PASTIKAN KAMU PUNYA GAMBAR mockup.png DI FOLDER public/images/ */}
            <div className="w-64 h-[500px] bg-gray-200 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl relative overflow-hidden flex items-center justify-center z-10">
              <p className="text-gray-500 font-medium">Tempat Mockup HP</p>
              {/* Hapus teks di atas dan gunakan komponen Image di bawah ini jika gambar sudah ada */}
              {/* <Image src="/images/mockup.png" alt="Chupatu App Mockup" layout="fill" objectFit="cover" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
