"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    content: `Setiap material sepatu menuntut perlakuan yang berbeda. Menggunakan sabun yang salah bisa berakibat fatal.

- Canvas: Sangat mudah menyerap kotoran namun paling tahan terhadap pencucian basah.
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
    content: `Mencuci sepatu dengan mesin cuci mungkin terlihat praktis, tapi ini adalah mimpi buruk bagi sepatu premium Anda.

1. Merusak Lem Sepatu (Midsole)
Putaran mesin yang kuat dan air yang berlebihan akan menghancurkan daya rekat lem antara sol dan badan sepatu.

2. Mengubah Bentuk (Deformasi)
Bantingan di dalam tabung mesin cuci akan membuat bentuk sepatu bengkok dan kusut secara permanen.

Lebih baik serahkan pada metode pencucian manual (Hand Wash) atau gunakan layanan Deep Clean dari profesional seperti Chupatu.`,
  },
  {
    id: 5,
    title: "Tips Ampuh Menghilangkan Bau Tak Sedap pada Sepatu",
    category: "Tips & Trik",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1584735174965-c71d607e44e1?q=80&w=1000&auto=format&fit=crop",
    content: `Bau sepatu berasal dari bakteri yang berkembang biak di tempat lembap dan hangat (keringat). 

Cara mengatasinya:
- Kantong Teh atau Bubuk Kopi: Letakkan kantong teh celup bekas yang sudah kering atau ampas kopi ke dalam sepatu semalaman. Bahan ini sangat ampuh menyerap bau tak sedap.
- Baking Soda: Taburkan sedikit baking soda ke dalam insole sepatu dan biarkan 24 jam sebelum dibersihkan.
- Angin-anginkan Sepatu: Jangan langsung memasukkan sepatu yang habis dipakai ke dalam lemari tertutup. Biarkan di ruangan terbuka (tanpa sinar matahari langsung) selama beberapa jam.`,
  },
  {
    id: 6,
    title: "Kapan Waktu yang Tepat untuk Melakukan Deep Clean?",
    category: "Layanan",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    content: `Deep Clean bukan sekadar mencuci biasa, melainkan perawatan intensif hingga ke bagian terdalam (insole, rongga mesh, hingga pori-pori terdalam).

Tanda sepatu Anda butuh Deep Clean:
1. Terkena noda lumpur basah yang sudah mengering dan mengeras.
2. Sepatu putih sudah berubah warna menjadi keabu-abuan atau kekuningan.
3. Terdapat bau yang tidak hilang meskipun sudah dijemur berhari-hari.
4. Sudah dipakai rutin selama lebih dari 3 bulan tanpa dicuci sama sekali.`,
  },
  {
    id: 7,
    title: "Cara Mengatasi Sol Sepatu Karet yang Menguning",
    category: "Tips & Trik",
    readTime: "5 Min Read",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1000&auto=format&fit=crop",
    content: `Pernahkah sol sepatu (midsole) Anda yang berwarna putih tiba-tiba berubah menjadi kuning? Itu disebut oksidasi.

Oksidasi terjadi karena reaksi antara material karet, kotoran, dan paparan sinar matahari dalam waktu lama. 

Mencucinya dengan sabun biasa TIDAK AKAN menghilangkan warna kuning ini. Anda membutuhkan layanan Unyellowing, di mana sepatu akan diaplikasikan cairan kimia khusus (hydrogen peroxide) dan dijemur di bawah sinar UV (atau matahari) untuk membalikkan proses oksidasi tersebut.`,
  },
  {
    id: 8,
    title: "Tren Repaint Sepatu: Mengembalikan Warna yang Sudah Mati",
    category: "Inspirasi",
    readTime: "4 Min Read",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
    content: `Sepatu masih sangat layak pakai, sol masih empuk, tapi warnanya sudah pudar karena termakan usia? Jangan dibuang!

Repaint adalah solusi restorasi terbaik. Dengan menggunakan pewarna akrilik atau pewarna khusus sepatu (leather/suede dye), sepatu lama Anda bisa dikembalikan ke warna aslinya, atau bahkan di-custom menjadi warna baru. 

Proses ini membutuhkan ketelitian, mulai dari tahap preparasi (menghilangkan lapisan cat lama), pengecatan berlapis, hingga tahap finisher untuk mengunci warna agar tahan air.`,
  },
  {
    id: 9,
    title: "Pentingnya Menggunakan Shoe Tree Saat Penyimpanan",
    category: "Perawatan",
    readTime: "3 Min Read",
    image:
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1000&auto=format&fit=crop",
    content: `Shoe Tree adalah penyangga yang dimasukkan ke dalam sepatu saat sedang tidak digunakan. Alat ini wajib dimiliki jika Anda memiliki koleksi sepatu mahal.

Fungsi utama Shoe Tree:
1. Mencegah Crease (Lipatan): Membantu meregangkan material di bagian toebox (ujung depan sepatu) sehingga lipatan bekas berjalan bisa terminimalisir.
2. Menyerap Kelembapan: Shoe Tree yang terbuat dari kayu (seperti kayu Cedar) secara alami akan menyerap sisa keringat di dalam sepatu, mencegah timbulnya jamur dan bakteri penyebab bau.`,
  },
  {
    id: 10,
    title: "Musim Hujan Tiba? Begini Cara Menyelamatkan Sepatu Basah",
    category: "Tips & Trik",
    readTime: "5 Min Read",
    image:
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1000&auto=format&fit=crop",
    content: `Terkadang kita tidak bisa menghindari genangan air atau hujan deras. Jika sepatumu basah kuyup, segera lakukan langkah darurat ini:

1. Lepaskan Tali dan Insole: Buka sepatu selebar mungkin agar udara bisa masuk dengan bebas.
2. Sumpal dengan Kertas Koran: Koran sangat efektif menyerap air. Masukkan gumpalan koran ke dalam sepatu dan ganti setiap 2-3 jam setelah koran terasa basah.
3. JANGAN Dijemur di Bawah Matahari Langsung: Sinar UV yang terik akan membakar material dan membuat sol sepatu mengkerut atau lemnya lepas. Cukup anginkan di ruangan dengan sirkulasi udara yang baik atau gunakan kipas angin.`,
  },
];

