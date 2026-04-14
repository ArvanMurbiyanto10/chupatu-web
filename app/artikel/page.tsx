"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Pastikan Variants di-import
import {
  FiArrowRight,
  FiArrowLeft,
  FiClock,
  FiBookOpen,
  FiShare2,
} from "react-icons/fi";
import Link from "next/link";
import styles from "./artikel.module.css";

// 10 Konten Artikel Estetik & Profesional
const articlesData = [
  {
    id: 1,
    title: "Apa yang Membuat Sepatu Kesayanganmu Cepat Rusak?",
    category: "Edukasi",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    content: `Banyak dari kita mengira sepatu rusak karena kualitasnya yang buruk, padahal kebiasaan kitalah yang sering menjadi penyebab utama. Berikut adalah faktor perusak sepatu:

1. Jarang Dibersihkan Setelah Dipakai
Debu dan kotoran mikroskopis yang menempel akan merusak lapisan permukaan kanvas maupun kulit jika dibiarkan menumpuk.

2. Terkena Air Tanpa Pengeringan Benar
Kelembapan adalah musuh utama. Menyimpan sepatu basah di tempat tertutup akan memicu pertumbuhan jamur dan membuat material cepat lapuk.

3. Penyimpanan Tidak Tepat
Menumpuk sepatu secara sembarangan akan menyebabkan bentuk (shape) sepatu berubah secara permanen.`,
  },
  {
    id: 2,
    title: "Rahasia Merawat Material Sepatu agar Tetap Seperti Baru",
    category: "Tips & Trik",
    readTime: "5 Min Read",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
    content: `Perawatan sepatu premium membutuhkan dedikasi dan teknik yang tepat. Jangan biarkan investasimu rusak karena perawatan yang salah.

1. Bersihkan Secara Rutin
Gunakan kain microfiber lembut atau sikat berbulu halus. Hindari deterjen berbahan kimia keras yang dapat memudarkan warna pabrikan.

2. Sikat dengan Teknik Satu Arah
Hindari tekanan berlebih. Sikat dengan gerakan perlahan ke satu arah untuk material seperti Suede dan Nubuck.

3. Gunakan Silica Gel dan Shoe Tree
Simpan sepatu di dalam ruangan bersuhu stabil. Masukkan Silica Gel untuk menyerap kelembapan dan gunakan Shoe Tree untuk menjaga postur sepatu tetap sempurna.`,
  },
  {
    id: 3,
    title: "Mengenal Perbedaan Material Suede, Canvas, dan Leather",
    category: "Material",
    readTime: "6 Min Read",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop",
    content: `- Canvas: Sangat mudah menyerap kotoran namun paling tahan terhadap pencucian basah.
- Leather (Kulit): Tidak boleh dicuci dengan banyak air. Butuh leather lotion untuk menjaga kelembapannya agar tidak retak.
- Suede: Material paling sensitif. Hindari air sepenuhnya, gunakan sikat khusus suede dan penghapus karet untuk mengangkat noda kotoran.`,
  },
  {
    id: 4,
    title: "Bahaya Mencuci Sepatu Menggunakan Mesin Cuci",
    category: "Edukasi",
    readTime: "3 Min Read",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
    content: `1. Merusak Lem Sepatu (Midsole)
Putaran mesin yang kuat dan air yang berlebihan akan menghancurkan daya rekat lem antara sol dan badan sepatu.

2. Mengubah Bentuk (Deformasi)
Bantingan di dalam tabung mesin cuci akan membuat bentuk sepatu bengkok dan kusut secara permanen.`,
  },
  {
    id: 5,
    title: "Tips Ampuh Menghilangkan Bau Tak Sedap pada Sepatu",
    category: "Tips & Trik",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1584735174965-c71d607e44e1?q=80&w=1000&auto=format&fit=crop",
    content: `- Kantong Teh atau Bubuk Kopi: Letakkan kantong teh celup bekas yang sudah kering semalaman.
- Baking Soda: Taburkan sedikit baking soda ke dalam insole sepatu.
- Angin-anginkan Sepatu: Jangan langsung memasukkan sepatu ke dalam lemari tertutup.`,
  },
  {
    id: 6,
    title: "Kapan Waktu yang Tepat untuk Melakukan Deep Clean?",
    category: "Layanan",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    content: `Tanda sepatu Anda butuh Deep Clean:
1. Terkena noda lumpur basah yang sudah mengering.
2. Sepatu putih sudah berubah warna kekuningan.
3. Terdapat bau yang tidak hilang.
4. Sudah dipakai rutin selama lebih dari 3 bulan.`,
  },
  {
    id: 7,
    title: "Cara Mengatasi Sol Sepatu Karet yang Menguning",
    category: "Tips & Trik",
    readTime: "5 Min Read",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1000&auto=format&fit=crop",
    content: `Oksidasi terjadi karena reaksi antara material karet, kotoran, dan paparan sinar matahari. Anda membutuhkan layanan Unyellowing dengan hydrogen peroxide dan penjemuran di bawah sinar UV.`,
  },
  {
    id: 8,
    title: "Tren Repaint Sepatu: Mengembalikan Warna yang Sudah Mati",
    category: "Inspirasi",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
    content: `Repaint adalah solusi restorasi terbaik menggunakan pewarna akrilik khusus sepatu. Proses ini meliputi preparasi noda, pengecatan berlapis, hingga tahap finisher.`,
  },
  {
    id: 9,
    title: "Pentingnya Menggunakan Shoe Tree Saat Penyimpanan",
    category: "Perawatan",
    readTime: "3 Min Read",
    image:
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1000&auto=format&fit=crop",
    content: `1. Mencegah Crease (Lipatan): Meregangkan material di bagian toebox.
2. Menyerap Kelembapan: Terutama jika terbuat dari kayu cedar.`,
  },
  {
    id: 10,
    title: "Musim Hujan Tiba? Begini Cara Menyelamatkan Sepatu Basah",
    category: "Tips & Trik",
    readTime: "5 Min Read",
    image:
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1000&auto=format&fit=crop",
    content: `1. Lepaskan Tali dan Insole.
2. Sumpal dengan Kertas Koran: Ganti setiap 2-3 jam.
3. JANGAN Dijemur di Bawah Matahari Langsung.`,
  },
];

