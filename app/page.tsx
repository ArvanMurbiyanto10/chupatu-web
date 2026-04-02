"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiSmartphone,
  FiCpu,
  FiMap,
  FiFileText,
  FiBox,
  FiCheckCircle,
  FiChevronRight,
  FiStar,
  FiShield,
  FiZap,
  FiDroplet,
  FiFeather,
  FiLayers,
  FiSun,
} from "react-icons/fi";
import styles from "./home.module.css";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const servicesData = [
    {
      icon: FiDroplet,
      title: "Cuci Reguler",
      desc: "Pembersihan menyeluruh untuk penggunaan harian.",
    },
    {
      icon: FiLayers,
      title: "Deep Clean",
      desc: "Perawatan intensif hingga ke pori-pori material sepatu.",
    },
    {
      icon: FiFeather,
      title: "Repaint",
      desc: "Restorasi warna pudar agar kembali tajam seperti baru.",
    },
    {
      icon: FiSun,
      title: "Unyellowing",
      desc: "Menghilangkan noda kuning membandel pada midsole sepatu.",
    },
  ];

  const bottomIcons = [
    { icon: FiSmartphone, label: "Akses Cepat" },
    { icon: FiCpu, label: "AI Gemini" },
    { icon: FiMap, label: "Live Tracking" },
    { icon: FiFileText, label: "Invoice Digital" },
    { icon: FiBox, label: "Rak Digital" },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Pilih Layanan",
      desc: "Pilih perawatan yang sepatumu butuhkan via UI intuitif.",
    },
    {
      step: "02",
      title: "AI Menganalisis",
      desc: "Magic Result AI merekomendasikan treatment terbaik.",
    },
    {
      step: "03",
      title: "Kurir Menjemput",
      desc: "Pantau pergerakan kurir secara real-time via GPS.",
    },
    {
      step: "04",
      title: "Sepatu Kembali",
      desc: "Verifikasi pengembalian dan nikmati sepatu seperti baru.",
    },
  ];

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow}></div>
        <div className={`${styles.sectionContainer} ${styles.heroGrid}`}>
          <motion.div
            style={{ y: yText, opacity }}
            className="relative z-10 pt-10 lg:pt-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroTitle}
            >
              Perawatan Sepatu <br />
              <span className="text-blue-600">Premium,</span> <br />
              Di Genggaman.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={styles.heroSubtitle}
            >
              Didukung AI. Lacak secara Real-Time. Hasil Magis. Kembalikan
              pesona sepatu kesayanganmu tanpa harus keluar rumah.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.btnGroup}
            >
              <button
                className={`${styles.btnNavy} hover:bg-blue-900 hover:-translate-y-1`}
              >
                UNDUH SEKARANG <FiArrowRight />
              </button>
              <button
                className={`${styles.btnOutline} hover:bg-blue-50 hover:-translate-y-1`}
              >
                LEBIH LANJUT
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: yImage }}
            className={`hidden lg:flex ${styles.mockupContainer}`}
          >
            <motion.div
              initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: -5, scale: 1 }}
              transition={{ duration: 1.2 }}
              className={styles.mainPhone}
            >
              <div className={styles.phoneScreen}>
                <div className="bg-white px-4 pt-12 pb-4 border-b border-blue-50 flex items-center justify-between z-10">
                  <FiChevronRight className="rotate-180 text-xl text-[0077b6]" />
                  <h3 className="font-bold text-sm text-[0077b6]">
                    Live Tracking
                  </h3>
                  <FiShield className="text-[0077b6]" />
                </div>
                <div className="flex-1 bg-blue-50 relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 50 100 Q 150 150 200 300 T 150 450"
                      fill="transparent"
                      stroke="0077b6"
                      strokeWidth="4"
                      strokeDasharray="8 8"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute top-[280px] left-[180px] w-10 h-10 bg-[0077b6] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                    <FiMap />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className={`${styles.glassCard} ${styles.cardBooking}`}
            >
              <h4 className="font-bold text-sm mb-3 text-[0077b6]">
                Booking Progress
              </h4>
              <ul className="space-y-2 text-xs font-bold text-[0077b6]/70">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-600" /> Confirmed
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-600" /> Pick-up
                </li>
                <li className="flex items-center gap-2 text-blue-600 relative">
                  <span className="w-2 h-2 rounded-full bg-blue-600 ml-1 animate-ping absolute -left-1"></span>
                  <span className="ml-3">Cleaning</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. KENAPA HARUS CHUPATU? */}
      <section className={styles.whyChupatuSection}>
        <div className={styles.whyContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.whyBadge}
          >
            Kenapa Harus Chupatu?
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.whyParagraph}
          >
            Karena sepatumu layak mendapatkan perawatan terbaik, bukan hanya
            dicuci bersih. Setiap sepatu dibersihkan dengan teknik khusus sesuai
            bahan, dan{" "}
            <span className={styles.whyHighlight}>
              sabun pilihan ibu agar warna tetap tajam, bentuk tetap rapi, dan
              umur sepatu lebih panjang.
            </span>{" "}
            Noda bandel? Bau? Kusam?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${styles.whyParagraph} !text-white !font-bold`}
          >
            Kami tangani sampai bersih maksimal tanpa bikin sepatu rusak.
          </motion.p>
        </div>
      </section>

      {/* 3. LAYANAN */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Layanan Utama <span className="text-blue-600">Kami.</span>
            </h2>
            <p className={styles.sectionDesc}>
              Berbagai kategori layanan profesional yang disesuaikan dengan
              kebutuhan material sepatumu.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {servicesData.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${styles.serviceCard} group hover:bg-[0077b6] hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="w-16 h-16 bg-white text-[0077b6] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <srv.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[0077b6] group-hover:text-white transition-colors">
                  {srv.title}
                </h3>
                <p className="text-[0077b6]/70 font-medium group-hover:text-blue-100 transition-colors">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID */}
      <section className={styles.bentoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.bentoGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${styles.bentoCard} group hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl`}
            >
              <div>
                <h3 className="text-xl font-black mb-2 uppercase text-[0077b6]">
                  Magic Result AI
                </h3>
                <p className="text-[0077b6]/80 text-sm font-medium">
                  Analisis otomatis kerusakan dan material sepatu.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between bg-blue-50/50 p-4 rounded-2xl border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <span className="font-bold text-blue-700 flex items-center gap-1">
                  <FiCpu /> Gemini Engine
                </span>
                <span className="w-12 h-12 bg-[0077b6] rounded-xl flex items-center justify-center text-white">
                  <FiZap />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`${styles.bentoCardDark} hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-[0077b6] to-[0077b6]"></div>
              <div className="relative z-10 md:w-2/3 h-full flex flex-col justify-center">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  <FiMap />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase text-white">
                  Live Tracking Real-Time.
                </h3>
                <p className="text-blue-100/90 font-medium">
                  Pantau pergerakan kurir secara langsung dengan akurasi tinggi
                  via integrasi Polyline Routing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ICON STRIP */}
      <section className={styles.iconStripSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.iconGrid}>
            {bottomIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                <div
                  className={`${styles.iconBox} group-hover:bg-[0077b6] group-hover:text-white group-hover:-translate-y-2`}
                >
                  <item.icon />
                </div>
                <span className={styles.iconLabel}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className={styles.stepSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
            >
              Cara Kerja <span className="text-blue-600">Sistem Kami.</span>
            </motion.h2>
          </div>
          <div className={styles.stepGrid}>
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`${styles.stepCard} hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl`}
              >
                <span className={styles.stepNumber}>{step.step}</span>
                <div className="w-12 h-12 bg-[0077b6] text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <FiCheckCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-[0077b6] mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-[0077b6]/80 font-medium relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionContainer}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Apa Kata <span className="text-blue-400">Mereka?</span>
            </h2>
          </div>
          <div className={styles.testimonialGrid}>
            {[
              {
                name: "Bima, Sneakerhead",
                text: "Fitur live trackingnya juara! Saya nggak perlu lagi was-was nungguin kurir datang ambil sepatu.",
              },
              {
                name: "Sarah, Mahasiswi",
                text: "Magic Result AI benar-benar pintar. Otomatis tahu kalau sepatu kulit saya butuh treatment khusus.",
              },
              {
                name: "Reza, Pekerja Kantoran",
                text: "Aplikasi paling rapi. Invoice PDF dan sistem barcodenya bikin ngerasa aman banget.",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className={`${styles.testimonialCard} hover:-translate-y-2`}
              >
                <div className="flex text-amber-400 mb-4">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
                <p className="text-white/90 italic mb-6">"{testi.text}"</p>
                <h4 className="font-bold text-white">— {testi.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MASSIVE CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow}></div>
        <div className={styles.ctaContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaTitle}
          >
            SIAP MERAWAT <br /> KOLEKSIMU?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services">
              <button
                className={`${styles.ctaBtn} hover:scale-105 hover:bg-blue-50`}
              >
                DOWNLOAD APLIKASI <FiArrowRight className="text-blue-600" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
