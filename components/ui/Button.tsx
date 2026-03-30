"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