export default function ArtikelPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const featuredArticle = articlesData[0];
  const gridArticles = articlesData.slice(1);

  // --- ANIMASI REUSABLE DENGAN FIX TYPESCRIPT ---
  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const, // FIX: as const
        bounce: 0.3,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear" as const,
          }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear" as const,
          }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 bg-white rounded-[3rem] shadow-xl overflow-hidden min-h-screen pb-24"
            >
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <motion.img
                  layoutId={`article-img-${selectedArticle.id}`}
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <button
                  className="absolute top-8 left-8 z-50 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold"
                  onClick={() => setSelectedArticle(null)}
                >
                  <FiArrowLeft className="inline mr-2" /> Kembali
                </button>
              </div>

              <div className="max-w-4xl mx-auto px-8 pt-16">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  {selectedArticle.title}
                </h1>
                <div className="prose prose-xl text-slate-700 leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-20 pb-20 max-w-screen-xl mx-auto"
            >
              <motion.div
                variants={headerContainerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mb-16 pt-10 mx-auto text-center"
              >
                <motion.div variants={headerItemVariants}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-blue-700 font-black mb-8">
                    <FiBookOpen className="text-cyan-500" /> CHUPATU JOURNAL
                  </div>
                </motion.div>
                <motion.h1
                  variants={headerItemVariants}
                  className="text-5xl md:text-[5rem] font-black text-slate-950 mb-8 leading-none tracking-tighter"
                >
                  Eksplorasi Pengetahuan.
                </motion.h1>
              </motion.div>

              {featuredArticle && (
                <motion.div
                  layoutId={`article-container-${featuredArticle.id}`}
                  className="relative w-full h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl group mb-16"
                  onClick={() => setSelectedArticle(featuredArticle)}
                >
                  <motion.img
                    layoutId={`article-img-${featuredArticle.id}`}
                    src={featuredArticle.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-2xl">
                      {featuredArticle.title}
                    </h2>
                    <button className="px-8 py-4 bg-white text-slate-950 font-black rounded-full text-sm flex items-center gap-2">
                      Baca Sekarang <FiArrowRight />
                    </button>
                  </div>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    layoutId={`article-container-${article.id}`}
                    className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg cursor-pointer group"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="h-64 overflow-hidden relative">
                      <motion.img
                        layoutId={`article-img-${article.id}`}
                        src={article.image}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-900 leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {article.readTime}
                        </span>
                        <FiArrowRight className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
