"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import styles from "./services.module.css";

// Data Layanan
const servicesData = [
  {
    id: "01",
    title: "Cuci Reguler",
    desc: "Pembersihan menyeluruh harian agar tetap segar.",
    img: "/images/reguler.jpg",
    price: "Mulai Rp 35.000",
    features: [
      "Pembersihan upper & midsole",
      "Sikat lembut",
      "Parfum premium",
      "1-2 hari kerja",
    ],
  },
  {
    id: "02",
    title: "Deep Clean",
    desc: "Perawatan intensif hingga pori material terdalam.",
    img: "/images/deepclean.jpeg",
    price: "Mulai Rp 60.000",
    features: [
      "Pembersihan mendetail",
      "Noda membandel",
      "Material sensitif",
      "Chemical aman",
    ],
  },
  {
    id: "03",
    title: "Repaint",
    desc: "Restorasi warna pudar agar tajam seperti baru.",
    img: "/images/repaint.jpg",
    price: "Mulai Rp 120.000",
    features: [
      "Cat akrilik premium",
      "Warna tidak retak",
      "Restorasi/Change Color",
      "Gratis Deep Clean",
    ],
  },
  {
    id: "04",
    title: "Unyellowing",
    desc: "Hapus noda kuning pada midsole akibat oksidasi.",
    img: "/images/unyellowing.jpg",
    price: "Mulai Rp 75.000",
    features: [
      "Hapus oksidasi kuning",
      "Chemical khusus",
      "Proses sinar UV",
      "Putih seperti baru",
    ],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const handleNext = () =>
    setActiveService((p) => (p === servicesData.length - 1 ? 0 : p + 1));
  const handlePrev = () =>
    setActiveService((p) => (p === 0 ? servicesData.length - 1 : p - 1));

  const activeData = servicesData[activeService];

  // --- FIX TYPESCRIPT VARIANTS ---
  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        bounce: 0.3,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10 pt-10">
          <motion.div
            variants={headerContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={headerItemVariants}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-blue-100 text-blue-700 font-black mb-8">
                CHUPATU SERVICES
              </div>
            </motion.div>
            <motion.h1
              variants={headerItemVariants}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
            >
              Perawatan <span className="text-blue-600">Premium.</span>
            </motion.h1>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full h-[60vh] min-h-[500px] relative z-10">
          <motion.div
            layout
            className="w-full flex flex-col lg:flex-row gap-4 h-full"
          >
            {servicesData.map((srv, idx) => (
              <motion.div
                key={srv.id}
                layoutId={`wrapper-${srv.id}`}
                onClick={() => setActiveService(idx)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer flex transition-all duration-500 ${activeService === idx ? "flex-[6]" : "flex-[1] shadow-sm"}`}
              >
                <motion.img
                  layoutId={`image-${srv.id}`}
                  src={srv.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${activeService === idx ? "bg-black/40" : "bg-black/60"}`}
                ></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {activeService === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h3 className="text-4xl font-black mb-2 uppercase">
                        {srv.title}
                      </h3>
                      <button
                        onClick={() => setShowDetail(true)}
                        className="px-6 py-2 bg-white text-black rounded-full font-bold text-xs uppercase"
                      >
                        Detail
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// FORCE UPDATE: 2026-04-14-1549
