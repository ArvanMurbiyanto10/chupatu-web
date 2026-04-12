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
  FiCpu,
  FiMap,
  FiFileText,
  FiBox,
  FiCheckCircle,
  FiShield,
  FiZap,
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
} from "react-icons/fi";
import styles from "./home.module.css";

// --- DATA CONSTANTS ---
const whyUsData = [
  {
    icon: FiTarget,
    title: "Bukan Sekadar Dicuci",
    desc: "Kami merawat. Setiap material dari Suede, Canvas, hingga Leather memiliki SOP penanganan dan chemical yang berbeda untuk mencegah kerusakan.",
  },
  {
    icon: FiAward,
    title: "Teknisi Tersertifikasi",
    desc: "Sepatu Anda ditangani oleh spesialis yang telah melewati pelatihan ketat dan memahami anatomi sepatu secara mendalam.",
  },
  {
    icon: FiDroplet,
    title: "Chemical Premium",
    desc: "Kami menggunakan sabun pembersih khusus sepatu bersertifikat yang ramah lingkungan dan aman untuk warna asli sepatu Anda.",
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

const servicesData = [
  {
    icon: FiDroplet,
    title: "Cuci Reguler",
    desc: "Pembersihan menyeluruh harian agar tetap segar.",
    color: "bg-blue-50",
  },
  {
    icon: FiLayers,
    title: "Deep Clean",
    desc: "Perawatan intensif hingga pori material terdalam.",
    color: "bg-blue-100",
  },
  {
    icon: FiFeather,
    title: "Repaint",
    desc: "Restorasi warna pudar agar tajam seperti baru.",
    color: "bg-blue-50",
  },
  {
    icon: FiSun,
    title: "Unyellowing",
    desc: "Hapus noda kuning pada midsole akibat oksidasi.",
    color: "bg-blue-100",
  },
];

// DATA BARU: Data Foto Before-After
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

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // State untuk Magic Result Slider
  const [sliderPos, setSliderPos] = useState(50);
  const [activeMagicResult, setActiveMagicResult] = useState(0);

  // Link Google Drive Aplikasi Chupatu
  const appDownloadLink =
    "https://drive.usercontent.google.com/download?id=1qFRCiwx-w7gygMkrSIL_8G8ZZTePX5PW&export=download&authuser=0";

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      {/* 1. HERO SECTION (RATA KIRI & BACKGROUND FOTO) */}
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
                <button
                  onClick={() =>
                    window.scrollTo({ top: 800, behavior: "smooth" })
                  }
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-transparent border border-slate-500 text-white font-bold text-base md:text-lg transition-all duration-300 hover:bg-slate-800 hover:border-slate-700 flex items-center justify-center w-full sm:w-auto"
                >
                  Lihat Layanan
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. KENAPA LAUNDRY SEPATU DI CHUPATU? (DENGAN ANIMASI PREMIUM) */}
      {/* ========================================================= */}
      <section className="py-32 bg-slate-50 relative z-20 -mt-16 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-white/50">
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">
              The Chupatu Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Kenapa Harus Cuci Sepatu di Chupatu?
            </h2>
            <p className="text-lg text-slate-600">
              Sepatu kesayangan Anda pantas mendapatkan lebih dari sekadar "air
              dan sabun biasa". Kami memberikan perawatan level eksibisi.
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
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyUsData.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
                  },
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                // Desain kartu di-update dengan Tailwind murni agar efek spesifiknya jalan sempurna
                className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-300 z-10 overflow-hidden cursor-default"
              >
                {/* Dynamic Background Gradient pada Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Glowing Orb di belakang Ikon */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-150"></div>

                <div className="relative z-20">
                  {/* Ikon Box Animasi */}
                  <motion.div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white mb-8 shadow-lg shadow-blue-500/30 transform transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:rotate-6 group-hover:scale-110">
                    <item.icon />
                  </motion.div>

                  {/* Teks */}
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* Animated Progress Bar Decor */}
                  <div className="mt-8 w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
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

              {/* Rangka HP (Phone Mockup) */}
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

      {/* 5. LAYANAN KAMI */}
      <section className="py-32 bg-white">
        <div className={styles.sectionContainer}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Layanan Perawatan <span className="text-blue-600">Terbaik.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Pilih menu perawatan yang didesain khusus untuk mengembalikan
              kondisi prima sepatu Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${styles.serviceCard} group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-colors duration-500 ${srv.color} text-blue-600 group-hover:bg-blue-600 group-hover:text-white shadow-inner`}
                  >
                    <srv.icon />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Lihat Detail <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* 7. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className={styles.sectionContainer}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">
              4 Langkah Menuju Sepatu Bersih.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FiSmartphone,
                title: "1. Order",
                desc: "Pesan layanan via aplikasi.",
              },
              {
                icon: FiTruck,
                title: "2. Pick-up",
                desc: "Kurir jemput ke lokasi Anda.",
              },
              {
                icon: FiDroplet,
                title: "3. Cleaning",
                desc: "Proses cuci standar tinggi.",
              },
              {
                icon: FiBox,
                title: "4. Delivery",
                desc: "Sepatu kembali rapi.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-4xl text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-500/30">
                  <step.icon />
                </div>
                <h4 className="font-black text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
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
