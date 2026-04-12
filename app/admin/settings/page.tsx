"use client";

import { useState } from "react";
import {
  FiSettings, FiUsers, FiMapPin, FiClock, FiPhone,
  FiPlus, FiEdit2, FiTrash2, FiShield, FiSave, FiImage
} from "react-icons/fi";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"store" | "roles">("store");

  const users = [
    { id: 1, name: "Super Admin", email: "admin@chupatu.id", role: "Super Admin", status: "Aktif", avatar: "from-emerald-400 to-cyan-500" },
    { id: 2, name: "Dimas Pratama", email: "dimas@chupatu.id", role: "Admin", status: "Aktif", avatar: "from-blue-400 to-indigo-500" },
    { id: 3, name: "Rina Melati", email: "rina@chupatu.id", role: "Kasir", status: "Aktif", avatar: "from-pink-400 to-rose-500" },
    { id: 4, name: "Budi Operator", email: "budi.op@chupatu.id", role: "Operator", status: "Nonaktif", avatar: "from-amber-400 to-orange-500" },
  ];

  const roleBadge: Record<string, string> = {
    "Super Admin": "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
    Admin: "bg-blue-100 text-blue-700 ring-1 ring-blue-200",
    Kasir: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
    Operator: "bg-violet-100 text-violet-700 ring-1 ring-violet-200",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
        <p className="text-sm text-gray-500 mt-1">Konfigurasi toko dan manajemen akses pengguna.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("store")}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "store" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          <span className="flex items-center gap-2"><FiSettings size={15} /> Pengaturan Toko</span>
        </button>
        <button
          onClick={() => setActiveTab("roles")}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "roles" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          <span className="flex items-center gap-2"><FiShield size={15} /> Manajemen Akses</span>
        </button>
      </div>

      {activeTab === "store" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Store Info */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiMapPin className="text-emerald-500" /> Informasi Toko</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Nama Toko</label>
                <input type="text" defaultValue="Chupatu Shoe Care" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">No. WhatsApp</label>
                <input type="text" defaultValue="+62 812-3456-7890" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400" />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Alamat Toko</label>
              <textarea defaultValue="Jl. Sudirman No. 123, Yogyakarta, 55281" rows={2} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none" />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Deskripsi Toko</label>
              <textarea defaultValue="Chupatu Shoe Care - Layanan cuci, repaint, dan perawatan sepatu profesional dengan pickup & delivery." rows={2} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none" />
            </div>

            <h3 className="font-bold text-gray-800 flex items-center gap-2 pt-3 border-t border-gray-100"><FiClock className="text-blue-500" /> Jam Operasional</h3>
            <div className="space-y-2.5">
              {[
                { day: "Senin - Jumat", open: "08:00", close: "21:00", active: true },
                { day: "Sabtu", open: "09:00", close: "20:00", active: true },
                { day: "Minggu", open: "10:00", close: "18:00", active: true },
                { day: "Libur Nasional", open: "-", close: "-", active: false },
              ].map((schedule, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-xl">
                  <div className={`h-2 w-2 rounded-full ${schedule.active ? "bg-emerald-400" : "bg-gray-300"}`} />
                  <span className="text-sm font-medium text-gray-700 w-40">{schedule.day}</span>
                  {schedule.active ? (
                    <div className="flex items-center gap-2">
                      <input type="time" defaultValue={schedule.open} className="px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
                      <span className="text-gray-400 text-xs">sampai</span>
                      <input type="time" defaultValue={schedule.close} className="px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
                    </div>
                  ) : (
                    <span className="text-xs text-red-400 font-medium">Tutup</span>
                  )}
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 mt-3">
              <FiSave size={16} /> Simpan Perubahan
            </button>
          </div>

          {/* Logo / Branding */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><FiImage className="text-violet-500" /> Logo Toko</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-400 hover:bg-emerald-50/50 cursor-pointer transition-all">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-3xl mb-3 shadow-lg shadow-emerald-500/20">
                  C
                </div>
                <p className="text-sm font-medium mt-2">Klik untuk upload logo</p>
                <p className="text-[10px] text-gray-300 mt-1">PNG, SVG max 2MB</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-3">Informasi Cepat</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <FiMapPin className="text-gray-400" size={16} />
                  <span className="text-gray-600">Yogyakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-gray-400" size={16} />
                  <span className="text-gray-600">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiClock className="text-gray-400" size={16} />
                  <span className="text-gray-600">08:00 - 21:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiShield className="text-emerald-500" /> Daftar Pengguna & Hak Akses</h3>
              <button className="px-3 py-2 bg-emerald-600 text-white rounded-xl text-xs font-medium hover:bg-emerald-700 transition-colors flex items-center gap-1.5">
                <FiPlus size={14} /> Tambah User
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="py-3 px-5">Pengguna</th>
                    <th className="py-3 px-5">Role</th>
                    <th className="py-3 px-5">Status</th>
                    <th className="py-3 px-5">Hak Akses</th>
                    <th className="py-3 px-5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {users.map((u) => (
                    <tr key={u.id} className={`hover:bg-gray-50/50 transition-colors ${u.status === "Nonaktif" ? "opacity-50" : ""}`}>
                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${u.avatar} flex items-center justify-center text-white font-bold text-sm`}>
                            {u.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{u.name}</p>
                            <p className="text-xs text-gray-400">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-5">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${roleBadge[u.role]}`}>{u.role}</span>
                      </td>
                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-2">
                          <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${u.status === "Aktif" ? "bg-emerald-500" : "bg-gray-300"}`}>
                            <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform shadow-sm ${u.status === "Aktif" ? "translate-x-4" : "translate-x-0.5"}`} />
                          </div>
                          <span className={`text-xs font-medium ${u.status === "Aktif" ? "text-emerald-600" : "text-gray-400"}`}>{u.status}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5">
                        <div className="flex flex-wrap gap-1">
                          {u.role === "Super Admin" && (
                            <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">FULL ACCESS</span>
                          )}
                          {u.role === "Admin" && (
                            <>
                              <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">Orders</span>
                              <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">Customers</span>
                              <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">Inventory</span>
                            </>
                          )}
                          {u.role === "Kasir" && (
                            <>
                              <span className="text-[9px] font-bold bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">POS</span>
                              <span className="text-[9px] font-bold bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">Orders</span>
                            </>
                          )}
                          {u.role === "Operator" && (
                            <span className="text-[9px] font-bold bg-violet-50 text-violet-600 px-1.5 py-0.5 rounded">Orders Only</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-right space-x-1">
                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 size={14} /></button>
                        <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Role permissions description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: "Super Admin", desc: "Akses penuh ke seluruh fitur dashboard termasuk keuangan dan pengaturan sistem.", color: "emerald", icon: "👑" },
              { role: "Admin", desc: "Mengelola pesanan, pelanggan, inventaris, dan layanan. Tidak bisa akses keuangan.", color: "blue", icon: "🛡️" },
              { role: "Kasir", desc: "Hanya akses POS dan manajemen pesanan untuk operasional kasir harian.", color: "amber", icon: "💳" },
              { role: "Operator", desc: "Monitoring pesanan saja, tidak bisa mengubah data apapun.", color: "violet", icon: "👁️" },
            ].map((r, i) => {
              const colors: Record<string, { border: string; bg: string }> = {
                emerald: { border: "border-emerald-200", bg: "bg-emerald-50" },
                blue: { border: "border-blue-200", bg: "bg-blue-50" },
                amber: { border: "border-amber-200", bg: "bg-amber-50" },
                violet: { border: "border-violet-200", bg: "bg-violet-50" },
              };
              const c = colors[r.color];
              return (
                <div key={i} className={`${c.bg} border ${c.border} rounded-2xl p-4`}>
                  <span className="text-2xl mb-2 block">{r.icon}</span>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">{r.role}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
