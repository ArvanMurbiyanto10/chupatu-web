"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiMonitor,
  FiSmartphone,
  FiPenTool,
  FiClipboard,
  FiServer,
  FiCode,
} from "react-icons/fi";
import styles from "./contact.module.css";

export default function ContactPage() {
  // Data tim disesuaikan persis dengan Proposal Pengajuan TUBES_CHUPATU_ABP.docx
  const teamMembers = [
    {
      name: "Yesika Widiyani",
      nim: "2311102195",
      role: "Project Manager (PM)",
      icon: FiClipboard,
      desc: "Mengatur timeline, merancang sistem (ERD/Flowchart), menyusun laporan, dan melakukan testing akhir.",
    },
    {
      name: "Arvan Murbiyanto",
      nim: "2311102074",
      role: "Frontend Web Developer",
      icon: FiMonitor,
      desc: "Fokus membuat dashboard atau landing page versi web yang lebih sederhana.",
    },
    {
      name: "Afif Rijal Azzami",
      nim: "2311102235",
      role: "Backend Developer",
      icon: FiServer,
      desc: "Membangun arsitektur server, basis data, dan menyediakan API sebagai jembatan komunikasi data.",
    },
    {
      name: "Arnanda Setya Nosa Putra",
      nim: "2311102180",
      role: "Mobile App Developer",
      icon: FiSmartphone,
      desc: "Integrasi API backend ke aplikasi mobile, pengelolaan local storage, serta logika fitur kompleks.",
    },
    {
      name: "Aji Tri Prasetyo",
      nim: "2311102064",
      role: "Mobile App Developer",
      icon: FiCode,
      desc: "Slicing desain ke kode program, navigasi antar layar, dan memastikan performa UI optimal.",
    },
    {
      name: "Moch Aditya Sulistiawan",
      nim: "2311102193",
      role: "UI/UX Designer",
      icon: FiPenTool,
      desc: "Merancang pengalaman pengguna (UX) dan antarmuka visual (UI) untuk platform web dan mobile.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Hubungi Kami</h1>
          <p className={styles.subtitle}>
            Ada pertanyaan seputar layanan Chupatu, penawaran kemitraan, atau
            kendala teknis? Tim kami siap membantumu kapan saja.
          </p>
        </motion.div>

        {/* ================= CONTACT FORM & INFO ================= */}
        <div className={styles.contactLayout}>
          {/* Kolom Kiri: Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.infoSection}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMail />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">Email Resmi</h3>
                <p className="text-slate-500 text-sm">hello@chupatu.com</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMapPin />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">
                  Markas Chupatu
                </h3>
                <p className="text-slate-500 text-sm">
                  Telkom University Purwokerto
                  <br />
                  Jawa Tengah, Indonesia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.formSection}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={styles.label}>Nama Lengkap</label>
                  <input
                    type="text"
                    className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    placeholder="Masukkan nama..."
                  />
                </div>
                <div>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              <div>
                <label className={styles.label}>Tujuan Pesan</label>
                <select
                  className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                >
                  <option>Dukungan Pelanggan / Teknis</option>
                  <option>Kemitraan & Bisnis</option>
                  <option>Saran & Masukan</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Pesan</label>
                <textarea
                  rows={4}
                  className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                  placeholder="Tuliskan pesanmu secara detail di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.btnSubmit} hover:bg-blue-700 hover:scale-[1.02]`}
              >
                Kirim Pesan <FiMessageSquare className="inline ml-2" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ================= TEAM SECTION (IF-11-04) ================= */}
        <div className="pt-20 border-t border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.teamHeader}
          >
            <h2 className={styles.teamTitle}>Tim Pengembang IF-11-04</h2>
            <p className="text-slate-600">
              Sinergi di balik arsitektur Web & Mobile Chupatu.
            </p>
          </motion.div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${styles.teamCard} hover:-translate-y-2 hover:border-blue-200`}
              >
                <div className={styles.avatar}>
                  <member.icon />
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamNim}>NIM. {member.nim}</span>
                <span className={styles.teamRole}>{member.role}</span>
                <p className={styles.teamDesc}>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
