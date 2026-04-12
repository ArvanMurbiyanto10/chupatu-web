import {
  FiImage, FiPlus, FiTag, FiEdit2, FiTrash2, FiEye, FiEyeOff,
  FiCalendar, FiPercent, FiGift, FiMoreVertical
} from "react-icons/fi";

export default function PromoManagement() {
  const vouchers = [
    { code: "CHUPATUSUCI", type: "Persentase", value: "20%", desc: "Diskon 20% untuk semua layanan", used: 45, quota: 100, expiry: "20 Apr 2026", status: "Active" },
    { code: "NEWUSER10", type: "Nominal", value: "Rp 10.000", desc: "Potongan flat Rp 10.000 pengguna baru", used: 0, quota: -1, expiry: "Tidak ada", status: "Auto" },
    { code: "DEEPCLEAN25", type: "Persentase", value: "25%", desc: "Khusus layanan Deep Cleaning", used: 12, quota: 50, expiry: "30 Apr 2026", status: "Active" },
    { code: "MEMBER50K", type: "Nominal", value: "Rp 50.000", desc: "Disc spesial khusus member VIP", used: 5, quota: 20, expiry: "31 Mei 2026", status: "Active" },
    { code: "EXPIRED2025", type: "Persentase", value: "15%", desc: "Promo tahun lalu sudah berakhir", used: 89, quota: 100, expiry: "31 Des 2025", status: "Expired" },
  ];

  const banners = [
    { title: "Promo Ramadhan 2026", desc: "Diskon spesial bulan suci", status: "Live", color: "from-emerald-400 to-teal-500" },
    { title: "Grand Opening Cabang 2", desc: "Launching cabang baru", status: "Scheduled", color: "from-blue-400 to-indigo-500" },
    { title: "Referral Program", desc: "Ajak teman dapat diskon", status: "Live", color: "from-amber-400 to-orange-500" },
  ];

  const statusBadge: Record<string, string> = {
    Active: "bg-emerald-100 text-emerald-700",
    Auto: "bg-blue-100 text-blue-700",
    Expired: "bg-gray-100 text-gray-500",
    Live: "bg-emerald-500 text-white",
    Scheduled: "bg-blue-100 text-blue-700",
    Draft: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Promosi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola voucher diskon dan banner promosi aplikasi.</p>
        </div>
      </div>

      {/* Banner Management */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiImage className="text-blue-500" /> Banner Aplikasi</h3>
          <button className="px-3 py-2 bg-emerald-600 text-white rounded-xl text-xs font-medium hover:bg-emerald-700 transition-colors flex items-center gap-1.5">
            <FiPlus size={14} /> Tambah Banner
          </button>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((b, i) => (
            <div key={i} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all group">
              <div className={`h-32 bg-gradient-to-br ${b.color} flex items-center justify-center relative`}>
                <span className="text-white font-bold text-lg opacity-80">{b.title}</span>
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusBadge[b.status]} shadow-sm`}>
                    {b.status === "Live" ? "🟢 " : ""}{b.status}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-semibold text-gray-800">{b.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{b.desc}</p>
                <div className="flex gap-2 mt-3">
                  <button className="text-[11px] text-blue-600 font-medium hover:text-blue-700">Edit</button>
                  <button className="text-[11px] text-gray-400 font-medium hover:text-gray-600">Nonaktifkan</button>
                  <button className="text-[11px] text-red-500 font-medium hover:text-red-600">Hapus</button>
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-400 hover:bg-emerald-50/50 cursor-pointer transition-all min-h-[200px]">
            <FiPlus className="text-2xl mb-2" />
            <span className="text-sm font-medium">Upload Banner</span>
            <span className="text-[10px] text-gray-400 mt-1">1024 × 500px</span>
          </div>
        </div>
      </div>

      {/* Voucher Management */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiTag className="text-amber-500" /> Kode Voucher & Diskon</h3>
          <button className="px-3 py-2 bg-emerald-600 text-white rounded-xl text-xs font-medium hover:bg-emerald-700 transition-colors flex items-center gap-1.5">
            <FiPlus size={14} /> Buat Voucher
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3 px-5">Kode</th>
                <th className="py-3 px-5">Tipe</th>
                <th className="py-3 px-5">Nilai</th>
                <th className="py-3 px-5">Deskripsi</th>
                <th className="py-3 px-5">Pemakaian</th>
                <th className="py-3 px-5">Kadaluarsa</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {vouchers.map((v, i) => (
                <tr key={i} className={`hover:bg-gray-50/50 transition-colors ${v.status === "Expired" ? "opacity-50" : ""}`}>
                  <td className="py-3.5 px-5">
                    <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs">{v.code}</span>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      {v.type === "Persentase" ? <FiPercent size={11} /> : <FiGift size={11} />} {v.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-gray-800 text-sm">{v.value}</td>
                  <td className="py-3.5 px-5 text-xs text-gray-500 max-w-[200px] truncate">{v.desc}</td>
                  <td className="py-3.5 px-5">
                    <div>
                      <span className="text-xs font-medium text-gray-700">{v.quota === -1 ? "∞" : `${v.used}/${v.quota}`}</span>
                      {v.quota > 0 && (
                        <div className="w-16 bg-gray-200 h-1 mt-1 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${(v.used / v.quota) * 100}%` }} />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><FiCalendar size={11} /> {v.expiry}</span>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusBadge[v.status]}`}>{v.status}</span>
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
    </div>
  );
}
