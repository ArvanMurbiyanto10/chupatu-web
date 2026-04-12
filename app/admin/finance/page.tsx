import {
  FiDollarSign, FiTrendingUp, FiTrendingDown, FiArrowUpRight,
  FiArrowDownRight, FiDownload, FiFilter, FiCalendar,
  FiCheckCircle, FiClock, FiAlertCircle
} from "react-icons/fi";

export default function FinancePage() {
  const transactions = [
    { date: "12 Apr 2026", desc: "Deep Cleaning - Budi S.", category: "Layanan", amount: 50000, type: "Masuk", status: "Verified" },
    { date: "12 Apr 2026", desc: "Pembelian Sabun Cuci", category: "Operasional", amount: 150000, type: "Keluar", status: "Verified" },
    { date: "12 Apr 2026", desc: "Repaint Full - Rina M.", category: "Layanan", amount: 150000, type: "Masuk", status: "Verified" },
    { date: "11 Apr 2026", desc: "Cuci Reguler - Tono K.", category: "Layanan", amount: 35000, type: "Masuk", status: "Verified" },
    { date: "11 Apr 2026", desc: "Gaji Karyawan Dimas", category: "Gaji", amount: 2500000, type: "Keluar", status: "Verified" },
    { date: "11 Apr 2026", desc: "Unyellowing - Andi W.", category: "Layanan", amount: 70000, type: "Masuk", status: "Pending" },
    { date: "10 Apr 2026", desc: "Listrik & Air Bulanan", category: "Utilitas", amount: 450000, type: "Keluar", status: "Verified" },
    { date: "10 Apr 2026", desc: "Premium Package - Sarah W.", category: "Layanan", amount: 120000, type: "Masuk", status: "Verified" },
  ];

  const pendingPayments = [
    { id: "PAY-012", customer: "Andi Wijaya", amount: "Rp 70.000", method: "Transfer BCA", date: "11 Apr 2026" },
    { id: "PAY-009", customer: "Dimas Pratama", amount: "Rp 35.000", method: "Transfer Mandiri", date: "10 Apr 2026" },
  ];

  const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Keuangan & Laporan</h1>
          <p className="text-sm text-gray-500 mt-1">Laporan pemasukan, pengeluaran, dan validasi pembayaran.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <FiCalendar size={14} /> April 2026
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2">
            <FiDownload size={14} /> Export
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <FinanceStatCard title="Total Pemasukan" value="Rp 34.123.200" change="+12.5%" positive={true} icon={<FiTrendingUp />} color="emerald" />
        <FinanceStatCard title="Total Pengeluaran" value="Rp 6.482.460" change="+3.2%" positive={false} icon={<FiTrendingDown />} color="red" />
        <FinanceStatCard title="Laba Bersih" value="Rp 27.640.740" change="+15.8%" positive={true} icon={<FiDollarSign />} color="blue" />
        <FinanceStatCard title="Pending Payment" value="2 Transaksi" change="" positive={true} icon={<FiClock />} color="amber" />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-800">Arus Kas Bulanan</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Pemasukan
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" /> Pengeluaran
            </div>
          </div>
        </div>
        <div className="flex items-end gap-[6px] sm:gap-3 h-44 sm:h-52">
          {[
            { m: "Jan", inc: 45, exp: 20 }, { m: "Feb", inc: 55, exp: 25 },
            { m: "Mar", inc: 50, exp: 22 }, { m: "Apr", inc: 65, exp: 18 },
            { m: "Mei", inc: 60, exp: 28 }, { m: "Jun", inc: 70, exp: 30 },
            { m: "Jul", inc: 68, exp: 32 }, { m: "Ags", inc: 75, exp: 35 },
            { m: "Sep", inc: 80, exp: 38 }, { m: "Okt", inc: 85, exp: 20 },
            { m: "Nov", inc: 90, exp: 42 }, { m: "Des", inc: 78, exp: 35 },
          ].map((d) => (
            <div key={d.m} className="flex-1 flex flex-col items-center gap-1 group">
              <div className="w-full flex gap-0.5 items-end justify-center" style={{ height: "100%" }}>
                <div className="flex-1 max-w-[18px] sm:max-w-[22px] bg-emerald-500 rounded-t-md transition-all group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/20" style={{ height: `${d.inc}%` }} />
                <div className="flex-1 max-w-[18px] sm:max-w-[22px] bg-red-400 rounded-t-md transition-all group-hover:bg-red-500" style={{ height: `${d.exp}%` }} />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{d.m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Transaction Log */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Riwayat Transaksi</h3>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-600 hover:bg-gray-50 transition-colors">
              <FiFilter size={12} /> Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Deskripsi</th>
                  <th className="py-3 px-4">Kategori</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-4 text-xs text-gray-500">{t.date}</td>
                    <td className="py-3 px-4 font-medium text-gray-800 text-xs">{t.desc}</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{t.category}</span>
                    </td>
                    <td className={`py-3 px-4 font-bold text-sm ${t.type === "Masuk" ? "text-emerald-600" : "text-red-600"}`}>
                      {t.type === "Masuk" ? "+" : "-"}{fmt(t.amount)}
                    </td>
                    <td className="py-3 px-4">
                      {t.status === "Verified" ? (
                        <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-medium"><FiCheckCircle size={11} /> Verified</span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-600 text-[11px] font-medium"><FiClock size={11} /> Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Payments */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <FiAlertCircle className="text-amber-500" /> Validasi Pembayaran
            </h3>
            <p className="text-[11px] text-gray-400 mt-1">Transfer manual yang belum diverifikasi</p>
          </div>
          <div className="divide-y divide-gray-50">
            {pendingPayments.map((p) => (
              <div key={p.id} className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-600 font-bold">{p.id}</span>
                  <span className="text-[10px] text-gray-400">{p.date}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800">{p.customer}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{p.method}</span>
                  <span className="font-bold text-gray-800">{p.amount}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1">
                    <FiCheckCircle size={12} /> Validasi
                  </button>
                  <button className="flex-1 py-2 border border-gray-200 text-gray-500 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
                    Tolak
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceStatCard({ title, value, change, positive, icon, color }: {
  title: string; value: string; change: string; positive: boolean; icon: React.ReactNode; color: string;
}) {
  const colorMap: Record<string, { bg: string; text: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
    red: { bg: "bg-red-50", text: "text-red-600" },
    blue: { bg: "bg-blue-50", text: "text-blue-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600" },
  };
  const c = colorMap[color] || colorMap.emerald;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className={`h-11 w-11 rounded-xl ${c.bg} flex items-center justify-center text-lg ${c.text}`}>{icon}</div>
      </div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-bold text-gray-800">{value}</p>
        {change && (
          <span className={`text-[11px] font-bold flex items-center gap-0.5 ${positive ? "text-emerald-500" : "text-red-500"}`}>
            {positive ? <FiArrowUpRight size={12} /> : <FiArrowDownRight size={12} />}{change}
          </span>
        )}
      </div>
    </div>
  );
}
