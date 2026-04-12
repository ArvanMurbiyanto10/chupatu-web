import {
  FiSearch, FiFilter, FiCheckCircle, FiClock, FiBox, FiCamera,
  FiTruck, FiDroplet, FiMoreVertical, FiEye, FiChevronDown
} from "react-icons/fi";

export default function OrderManagement() {
  const pipeline = [
    { label: "Menunggu", count: 4, icon: FiClock, color: "amber" },
    { label: "Dijemput", count: 2, icon: FiTruck, color: "blue" },
    { label: "Dicuci", count: 8, icon: FiDroplet, color: "indigo" },
    { label: "Siap Ambil", count: 3, icon: FiBox, color: "violet" },
    { label: "Selesai", count: 12, icon: FiCheckCircle, color: "emerald" },
  ];

  const orders = [
    { id: "ORD-2061", customer: "Budi Santoso", service: "Deep Cleaning", shoe: "Nike Air Max 90", status: "Dicuci", payment: "Lunas", date: "12 Apr 2026", tracking: "Proses Cuci", proof: false },
    { id: "ORD-2060", customer: "Andi Wijaya", service: "Unyellowing", shoe: "Adidas Ultraboost", status: "Menunggu", payment: "Pending", date: "12 Apr 2026", tracking: "Menunggu Konfirmasi", proof: false },
    { id: "ORD-2059", customer: "Siska Saras", service: "Repaint Full", shoe: "Converse 70s", status: "Siap Ambil", payment: "Lunas", date: "11 Apr 2026", tracking: "Siap Diambil", proof: true },
    { id: "ORD-2058", customer: "Tono Karno", service: "Cuci Reguler", shoe: "Vans Old Skool", status: "Selesai", payment: "Lunas", date: "11 Apr 2026", tracking: "Selesai", proof: true },
    { id: "ORD-2057", customer: "Rina Melati", service: "Deep Cleaning", shoe: "New Balance 550", status: "Dijemput", payment: "Lunas", date: "11 Apr 2026", tracking: "Kurir Dijalan", proof: false },
    { id: "ORD-2056", customer: "Dimas Pratama", service: "Unyellowing", shoe: "Nike AF1", status: "Dicuci", payment: "Lunas", date: "10 Apr 2026", tracking: "Proses Pencucian", proof: false },
  ];

  const statusColor: Record<string, string> = {
    "Menunggu": "bg-amber-100 text-amber-700",
    "Dijemput": "bg-blue-100 text-blue-700",
    "Dicuci": "bg-indigo-100 text-indigo-700",
    "Siap Ambil": "bg-violet-100 text-violet-700",
    "Selesai": "bg-emerald-100 text-emerald-700",
  };

  const pipelineColor: Record<string, { bg: string; icon: string; border: string }> = {
    amber: { bg: "bg-amber-50", icon: "text-amber-500", border: "border-amber-200" },
    blue: { bg: "bg-blue-50", icon: "text-blue-500", border: "border-blue-200" },
    indigo: { bg: "bg-indigo-50", icon: "text-indigo-500", border: "border-indigo-200" },
    violet: { bg: "bg-violet-50", icon: "text-violet-500", border: "border-violet-200" },
    emerald: { bg: "bg-emerald-50", icon: "text-emerald-500", border: "border-emerald-200" },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Pesanan</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola semua pesanan, tracking status, dan verifikasi pembayaran.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 w-fit">
          + Pesanan Baru
        </button>
      </div>

      {/* Pipeline Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {pipeline.map((p) => {
          const pc = pipelineColor[p.color];
          return (
            <div key={p.label} className={`${pc.bg} border ${pc.border} rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all cursor-pointer`}>
              <div className={`h-10 w-10 rounded-lg bg-white flex items-center justify-center ${pc.icon} text-xl shadow-sm`}>
                <p.icon />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{String(p.count).padStart(2, "0")}</p>
                <p className="text-[11px] text-gray-500 font-medium">{p.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Cari Order ID atau nama..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-auto justify-center">
              <FiFilter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-auto justify-center">
              Status <FiChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3 px-5">Order ID</th>
                <th className="py-3 px-5">Pelanggan</th>
                <th className="py-3 px-5">Layanan</th>
                <th className="py-3 px-5">Sepatu</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Pembayaran</th>
                <th className="py-3 px-5">Tracking</th>
                <th className="py-3 px-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-emerald-600 text-sm">{order.id}</td>
                  <td className="py-3.5 px-5">
                    <p className="font-medium text-gray-800">{order.customer}</p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </td>
                  <td className="py-3.5 px-5 text-gray-600">{order.service}</td>
                  <td className="py-3.5 px-5 text-gray-500 text-xs">{order.shoe}</td>
                  <td className="py-3.5 px-5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusColor[order.status] || "bg-gray-100 text-gray-600"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    {order.payment === "Lunas" ? (
                      <span className="text-emerald-600 font-medium text-xs flex items-center gap-1"><FiCheckCircle size={12} /> Lunas</span>
                    ) : (
                      <span className="text-amber-600 font-medium text-xs">Pending</span>
                    )}
                  </td>
                  <td className="py-3.5 px-5 text-xs text-gray-500">{order.tracking}</td>
                  <td className="py-3.5 px-5 text-center">
                    <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <FiEye size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <FiMoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <span className="text-xs">Menampilkan 1 - 6 dari 29 pesanan</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-400 text-xs" disabled>Prev</button>
            <button className="px-3 py-1.5 border border-emerald-200 rounded-lg bg-emerald-50 text-emerald-600 font-semibold text-xs">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">3</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
