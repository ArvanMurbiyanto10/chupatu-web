"use client";

import { useState } from "react";
import {
  FiSearch, FiCheckCircle, FiClock, FiBox, FiXCircle,
  FiTruck, FiDroplet, FiPhone, FiMapPin, FiCalendar,
  FiMessageCircle, FiImage, FiX, FiFileText
} from "react-icons/fi";
import Link from "next/link";
import { useOrdersRealtime } from "@/hooks/useOrdersRealtime";

// ----------------------------------------------------------------------
// 1. KONFIGURASI UTAMA
// ----------------------------------------------------------------------

const STATUS_LIST = [
  "Pending", "Confirmed", "Picked Up", "Processing",
  "Ready", "Delivery", "Done", "Cancelled"
];

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value || 0);
};

const formatTanggalWaktu = (timestamp: any) => {
  if (!timestamp) return "-";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
  }).format(date);
};

const formatHariTanggalLengkap = (timestamp: any) => {
  if (!timestamp) return "-";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
  }).format(date);
};

export default function OrderManagement() {
  const { orders, loading, updateOrderStatus } = useOrdersRealtime();

  const [photoModal, setPhotoModal] = useState({
    isOpen: false,
    url: "",
    title: ""
  });

  const [searchQuery, setSearchQuery] = useState("");

  // ----------------------------------------------------------------------
  // 2. LOGIKA UI & WARNA STATUS
  // ----------------------------------------------------------------------

  const pipelineCards = [
    { label: "Pending", icon: FiClock, colorClass: "bg-amber-500", key: "pending" },
    { label: "Confirmed", icon: FiCheckCircle, colorClass: "bg-blue-500", key: "confirmed" },
    { label: "Picked Up", icon: FiTruck, colorClass: "bg-indigo-500", key: "picked up" },
    { label: "Processing", icon: FiDroplet, colorClass: "bg-sky-500", key: "processing" },
    { label: "Ready", icon: FiBox, colorClass: "bg-violet-500", key: "ready" },
    { label: "Delivery", icon: FiTruck, colorClass: "bg-orange-500", key: "delivery" },
    { label: "Done", icon: FiCheckCircle, colorClass: "bg-emerald-500", key: "done" },
    { label: "Cancelled", icon: FiXCircle, colorClass: "bg-red-500", key: "cancelled" },
  ];

  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || "";
    switch (s) {
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "confirmed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "picked up":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "processing":
        return "bg-sky-100 text-sky-700 border-sky-200";
      case "ready":
        return "bg-violet-100 text-violet-700 border-violet-200";
      case "delivery":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "done":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "cancelled":
      case "canceled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const handleOpenPhoto = (order: any) => {
    let imageUrl = order.shoeImageUrl;

    if (imageUrl && imageUrl.includes('ngrok-free.dev')) {
      try {
        const urlObj = new URL(imageUrl);
        imageUrl = `http://localhost:8000${urlObj.pathname}`;
      } catch (e) {
        console.error("Gagal mem-bypass URL Ngrok", e);
      }
    }

    if (!imageUrl || imageUrl.trim() === "") {
      imageUrl = `http://localhost:8000/api/orders/${order.id}/photo`;
    }

    setPhotoModal({
      isOpen: true,
      url: imageUrl,
      title: `Foto Sepatu - #${order.id.slice(0, 6).toUpperCase()}`
    });
  };

  // Fungsi Penghitung Akurat Realtime
  const getAccurateCount = (targetStatusKey: string) => {
    return orders.filter(order => {
      const currentStatus = (order.status || "pending").toLowerCase().trim();
      if (targetStatusKey === "cancelled") {
        return currentStatus === "cancelled" || currentStatus === "canceled";
      }
      return currentStatus === targetStatusKey;
    }).length;
  };

  const filteredOrders = orders.filter((order) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      order.id.toLowerCase().includes(q) ||
      (order.customerName || "").toLowerCase().includes(q) ||
      (order.phoneNumber || "").toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent 
                        rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Menghubungkan ke Chupatu Engine...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 relative">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Pesanan</h1>
        <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 
                        rounded-full animate-pulse border border-emerald-200 
                        flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          LIVE SYNC DATABASES
        </div>
      </div>

      {/* PIPELINE CARDS */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
        {pipelineCards.map((p) => {
          const accurateCount = getAccurateCount(p.key);

          return (
            <div
              key={p.key}
              className="min-w-[140px] flex-1 bg-white border border-gray-100 
                         rounded-2xl p-4 shadow-sm hover:shadow-md 
                         transition-all snap-start"
            >
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center 
                               mb-3 text-white shadow-sm ${p.colorClass}`}>
                <p.icon size={16} />
              </div>
              <p className="text-2xl font-black text-gray-800 tracking-tight">
                {String(accurateCount).padStart(2, "0")}
              </p>
              <p className="text-[10px] text-gray-400 font-bold uppercase 
                            tracking-wider mt-1">
                {p.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* TABEL DATA */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Kotak Pencarian */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="relative w-full sm:max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ID, Nama Pelanggan, atau No HP..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 
                         rounded-xl text-sm focus:outline-none focus:ring-2 
                         focus:ring-emerald-500/30 transition-all"
            />
          </div>
        </div>

        {/* Area Tabel (Scrollable) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/80 text-[10px] text-gray-500 uppercase 
                              font-bold tracking-widest border-b border-gray-100">
              <tr>
                <th className="py-4 px-5 min-w-[100px]">ID & Waktu</th>
                <th className="py-4 px-5 min-w-[150px]">Pelanggan</th>

                {/* Batas maksimal lebar untuk Header Alamat */}
                <th className="py-4 px-5 max-w-[250px]">Alamat & Catatan</th>

                <th className="py-4 px-5 min-w-[180px]">Detail Layanan & Sepatu</th>
                <th className="py-4 px-5 min-w-[160px]">Penjemputan</th>
                <th className="py-4 px-5 min-w-[140px]">Status Order</th>
                <th className="py-4 px-5 min-w-[120px]">Pembayaran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <p className="text-gray-400 font-medium">
                      Tidak ada data pesanan ditemukan.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const shortId = `#${order.id.slice(0, 6).toUpperCase()}`;
                  const isPaid = !String(order.paymentStatus).toLowerCase().includes("unpaid");

                  const currentStatus = STATUS_LIST.find(
                    s => s.toLowerCase() === order.status?.toLowerCase()
                  ) || "Pending";

                  const availableStatuses = order.isDelivery
                    ? STATUS_LIST
                    : STATUS_LIST.filter(statusStr => statusStr !== "Delivery");

                  // 👉 INJEKSI 1: Ekstrak Latitude dan Longitude jika ada
                  const lat = order.customerLocation?.latitude || order.customerLocation?._lat;
                  const lng = order.customerLocation?.longitude || order.customerLocation?._long;

                  return (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50/80 transition-colors align-top group"
                    >

                      {/* 1. ID & WAKTU */}
                      <td className="py-4 px-5">
                        <div className="font-bold text-emerald-600 text-xs mb-1.5 
                                        bg-emerald-50 w-fit px-2 py-0.5 rounded 
                                        border border-emerald-100 shadow-sm">
                          {shortId}
                        </div>
                        <p className="text-[10px] text-gray-500 font-medium">
                          {formatTanggalWaktu(order.createdAt)}
                        </p>
                      </td>

                      {/* 2. PELANGGAN */}
                      <td className="py-4 px-5">
                        <p className="font-bold text-gray-800 mb-1.5">
                          {order.customerName}
                        </p>
                        <div className="flex flex-col gap-2 items-start">
                          <p className="text-[11px] text-gray-500 flex items-center gap-1.5 font-medium">
                            <FiPhone size={12} className="text-gray-400" />
                            {order.phoneNumber || "-"}
                          </p>
                          <Link
                            href={`/admin/communications?userId=${order.userId}&name=${order.customerName}`}
                            className="bg-emerald-50 text-emerald-700 border border-emerald-200 
                                       hover:bg-emerald-500 hover:text-white transition-all 
                                       px-2.5 py-1 rounded text-[10px] font-bold 
                                       flex items-center gap-1"
                          >
                            <FiMessageCircle size={12} /> Chat
                          </Link>
                        </div>
                      </td>

                      {/* 👉 3. ALAMAT & CATATAN (DENGAN TOMBOL GOOGLE MAPS) */}
                      <td className="py-4 px-5 max-w-[250px]">

                        <p className="text-[11px] font-bold text-gray-700 whitespace-normal 
                                      break-words mb-1">
                          {order.mainAddress || "Alamat tidak tersedia"}
                        </p>

                        <p className="text-[10px] text-gray-500 whitespace-normal 
                                      break-words mb-3 leading-relaxed">
                          {order.detailAddress || "-"}
                        </p>

                        {/* 👉 INJEKSI 2: TOMBOL GOOGLE MAPS */}
                        {lat && lng && (
                          <a
                            href={`https://maps.google.com/?q=${lat},${lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mb-3 bg-rose-50 
                                       text-rose-600 border border-rose-200 px-2 py-1 
                                       rounded text-[10px] font-bold hover:bg-rose-600 
                                       hover:text-white transition-all shadow-sm w-fit"
                          >
                            <FiMapPin size={12} /> Buka Google Maps
                          </a>
                        )}

                        {/* Box Kuning Khusus Notes/Catatan */}
                        {order.notes && order.notes.trim() !== "" && (
                          <div className="bg-yellow-50 border border-yellow-200 p-2 
                                          rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                            <p className="text-[9px] font-bold text-yellow-700 
                                          flex items-center gap-1 mb-1">
                              <FiFileText size={10} /> CATATAN PELANGGAN:
                            </p>
                            <p className="text-[10px] text-gray-700 leading-tight 
                                          whitespace-normal break-words">
                              {order.notes}
                            </p>
                          </div>
                        )}
                      </td>

                      {/* 4. LAYANAN, MERK SEPATU & FOTO */}
                      <td className="py-4 px-5 max-w-[200px]">
                        <p className="font-bold text-gray-800 mb-0.5">
                          {order.serviceName}
                        </p>
                        <p className="text-[10px] text-emerald-600 font-bold mb-2 
                                      uppercase tracking-wide">
                          {order.category || "-"}
                        </p>

                        {order.shoeDetail && order.shoeDetail.trim() !== "" && (
                          <div className="mb-2 w-full">
                            <p className="text-[9px] text-gray-400 font-bold uppercase 
                                          tracking-wider mb-0.5">
                              Merk / Tipe:
                            </p>
                            <p className="text-[11px] font-bold text-gray-700 bg-gray-100 
                                          px-2.5 py-1 rounded-md border border-gray-200 
                                          whitespace-normal break-words">
                              👟 {order.shoeDetail}
                            </p>
                          </div>
                        )}

                        <button
                          onClick={() => handleOpenPhoto(order)}
                          className="flex items-center gap-1.5 text-[10px] font-bold 
                                     bg-blue-50 text-blue-700 border border-blue-200 
                                     px-2.5 py-1.5 rounded-lg hover:bg-blue-600 
                                     hover:text-white transition-all shadow-sm mt-1"
                        >
                          <FiImage size={12} /> Cek Sepatu
                        </button>
                      </td>

                      {/* 5. LOGISTIK */}
                      <td className="py-4 px-5">
                        <span className={`inline-flex px-2 py-1 rounded text-[10px] font-black 
                                          mb-2 border shadow-sm ${order.isDelivery
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                          {order.isDelivery ? "🔄 ANTAR & JEMPUT" : "📥 HANYA JEMPUT"}
                        </span>
                        <div className="text-[11px] text-gray-700 flex items-center 
                                        gap-1.5 mb-1 font-bold">
                          <FiCalendar size={12} className="text-emerald-500" />
                          {formatHariTanggalLengkap(order.pickupDate)}
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center 
                                        gap-1.5 font-medium ml-0.5">
                          <FiClock size={12} className="text-gray-400" />
                          {order.pickupTime || "-"}
                        </div>
                      </td>

                      {/* 6. ACTION & STATUS */}
                      <td className="py-4 px-5">
                        <select
                          value={currentStatus}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className={`text-[11px] font-bold uppercase border rounded-lg 
                                      px-2.5 py-2 w-full max-w-[130px] focus:outline-none 
                                      focus:ring-2 focus:ring-emerald-500/50 cursor-pointer 
                                      shadow-sm transition-all ${getStatusStyle(currentStatus)}`}
                        >
                          {availableStatuses.map(statusStr => (
                            <option
                              key={statusStr}
                              value={statusStr}
                              className="bg-white text-gray-800 font-bold"
                            >
                              {statusStr}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* 7. TAGIHAN */}
                      <td className="py-4 px-5">
                        <p className="font-black text-gray-800 text-sm mb-1.5">
                          {formatRupiah(order.totalPrice)}
                        </p>
                        {isPaid ? (
                          <span className="text-emerald-700 font-bold text-[10px] flex 
                                           items-center gap-1 bg-emerald-50 w-fit 
                                           px-2 py-1 rounded border border-emerald-200">
                            <FiCheckCircle size={12} /> {order.paymentMethod}
                          </span>
                        ) : (
                          <span className="text-amber-700 font-bold text-[10px] flex 
                                           items-center gap-1 bg-amber-50 w-fit 
                                           px-2 py-1 rounded border border-amber-200">
                            <FiClock size={12} />
                            {order.paymentStatus || order.paymentMethod}
                          </span>
                        )}
                      </td>

                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FOTO */}
      {photoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 
                        bg-gray-900/70 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg 
                          overflow-hidden flex flex-col animate-in fade-in 
                          zoom-in duration-200">
            <div className="p-4 border-b border-gray-100 flex items-center 
                            justify-between bg-white">
              <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                <FiImage className="text-emerald-500" size={18} />
                {photoModal.title}
              </h2>
              <button
                onClick={() => setPhotoModal({ isOpen: false, url: "", title: "" })}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 
                           rounded-lg transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-2 bg-gray-100/50 flex items-center justify-center 
                            min-h-[350px] relative">
              <div className="absolute inset-0 flex flex-col items-center 
                              justify-center text-gray-400">
                <FiImage size={48} className="mb-3 opacity-20" />
                <p className="text-xs font-medium opacity-60">
                  Memuat atau Gambar Tidak Tersedia
                </p>
              </div>

              <img
                src={photoModal.url}
                alt={photoModal.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl 
                           relative z-10 shadow-sm border-4 border-white opacity-0 
                           transition-opacity duration-300"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '1';
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}