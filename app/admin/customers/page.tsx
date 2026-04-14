"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FiSearch, FiUsers, FiUserPlus, FiStar, FiAward,
  FiEye, FiMessageCircle, FiPhone, FiCalendar, FiSmartphone, FiX, FiShoppingBag
} from "react-icons/fi";
import { useCustomersRealtime } from "@/hooks/useCustomersRealtime";

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", minimumFractionDigits: 0,
  }).format(value || 0);
};

export default function CustomerManagement() {
  const { customers, loading } = useCustomersRealtime();

  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("Semua Tier");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 👉 STATE UNTUK MODAL DETAIL PROFIL
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);

  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => {
      const keyword = searchTerm.toLowerCase();
      const matchesSearch =
        (c.name || "").toLowerCase().includes(keyword) ||
        (c.email || "").toLowerCase().includes(keyword) ||
        (c.phoneNumber || "").toLowerCase().includes(keyword);

      const isVIP = c.memberType === "Pro";
      const matchesTier =
        tierFilter === "Semua Tier" ||
        (tierFilter === "VIP" && isVIP) ||
        (tierFilter === "Reguler" && !isVIP);

      return matchesSearch && matchesTier;
    });
  }, [customers, searchTerm, tierFilter]);

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatTanggal = (timestamp: any) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
  };

  const totalVIP = customers.filter(c => c.memberType === "Pro").length;

  if (loading) return <div className="p-10 text-center animate-pulse text-emerald-600 font-bold">Sinkronisasi Database Pelanggan...</div>;

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Pelanggan</h1>
          <p className="text-sm text-gray-500 mt-1">Database pelanggan, keanggotaan, dan riwayat transaksi.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Pelanggan", value: customers.length, icon: FiUsers, color: "emerald" },
          { label: "Pelanggan VIP", value: totalVIP, icon: FiStar, color: "amber" },
          { label: "Member Aktif", value: customers.length - totalVIP, icon: FiAward, color: "blue" },
          { label: "Akses Realtime", value: "Sync", icon: FiSmartphone, color: "violet" },
        ].map((s, i) => {
          const colors: Record<string, { bg: string; text: string }> = {
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
            blue: { bg: "bg-blue-50", text: "text-blue-600" },
            amber: { bg: "bg-amber-50", text: "text-amber-600" },
            violet: { bg: "bg-violet-50", text: "text-violet-600" },
          };
          const c = colors[s.color];
          return (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
              <div className={`h-11 w-11 rounded-xl ${c.bg} flex items-center justify-center ${c.text} text-xl shrink-0`}>
                <s.icon />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">{s.value}</p>
                <p className="text-[11px] text-gray-500 font-medium">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between bg-gray-50/50">
          <div className="relative w-full sm:w-80">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              placeholder="Cari nama, email, atau HP..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select
              value={tierFilter}
              onChange={(e) => { setTierFilter(e.target.value); setCurrentPage(1); }}
              className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer flex-1 sm:flex-auto"
            >
              <option value="Semua Tier">Semua Tier</option>
              <option value="VIP">🌟 VIP (Pro)</option>
              <option value="Reguler">Reguler</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-[10px] text-gray-500 uppercase font-bold tracking-widest border-b border-gray-100">
              <tr>
                <th className="py-4 px-5">Profil Pelanggan</th>
                <th className="py-4 px-5">Kontak & Info</th>
                <th className="py-4 px-5">Keanggotaan</th>
                <th className="py-4 px-5">Statistik Transaksi</th>
                <th className="py-4 px-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginatedCustomers.length === 0 ? (
                <tr><td colSpan={5} className="py-10 text-center text-gray-400 font-medium">Tidak ada data ditemukan.</td></tr>
              ) : (
                paginatedCustomers.map((c) => {
                  const isVIP = c.memberType === "Pro";
                  return (
                    <tr key={c.id} className="hover:bg-gray-50/80 transition-colors align-top">
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner ${isVIP ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-emerald-400 to-teal-500'}`}>
                            {(c.name || "A").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{c.name || "Tanpa Nama"}</p>
                            <p className="text-[11px] text-gray-400 truncate max-w-[150px]">{c.email || "-"}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-1">
                          <FiPhone size={12} className="text-emerald-500" /> {c.phoneNumber || "-"}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                          <FiCalendar size={12} /> Gabung: {formatTanggal(c.createdAt)}
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <span className={`px-2.5 py-1 rounded border text-[10px] font-bold tracking-wide ${isVIP ? "bg-amber-50 text-amber-600 border-amber-200" : "bg-gray-100 text-gray-600 border-gray-200"}`}>
                          {isVIP ? "⭐ VIP (PRO)" : "REGULER"}
                        </span>
                      </td>
                      <td className="py-4 px-5">
                        {/* 👉 INI ANGKA REAL DARI DATABASE BOOKINGS SEKARANG */}
                        <p className="text-[11px] text-gray-500 mb-0.5">Order: <span className="font-bold text-gray-800">{c.totalOrders}x</span></p>
                        <p className="text-[11px] text-gray-500">Spent: <span className="font-bold text-emerald-600">{formatRupiah(c.totalSpent)}</span></p>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center justify-center gap-2">
                          {/* 👉 TOMBOL BUKA MODAL DETAIL PROFIL */}
                          <button
                            onClick={() => setSelectedCustomer(c)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                            title="Detail Profil & Riwayat"
                          >
                            <FiEye size={16} />
                          </button>
                          <Link href={`/admin/communications?userId=${c.id}&name=${c.name}`} className="p-2 text-emerald-500 hover:text-white hover:bg-emerald-500 rounded-lg transition-all border border-emerald-200" title="Live Chat Sistem">
                            <FiMessageCircle size={16} />
                          </Link>
                          {c.phoneNumber && (
                            <a href={`https://wa.me/${c.phoneNumber.replace(/^0/, '62')}`} target="_blank" rel="noopener noreferrer" className="p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg transition-all border border-green-200" title="Chat WhatsApp">
                              <FiSmartphone size={16} />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/30">
          <span className="text-xs font-medium text-gray-500">
            Menampilkan {filteredCustomers.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} dari {filteredCustomers.length} pelanggan
          </span>
          <div className="flex gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-600 text-xs font-semibold disabled:opacity-50 hover:bg-gray-50 transition-colors">Prev</button>
            <div className="px-3 py-1.5 border border-emerald-200 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs">Hal {currentPage} / {totalPages || 1}</div>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || totalPages === 0} className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-600 text-xs font-semibold disabled:opacity-50 hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* 👉 MODAL DETAIL PROFIL (Hanya muncul kalau ada user yang dipilih) */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">

            {/* Header Modal */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FiUsers className="text-emerald-600" /> Detail Profil Pelanggan
              </h2>
              <button onClick={() => setSelectedCustomer(null)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <FiX size={20} />
              </button>
            </div>

            {/* Konten Modal (Bisa di-scroll) */}
            <div className="p-6 overflow-y-auto">

              {/* Info Utama */}
              <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-gray-100 pb-6 mb-6">
                <div className={`h-24 w-24 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shrink-0 shadow-inner ${selectedCustomer.memberType === "Pro" ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-emerald-400 to-teal-500'}`}>
                  {(selectedCustomer.name || "A").charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-800">{selectedCustomer.name}</h3>
                    {selectedCustomer.memberType === "Pro" && <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded font-bold border border-amber-200">⭐ VIP PRO</span>}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{selectedCustomer.email || "Email tidak tersedia"}</p>

                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600"><FiPhone className="text-emerald-500" /> {selectedCustomer.phoneNumber || "-"}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><FiCalendar className="text-emerald-500" /> Joined {formatTanggal(selectedCustomer.createdAt)}</div>
                  </div>
                </div>
              </div>

              {/* Riwayat Transaksi Terakhir */}
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FiShoppingBag className="text-emerald-600" /> Riwayat Transaksi ({selectedCustomer.totalOrders})
              </h4>

              {selectedCustomer.history.length === 0 ? (
                <div className="p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-500 border border-gray-100">Pelanggan ini belum pernah melakukan transaksi.</div>
              ) : (
                <div className="space-y-3">
                  {selectedCustomer.history.map((order: any) => (
                    <div key={order.id} className="p-3 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div>
                        <p className="font-bold text-sm text-gray-800">{order.serviceName} <span className="text-gray-400 font-normal text-xs ml-1">({order.category})</span></p>
                        <p className="text-xs text-gray-500">{formatTanggal(order.createdAt)} • Status: <span className="font-semibold uppercase">{order.status}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600 text-sm">{formatRupiah(order.totalPrice)}</p>
                        <p className="text-[10px] text-gray-400">{order.paymentMethod}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}