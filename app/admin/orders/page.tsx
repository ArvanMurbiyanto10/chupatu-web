"use client";

import {
  FiSearch, FiCheckCircle, FiClock, FiBox, FiXCircle,
  FiTruck, FiDroplet, FiEye, FiPhone, FiMapPin, FiCalendar, FiMessageCircle
} from "react-icons/fi";
import Link from "next/link"; // 👉 Import Link untuk pindah halaman ke Chat
import { useOrdersRealtime } from "@/hooks/useOrdersRealtime";

// Helper Format Uang
const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value || 0);
};

export default function OrderManagement() {
  const { orders, pipelineCounts, loading, updateOrderStatus } = useOrdersRealtime();

  // 7 Status Lengkap
  const pipeline = [
    { label: "Pending", key: "pending", icon: FiClock, color: "amber" },
    { label: "Confirmed", key: "confirmed", icon: FiCheckCircle, color: "blue" },
    { label: "Picked Up", key: "picked up", icon: FiTruck, color: "indigo" },
    { label: "Processing", key: "processing", icon: FiDroplet, color: "blue" },
    { label: "Ready", key: "ready", icon: FiBox, color: "violet" },
    { label: "Delivery", key: "delivery", icon: FiTruck, color: "orange" },
    { label: "Done", key: "done", icon: FiCheckCircle, color: "emerald" },
  ];

  const statusList = ["pending", "confirmed", "picked up", "processing", "ready", "delivery", "done"];

  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s === "pending") return "bg-amber-100 text-amber-700 border-amber-200";
    if (s === "confirmed") return "bg-blue-100 text-blue-700 border-blue-200";
    if (s === "picked up") return "bg-indigo-100 text-indigo-700 border-indigo-200";
    if (s === "processing") return "bg-sky-100 text-sky-700 border-sky-200";
    if (s === "ready") return "bg-violet-100 text-violet-700 border-violet-200";
    if (s === "delivery") return "bg-orange-100 text-orange-700 border-orange-200";
    if (s === "done") return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (s === "canceled") return "bg-red-100 text-red-700 border-red-200";
    return "bg-gray-100 text-gray-600";
  };

  // Helper Format Tanggal
  const formatTanggal = (timestamp: any) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(date);
  };

  if (loading) return <div className="p-10 text-center animate-pulse text-gray-500">Menghubungkan ke Chupatu Engine...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Pesanan</h1>
        <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full animate-pulse border border-emerald-200">
          LIVE SYNC
        </div>
      </div>

      {/* 7 Status Pipeline */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {pipeline.map((p) => (
          <div key={p.key} className="min-w-[140px] flex-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center mb-2 text-white shadow-sm ${p.color === 'amber' ? 'bg-amber-500' : p.color === 'blue' ? 'bg-blue-500' : p.color === 'indigo' ? 'bg-indigo-500' :
              p.color === 'violet' ? 'bg-violet-500' : p.color === 'orange' ? 'bg-orange-500' : 'bg-emerald-500'
              }`}>
              <p.icon size={18} />
            </div>
            <p className="text-xl font-bold text-gray-800">{String(pipelineCounts[p.key] || 0).padStart(2, "0")}</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{p.label}</p>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="relative w-full sm:w-80">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Cari ID, Nama, atau No. HP..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-[10px] text-gray-500 uppercase font-bold tracking-widest border-b border-gray-100">
              <tr>
                <th className="py-4 px-5">ID & Waktu</th>
                <th className="py-4 px-5">Pelanggan & Kontak</th>
                {/* 👉 Kolom Baru untuk Alamat Lengkap */}
                <th className="py-4 px-5 min-w-[200px]">Alamat & Lokasi</th>
                <th className="py-4 px-5">Detail Layanan</th>
                <th className="py-4 px-5">Jadwal & Logistik</th>
                <th className="py-4 px-5">Status & Action</th>
                <th className="py-4 px-5">Tagihan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-gray-400 font-medium">Belum ada pesanan yang masuk.</td>
                </tr>
              ) : (
                orders.map((order) => {
                  // 👉 UBAH: Format ID menggunakan '#' aja
                  const shortId = `#${order.id.slice(0, 6).toUpperCase()}`;

                  const isPaid = !String(order.paymentStatus).toLowerCase().includes("unpaid");

                  return (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors align-top">

                      {/* Kolom 1: ID & Waktu */}
                      <td className="py-4 px-5">
                        <p className="font-bold text-emerald-600 text-xs mb-1 bg-emerald-50 w-fit px-2 py-0.5 rounded border border-emerald-100">
                          {shortId}
                        </p>
                        <p className="text-[10px] text-gray-500">{formatTanggal(order.createdAt)}</p>
                      </td>

                      {/* Kolom 2: Pelanggan & Kontak (Ada tombol Direct Chat) */}
                      <td className="py-4 px-5">
                        <p className="font-bold text-gray-800 mb-1">
                          {order.customerName}
                        </p>
                        <div className="flex flex-col gap-1.5 items-start">
                          <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                            <FiPhone size={10} /> {order.phoneNumber || "-"}
                          </p>

                          {/* 👉 UBAH: Routing sekarang mengamankan jalur ke Admin Communications */}
                          <Link
                            href={`/admin/communications?userId=${order.userId}&name=${order.customerName}`}
                            className="bg-emerald-50 text-emerald-600 border border-emerald-200 
                 hover:bg-emerald-100 transition-colors px-2 py-1 rounded 
                 text-[10px] font-bold flex items-center gap-1"
                          >
                            <FiMessageCircle size={12} /> Chat Pelanggan
                          </Link>
                        </div>
                      </td>

                      {/* 👉 UBAH: Kolom 3 Khusus Alamat Lengkap */}
                      <td className="py-4 px-5 max-w-[200px]">
                        <p className="text-[11px] font-semibold text-gray-700 truncate" title={order.mainAddress}>
                          {order.mainAddress || "Alamat tidak tersedia"}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate mb-2" title={order.detailAddress}>
                          {order.detailAddress || "-"}
                        </p>
                        {/* Tombol Peta Dipindah ke sini */}
                        <button className="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1">
                          <FiMapPin size={10} /> Detail Peta
                        </button>
                      </td>

                      {/* Kolom 4: Layanan & Sepatu */}
                      <td className="py-4 px-5">
                        <p className="font-bold text-gray-700">{order.serviceName}</p>
                        <p className="text-[11px] text-emerald-600 font-medium mb-1">Kategori: {order.category || "-"}</p>
                        <p className="text-[10px] text-gray-400 italic bg-gray-100 px-2 py-1 rounded inline-block truncate max-w-[120px]" title={order.shoeDetail || order.notes}>
                          Note: {order.shoeDetail || order.notes || "-"}
                        </p>
                      </td>

                      {/* Kolom 5: Logistik & Pickup */}
                      <td className="py-4 px-5">
                        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold mb-1 border ${order.isDelivery ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {order.isDelivery ? "DELIVERY (Antar-Jemput)" : "DROP-OFF (Ke Toko)"}
                        </span>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                          <FiCalendar size={10} /> {formatTanggal(order.pickupDate).split(' ')[0]}
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                          <FiClock size={10} /> {order.pickupTime || "-"}
                        </div>
                      </td>

                      {/* Kolom 6: Status Interaktif & Batal */}
                      <td className="py-4 px-5">
                        <div className="flex flex-col gap-2 w-32">
                          <select
                            value={order.status?.toLowerCase()}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                            className={`text-[11px] font-bold uppercase border rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer shadow-sm ${getStatusStyle(order.status)}`}
                          >
                            {statusList.map(s => (
                              <option key={s} value={s} className="bg-white text-gray-700">{s}</option>
                            ))}
                          </select>

                          {order.status?.toLowerCase() !== 'done' && order.status?.toLowerCase() !== 'canceled' && (
                            <button
                              onClick={() => { if (confirm(`Yakin ingin membatalkan pesanan ${shortId}?`)) updateOrderStatus(order.id, "canceled") }}
                              className="flex items-center justify-center gap-1 text-[10px] font-bold text-red-500 hover:text-red-700 hover:bg-red-50 py-1 rounded transition-colors"
                            >
                              <FiXCircle size={12} /> Batal
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Kolom 7: Tagihan & Pembayaran */}
                      <td className="py-4 px-5">
                        <p className="font-bold text-gray-800 text-sm mb-1">{formatRupiah(order.totalPrice)}</p>
                        {isPaid ? (
                          <span className="text-emerald-600 font-bold text-[10px] flex items-center gap-1 bg-emerald-50 w-fit px-1.5 py-0.5 rounded border border-emerald-100">
                            <FiCheckCircle size={10} /> {order.paymentMethod}
                          </span>
                        ) : (
                          <span className="text-amber-600 font-bold text-[10px] flex items-center gap-1 bg-amber-50 w-fit px-1.5 py-0.5 rounded border border-amber-100">
                            <FiClock size={10} /> {order.paymentStatus || order.paymentMethod}
                          </span>
                        )}
                        <button className="mt-2 text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1">
                          <FiEye size={10} /> Nota Detail
                        </button>
                      </td>

                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}