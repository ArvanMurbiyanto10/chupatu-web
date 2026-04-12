import {
  FiTrendingUp, FiShoppingBag, FiUsers, FiDollarSign,
  FiArrowUpRight, FiArrowDownRight, FiMoreHorizontal,
  FiStar, FiBarChart2
} from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hi, Selamat Datang! 👋</h1>
          <p className="text-sm text-gray-500 mt-1">Berikut ringkasan bisnis Chupatu hari ini.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer">
            <option>Hari Ini</option>
            <option>Minggu Ini</option>
            <option>Bulan Ini</option>
            <option>Tahun Ini</option>
          </select>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        <StatCard
          title="Total Penjualan"
          value="Rp 34.123.200"
          change="+8.34%"
          positive={true}
          subtitle="Total Sales World Wide"
          icon={<FiDollarSign />}
          color="emerald"
        />
        <StatCard
          title="Total Pesanan"
          value="63.234"
          change="+3.68%"
          positive={true}
          subtitle="Total Orders World Wide"
          icon={<FiShoppingBag />}
          color="blue"
        />
        <StatCard
          title="Pengunjung Hari Ini"
          value="425"
          change="+2.64%"
          positive={true}
          subtitle="Total Visitor Today"
          icon={<FiUsers />}
          color="violet"
        />
        <StatCard
          title="Total Pengeluaran"
          value="Rp 6.482.460"
          change="-5.79%"
          positive={false}
          subtitle="Total Expense World Wide"
          icon={<FiTrendingUp />}
          color="amber"
        />
      </div>

      {/* Overview Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <h2 className="text-lg font-bold text-gray-800">Pendapatan Bulanan</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Pendapatan</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 ml-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-200" />
              <span>Pengeluaran</span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-[6px] sm:gap-3 h-48 sm:h-56">
          {[
            { month: "Jan", h1: 35, h2: 20 }, { month: "Feb", h1: 45, h2: 25 },
            { month: "Mar", h1: 40, h2: 22 }, { month: "Apr", h1: 55, h2: 30 },
            { month: "Mei", h1: 50, h2: 28 }, { month: "Jun", h1: 65, h2: 35 },
            { month: "Jul", h1: 60, h2: 32 }, { month: "Ags", h1: 70, h2: 38 },
            { month: "Sep", h1: 75, h2: 40 }, { month: "Okt", h1: 85, h2: 45 },
            { month: "Nov", h1: 90, h2: 48 }, { month: "Des", h1: 80, h2: 42 },
          ].map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-1 group">
              <div className="w-full flex gap-0.5 items-end justify-center" style={{ height: "100%" }}>
                <div
                  className="flex-1 max-w-[18px] sm:max-w-[24px] bg-emerald-500 rounded-t-md transition-all duration-300 group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                  style={{ height: `${d.h1}%` }}
                />
                <div
                  className="flex-1 max-w-[18px] sm:max-w-[24px] bg-emerald-200 rounded-t-md transition-all duration-300 group-hover:bg-emerald-300"
                  style={{ height: `${d.h2}%` }}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 3-column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Popular Services */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Layanan Populer</h3>
            <button className="text-gray-400 hover:text-gray-600"><FiMoreHorizontal /></button>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { name: "Deep Cleaning", price: "Rp 50.000", sold: 320, stock: "Unlimited", tag: "POPULER" },
              { name: "Unyellowing", price: "Rp 70.000", sold: 185, stock: "Unlimited", tag: null },
              { name: "Repaint Full", price: "Rp 150.000", sold: 95, stock: "Unlimited", tag: null },
              { name: "Cuci Reguler", price: "Rp 35.000", sold: 540, stock: "Unlimited", tag: "BEST" },
            ].map((item, i) => (
              <div key={i} className="p-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-50 flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                    {item.tag && (
                      <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">{item.tag}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{item.price} • Terjual {item.sold}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loyal Customers */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Pelanggan Setia</h3>
            <button className="text-gray-400 hover:text-gray-600"><FiMoreHorizontal /></button>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { name: "Michelle Bernard", email: "michelle@gmail.com", rating: 4.7, color: "from-pink-400 to-rose-500" },
              { name: "David Grajeda", email: "david@gmail.com", rating: 3.4, color: "from-blue-400 to-indigo-500" },
              { name: "Charles Roman", email: "charles@gmail.com", rating: 4.9, color: "from-amber-400 to-orange-500" },
              { name: "Sarah Wijaya", email: "sarah@gmail.com", rating: 4.5, color: "from-emerald-400 to-teal-500" },
            ].map((c, i) => (
              <div key={i} className="p-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {c.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{c.name}</p>
                  <p className="text-xs text-gray-400 truncate">{c.email}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold flex-shrink-0">
                  {c.rating} <FiStar size={13} className="fill-amber-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Kategori Teratas</h3>
            <select className="text-xs text-gray-500 bg-transparent border-none focus:outline-none cursor-pointer font-medium">
              <option>Mingguan</option>
              <option>Bulanan</option>
            </select>
          </div>
          <div className="p-5 flex flex-col items-center">
            {/* Donut Chart Placeholder */}
            <div className="relative h-40 w-40 mb-5">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="3.5"
                  strokeDasharray="34.3 65.7" strokeDashoffset="0" className="transition-all duration-700" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="3.5"
                  strokeDasharray="18.6 81.4" strokeDashoffset="-34.3" className="transition-all duration-700" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="3.5"
                  strokeDasharray="13.6 86.4" strokeDashoffset="-52.9" className="transition-all duration-700" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="3.5"
                  strokeDasharray="12 88" strokeDashoffset="-66.5" className="transition-all duration-700" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-gray-800">70</p>
                <p className="text-[10px] text-gray-400 font-medium">Layanan</p>
              </div>
            </div>
            <div className="w-full space-y-2.5">
              {[
                { label: "Deep Clean", pct: "34.3%", color: "bg-emerald-500" },
                { label: "Reguler", pct: "18.6%", color: "bg-blue-500" },
                { label: "Unyellowing", pct: "13.6%", color: "bg-amber-500" },
                { label: "Repaint", pct: "12%", color: "bg-violet-500" },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`h-2.5 w-2.5 rounded-full ${cat.color}`} />
                    <span className="text-gray-600 font-medium">{cat.label}</span>
                  </div>
                  <span className="text-gray-500 font-semibold">{cat.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, positive, subtitle, icon, color }: {
  title: string; value: string; change: string; positive: boolean;
  subtitle: string; icon: React.ReactNode; color: string;
}) {
  const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    emerald: { bg: "from-emerald-500 to-emerald-600", text: "text-emerald-600", iconBg: "bg-emerald-50" },
    blue: { bg: "from-blue-500 to-blue-600", text: "text-blue-600", iconBg: "bg-blue-50" },
    violet: { bg: "from-violet-500 to-violet-600", text: "text-violet-600", iconBg: "bg-violet-50" },
    amber: { bg: "from-amber-500 to-amber-600", text: "text-amber-600", iconBg: "bg-amber-50" },
  };
  const c = colorMap[color] || colorMap.emerald;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <div className={`h-11 w-11 rounded-xl ${c.iconBg} flex items-center justify-center text-lg ${c.text}`}>
          {icon}
        </div>
        <button className="text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <FiMoreHorizontal size={16} />
        </button>
      </div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{title}</h3>
      <div className="flex items-baseline gap-2 mb-1">
        <p className="text-xl lg:text-2xl font-bold text-gray-800">{value}</p>
        <span className={`text-[11px] font-bold flex items-center gap-0.5 ${positive ? "text-emerald-500" : "text-red-500"}`}>
          {positive ? <FiArrowUpRight size={12} /> : <FiArrowDownRight size={12} />}
          {change}
        </span>
      </div>
      <p className="text-[11px] text-gray-400">{subtitle}</p>
    </div>
  );
}
