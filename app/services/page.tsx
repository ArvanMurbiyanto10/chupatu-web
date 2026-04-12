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
  FiCreditCard,
} from "react-icons/fi";
import styles from "./services.module.css";

export default function ServicesPage() {
  const appCapabilities = [
    {
      id: 1,
      title: "Sistem Onboarding",
      icon: FiSmartphone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      bulletColor: "bg-blue-400",
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
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      bulletColor: "bg-indigo-400",
      points: [
        "Pemesanan Intuitif & Custom Service.",
        "Magic Result (AI) berbasis Gemini.",
        "Sistem Review & Rating transparan.",
      ],
    },
    {
      id: 3,
      title: "Live Tracking",
      icon: FiMap,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      bulletColor: "bg-emerald-400",
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
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      bulletColor: "bg-amber-400",
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
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      bulletColor: "bg-rose-400",
      points: [
        "Direct Chat terintegrasi.",
        "Notifikasi Real-Time update.",
        "Detail histori informasi.",
      ],
    },
    {
      id: 6,
      title: "Rak Sepatu Digital",
      icon: FiBox,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      bulletColor: "bg-cyan-400",
      points: [
        "Manajemen profil koleksi sepatu.",
        "Fast Re-Booking order kilat.",
        "Lacak histori perawatan.",
      ],
    },
    {
      id: 7,
      title: "UI/UX Dinamis",
      icon: FiUserCheck,
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      bulletColor: "bg-violet-400",
      points: [
        "Kendali penuh manajemen profil.",
        "Antarmuka Glassmorphism premium.",
        "Transisi Shimmer modern.",
      ],
    },
    {
      id: 8,
      title: "Payment Gateway",
      icon: FiCreditCard,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      bulletColor: "bg-orange-400",
      points: [
        "Multi-metode pembayaran.",
        "Verifikasi saldo otomatis.",
        "Support E-Wallet & Virtual Account.",
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Efek Cahaya Latar */}
      <div className={styles.bgGlowLeft}></div>
      <div className={styles.bgGlowRight}></div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Preview Kapabilitas Aplikasi
          </div>
          <h1 className={styles.title}>
            Fitur Canggih di Balik <br className="hidden md:block" />
            <span className={styles.textHighlight}>Chupatu.</span>
          </h1>
          <p className={styles.subtitle}>
            Eksplorasi arsitektur aplikasi kelas enterprise kami. Semua didesain
            dengan presisi tinggi untuk kenyamanan dan keamanan Anda.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className={styles.grid}
        >
          {appCapabilities.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", bounce: 0.4 },
                },
              }}
              className={`${styles.card} group`}
            >
              <div className={styles.cardHeader}>
                <div
                  className={`${styles.iconBox} ${feature.bgColor} ${feature.color}`}
                >
                  <feature.icon size={26} strokeWidth={2.5} />
                </div>
                <h2 className={styles.cardTitle}>{feature.title}</h2>
              </div>
              <ul className={styles.list}>
                {feature.points.map((point, i) => (
                  <li key={i} className={styles.listItem}>
                    <div
                      className={`${styles.bullet} ${feature.bulletColor} group-hover:scale-125`}
                    ></div>
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
