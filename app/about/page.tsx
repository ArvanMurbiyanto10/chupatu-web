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
  FiCheckCircle,
} from "react-icons/fi";
import styles from "./about.module.css";

export default function AboutPage() {
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
    },
    {
      icon: FiTarget,
      title: "Presisi AI",
      desc: "Rekomendasi treatment otomatis berbasis Gemini untuk setiap jenis material.",
    },
    {
      icon: FiSmartphone,
      title: "Transparansi Penuh",
      desc: "Pantau pergerakan kurir secara real-time dari penjemputan hingga selesai.",
    },
    {
      icon: FiShield,
      title: "Keamanan Berlapis",
      desc: "Validasi Barcode mutakhir dan enkripsi data untuk ketenangan pelanggan.",
    },
  ];

  // Variabel animasi untuk efek stagger (muncul berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
  };

  return (
    <div className={styles.wrapper}>
      {/* Latar Belakang Cahaya Halus */}
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* ================= 1. HERO SECTION (VISI UTAMA) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Tentang Chupatu Engine v2.0
          </div>
          <h1 className={styles.title}>
            Mendigitalisasi <br className="hidden md:block" />
            <span className={styles.textHighlight}>Langkahmu.</span>
          </h1>
          <p className={styles.subtitle}>
            Berawal dari keresahan akan sistem manual, kami membangun Chupatu:
            Ekosistem digital revolusioner untuk transformasi industri jasa
            perawatan sepatu yang efisien, transparan, dan modern.
          </p>
        </motion.div>

        {/* ================= 2. VISI & MISI (BENTO GRID) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.visiMisiGrid}
        >
          {/* Visi Card */}
          <motion.div
            variants={itemVariants}
            className={`${styles.cardVisiMisi} md:col-span-2 bg-[#0F172A] text-white relative group`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className={`${styles.visiIcon}`}>
                <FiTrendingUp />
              </div>
              <div>
                <h2 className={`${styles.visiTitle} text-white`}>Visi Kami.</h2>
                <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed font-light max-w-2xl">
                  Menjadi pionir digitalisasi layanan perawatan sepatu di
                  Indonesia melalui integrasi teknologi AI dan IoT, menciptakan
                  standar baru dalam kenyamanan dan kepuasan pelanggan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            variants={itemVariants}
            className={`${styles.cardVisiMisi} bg-white border border-slate-200`}
          >
            <div className={styles.misiIcon}>
              <FiDatabase />
            </div>
            <h2 className={styles.visiTitle}>Misi Kami.</h2>
            <ul className={styles.listMisi}>
              {misiPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <FiCheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    size={18}
                  />
                  <span className="text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ================= 3. LATAR BELAKANG (STORY) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={styles.problemSolutionSection}
        >
          <div className={styles.problemSolutionGlow}></div>
          <div className={styles.storyGrid}>
            {/* Visual Kiri */}
            <div className={styles.imagePlaceholder}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9effb64fda70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay rounded-[2.5rem]"></div>
              <div className="relative z-10 flex flex-col items-center">
                <FiZap className="text-cyan-400 mb-4" size={64} />
                <span className="text-white font-bold tracking-widest uppercase text-sm">
                  Chupatu System
                </span>
              </div>
            </div>

            {/* Teks Kanan */}
            <div className="px-4 md:px-8">
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-3 block">
                Latar Belakang
              </span>
              <h2 className={styles.storyTitle}>
                Dari Manual <br /> Menuju{" "}
                <span className="text-blue-600">Terintegrasi.</span>
              </h2>
              <div className={styles.storyText}>
                <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                    <FiAlertTriangle size={20} />
                  </div>
                  <p>
                    <strong className="text-slate-900 block mb-1">
                      Masalah Operasional
                    </strong>
                    Pemesanan manual via pesan singkat rentan menyebabkan data
                    terlewat dan human error.
                  </p>
                </div>

                <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                    <FiClock size={20} />
                  </div>
                  <p>
                    <strong className="text-slate-900 block mb-1">
                      Kurangnya Transparansi
                    </strong>
                    Invoicing manual membuat pelanggan cemas menunggu status
                    pengerjaan sepatunya.
                  </p>
                </div>

                <div className="flex items-start gap-5 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                    <FiZap size={20} />
                  </div>
                  <p>
                    <strong className="text-blue-900 block mb-1">
                      Solusi Chupatu v2.0
                    </strong>
                    Menyatukan Web Admin dan Mobile App ke dalam satu ekosistem
                    presisi tanpa interupsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= 4. KEUNGGULAN (NILAI UTAMA) ================= */}
        <div className={styles.valuesSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={styles.valuesTitle}>
              Empat Pilar <span className="text-blue-600">Keunggulan.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Fondasi teknologi yang membuat Chupatu menjadi layanan perawatan
              sepatu paling inovatif saat ini.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.valuesGrid}
          >
            {valuePoints.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${styles.cardValue} group`}
              >
                <div className={styles.valueIconBox}>
                  <item.icon />
                </div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
