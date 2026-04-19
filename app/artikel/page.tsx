"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiArrowLeft, FiClock, FiArrowRight } from "react-icons/fi";
import styles from "./artikel.module.css";

// 10 Konten Artikel
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

  // --- ANIMASI VERCEL SAFE ---
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-200">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 max-w-7xl">
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            /* ========================================================= */
            /* 📖 TAMPILAN BACA ARTIKEL (MINIMALIS & CLEAN READING MODE) */
            /* ========================================================= */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" as const }}
              className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-14 lg:p-16"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold mb-10 transition-colors group text-sm uppercase tracking-widest"
              >
                <FiArrowLeft
                  className="group-hover:-translate-x-1 transition-transform"
                  size={18}
                />
                Kembali ke Jurnal
              </button>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                  <FiClock size={14} /> {selectedArticle.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] mb-10 tracking-tight">
                {selectedArticle.title}
              </h1>

              {/* Cover Image dalam bentuk Vertikal Estetik (Portrait) */}
              <div className="w-full aspect-[4/5] md:aspect-[3/4] relative rounded-[2rem] overflow-hidden mb-12 bg-slate-100 shadow-sm">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 whitespace-pre-line font-medium">
                {selectedArticle.content}
              </div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* 📰 TAMPILAN GRID ARTIKEL VERTIKAL & BASA-BASI (HERO)      */
            /* ========================================================= */
            <motion.div
              key="list-view"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {/* ✨ SECTION BASA-BASI / WELCOME (HERO EDITORIAL) */}
              <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28 pt-8">
                <motion.span
                  variants={fadeUp}
                  className="inline-block py-2 px-5 rounded-full bg-white border border-slate-200 text-slate-900 shadow-sm font-black tracking-widest text-[10px] md:text-xs uppercase mb-6"
                >
                  <span className="text-blue-600 mr-2">✦</span> Jurnal Chupatu
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8"
                >
                  Lebih dari langkah,
                  <br className="hidden md:block" />
                  ini tentang{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    merawat cerita.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
                >
                  Setiap pasang sepatu punya perjalanannya sendiri. Temukan
                  rahasia merawat "teman jalan" kamu agar selalu siap diajak
                  melangkah lebih jauh.
                </motion.p>
              </div>

              {/* GRID ARTIKEL VERTIKAL MENARIK (MASONRY/CARDS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {articlesData.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={fadeUp}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer bg-white rounded-[2.5rem] p-3 md:p-4 border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full relative"
                  >
                    {/* Gambar Artikel (Rasio Vertikal 3:4) */}
                    <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-100 relative mb-5 md:mb-6">
                      {/* Floating Badge (Kategori) di atas gambar */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/95 backdrop-blur-md text-slate-900 font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/50">
                          {article.category}
                        </span>
                      </div>

                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      />
                      {/* Overlay gelap yang sangat tipis muncul saat hover */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                    </div>

                    {/* Area Teks & Judul */}
                    <div className="px-3 md:px-4 pb-4 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                        <FiClock className="text-blue-500" size={14} />{" "}
                        {article.readTime}
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug mb-6 group-hover:text-blue-600 transition-colors line-clamp-3">
                        {article.title}
                      </h3>

                      {/* Interaktif Footer: Tombol Baca */}
                      <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                          Mulai Membaca
                        </span>

                        {/* Ikon panah yang memutar elegan saat card di-hover */}
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-45 shadow-sm">
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
    </div>
  );
}
