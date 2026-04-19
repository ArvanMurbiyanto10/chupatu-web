"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiSmartphone,
  FiMap,
  FiBox,
  FiCheckCircle,
  FiShield,
  FiDroplet,
  FiFeather,
  FiLayers,
  FiSun,
  FiClock,
  FiTruck,
  FiTarget,
  FiAward,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiPackage,
} from "react-icons/fi";
import styles from "./home.module.css";

// --- DATA CONSTANTS ---

// Data Section 2 (Why Us)
const whyUsData = [
  {
    icon: FiTarget,
    title: "Bukan Sekadar Dicuci",
    desc: "Setiap material dari Suede, Canvas, hingga Leather memiliki SOP penanganan dan chemical berbeda untuk mencegah kerusakan.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/fotokiri.jpg", // Slot foto sementara
  },
  {
    icon: FiAward,
    title: "Teknisi Tersertifikasi",
    desc: "Sepatu ditangani oleh spesialis yang melewati pelatihan ketat dan memahami anatomi sepatu secara mendalam.",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    image: "/images/fototengah.avif", // Slot foto sementara
  },
  {
    icon: FiDroplet,
    title: "Chemical Premium",
    desc: "Menggunakan sabun bersertifikat yang ramah lingkungan dan 100% aman untuk warna asli sepatu Anda.",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
    image: "/images/fotokanan.jpg", // Slot foto sementara
  },
];

const prioritiesData = [
  {
    icon: FiShield,
    title: "Zero Damage Policy",
    desc: "Keamanan material sepatu adalah prioritas absolut kami.",
  },
  {
    icon: FiClock,
    title: "Ketepatan Waktu",
    desc: "Selesai tepat waktu sesuai estimasi, atau kami berikan diskon khusus.",
  },
  {
    icon: FiStar,
    title: "Kepuasan 100%",
    desc: "Tidak puas dengan hasilnya? Kami cuci ulang tanpa biaya tambahan.",
  },
];

// Data Section 5 (Layanan) - DENGAN SLOT FOTO
const servicesData = [
  {
    icon: FiDroplet,
    title: "Cuci Reguler",
    desc: "Pembersihan menyeluruh harian agar tetap segar.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/reguler.jpg", // Gantilah dengan foto cuci reguler
  },
  {
    icon: FiLayers,
    title: "Deep Clean",
    desc: "Perawatan intensif hingga pori material terdalam.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    image: "/images/deepclean.jpeg", // Gantilah dengan foto deep clean
  },
  {
    icon: FiFeather,
    title: "Repaint",
    desc: "Restorasi warna pudar agar tajam seperti baru.",
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-50",
    image: "/images/repaint.jpg", // Gantilah dengan foto repaint
  },
  {
    icon: FiSun,
    title: "Unyellowing",
    desc: "Hapus noda kuning pada midsole akibat oksidasi.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    image: "/images/unyellowing.jpg", // Gantilah dengan foto unyellowing
  },
];

