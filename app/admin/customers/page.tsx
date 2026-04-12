import {
  FiSearch, FiFilter, FiUsers, FiUserPlus, FiStar, FiAward,
  FiMoreVertical, FiEye, FiMail, FiPhone, FiCalendar
} from "react-icons/fi";

export default function CustomerManagement() {
  const customers = [
    { id: 1, name: "Budi Santoso", email: "budi@gmail.com", phone: "0812-3456-7890", tier: "VIP", joined: "Jan 2025", orders: 42, spent: "Rp 3.200.000", avatar: "from-emerald-400 to-teal-500" },
    { id: 2, name: "Andi Wijaya", email: "andi@gmail.com", phone: "0813-5678-1234", tier: "Member", joined: "Mar 2025", orders: 15, spent: "Rp 1.050.000", avatar: "from-blue-400 to-indigo-500" },
    { id: 3, name: "Siska Saras", email: "siska@gmail.com", phone: "0856-7890-1234", tier: "Reguler", joined: "Jun 2025", orders: 3, spent: "Rp 150.000", avatar: "from-pink-400 to-rose-500" },
    { id: 4, name: "Tono Karno", email: "tono@gmail.com", phone: "0821-2345-6789", tier: "Member", joined: "Jul 2025", orders: 8, spent: "Rp 560.000", avatar: "from-amber-400 to-orange-500" },
    { id: 5, name: "Rina Melati", email: "rina@gmail.com", phone: "0877-6543-2109", tier: "VIP", joined: "Dec 2024", orders: 56, spent: "Rp 5.600.000", avatar: "from-violet-400 to-purple-500" },
    { id: 6, name: "Dimas Pratama", email: "dimas@gmail.com", phone: "0896-1234-5678", tier: "Reguler", joined: "Apr 2026", orders: 1, spent: "Rp 35.000", avatar: "from-cyan-400 to-sky-500" },
  ];

  const tierBadge: Record<string, string> = {
    VIP: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
    Member: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
    Reguler: "bg-gray-100 text-gray-600 ring-1 ring-gray-200",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Pelanggan</h1>
          <p className="text-sm text-gray-500 mt-1">Database pelanggan, keanggotaan, dan riwayat transaksi.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 w-fit">
          <FiUserPlus size={16} /> Tambah Pelanggan
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Pelanggan", value: "1,204", icon: FiUsers, color: "emerald" },
          { label: "Member Aktif", value: "342", icon: FiAward, color: "blue" },
          { label: "Pelanggan VIP", value: "67", icon: FiStar, color: "amber" },
          { label: "Baru Bulan Ini", value: "+28", icon: FiUserPlus, color: "violet" },
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
              <div className={`h-11 w-11 rounded-xl ${c.bg} flex items-center justify-center ${c.text} text-xl`}>
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

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Cari nama atau email..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none flex-1 sm:flex-auto cursor-pointer">
              <option>Semua Tier</option>
              <option>VIP</option>
              <option>Member</option>
              <option>Reguler</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-auto justify-center">
              <FiFilter size={14} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3 px-5">Pelanggan</th>
                <th className="py-3 px-5">Kontak</th>
                <th className="py-3 px-5">Keanggotaan</th>
                <th className="py-3 px-5">Bergabung</th>
                <th className="py-3 px-5">Total Order</th>
                <th className="py-3 px-5">Total Belanja</th>
                <th className="py-3 px-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{c.name}</p>
                        <p className="text-xs text-gray-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FiPhone size={11} /> {c.phone}
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${tierBadge[c.tier]}`}>
                      {c.tier === "VIP" && "⭐ "}{c.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-xs text-gray-500">
                    <div className="flex items-center gap-1"><FiCalendar size={11} /> {c.joined}</div>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-800">{c.orders}</td>
                  <td className="py-3.5 px-5 font-semibold text-emerald-600">{c.spent}</td>
                  <td className="py-3.5 px-5 text-center">
                    <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <FiEye size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <FiMail size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <span className="text-xs">Menampilkan 1 - 6 dari 1,204 pelanggan</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-400 text-xs" disabled>Prev</button>
            <button className="px-3 py-1.5 border border-emerald-200 rounded-lg bg-emerald-50 text-emerald-600 font-semibold text-xs">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">...</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">201</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
