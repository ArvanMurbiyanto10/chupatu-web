"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiArrowLeft,
  FiBookOpen,
  FiSearch,
  FiTag,
  FiSmartphone,
} from "react-icons/fi";
import Link from "next/link";
import styles from "./artikel.module.css";

export default function ArtikelPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // 10 Konten Artikel Estetik & Profesional
  const articles = [
    {
      id: 1,
      title: "Apa yang Membuat Sepatu Kesayanganmu Cepat Rusak?",
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
      title: "Cara Mengatasi Sol Sepatu Karet yang Menguning (Unyellowing)",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1000&auto=format&fit=crop",
      content: `Pernahkah sol sepatu (midsole) Anda yang berwarna putih tiba-tiba berubah menjadi kuning? Itu disebut oksidasi.

Oksidasi terjadi karena reaksi antara material karet, kotoran, dan paparan sinar matahari dalam waktu lama. 

Mencucinya dengan sabun biasa TIDAK AKAN menghilangkan warna kuning ini. Anda membutuhkan layanan Unyellowing, di mana sepatu akan diaplikasikan cairan kimia khusus (hydrogen peroxide) dan dijemur di bawah sinar UV (atau matahari) untuk membalikkan proses oksidasi tersebut.`,
    },
    {
      id: 8,
      title: "Tren Repaint Sepatu: Mengembalikan Warna yang Sudah Mati",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
      content: `Sepatu masih sangat layak pakai, sol masih empuk, tapi warnanya sudah pudar karena termakan usia? Jangan dibuang!

Repaint adalah solusi restorasi terbaik. Dengan menggunakan pewarna akrilik atau pewarna khusus sepatu (leather/suede dye), sepatu lama Anda bisa dikembalikan ke warna aslinya, atau bahkan di-custom menjadi warna baru. 

Proses ini membutuhkan ketelitian, mulai dari tahap preparasi (menghilangkan lapisan cat lama), pengecatan berlapis, hingga tahap finisher untuk mengunci warna agar tahan air.`,
    },
    {
      id: 9,
      title: "Pentingnya Menggunakan Shoe Tree Saat Penyimpanan",
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
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1000&auto=format&fit=crop",
      content: `Terkadang kita tidak bisa menghindari genangan air atau hujan deras. Jika sepatumu basah kuyup, segera lakukan langkah darurat ini:

1. Lepaskan Tali dan Insole: Buka sepatu selebar mungkin agar udara bisa masuk dengan bebas.
2. Sumpal dengan Kertas Koran: Koran sangat efektif menyerap air. Masukkan gumpalan koran ke dalam sepatu dan ganti setiap 2-3 jam setelah koran terasa basah.
3. JANGAN Dijemur di Bawah Matahari Langsung: Sinar UV yang terik akan membakar material dan membuat sol sepatu mengkerut atau lemnya lepas. Cukup anginkan di ruangan dengan sirkulasi udara yang baik atau gunakan kipas angin.`,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgGlow}></div>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            /* 🔥 DETAIL VIEW (ARTIKEL DIBUKA) */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.detailContainer}
            >
              <div
                className={`${styles.backButton} hover:-translate-x-2`}
                onClick={() => setSelectedArticle(null)}
              >
                <FiArrowLeft size={20} /> Kembali ke Daftar
              </div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.detailTitle}
              >
                {selectedArticle.title}
              </motion.h2>

              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className={styles.detailHeroImg}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={styles.articleContent}
              >
                {selectedArticle.content}
              </motion.div>
            </motion.div>
          ) : (
            /* 🔥 MAIN LAYOUT (LIST VIEW & STICKY SIDEBAR) */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.mainLayout}
            >
              {/* 🔹 LEFT CONTENT (10 ARTIKEL) */}
              <div className={styles.leftContent}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={styles.badge}
                >
                  <FiBookOpen /> CHUPATU JOURNAL
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={styles.title}
                >
                  Eksplorasi <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
                    Pengetahuan.
                  </span>
                </motion.h1>

                <div className={styles.articleGrid}>
                  {articles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                      className={`${styles.articleCard} hover:border-[#D4AF37] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 group`}
                      onClick={() => setSelectedArticle(article)}
                    >
                      <img
                        src={article.image}
                        alt="Thumbnail Artikel"
                        className={styles.cardImage}
                      />
                      <div className={styles.articleText}>
                        <h2
                          className={`${styles.articleTitle} group-hover:text-[#D4AF37]`}
                        >
                          {article.title}
                        </h2>
                        <p className={styles.articlePreview}>
                          BACA SELENGKAPNYA{" "}
                          <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 🔹 RIGHT SIDEBAR (STICKY: SEARCH, CATEGORY, CTA) */}
              <div className={styles.rightSidebar}>
                {/* INI KUNCI STICKY NYA */}
                <div className={styles.stickySidebar}>
                  {/* Search Box */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.sidebarBox}
                  >
                    <h3 className={styles.sidebarTitle}>
                      <FiSearch /> Cari Artikel
                    </h3>
                    <input
                      type="text"
                      placeholder="Ketik kata kunci (Misal: Suede)..."
                      className={styles.searchInput}
                    />
                  </motion.div>

                  {/* Kategori Tags */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.sidebarBox}
                  >
                    <h3 className={styles.sidebarTitle}>
                      <FiTag /> Topik Populer
                    </h3>
                    <div className={styles.tagCloud}>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #DeepClean
                      </span>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #SuedeCare
                      </span>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #Unyellowing
                      </span>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #Repaint
                      </span>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #TipsAntiBau
                      </span>
                      <span
                        className={`${styles.tagItem} hover:bg-[#0F4D92] hover:text-white`}
                      >
                        #Leather
                      </span>
                    </div>
                  </motion.div>

                  {/* App Promo Sticky Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.promoCard}
                  >
                    <div className={styles.promoGlow}></div>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#D4AF37] text-2xl mb-6 relative z-10">
                      <FiSmartphone />
                    </div>
                    <h3 className={styles.promoTitle}>
                      Malas Mencuci Sendiri?
                    </h3>
                    <p className={styles.promoDesc}>
                      Serahkan pada ahlinya. Unduh aplikasi Chupatu sekarang,
                      nikmati layanan Magic Result AI dan kurir yang siap
                      menjemput sepatumu.
                    </p>
                    <Link href="/services">
                      <button className={`${styles.promoBtn} hover:scale-105`}>
                        DOWNLOAD APLIKASI <FiArrowRight />
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ==================== BOTTOM CTA BANNER ==================== */}
      {!selectedArticle && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className={styles.bottomCtaSection}
        >
          <div className={styles.bottomCtaCard}>
            <div className={styles.bottomCtaGlow}></div>
            <h2 className={styles.bottomCtaTitle}>
              Tidak Punya Waktu <br />{" "}
              <span className="text-[#FFD700]">Merawat Sepatu?</span>
            </h2>
            <p className={styles.bottomCtaDesc}>
              Daripada salah penanganan, biarkan para ahli dari Chupatu yang
              mengerjakannya. Nikmati layanan cuci sepatu premium dengan
              penjemputan langsung ke depan pintumu.
            </p>
            <Link href="/services">
              <button className={styles.bottomCtaBtn}>
                PESAN LAYANAN SEKARANG <FiArrowRight size={24} />
              </button>
            </Link>
          </div>
        </motion.section>
      )}
    </div>
  );
}