const magicResultsData = [
  {
    id: 1,
    label: "Oksidasi Midsole",
    before: "/images/beforephoto1.jpeg",
    after: "/images/afterphoto1.jpeg",
  },
  {
    id: 2,
    label: "Restorasi Warna",
    before: "/images/beforephoto2.jpeg",
    after: "/images/afterphoto2.jpeg",
  },
  {
    id: 3,
    label: "Kasus Noda Berat",
    before: "/images/beforephoto3.jpeg",
    after: "/images/afterphoto3.jpeg",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects Hero
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // state untuk Magic Result Slider
  const [sliderPos, setSliderPos] = useState(50);
  const [activeMagicResult, setActiveMagicResult] = useState(0);

  // Link Aplikasi
  const appDownloadLink =
    "https://drive.usercontent.google.com/download?id=1qFRCiwx-w7gygMkrSIL_8G8ZZTePX5PW&export=download&authuser=0";

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      {/* 1. HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/laundry-sepatu.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070B14]/90 via-[#070B14]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[#070B14]/20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B14] z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              style={{ y: yText, opacity: opacityHero }}
              className="flex flex-col items-start text-left w-full"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 text-slate-300 rounded-full text-xs md:text-sm font-semibold mb-6 shadow-lg"
              >
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                AI-Powered Shoe Care
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-snug md:leading-tight tracking-tight mb-5 uppercase"
              >
                Perawatan Sepatu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                  Premium,
                </span>{" "}
                <br />
                Di Genggaman.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base md:text-lg text-slate-300 mb-8 max-w-xl font-medium leading-relaxed"
              >
                Kembalikan pesona sepatu kesayanganmu dengan presisi. Didukung
                oleh AI untuk analisis material dan tracking real-time langsung
                di ujung jarimu.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={() => window.open(appDownloadLink, "_blank")}
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base md:text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Unduh Aplikasi <FiSmartphone size={20} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. KENAPA LAUNDRY SEPATU DI CHUPATU? (ANIMASI TELETUBBIES) */}
      {/* ========================================================= */}
      <section className="py-32 bg-white relative z-20 -mt-16 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] border-t border-slate-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-20 relative z-10"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold tracking-widest uppercase text-xs mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              The Chupatu Difference
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-7 tracking-tighter leading-tight">
              Standar Baru Perawatan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Sepatu Premium.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Sepatu Anda pantas mendapatkan lebih dari sekadar &quot;air dan sabun
              biasa&quot;. Di Chupatu, kami memberikan perawatan level eksibisi.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.35, delayChildren: 0.1 },
              },
            }}
            className="grid lg:grid-cols-3 gap-10 relative z-10"
          >
            {whyUsData.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 250, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", bounce: 0.65, duration: 1.2 },
                  },
                }}
                whileHover={{
                  y: -15,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.3 },
                }}
                style={{ perspective: "1000px" }}
                className="group cursor-default"
              >
                <div className="w-full h-full bg-white rounded-[3rem] border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:border-blue-100/50 flex flex-col transform-style-3d overflow-hidden relative">
                  {/* Slot Foto */}
                  <div className="relative w-full h-56 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                    <div
                      className={`absolute bottom-6 left-8 w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center shadow-lg border border-white/50 backdrop-blur-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 translate-z-10`}
                    >
                      <item.icon className={`text-3xl ${item.iconColor}`} />
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10 bg-white">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight group-hover:text-blue-700 transition-colors translate-z-10">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium translate-z-10">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PREVIEW LIVE TRACKING */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>

        <div className={styles.sectionContainer}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                FITUR LIVE TRACKING
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Pantau Sepatumu <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Setiap Detik.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Tinggalkan rasa was-was menunggu. Dengan integrasi GPS presisi,
                Anda bisa melihat pergerakan kurir kami saat menjemput dan
                mengantar sepatu kesayangan Anda secara real-time langsung dari
                layar genggaman.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: FiMap,
                    title: "Akurasi Lokasi Tinggi",
                    desc: "Update posisi kurir tanpa delay berkat integrasi map terkini.",
                  },
                  {
                    icon: FiClock,
                    title: "Estimasi Waktu Presisi",
                    desc: "Ketahui secara pasti menit keberapa kurir tiba di pintu Anda.",
                  },
                  {
                    icon: FiShield,
                    title: "Keamanan Terjamin",
                    desc: "Identitas kurir dan detail plat nomor terverifikasi di aplikasi.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default border border-transparent hover:border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0 border border-blue-100">
                      <item.icon />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mockup Mobile Kanan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              {/* Floating Notif 1 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-10 -left-12 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">
                    Status Update
                  </p>
                  <p className="text-sm font-black text-slate-800">
                    Kurir hampir tiba!
                  </p>
                </div>
              </motion.div>

              {/* Rangka HP */}
              <div className="w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden ring-4 ring-slate-100">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 w-32 mx-auto rounded-b-2xl z-50 flex justify-center items-center gap-2">
                  <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                </div>

                <div className="bg-slate-50 w-full h-full relative flex flex-col">
                  {/* Area Peta */}
                  <div className="flex-1 relative overflow-hidden bg-[#E2E8F0]">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(#94A3B8 2px, transparent 2px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 20 80 Q 20 40 50 50 T 80 20"
                        fill="transparent"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        className="animate-pulse opacity-70"
                      />
                    </svg>
                    <div className="absolute left-[20%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white z-10">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white z-10">
                      <FiTarget className="text-white w-3 h-3" />
                    </div>

                    <motion.div
                      className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 z-20"
                      animate={{
                        left: ["80%", "50%", "20%"],
                        top: ["20%", "50%", "80%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                      }}
                      style={{ x: "-50%", y: "-50%" }}
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <FiTruck size={20} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Info Kurir */}
                  <div className="bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] relative z-30 p-6 flex flex-col -mt-4">
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-black text-slate-800 text-lg">
                          Menuju Lokasimu
                        </h3>
                        <p className="text-sm text-slate-500 font-medium mt-1">
                          Estimasi tiba:{" "}
                          <span className="text-blue-600 font-bold animate-pulse">
                            5 Menit
                          </span>
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <FiMap size={20} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <img
                        src="https://ui-avatars.com/api/?name=Budi+Santoso&background=023e8a&color=fff"
                        alt="Avatar"
                        className="w-12 h-12 rounded-full shadow-sm"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm">
                          Budi Santoso
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          B 1234 ABC • Honda Beat
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 cursor-pointer hover:bg-green-200 transition">
                        <FiSmartphone size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notif 2 */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-24 -right-10 z-20 bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 text-white"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </div>
                <p className="text-sm font-bold">GPS Aktif</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRIORITAS KAMI */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#48cae4 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className={styles.sectionContainer}>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Prioritas <br />
                <span className="text-blue-400">Utama Kami.</span>
              </h2>
              <p className="text-blue-100/70 mb-8 text-lg">
                Janji kami kepada Anda bukan hanya tentang sepatu yang bersih,
                tapi juga ketenangan pikiran.
              </p>
              <button className="flex items-center gap-3 text-white font-bold pb-2 border-b-2 border-blue-50 hover:text-blue-400 transition-colors">
                Pelajari Garansi Kami <FiArrowRight />
              </button>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {prioritiesData.map((priority, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`p-8 rounded-[2rem] border border-slate-700 bg-slate-800/50 backdrop-blur-sm ${i === 2 ? "sm:col-span-2 bg-gradient-to-br from-blue-900/50 to-slate-800/50" : ""}`}
                >
                  <priority.icon className="text-4xl text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{priority.title}</h3>
                  <p className="text-slate-400 text-sm">{priority.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. LAYANAN KAMI (ANIMASI BOUNCY SLIDE-IN + FOTO CARD) */}
      {/* ========================================================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight leading-tight">
              Layanan Perawatan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                Terbaik Untuk Anda.
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Pilih menu perawatan yang didesain khusus untuk mengembalikan
              kondisi prima sepatu Anda.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesData.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={{
                  // Animasi Bouncy Slide-In Horizontal (dari kanan)
                  hidden: { opacity: 0, x: 100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", bounce: 0.5, duration: 1 },
                  },
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { type: "spring", bounce: 0.4 },
                }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Slot Foto */}
                <div className="relative w-full h-48 overflow-hidden shrink-0">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                  <div
                    className={`absolute top-6 right-6 w-14 h-14 ${srv.bgColor} rounded-2xl flex items-center justify-center border border-white/50 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500`}
                  >
                    <srv.icon className={`text-2xl ${srv.color}`} />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="text-2xl font-extrabold mb-3 text-slate-950 group-hover:text-blue-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">
                    {srv.desc}
                  </p>

                  <button className="flex items-center gap-2.5 text-blue-600 font-bold text-sm w-full pt-5 border-t border-slate-100 group-hover:gap-3 transition-all duration-300">
                    Lihat Detail
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <FiArrowRight size={16} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. MAGIC RESULT (DENGAN TABS DAN FOTO ASLI) */}
      {/* ========================================================= */}
      <section className="py-32 bg-slate-900 relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className={styles.sectionContainer}>
          <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
            >
              Magic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Result.
              </span>
            </motion.h2>
            <p className="text-lg text-slate-300 mb-8">
              Geser garis untuk melihat perbedaan nyata kotoran membandel
              sebelum dan sesudah perawatan ahli kami.
            </p>

            {/* TAB SELEKTOR KASUS */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {magicResultsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMagicResult(idx)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${
                    activeMagicResult === idx
                      ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      : "bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)] border-[6px] border-slate-800 group bg-slate-900"
          >
            {/* Animasi Transisi antar Tab */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMagicResult}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* GAMBAR BEFORE (LAPISAN BAWAH) */}
                <div className="absolute inset-0">
                  <img
                    src={magicResultsData[activeMagicResult].before}
                    className="w-full h-full object-cover"
                    alt="Sebelum Perawatan"
                  />
                  <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white px-6 py-2 rounded-full font-black tracking-wider text-sm shadow-xl border border-white/10 z-10">
                    BEFORE
                  </div>
                </div>

                {/* GAMBAR AFTER (LAPISAN ATAS DENGAN CLIP PATH) */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                  }}
                >
                  <img
                    src={magicResultsData[activeMagicResult].after}
                    className="w-full h-full object-cover"
                    alt="Sesudah Perawatan"
                  />
                  <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full font-black tracking-wider text-sm shadow-xl border border-white/20">
                    AFTER
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* GARIS PEMBATAS (SLIDER HANDLE) */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.9)] z-20 pointer-events-none"
              style={{ left: `calc(${sliderPos}% - 3px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-blue-600 border-4 border-slate-200 transition-transform group-hover:scale-110">
                <FiChevronLeft size={24} className="-mr-1" />
                <FiChevronRight size={24} className="-ml-1" />
              </div>
            </div>

            {/* INPUT RANGE INVISIBLE UNTUK MENGGESER */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-pan-y"
            />
          </motion.div>

          <p className="text-center text-slate-400 text-sm mt-6 animate-pulse font-medium">
            <FiChevronLeft className="inline" /> Geser ke kiri dan kanan{" "}
            <FiChevronRight className="inline" />
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. HOW IT WORKS (ANIMASI 3D FLIP & NEON ICON) */}
      {/* ========================================================= */}
      <section className="py-24 bg-white">
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">
              4 Langkah Menuju{" "}
              <span className="text-blue-600">Sepatu Bersih.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: FiSmartphone,
                title: "1. Order",
                desc: "Pesan layanan via aplikasi.",
                color: "from-blue-600 to-cyan-500",
                glow: "shadow-blue-500/20",
              },
              {
                icon: FiTruck,
                title: "2. Pick-up",
                desc: "Kurir jemput ke lokasi Anda.",
                color: "from-emerald-500 to-teal-400",
                glow: "shadow-emerald-500/20",
              },
              {
                icon: FiDroplet,
                title: "3. Cleaning",
                desc: "Proses cuci standar tinggi.",
                color: "from-fuchsia-600 to-purple-500",
                glow: "shadow-fuchsia-500/20",
              },
              {
                icon: FiPackage,
                title: "4. Delivery",
                desc: "Sepatu kembali rapi.",
                color: "from-amber-500 to-orange-400",
                glow: "shadow-amber-500/20",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  // Animasi Flip & Scale Up
                  hidden: { opacity: 0, scale: 0, rotateY: 180 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: { type: "spring", bounce: 0.3, duration: 1 },
                  },
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="text-center group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] transition-all hover:border-slate-200"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`w-28 h-28 mx-auto mb-10 relative transform-style-3d transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${step.glow} group-hover:shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-[2rem] flex items-center justify-center text-5xl text-white shadow-lg border border-white/50 backdrop-blur-sm transform translate-z-10`}
                  >
                    <step.icon className="drop-shadow-lg" />
                  </div>
                </div>

                <h4 className="font-extrabold text-2xl text-slate-950 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. MASSIVE CTA */}
      <section className="py-32">
        <div className={styles.sectionContainer}>
          <div className="bg-gradient-to-br from-[#0F172A] to-blue-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Berikan Yang Terbaik <br /> Untuk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Sepatumu.
                </span>
              </h2>
              <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
                Download aplikasi Chupatu sekarang dan nikmati diskon 50% untuk
                cucian pertamamu menggunakan teknologi AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => window.open(appDownloadLink, "_blank")}
                  className="px-10 py-5 bg-white text-blue-900 rounded-full font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  DOWNLOAD APLIKASI <FiSmartphone size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
