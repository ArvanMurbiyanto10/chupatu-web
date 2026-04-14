"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FiZap,
  FiDatabase,
  FiSmartphone,
  FiMonitor,
  FiClock,
  FiAlertTriangle,
  FiShield,
  FiCheckCircle,
  FiCpu,
  FiArrowDown,
  FiTrendingUp,
} from "react-icons/fi";
import styles from "./about.module.css";

// --- DATA CONSTANTS ---
const misiPoints = [
  "Membangun ekosistem digital terintegrasi Web & Mobile.",
  "Menerapkan AI (Gemini) untuk analisis material presisi.",
  "Menyediakan transparansi Live GPS Tracking.",
  "Digitalisasi transaksi dengan keamanan Barcode.",
];

const valuePoints = [
  {
    icon: FiMonitor,
    title: "Ekosistem Terintegrasi",
    desc: "Sinergi mulus antara Web Admin, Backend API, dan Aplikasi Mobile Customer.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: FiCpu,
    title: "Presisi AI",
    desc: "Rekomendasi treatment otomatis berbasis Gemini untuk setiap jenis material.",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: FiSmartphone,
    title: "Transparansi Penuh",
    desc: "Pantau pergerakan kurir secara real-time dari penjemputan hingga selesai.",
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    icon: FiShield,
    title: "Keamanan Berlapis",
    desc: "Validasi Barcode mutakhir dan enkripsi data untuk ketenangan pelanggan.",
    color: "from-amber-400 to-orange-400",
  },
];

// --- ANIMASI REUSABLE ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, type: "spring" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const pelletPop = {
  hidden: { opacity: 0, scale: 0.6, y: 40, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  },
};

const slideUpFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax Efek Halus
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {/* Background Ambience */}
      <div className={styles.bgGlow}></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-100/30 rounded-[40%] blur-[100px] pointer-events-none z-0"
      />

      <div className={styles.container}>
        {/* ======================================================= */}
        {/* 1. HERO SECTION (EDITORIAL MAGAZINE STYLE W/ PHOTO SLOTS) */}
        {/* ======================================================= */}
        <section className="min-h-[90vh] flex flex-col justify-center pt-20 relative z-10 mb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* KIRI: TEKS UTAMA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <motion.div
                variants={slideUpFade}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                Chupatu Engine v2.0
              </motion.div>

              <motion.h1
                variants={slideUpFade}
                className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tighter mb-6"
              >
                Mendigitalisasi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Langkahmu.
                </span>
              </motion.h1>

              <motion.p
                variants={slideUpFade}
                className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg"
              >
                Berawal dari keresahan akan sistem manual, kami membangun
                ekosistem digital revolusioner untuk transformasi industri
                perawatan sepatu yang efisien dan transparan.
              </motion.p>

              {/* Scroll Indicator */}
              <motion.div
                style={{ opacity: opacityFade }}
                className="flex items-center gap-3 text-slate-400 font-bold text-sm tracking-widest uppercase"
              >
                <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center animate-bounce">
                  <FiArrowDown />
                </div>
                Scroll to Explore
              </motion.div>
            </motion.div>

            {/* KANAN: MASONRY PHOTO SLOTS */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative h-[50vh] md:h-[70vh] w-full">
              {/* Slot Foto 1 (Utama/Kiri) */}
              <motion.div
                style={{ y: y1 }}
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="absolute top-0 left-0 w-[60%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-20 group"
              >
                <img
                  src="/images/reguler.jpg" /* <-- SLOT FOTO 1 */
                  alt="Workshop / Team 1"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </motion.div>

              {/* Slot Foto 2 (Kanan Atas) */}
              <motion.div
                style={{ y: y2 }}
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                transition={{ delay: 0.2 }}
                className="absolute top-[10%] right-0 w-[45%] h-[45%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10 group"
              >
                <img
                  src="/images/repaint.jpg" /* <-- SLOT FOTO 2 */
                  alt="Detail Sepatu / App 1"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 filter saturate-150"
                />
              </motion.div>

              {/* Slot Foto 3 (Kanan Bawah) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                transition={{ delay: 0.4 }}
                className="absolute bottom-[5%] right-[10%] w-[50%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30 group"
              >
                <img
                  src="/images/fotokiri.jpg" /* <-- SLOT FOTO 3 */
                  alt="Detail App / Proses 2"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    <FiCheckCircle className="text-cyan-400" /> Presisi AI
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* 2. VISI KAMI (SPLIT LAYOUT WITH LARGE PHOTO) */}
        {/* ======================================================= */}
        <section className="py-24 md:py-32 relative z-10 border-t border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Slot Foto Visi Besar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleUp}
              className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group"
            >
              <img
                src="/images/fotoaboutgede.jpg" /* <-- SLOT FOTO VISI */
                alt="Visi Chupatu"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20"></div>

              {/* Floating Element over Photo */}
              <div className="absolute top-8 left-8 w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 text-white shadow-lg z-10">
                <FiTrendingUp size={32} />
              </div>
            </motion.div>

            {/* Teks Visi */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col justify-center px-2 md:px-4"
            >
              <h2 className="text-sm font-black tracking-widest uppercase text-blue-600 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Visi
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-6 md:mb-8 tracking-tighter leading-tight">
                Mendefinisikan <br /> Ulang{" "}
                <span className="text-blue-600">Standar.</span>
              </h3>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Menjadi pionir digitalisasi layanan perawatan sepatu di
                Indonesia melalui integrasi teknologi kecerdasan buatan (AI) dan
                IoT, menciptakan standar baru dalam kenyamanan dan kepuasan
                pelanggan tanpa kompromi.
              </p>

              {/* Garis batas estetik */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* 3. MISI KAMI (CARD INTERAKTIF) */}
        {/* ======================================================= */}
        <section className="py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">
              Misi <span className="text-blue-600">Kami.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium px-4">
              Langkah konkrit yang kami jalankan setiap hari untuk mencapai visi
              besar Chupatu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {misiPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                }}
                className="p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 md:gap-6 group cursor-default"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <h4 className="text-xl md:text-2xl font-black opacity-30 group-hover:opacity-100">
                    0{index + 1}
                  </h4>
                </div>
                <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed pt-1 md:pt-2 group-hover:text-slate-950 transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================= */}
        {/* 4. LATAR BELAKANG (THE PROBLEM & SOLUTION) */}
        {/* ======================================================= */}
        <section className="py-24 md:py-32 relative z-10 border-t border-slate-100 mt-10 md:mt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Teks Kiri - Interactive List */}
            <div className="flex flex-col justify-center gap-6 px-2 md:px-8 order-2 lg:order-1">
              <div className="mb-2">
                <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-2 block">
                  Mengapa Kami Ada
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Evolusi Dari Manual <br /> Menuju{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Terintegrasi.
                  </span>
                </h2>
              </div>

              {[
                {
                  icon: FiAlertTriangle,
                  title: "Masalah Operasional",
                  desc: "Pemesanan manual via pesan singkat rentan menyebabkan data terlewat dan human error.",
                  color: "text-red-500",
                  bg: "bg-red-50",
                  border: "border-red-100",
                },
                {
                  icon: FiClock,
                  title: "Kurangnya Transparansi",
                  desc: "Invoicing manual membuat pelanggan cemas menunggu status pengerjaan sepatunya.",
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                },
                {
                  icon: FiZap,
                  title: "Solusi Chupatu v2.0",
                  desc: "Menyatukan Web Admin dan Mobile App ke dalam satu ekosistem presisi tanpa interupsi.",
                  color: "text-white",
                  bg: "bg-blue-600",
                  border: "border-blue-500",
                  isHighlight: true,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring" }}
                  className={`flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-3xl transition-all duration-300 border hover:shadow-lg hover:-translate-y-1 ${
                    item.isHighlight
                      ? "bg-blue-50/50 border-blue-200 shadow-md ring-1 ring-blue-100"
                      : "bg-white border-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} ${item.border} border shadow-sm`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3
                      className={`text-lg md:text-xl font-black mb-1 md:mb-2 ${
                        item.isHighlight ? "text-blue-700" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Kanan - SLOT FOTO APLIKASI/SISTEM (Diperbaiki) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleUp}
              className="relative w-full h-[450px] md:h-[650px] rounded-[3rem] bg-slate-100 shadow-2xl border-[8px] border-white order-1 lg:order-2 group"
            >
              {/* Gambar Background Utama - Harus diberi overflow-hidden pada parent atau gambar agar melengkung rapi */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <img
                  src="/images/unyellowing.jpg" /* <-- SLOT FOTO SISTEM/APP */
                  alt="Chupatu System"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* Dekorasi Floating Tech */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-5 md:p-6 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                  <span className="font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
                    <FiSmartphone className="text-cyan-400" /> Chupatu App
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed">
                  Sistem yang menghubungkan pelanggan, kurir, dan teknisi dalam
                  satu ketukan jari secara real-time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* 5. EMPAT PILAR KEUNGGULAN */}
        {/* ======================================================= */}
        <section className={styles.valuesSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Teknologi Inti
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 md:mb-6 tracking-tight">
              Empat Pilar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Keunggulan.
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-medium px-4">
              Fondasi teknologi yang membuat Chupatu menjadi layanan perawatan
              sepatu paling inovatif saat ini.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.valuesGrid}
          >
            {valuePoints.map((item, index) => (
              <motion.div
                key={index}
                variants={pelletPop}
                whileHover={{ y: -10 }}
                className={`${styles.cardValue} group`}
              >
                {/* 3D Pop-up Icon Box */}
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 relative transform-style-3d transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[1.2rem] md:rounded-[1.5rem] blur-lg opacity-30 group-hover:opacity-60 transition-opacity`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center text-3xl md:text-4xl text-white shadow-lg border border-white/50 backdrop-blur-sm transform translate-z-10`}
                  >
                    <item.icon className="drop-shadow-md" />
                  </div>
                </div>

                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
