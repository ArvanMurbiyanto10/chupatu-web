"use client";

import { motion, Variants } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiPhoneCall,
  FiArrowRight,
} from "react-icons/fi";
import styles from "./contact.module.css";

// --- ANIMASI REUSABLE (Diletakkan di LUAR fungsi utama) ---
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      {/* Latar Belakang Cahaya / Glow Ambience */}
      <div className={styles.bgGlow}></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className={styles.container}>
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className={styles.header}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Support & Partnership
          </div>
          <h1 className={styles.title}>
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Terhubung.
            </span>
          </h1>
          <p className={styles.subtitle}>
            Punya pertanyaan seputar layanan Chupatu, penawaran kemitraan, atau
            butuh bantuan teknis? Tim kami selalu siap mendengarkan Anda.
          </p>
        </motion.div>

        {/* ================= CONTACT LAYOUT ================= */}
        <div className={styles.contactLayout}>
          {/* KOLOM KIRI: INFO KONTAK */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className={styles.infoSection}
          >
            {/* Kartu Email */}
            <div className={`${styles.infoCard} group`}>
              <div
                className={`${styles.infoIcon} group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110`}
              >
                <FiMail />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Email Resmi
                </h3>
                <p className="text-slate-500 font-medium">hello@chupatu.com</p>
              </div>
            </div>

            {/* Kartu Lokasi */}
            <div className={`${styles.infoCard} group`}>
              <div
                className={`${styles.infoIcon} group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110`}
              >
                <FiMapPin />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Markas Chupatu
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Telkom University Purwokerto <br />
                  Jawa Tengah, Indonesia
                </p>
              </div>
            </div>

            {/* Banner Customer Service */}
            <div className="mt-8 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-blue-900 text-white shadow-2xl relative overflow-hidden group cursor-default">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-cyan-300 mb-6 border border-white/10">
                  <FiPhoneCall size={20} />
                </div>
                <h3 className="text-2xl font-black mb-2">
                  Butuh Respon Cepat?
                </h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Layanan pelanggan kami aktif 24/7 untuk menangani keadaan
                  darurat atau kendala teknis pada aplikasi Anda.
                </p>
                <button className="flex items-center gap-2 text-cyan-400 font-bold text-sm hover:text-white transition-colors group/btn">
                  Hubungi via WhatsApp{" "}
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: FORMULIR */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className={styles.formSection}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                Kirim Pesan
              </h2>
              <p className="text-slate-500 font-medium">
                Isi formulir di bawah ini dan kami akan membalas dalam waktu
                1x24 jam.
              </p>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={styles.label}>Nama Lengkap</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Masukkan nama..."
                  />
                </div>
                <div className="space-y-2">
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={styles.label}>Tujuan Pesan</label>
                <div className="relative">
                  <select
                    className={`${styles.input} appearance-none cursor-pointer pr-10`}
                  >
                    <option>Dukungan Pelanggan / Teknis</option>
                    <option>Kemitraan & Bisnis</option>
                    <option>Saran & Masukan</option>
                  </select>
                  {/* Custom Arrow Tanda Panah Bawah untuk Select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className={styles.label}>Pesan Anda</label>
                <textarea
                  rows={5}
                  className={`${styles.input} resize-none`}
                  placeholder="Ceritakan detail pesan atau kendala Anda di sini..."
                ></textarea>
              </div>

              <button type="submit" className={styles.btnSubmit}>
                Kirim Pesan Sekarang 🚀
                <FiSend size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
