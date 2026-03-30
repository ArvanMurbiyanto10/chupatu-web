"use client";

import { motion } from "framer-motion";
import {
  FiSmartphone,
  FiCpu,
  FiMap,
  FiFileText,
  FiMessageCircle,
  FiBox,
  FiUserCheck,
} from "react-icons/fi";
import styles from "./services.module.css";

export default function ServicesPage() {
  const appCapabilities = [
    {
      id: 1,
      title: "Sistem Onboarding",
      icon: FiSmartphone,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      points: [
        "Welcome & Landing Page Lottie.",
        "Login instan via Google One-Tap.",
        "Keamanan & enkripsi privasi.",
      ],
    },
    {
      id: 2,
      title: "Pemesanan Cerdas",
      icon: FiCpu,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      points: [
        "Pemesanan Intuitif & Custom Service.",
        "Magic Result (AI) berbasis Gemini.",
        "Sistem Review & Rating transparan.",
      ],
    },
    {
      id: 3,
      title: "Live Tracking Real-Time",
      icon: FiMap,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      points: [
        "Integrasi Peta Interaktif.",
        "Status Progress transparan.",
        "Polyline Routing visualisasi rute.",
      ],
    },
    {
      id: 4,
      title: "Digital Invoice",
      icon: FiFileText,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      points: [
        "Manajemen Riwayat Pesanan.",
        "Auto-Generated Nota PDF.",
        "Barcode Verification.",
      ],
    },
    {
      id: 5,
      title: "Pusat Komunikasi",
      icon: FiMessageCircle,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      points: [
        "Direct Chat terintegrasi.",
        "Notifikasi Real-Time.",
        "Detail histori informasi.",
      ],
    },
    {
      id: 6,
      title: "Rak Sepatu Digital",
      icon: FiBox,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      points: [
        "Manajemen profil koleksi sepatu.",
        "Fast Re-Booking kilat.",
        "Lacak histori perawatan.",
      ],
    },
    {
      id: 7,
      title: "Personalisasi UI Dinamis",
      icon: FiUserCheck,
      color: "text-violet-500",
      bgColor: "bg-violet-50",
      points: [
        "Kendali penuh manajemen profil.",
        "Antarmuka Glassmorphism premium.",
        "Transisi Shimmer Animations modern.",
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgGlowLeft}></div>
      <div className={styles.bgGlowRight}></div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>
            Fitur Canggih di Balik{" "}
            <span className={styles.textHighlight}>Chupatu.</span>
          </h1>
          <p className={styles.subtitle}>
            Eksplorasi arsitektur aplikasi kelas enterprise kami. Semua didesain
            untuk kenyamananmu.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className={styles.grid}
        >
          {appCapabilities.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${styles.card} ${index === 6 ? styles.cardCenterLast : ""}`}
            >
              <div className={styles.cardHeader}>
                <div
                  className={`${styles.iconBox} ${feature.bgColor} ${feature.color}`}
                >
                  <feature.icon size={28} />
                </div>
                <h2 className={styles.cardTitle}>{feature.title}</h2>
              </div>
              <ul className={styles.list}>
                {feature.points.map((point, i) => (
                  <li key={i} className={styles.listItem}>
                    <div className={styles.bullet}></div>
                    <p className={styles.listText}>{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
