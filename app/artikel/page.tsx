"use client";

import { motion } from "framer-motion";
import styles from "./artikel.module.css";

export default function ArtikelPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>Artikel & Tips</h1>
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>📝</span>
            <h2 className={styles.emptyTitle}>
              Belum ada artikel yang dipublikasikan.
            </h2>
            <p className={styles.emptyText}>
              Nantinya, tips merawat bahan suede, kanvas, hingga kulit akan
              ditampilkan di sini.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
