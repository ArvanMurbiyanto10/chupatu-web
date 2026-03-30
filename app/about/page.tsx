"use client";

import { motion } from "framer-motion";
import {
  FiZap,
  FiDatabase,
  FiSmartphone,
  FiMonitor,
  FiClock,
  FiAlertTriangle,
  FiTarget,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import styles from "./about.module.css";

export default function AboutPage() {
  const misiPoints = [
    "Membangun ekosistem digital terintegrasi Web & Mobile.",
    "Menerapkan AI (Gemini Engine) untuk analisis perawatan material sepatu.",
    "Menyediakan transparansi Live GPS Tracking penjemputan & pengerjaan.",
    "Digitalisasi transaksi & invoicing dengan keamanan Barcode Verification.",
  ];

  const valuePoints = [
    {
      icon: FiMonitor,
      title: "Ekosistem Terintegrasi",
      desc: "Sinergi antara Web Admin, Backend API (Laravel), dan Mobile Customer.",
    },
    {
      icon: FiTarget,
      title: "Presisi Teknologi",
      desc: "Rekomendasi treatment Magic Result AI berbasis Gemini untuk material sepatu.",
    },
    {
      icon: FiSmartphone,
      title: "Transparansi Penuh",
      desc: "Live Tracking Real-time dari penjemputan hingga sepatu kembali.",
    },
    {
      icon: FiShield,
      title: "Keamanan Berlapis",
      desc: "Validasi Barcode, Invoicing PDF, dan Enkripsi Data Pelanggan.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* ================= 1. HERO SECTION (VISI UTAMA) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <FiZap className="text-cyan-400" />
            Tentang Chupatu Engine v2.0
          </div>
          <h1 className={styles.title}>
            Mendigitalisasi{" "}
            <span className={styles.textHighlight}>Langkahmu.</span>
          </h1>
          <p className={styles.subtitle}>
            Berawal dari keresahan akan sistem manual, kami membangun Chupatu:
            Ekosistem digital revolusioner untuk transformasi industri jasa
            perawatan sepatu yang efisien, transparan, dan modern.
          </p>
        </motion.div>

        {/* ================= 2. VISI & MISI (KONTEN TAMBAHAN) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.visiMisiGrid}
        >
          {/* Visi */}
          <div className={`${styles.cardVisiMisi} md:col-span-2 text-center`}>
            <div className={`${styles.visiIcon} mx-auto`}>
              <FiTrendingUp />
            </div>
            <h2 className={styles.visiTitle}>Visi Kami</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Menjadi pionir digitalisasi layanan perawatan sepatu di Indonesia
              melalui integrasi teknologi AI dan IoT, menciptakan standar baru
              dalam hal kenyamanan, keamanan, dan kepuasan pelanggan.
            </p>
          </div>

          {/* Misi */}
          <div className={styles.cardVisiMisi}>
            <div className={styles.misiIcon}>
              <FiDatabase />
            </div>
            <h2 className={styles.misiTitle}>Misi Kami</h2>
            <ul className={styles.listMisi}>
              {misiPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiZap
                    className="text-cyan-400 mt-1.5 flex-shrink-0"
                    size={16}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ================= 3. LATAR BELAKANG (BENTO-STYLE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.problemSolutionSection}
        >
          <div className={styles.problemSolutionGlow}></div>
          <h2 className={styles.storyTitle}>
            Dari Masalah Manual Menuju Solusi Terintegrasi
          </h2>

          <div className={styles.storyGrid}>
            <div className={styles.imagePlaceholder}>
              <FiZap className="text-cyan-950" />
            </div>

            <div className={styles.storyText}>
              <p className="flex items-start gap-4">
                <FiAlertTriangle
                  className="text-cyan-400 mt-1.5 flex-shrink-0"
                  size={20}
                />
                <span>
                  Kondisi saat ini, pelanggan sering mengalami kesulitan
                  operasional karena pemesanan yang masih manual via pesan
                  singkat, menyebabkan data rentan terlewat.
                </span>
              </p>
              <p className="flex items-start gap-4">
                <FiClock
                  className="text-cyan-400 mt-1.5 flex-shrink-0"
                  size={20}
                />
                <span>
                  Manual invoicing dan kurangnya transparansi status pengerjaan
                  membuat pelanggan tegang menunggu kepastian sepatunya kembali.
                </span>
              </p>
              <p className="flex items-start gap-4">
                <FiZap
                  className="text-cyan-400 mt-1.5 flex-shrink-0"
                  size={20}
                />
                <span>
                  Sistem Chupatu mengintegrasikan Web Application (Web
                  Admin/Command Center) dan Mobile Application (Customer) untuk
                  alur kerja yang tak terinterupsi.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= 4. KEUNGGULAN (NILAI UTAMA) ================= */}
        <div className={styles.valuesSection}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.valuesTitle}
          >
            Empat Pilar Keunggulan Chupatu
          </motion.h2>

          <div className={styles.valuesGrid}>
            {valuePoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`${styles.cardValue} group`}
              >
                <div className={styles.valueIconBox}>
                  <item.icon />
                </div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
