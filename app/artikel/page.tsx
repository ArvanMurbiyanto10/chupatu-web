"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./artikel.module.css";

export default function ArtikelPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Apa yang Membuat Sepatu Cepat Rusak?",
      content: `Apa yang Membuat Sepatu Cepat Rusak?

Banyak sepatu rusak bukan karena kualitasnya buruk, melainkan karena kesalahan perawatan sehari-hari. Hal ini sering terjadi tanpa disadari, terutama saat aktivitas padat. Jika dibiarkan, sepatu bisa kehilangan fungsi dan tampilannya lebih cepat.

1. Jarang Dibersihkan Setelah Dipakai
Debu dan kotoran yang menempel bisa masuk ke pori-pori bahan sepatu. Penumpukan kotoran tersebut lama-kelamaan merusak permukaan dan membuat warna tampak kusam. Kebiasaan ini sering terjadi pada sepatu yang dipakai harian.

2. Terkena Air dan Tidak Dikeringkan dengan Benar
Air yang terserap ke dalam material sepatu dapat memicu bau dan jamur. Proses pengeringan yang salah, seperti dijemur langsung di bawah matahari, juga bisa merusak struktur bahan. Kondisi ini membuat sepatu cepat berubah bentuk.

3. Penyimpanan yang Tidak Tepat
Menumpuk sepatu sembarangan dapat membuatnya tertekan dan berubah bentuk. Area lembap juga mempercepat pertumbuhan jamur. Penyimpanan yang kurang rapi sering jadi penyebab sepatu cepat terlihat usang.`,
    },
    {
      id: 2,
      title: "Bagaimana Cara Merawat Sepatu agar Tidak Cepat Rusak?",
      content: `Bagaimana Cara Merawat Sepatu agar Tidak Cepat Rusak?

Perawatan sepatu sebaiknya dilakukan secara rutin dan disesuaikan dengan jenis bahannya. Setiap material memiliki kebutuhan berbeda agar tetap awet. Langkah sederhana yang dilakukan konsisten sudah cukup memberi dampak besar.

1. Bersihkan Permukaan Sepatu Secara Rutin
Membersihkan sepatu setelah dipakai membantu mencegah kotoran menumpuk. Gunakan kain lembut dan gerakan searah agar tidak merusak permukaan. Cara ini cocok diterapkan untuk perawatan harian.

2. Sikat Noda dengan Lembut dan Merata
Noda membandel sebaiknya dibersihkan secara perlahan. Tekanan berlebihan justru bisa merusak bahan sepatu. Proses menyikat yang merata membantu hasil lebih bersih.

3. Kilapkan Sepatu Kulit Secara Berkala
Sepatu kulit membutuhkan perawatan tambahan agar tidak kering dan retak. Proses pemolesan membantu menjaga kilau alami dan elastisitas bahan.

4. Bersihkan Kulit Sebelum dan Sesudah Disemir
Membersihkan kulit sebelum disemir membantu hasil lebih maksimal. Sisa semir yang menumpuk juga perlu dibersihkan agar tidak merusak tekstur.

5. Lindungi Sepatu Suede dari Air
Sepatu suede sangat sensitif terhadap air. Paparan air berlebih bisa meninggalkan noda permanen.

6. Simpan Sepatu di Tempat yang Tepat
Penyimpanan rapi membantu sepatu mempertahankan bentuk aslinya. Sirkulasi udara yang baik juga mencegah bau tidak sedap.`,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 🔹 JUDUL */}
          <h1 className={styles.title}>Artikel & Tips</h1>

          {/* 🔹 DETAIL VIEW */}
          {selectedArticle ? (
            <div>
              <span
                className={styles.backButton}
                onClick={() => setSelectedArticle(null)}
              >
                ← Kembali
              </span>

              <h2 className={styles.articleTitle}>{selectedArticle.title}</h2>

              <p className={styles.articleContent}>{selectedArticle.content}</p>
            </div>
          ) : (
            /* 🔹 LIST ARTIKEL */
            <div className={styles.articleGrid}>
              {articles.map((article) => (
                <div
                  key={article.id}
                  className={styles.articleCard}
                  onClick={() => setSelectedArticle(article)}
                >
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.articlePreview}>
                    Klik untuk membaca selengkapnya...
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
