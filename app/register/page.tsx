"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function RegisterPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden px-6 py-24">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[130px]"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full max-w-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 relative z-10"
      >
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Buat Akun Baru.
          </h1>
          <p className="text-slate-500 font-medium">
            Gabung dengan ribuan pengguna Chupatu lainnya.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Nama Depan
              </label>
              <div className="relative group">
                <FiUser
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="nama depan"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Nama Belakang
              </label>
              <input
                type="text"
                placeholder="nama belakang"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Email
            </label>
            <div className="relative group">
              <FiMail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="nama@email.com"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Password Baru
            </label>
            <div className="relative group">
              <FiLock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                size={20}
              />
              <input
                type="password"
                placeholder="Minimal 8 karakter"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="pt-2 pb-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded border-2 border-slate-300 group-hover:border-blue-500 transition-colors">
                <input
                  type="checkbox"
                  className="opacity-0 absolute w-full h-full cursor-pointer peer"
                />
                <FiCheckCircle
                  className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity"
                  size={16}
                />
              </div>
              <span className="text-xs text-slate-500 font-bold tracking-wide">
                Saya setuju dengan{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Syarat & Ketentuan
                </Link>
              </span>
            </label>
          </div>

          <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
            Daftar Sekarang <FiArrowRight size={18} />
          </button>
        </form>

        <p className="text-center mt-10 text-sm text-slate-500 font-medium">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-black hover:underline ml-1"
          >
            Masuk di Sini
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
