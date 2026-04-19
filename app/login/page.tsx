"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden px-6 py-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 shadow-inner">
            <FiLock size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Selamat Datang!
          </h1>
          <p className="text-slate-500 font-medium">
            Masuk ke Chupatu untuk merawat sepatu kesayanganmu.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-slate-700">
                Password
              </label>
              <Link
                href="#"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Lupa Password?
              </Link>
            </div>
            <div className="relative group">
              <FiLock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                size={20}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <button className="w-full py-4 mt-2 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
            Masuk Sekarang <FiArrowRight size={18} />
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative px-4 bg-white text-slate-400 text-xs font-bold uppercase tracking-widest">
            Atau masuk dengan
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-700">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-700">
            <FiGithub size={20} /> Github
          </button>
        </div>

        <p className="text-center mt-10 text-sm text-slate-500 font-medium">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-black hover:underline ml-1"
          >
            Daftar Gratis
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
