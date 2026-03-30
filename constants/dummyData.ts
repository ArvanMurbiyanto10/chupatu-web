// import icon dari react-icons yang sudah kita install sebelumnya
import {
  FiUserCheck,
  FiTool,
  FiMapPin,
  FiFileText,
  FiMessageSquare,
  FiGrid,
  FiSettings,
} from "react-icons/fi";

export const appFeatures = [
  {
    id: 1,
    title: "Sistem Onboarding & Akses Cepat",
    description:
      "Pengalaman pertama yang memukau dengan animasi Lottie. Masuk lebih cepat dengan Google One-Tap Sign-In, dijamin aman dengan kebijakan privasi terenkripsi.",
    icon: FiUserCheck,
  },
  {
    id: 2,
    title: "Pemesanan Cerdas & Magic Result",
    description:
      "Pesan layanan standar atau request custom service. Dilengkapi 'Magic Result' berbasis AI untuk menganalisis dan merekomendasikan perawatan terbaik untuk sepatumu.",
    icon: FiTool,
  },
  {
    id: 3,
    title: "Live Tracking Real-Time",
    description:
      "Pantau sepatu kesayanganmu! Integrasi peta interaktif dan polyline routing memungkinkan kamu melacak posisi kurir penjemputan secara langsung.",
    icon: FiMapPin,
  },
  {
    id: 4,
    title: "Digital Invoicing & Barcode",
    description:
      "Akses riwayat pesanan dengan mudah. Unduh invoice resmi dalam format PDF dan verifikasi pesanan menggunakan QR/Barcode untuk keamanan ekstra.",
    icon: FiFileText,
  },
  {
    id: 5,
    title: "Pusat Komunikasi & Notifikasi",
    description:
      "Fitur Direct Chat terintegrasi untuk komunikasi langsung dengan teknisi atau admin. Dapatkan notifikasi real-time untuk setiap progres pengerjaan.",
    icon: FiMessageSquare,
  },
  {
    id: 6,
    title: "Rak Sepatu Digital",
    description:
      "Simpan data dan histori perawatan seluruh koleksi sepatumu di satu tempat agar proses booking selanjutnya jadi jauh lebih cepat dan praktis.",
    icon: FiGrid,
  },
  {
    id: 7,
    title: "UI Dinamis & Personalisasi",
    description:
      "Atur profil sesukamu. Nikmati antarmuka premium dan modern dengan sentuhan Glassmorphism serta animasi Shimmer yang memanjakan mata.",
    icon: FiSettings,
  },
];
