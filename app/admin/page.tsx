"use client";

import {
  FiTrendingUp, FiShoppingBag, FiDollarSign,
  FiArrowUpRight, FiArrowDownRight, FiMoreHorizontal,
  FiStar, FiCheckCircle // 👉 1. Import ikon CheckCircle pengganti FiUsers
} from "react-icons/fi";

import { useDashboardRealtime } from '@/hooks/useDashboardRealtime';

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

export default function AdminDashboard() {
  const {
    totalSales, totalOrders, completedOrders, totalExpenses, // 👉 2. Ambil completedOrders
    chartData, topServices, topCustomers, loading
  } = useDashboardRealtime();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Menghubungkan ke Brankas Firebase...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hi, Selamat Datang! 👋</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sistem tersinkronisasi otomatis dengan aplikasi mobile.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold animate-pulse shadow-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            LIVE FIREBASE
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        <StatCard
          title="Total Penjualan"
          value={formatRupiah(totalSales)}
          change="+8.34%"
          positive={true}
          subtitle="Real-time dari Firestore"
          icon={<FiDollarSign />}
          color="emerald"
        />
        <StatCard
          title="Total Pesanan"
          value={totalOrders.toString()}
          change="+3.68%"
          positive={true}
          subtitle="Total pesanan masuk"
          icon={<FiShoppingBag />}
          color="blue"
        />
        <StatCard
          title="Pesanan Selesai" // 👉 3. Ganti judulnya
          value={completedOrders.toString()} // 👉 4. Masukkan variabelnya
          change="+12.4%" // Angka dummy untuk pemanis
          positive={true}
          subtitle="Status: Done"
          icon={<FiCheckCircle />} // 👉 5. Ganti ikonnya
          color="violet"
        />
        <StatCard
          title="Total Pengeluaran"
          value={formatRupiah(totalExpenses)}
          change="-5.79%"
          positive={false}
          subtitle="Beban operasional"
          icon={<FiTrendingUp />}
          color="amber"
        />
      </div>

      {/* Overview Chart (SEKARANG REAL-TIME!) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Pendapatan Bulanan</h2>
        <div className="flex items-end gap-[6px] sm:gap-3 h-48 sm:h-56">
          {/* Mapping tinggi grafik berdasarkan data array chartData */}
          {chartData && chartData.map((tinggiBulanIni: number, index: number) => {
            const namaBulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full bg-emerald-500 rounded-t-md transition-all duration-500 group-hover:bg-emerald-600"
                  style={{ height: `${tinggiBulanIni}%` }}
                />
                <span className="text-[10px] text-gray-400 font-medium mt-1">
                  {namaBulan[index]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sections - SEKARANG REAL-TIME! */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Layanan Populer */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-4">Layanan Populer</h3>
          <div className="space-y-4">
            {/* Proteksi kalau database masih kosong */}
            {!topServices || topServices.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-4">Belum ada data layanan.</p>
            ) : (
              topServices.map((service: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-700">
                    {service.name}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-emerald-600">
                      Top #{i + 1}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {service.count}x Dipesan
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pelanggan Setia */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-4">Pelanggan Setia</h3>
          <div className="space-y-4">
            {/* Proteksi kalau database masih kosong */}
            {!topCustomers || topCustomers.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-4">Belum ada data pelanggan.</p>
            ) : (
              topCustomers.map((cust: any, i: number) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold uppercase shrink-0">
                    {cust.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{cust.name}</p>
                    <p className="text-[10px] text-gray-400">
                      {cust.count}x Transaksi
                    </p>
                  </div>
                  <div className="flex items-center text-amber-500 text-xs font-bold shrink-0">
                    {cust.rating} <FiStar className="fill-amber-400 ml-1" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-komponen WAJIB ADA di bawah
function StatCard({ title, value, change, positive, subtitle, icon, color }: any) {
  const colorMap: any = {
    emerald: { text: "text-emerald-600", bg: "bg-emerald-50" },
    blue: { text: "text-blue-600", bg: "bg-blue-50" },
    violet: { text: "text-violet-600", bg: "bg-violet-50" },
    amber: { text: "text-amber-600", bg: "bg-amber-50" },
  };
  const c = colorMap[color];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className={`h-11 w-11 rounded-xl ${c.bg} flex items-center justify-center text-lg ${c.text}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase mb-1">{title}</h3>
      <div className="flex items-baseline gap-2 mb-1">
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <span className={`text-[11px] font-bold flex items-center ${positive ? "text-emerald-500" : "text-red-500"}`}>
          {positive ? <FiArrowUpRight /> : <FiArrowDownRight />} {change}
        </span>
      </div>
      <p className="text-[10px] text-gray-400">{subtitle}</p>
    </div>
  );
}