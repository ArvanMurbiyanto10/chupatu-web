"use client";

import { useState } from "react";
import {
  FiSend, FiSearch, FiBell, FiUsers, FiMessageCircle,
  FiPaperclip, FiSmile, FiCheck, FiCheckCircle, FiClock
} from "react-icons/fi";

export default function CommunicationsPage() {
  const [activeChat, setActiveChat] = useState(0);

  const conversations = [
    { name: "Budi Santoso", lastMsg: "Sepatunya sudah bisa diambil?", time: "2 min", unread: 2, avatar: "from-emerald-400 to-teal-500", online: true },
    { name: "Rina Melati", lastMsg: "Mau konsultasi soal cat sepatu", time: "15 min", unread: 0, avatar: "from-pink-400 to-rose-500", online: true },
    { name: "Andi Wijaya", lastMsg: "Payment sudah saya transfer", time: "1 jam", unread: 1, avatar: "from-blue-400 to-indigo-500", online: false },
    { name: "Sarah Wijaya", lastMsg: "Terima kasih, hasilnya bagus!", time: "3 jam", unread: 0, avatar: "from-violet-400 to-purple-500", online: false },
    { name: "Dimas Pratama", lastMsg: "Foto sepatu sudah saya kirim", time: "5 jam", unread: 0, avatar: "from-amber-400 to-orange-500", online: true },
  ];

  const messages = [
    { from: "customer", text: "Halo min, saya mau tanya soal pesanan ORD-2061", time: "14:20" },
    { from: "admin", text: "Halo Budi! Pesanan Deep Cleaning kamu sedang dalam proses ya. Estimasi selesai besok sore 😊", time: "14:22" },
    { from: "customer", text: "Oke min, sepatunya sudah bisa diambil?", time: "14:25" },
    { from: "admin", text: "Belum ya kak, masih tahap pengeringan. Nanti kami kabari lagi kalau sudah siap 👍", time: "14:26" },
    { from: "customer", text: "Siap min, ditunggu ya!", time: "14:28" },
  ];

  const notifications = [
    { id: 1, title: "🎉 PROMO Spesial Lebaran!", body: "Diskon 30% untuk semua layanan cuci sepatu. Berlaku 10-25 April 2026.", audience: "Semua User", status: "Terkirim", date: "10 Apr 2026" },
    { id: 2, title: "📦 Cabang Baru Segera Hadir", body: "Chupatu hadir lebih dekat! Cabang baru di Mall ABC.", audience: "Member + VIP", status: "Terjadwal", date: "15 Apr 2026" },
    { id: 3, title: "⭐ Jadi VIP Sekarang!", body: "Upgrade ke VIP dan dapatkan diskon eksklusif setiap bulan.", audience: "Reguler Only", status: "Draft", date: "-" },
  ];

  const notifStatusBadge: Record<string, string> = {
    Terkirim: "bg-emerald-100 text-emerald-700",
    Terjadwal: "bg-blue-100 text-blue-700",
    Draft: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Komunikasi & CS</h1>
        <p className="text-sm text-gray-500 mt-1">Live chat pelanggan dan push notification broadcast.</p>
      </div>

      {/* Chat Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex h-[480px]">
          {/* Conversation List */}
          <div className="w-80 border-r border-gray-100 flex flex-col flex-shrink-0 hidden sm:flex">
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input type="text" placeholder="Cari percakapan..." className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setActiveChat(i)}
                  className={`p-3 flex items-center gap-3 cursor-pointer transition-colors border-l-2 ${activeChat === i ? "bg-emerald-50/50 border-emerald-500" : "border-transparent hover:bg-gray-50"}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.avatar} flex items-center justify-center text-white font-bold text-sm`}>
                      {c.name.charAt(0)}
                    </div>
                    {c.online && <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-400 rounded-full ring-2 ring-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-800 truncate">{c.name}</p>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">{c.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{c.lastMsg}</p>
                  </div>
                  {c.unread > 0 && (
                    <div className="h-5 w-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {c.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${conversations[activeChat].avatar} flex items-center justify-center text-white font-bold text-sm`}>
                {conversations[activeChat].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{conversations[activeChat].name}</p>
                <p className="text-[10px] text-emerald-500 font-medium">{conversations[activeChat].online ? "Online" : "Offline"}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "admin" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    m.from === "admin"
                      ? "bg-emerald-600 text-white rounded-br-md"
                      : "bg-white border border-gray-200 text-gray-700 rounded-bl-md shadow-sm"
                  }`}>
                    <p>{m.text}</p>
                    <p className={`text-[10px] mt-1 ${m.from === "admin" ? "text-emerald-200" : "text-gray-400"} flex items-center gap-1 justify-end`}>
                      {m.time}
                      {m.from === "admin" && <FiCheck size={10} />}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 flex items-center gap-2">
              <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"><FiPaperclip size={18} /></button>
              <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"><FiSmile size={18} /></button>
              <input
                type="text"
                placeholder="Ketik pesan..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
              />
              <button className="p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Push Notification */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Compose */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiBell className="text-amber-500" /> Kirim Notifikasi</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Judul</label>
              <input type="text" placeholder="Judul notifikasi..." className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Pesan</label>
              <textarea placeholder="Tulis pesan notifikasi..." rows={3} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none" />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Target Audiens</label>
              <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none cursor-pointer text-gray-600">
                <option>Semua Pengguna</option>
                <option>Member Saja</option>
                <option>VIP Saja</option>
                <option>Reguler Saja</option>
              </select>
            </div>
            <button className="w-full py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
              <FiSend size={14} /> Kirim Notifikasi
            </button>
          </div>
        </div>

        {/* Notification History */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiMessageCircle className="text-blue-500" /> Riwayat Notifikasi</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
                <tr>
                  <th className="py-3 px-5">Judul</th>
                  <th className="py-3 px-5">Audiens</th>
                  <th className="py-3 px-5">Tanggal</th>
                  <th className="py-3 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {notifications.map((n) => (
                  <tr key={n.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-5">
                      <p className="font-medium text-gray-800 text-sm">{n.title}</p>
                      <p className="text-xs text-gray-400 truncate max-w-[250px]">{n.body}</p>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="flex items-center gap-1 text-xs text-gray-500"><FiUsers size={11} /> {n.audience}</span>
                    </td>
                    <td className="py-3.5 px-5 text-xs text-gray-500">{n.date}</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${notifStatusBadge[n.status]}`}>{n.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
