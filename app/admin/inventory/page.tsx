import {
  FiSearch, FiPlus, FiAlertTriangle, FiBox, FiTrendingDown,
  FiPackage, FiEdit2, FiTrash2, FiArrowDown, FiArrowUp
} from "react-icons/fi";

export default function InventoryManagement() {
  const stock = [
    { id: 1, name: "Sabun Cuci Premium", category: "Sabun", qty: 45, unit: "Liter", min: 10, status: "Aman" },
    { id: 2, name: "Sikat Medium Brush", category: "Sikat", qty: 23, unit: "Pcs", min: 5, status: "Aman" },
    { id: 3, name: "Cairan Unyellowing V2", category: "Cairan", qty: 3, unit: "Liter", min: 5, status: "Menipis" },
    { id: 4, name: "Cat Sepatu Putih", category: "Cat", qty: 8, unit: "Botol", min: 10, status: "Menipis" },
    { id: 5, name: "Sikat Soft Suede", category: "Sikat", qty: 15, unit: "Pcs", min: 3, status: "Aman" },
    { id: 6, name: "Protector Spray", category: "Cairan", qty: 0, unit: "Kaleng", min: 5, status: "Habis" },
    { id: 7, name: "Shoe Tree Plastik", category: "Alat", qty: 30, unit: "Pcs", min: 10, status: "Aman" },
    { id: 8, name: "Cat Sepatu Hitam", category: "Cat", qty: 12, unit: "Botol", min: 10, status: "Aman" },
  ];

  const history = [
    { date: "12 Apr 2026", item: "Sabun Cuci Premium", type: "Keluar", qty: 2, unit: "Liter", operator: "Admin Dimas" },
    { date: "12 Apr 2026", item: "Cat Sepatu Putih", type: "Masuk", qty: 10, unit: "Botol", operator: "Supplier A" },
    { date: "11 Apr 2026", item: "Cairan Unyellowing V2", type: "Keluar", qty: 1, unit: "Liter", operator: "Admin Rina" },
    { date: "11 Apr 2026", item: "Sikat Medium Brush", type: "Keluar", qty: 3, unit: "Pcs", operator: "Admin Dimas" },
    { date: "10 Apr 2026", item: "Protector Spray", type: "Keluar", qty: 2, unit: "Kaleng", operator: "Admin Rina" },
  ];

  const statusBadge: Record<string, string> = {
    Aman: "bg-emerald-100 text-emerald-700",
    Menipis: "bg-amber-100 text-amber-700",
    Habis: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inventaris & Stok</h1>
          <p className="text-sm text-gray-500 mt-1">Pencatatan bahan baku dan perlengkapan operasional toko.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 w-fit">
          <FiPlus size={16} /> Tambah Barang
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Item", value: "8", icon: FiPackage, color: "emerald" },
          { label: "Stok Menipis", value: "2", icon: FiTrendingDown, color: "amber" },
          { label: "Stok Habis", value: "1", icon: FiAlertTriangle, color: "red" },
          { label: "Dipakai Hari Ini", value: "5 item", icon: FiBox, color: "blue" },
        ].map((s, i) => {
          const colors: Record<string, { bg: string; text: string }> = {
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
            amber: { bg: "bg-amber-50", text: "text-amber-600" },
            red: { bg: "bg-red-50", text: "text-red-600" },
            blue: { bg: "bg-blue-50", text: "text-blue-600" },
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

      {/* Stock Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <h3 className="font-bold text-gray-800">Daftar Stok Barang</h3>
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Cari barang..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3 px-5">Nama Barang</th>
                <th className="py-3 px-5">Kategori</th>
                <th className="py-3 px-5">Jumlah</th>
                <th className="py-3 px-5">Min. Stok</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {stock.map((item) => (
                <tr key={item.id} className={`hover:bg-gray-50/50 transition-colors ${item.status === "Habis" ? "bg-red-50/30" : ""}`}>
                  <td className="py-3.5 px-5 font-medium text-gray-800">{item.name}</td>
                  <td className="py-3.5 px-5">
                    <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.category}</span>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`font-bold ${item.qty <= item.min ? "text-red-600" : "text-gray-800"}`}>{item.qty}</span>
                    <span className="text-gray-400 text-xs ml-1">{item.unit}</span>
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">{item.min} {item.unit}</td>
                  <td className="py-3.5 px-5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusBadge[item.status]}`}>
                      {item.status === "Menipis" && "⚠ "}{item.status === "Habis" && "🔴 "}{item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right space-x-1">
                    <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit"><FiEdit2 size={14} /></button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"><FiTrash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* History Log */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800">📦 Riwayat Inventaris</h3>
          <button className="text-xs text-emerald-600 font-semibold hover:text-emerald-700">Export CSV →</button>
        </div>
        <div className="divide-y divide-gray-50">
          {history.map((h, i) => (
            <div key={i} className="p-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm ${h.type === "Masuk" ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                {h.type === "Masuk" ? <FiArrowDown /> : <FiArrowUp />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800">{h.item}</p>
                <p className="text-xs text-gray-400">{h.operator} • {h.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-sm font-bold ${h.type === "Masuk" ? "text-emerald-600" : "text-red-600"}`}>
                  {h.type === "Masuk" ? "+" : "-"}{h.qty} {h.unit}
                </p>
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${h.type === "Masuk" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                  {h.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
