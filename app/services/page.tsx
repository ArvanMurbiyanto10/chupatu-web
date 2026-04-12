"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import styles from "./services.module.css";

// Data 4 Layanan Chupatu
const servicesData = [
  {
    id: "01",
    title: "Cuci Reguler",
    desc: "Pembersihan menyeluruh harian agar tetap segar.",
    img: "/images/reguler.jpg",
    price: "Mulai Rp 35.000",
    features: [
      "Pembersihan bagian luar (upper) dan midsole.",
      "Sikat lembut untuk material canvas & mesh.",
      "Pemberian parfum anti-bakteri premium.",
      "Durasi pengerjaan reguler (1-2 hari kerja).",
    ],
  },
  {
    id: "02",
    title: "Deep Clean",
    desc: "Perawatan intensif hingga pori material terdalam.",
    img: "/images/deepclean.jpeg",
    price: "Mulai Rp 60.000",
    features: [
      "Pembersihan sangat mendetail ke seluruh bagian dalam & luar.",
      "Penanganan khusus untuk noda membandel & tanah/lumpur.",
      "Perawatan khusus material sensitif (Suede, Nubuck, & Leather).",
      "Chemical ramah lingkungan, 100% aman untuk warna asli.",
    ],
  },
  {
    id: "03",
    title: "Repaint",
    desc: "Restorasi warna pudar agar tajam seperti baru.",
    img: "/images/repaint.jpg",
    price: "Mulai Rp 120.000",
    features: [
      "Pewarnaan ulang menggunakan cat akrilik/leather premium.",
      "Warna menyerap sempurna, tidak akan retak atau luntur.",
      "Tersedia pilihan restorasi warna asli atau ganti warna (Change Color).",
      "Sudah termasuk layanan Deep Clean gratis sebelum proses cat.",
    ],
  },
  {
    id: "04",
    title: "Unyellowing",
    desc: "Hapus noda kuning pada midsole akibat oksidasi.",
    img: "/images/unyellowing.jpg",
    price: "Mulai Rp 75.000",
    features: [
      "Menghilangkan proses oksidasi kuning pekat pada sol karet/midsole.",
      "Menggunakan chemical unyellowing khusus untuk sepatu.",
      "Proses penjemuran sinar UV khusus agar hasil lebih maksimal.",
      "Mengembalikan warna putih asli midsole seperti baru keluar dari box.",
    ],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const handleNext = () => {
    setActiveService((prev) =>
      prev === servicesData.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setActiveService((prev) =>
      prev === 0 ? servicesData.length - 1 : prev - 1,
    );
  };

  const activeData = servicesData[activeService];

  return (
    <div className={styles.wrapper}>
      {/* Background Ambience (Tema Terang) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 z-0"></div>

      <div className={styles.container}>
        {/* ========================================= */}
        {/* HEADER SECTION */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              LAYANAN KAMI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Perawatan Sepatu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Level Premium.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl font-medium">
              Pilih menu perawatan yang didesain khusus untuk mengembalikan
              kondisi prima sepatu kesayangan Anda.
            </p>
          </motion.div>

          {/* Tombol Navigasi (Disembunyikan jika Panel Detail Terbuka) */}
          <AnimatePresence>
            {!showDetail && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden md:flex gap-4"
              >
                <button
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm bg-white"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm bg-white"
                >
                  <FiChevronRight size={24} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================= */}
        {/* INTERACTIVE LAYOUT (GALLERY & DETAIL) */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row gap-6 w-full h-[70vh] min-h-[550px] max-h-[800px] relative z-10">
          {/* BAGIAN KIRI: KARTU ANIMASI (Morphing Layout) */}
          <motion.div
            layout
            className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full ${showDetail ? "w-full lg:w-[60%]" : "w-full flex flex-col lg:flex-row gap-4"}`}
          >
            {!showDetail ? (
              // -----------------------------------------------------
              // STATE 1: MODE GALERI (4 KARTU BERDAMPINGAN)
              // -----------------------------------------------------
              servicesData.map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <motion.div
                    key={`container-${srv.id}`}
                    layoutId={`wrapper-${srv.id}`}
                    onClick={() => setActiveService(idx)}
                    className={`relative rounded-[2rem] overflow-hidden cursor-pointer group flex ${isActive ? "flex-[5] lg:flex-[6]" : "flex-[1]"}`}
                  >
                    <motion.img
                      layoutId={`image-${srv.id}`}
                      src={srv.img}
                      alt={srv.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />

                    {/* Overlay Hitam Halus */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" : "bg-slate-900/60 group-hover:bg-slate-900/40"}`}
                    ></div>

                    {/* Teks di dalam Kartu Galeri */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end w-full h-full">
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col w-full"
                        >
                          <span className="text-cyan-400 font-bold tracking-widest text-sm mb-2 block">
                            NO. {srv.id}
                          </span>
                          <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-3">
                            {srv.title}
                          </h3>
                          <p className="text-slate-200 text-base font-light mb-6 line-clamp-2 max-w-sm">
                            {srv.desc}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowDetail(true);
                            }}
                            className="px-6 py-3.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md inline-flex items-center justify-center gap-3 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xs uppercase tracking-widest w-max"
                          >
                            Lihat Detail <FiArrowRight size={18} />
                          </button>
                        </motion.div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-end pb-2">
                          <span className="-rotate-90 hidden lg:block text-white font-black tracking-widest text-2xl opacity-50 uppercase whitespace-nowrap">
                            {srv.title}
                          </span>
                          <span className="text-cyan-400 font-bold text-sm lg:hidden">
                            {srv.id}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // -----------------------------------------------------
              // STATE 2: MODE FOKUS (1 GAMBAR BESAR + 3 THUMBNAIL)
              // -----------------------------------------------------
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-slate-900">
                {/* Gambar Utama (Aktif) menggunakan Morphing Layout Cerdas */}
                <motion.div
                  key={`main-${activeData.id}`}
                  layoutId={`wrapper-${activeData.id}`}
                  className="absolute inset-0 z-0"
                >
                  <motion.img
                    layoutId={`image-${activeData.id}`}
                    src={activeData.img}
                    alt={activeData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

                  {/* Teks Judul di Sudut Kiri Bawah Gambar Besar */}
                  <div className="absolute bottom-8 left-8 max-w-[60%]">
                    <span className="text-cyan-400 font-bold tracking-widest text-sm mb-2 block drop-shadow-md">
                      CHUPATU SERVICE
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase drop-shadow-lg leading-[1.1]">
                      {activeData.title}
                    </h3>
                  </div>
                </motion.div>

                {/* 3 Gambar Lainnya Menjadi Thumbnail di Sudut Kanan Bawah */}
                <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                  {servicesData.map((srv, idx) => {
                    if (idx === activeService) return null; // Sembunyikan gambar aktif dari daftar thumbnail
                    return (
                      <motion.div
                        key={`thumb-${srv.id}`}
                        layoutId={`wrapper-${srv.id}`}
                        onClick={() => setActiveService(idx)}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden cursor-pointer border-2 border-white/40 hover:border-white shadow-xl group relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.img
                          layoutId={`image-${srv.id}`}
                          src={srv.img}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                        {/* Lapisan Gelap Transparan pada Thumbnail */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>

          {/* BAGIAN KANAN: PANEL DETAIL PENJELASAN */}
          <AnimatePresence>
            {showDetail && (
              <motion.div
                initial={{ opacity: 0, x: 50, width: "0%" }}
                animate={{ opacity: 1, x: 0, width: "100%" }}
                exit={{ opacity: 0, x: 50, width: "0%" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="lg:w-[40%] h-full bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col relative overflow-hidden"
              >
                {/* Tombol X untuk menutup */}
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors z-20"
                >
                  <FiX size={20} />
                </button>

                {/* Isi Panel Detail */}
                <div className="p-8 md:p-10 flex-1 overflow-y-auto custom-scrollbar pt-14 pb-14">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-black tracking-widest text-xs mb-6">
                    SERVICE INFO
                  </span>

                  {/* Animasi per-gantian teks di panel */}
                  <motion.div
                    key={`content-${activeData.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                      {activeData.title}
                    </h2>
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                      {activeData.desc}
                    </p>

                    {/* Harga Layanan */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                      <span className="text-sm text-slate-500 font-medium block mb-1 uppercase tracking-widest">
                        Estimasi Biaya
                      </span>
                      <span className="text-3xl font-black text-blue-600">
                        {activeData.price}
                      </span>
                    </div>

                    {/* Daftar Penjelasan & Fitur */}
                    <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-2 text-lg">
                      <FiShield className="text-cyan-500" /> Rincian Pengerjaan
                    </h4>
                    <ul className="space-y-4 mb-4">
                      {activeData.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle
                            className="text-emerald-500 shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-slate-600 text-sm leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