export default function ArtikelPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Artikel Utama (Hero) selalu diambil dari urutan pertama
  const featuredArticle = articlesData[0];
  // Sisa artikel untuk Grid
  const gridArticles = articlesData.slice(1);

  // Variants untuk animasi Staggered Header
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <div className={styles.wrapper}>
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            /* ============================================================== */
            /* 🔥 IMMERSIVE DETAIL VIEW (ARTIKEL DIBUKA) */
            /* ============================================================== */
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 bg-white rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(0,0,0,0.1)] overflow-hidden min-h-screen pb-24"
            >
              {/* Cinematic Hero Image (Animasi Morphing dari Kartu) */}
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <motion.img
                  layoutId={`article-img-${selectedArticle.id}`} // Kunci Animasi Morphing
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>

                {/* Floating Back Button */}
                <button
                  className="absolute top-8 left-8 md:top-12 md:left-12 z-50 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all duration-300"
                  onClick={() => setSelectedArticle(null)}
                >
                  <FiArrowLeft size={18} /> Kembali
                </button>

                {/* Overlapping Title & Meta */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 pb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <span className="px-5 py-2 rounded-full bg-cyan-500 text-slate-900 font-black tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center gap-2 text-slate-300 font-bold text-sm tracking-wider">
                      <FiClock /> {selectedArticle.readTime}
                    </span>
                  </motion.div>
                  <motion.h1
                    layoutId={`article-title-${selectedArticle.id}`} // Kunci Animasi Morphing Text
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl max-w-5xl"
                  >
                    {selectedArticle.title}
                  </motion.h1>
                </div>
              </div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-4xl mx-auto px-8 md:px-16 pt-16"
              >
                {/* Share Toolbar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-12">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Chupatu+Editor&background=0F172A&color=fff"
                      className="w-12 h-12 rounded-full"
                      alt="Author"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Ditulis oleh Chupatu Editorial
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Ahli Perawatan Sepatu Premium
                      </p>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <FiShare2 size={20} />
                  </button>
                </div>

                <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-700 font-medium leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* ============================================================== */
            /* 🔥 MAIN LAYOUT (MAGAZINE STYLE POLOS TANPA KATEGORI) */
            /* ============================================================== */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col relative z-20 pb-20 max-w-screen-xl mx-auto"
            >
              {/* HEADER SECTION */}
              <motion.div
                variants={headerContainerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mb-16 pt-10 mx-auto text-center flex flex-col items-center"
              >
                <motion.div variants={headerItemVariants}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-blue-700 text-xs md:text-sm font-black mb-8 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] tracking-widest uppercase">
                    <FiBookOpen className="text-cyan-500" size={18} />
                    CHUPATU JOURNAL
                  </div>
                </motion.div>

                <motion.h1
                  variants={headerItemVariants}
                  className="text-5xl md:text-6xl lg:text-[5rem] text-[#0F172A] mb-8 tracking-tighter leading-[1.05]"
                >
                  <span className="font-extrabold block mb-1">Eksplorasi</span>
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 relative inline-block pb-2 pr-4">
                    Pengetahuan.
                    <svg
                      className="absolute w-full h-4 -bottom-1 left-0 text-cyan-400/40"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 8 Q 50 0 100 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  variants={headerItemVariants}
                  className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl"
                >
                  Temukan panduan, tips eksklusif, dan wawasan mendalam seputar
                  perawatan sepatu premium langsung dari para ahli.
                </motion.p>
              </motion.div>

              {/* ARTIKEL UNGGULAN (CINEMATIC HERO ARTICLE) */}
              {featuredArticle && (
                <motion.div
                  layoutId={`article-container-${featuredArticle.id}`}
                  className="relative w-full h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group mb-16"
                  onClick={() => setSelectedArticle(featuredArticle)}
                >
                  <motion.img
                    layoutId={`article-img-${featuredArticle.id}`}
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

                  {/* Glassmorphism Content Box */}
                  <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 p-8 md:p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-900 font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        {featuredArticle.category}
                      </span>
                      <span className="text-white text-sm font-bold flex items-center gap-2">
                        <FiClock /> {featuredArticle.readTime}
                      </span>
                    </div>
                    <motion.h2
                      layoutId={`article-title-${featuredArticle.id}`}
                      className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl drop-shadow-lg"
                    >
                      {featuredArticle.title}
                    </motion.h2>
                    <button className="px-8 py-4 rounded-full bg-white text-[#0F172A] font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                      Baca Artikel Eksklusif <FiArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* GRID ARTIKEL (PREMIUM CARDS) */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    layoutId={`article-container-${article.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                    className="flex flex-col rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] cursor-pointer group"
                    onClick={() => setSelectedArticle(article)}
                  >
                    {/* Thumbnail Atas */}
                    <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                      <motion.img
                        layoutId={`article-img-${article.id}`}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      {/* Floating Badge */}
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-black text-[10px] uppercase tracking-widest shadow-lg">
                          {article.category}
                        </span>
                      </div>
                      {/* Overlay Hover Gelap */}
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Konten Teks Bawah */}
                    <div className="p-8 flex flex-col flex-1 relative bg-white transform transition-transform duration-300 group-hover:-translate-y-2">
                      <span className="text-slate-400 font-bold text-xs flex items-center gap-2 mb-4 uppercase tracking-widest">
                        <FiClock className="text-cyan-500" /> {article.readTime}
                      </span>

                      <motion.h3
                        layoutId={`article-title-${article.id}`}
                        className="text-2xl font-black text-slate-900 leading-snug mb-8 group-hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </motion.h3>

                      {/* CTA Bawah */}
                      <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                        <span className="font-bold text-xs uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                          Mulai Membaca
                        </span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-45 shadow-sm">
                          <FiArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM CTA BANNER */}
      {!selectedArticle && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 md:px-12 mt-32 relative z-20 max-w-screen-2xl pb-10"
        >
          <div className="bg-[#0F172A] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden flex flex-col items-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter relative z-10 leading-[1.1]">
              Waktunya Mencoba <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Level Berikutnya.
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl relative z-10 font-medium leading-relaxed">
              Biarkan pakar kami yang merawat koleksi Anda. Unduh aplikasinya
              sekarang dan dapatkan penjemputan gratis.
            </p>
            <Link href="/services">
              <button className="px-12 py-5 bg-white text-slate-900 font-black rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-all duration-300 flex items-center gap-4 relative z-10 text-lg hover:scale-105 hover:bg-cyan-50">
                PESAN LAYANAN SEKARANG <FiArrowRight size={24} />
              </button>
            </Link>
          </div>
        </motion.section>
      )}
    </div>
  );
}
