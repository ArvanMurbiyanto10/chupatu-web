import { FiSearch, FiFilter, FiCheckCircle, FiClock, FiBox, FiCamera } from "react-icons/fi";

export default function OrderWorkflow() {
  const orders = [
    { id: "ORD-1005", customer: "Budi Santoso", service: "Deep Cleaning", status: "Baru", payment: "Lunas", date: "2026-03-31", proof: false },
    { id: "ORD-1004", customer: "Andi Wijaya", service: "Unyellowing", status: "Proses", payment: "Lunas", date: "2026-03-30", proof: false },
    { id: "ORD-1003", customer: "Siska Saras", service: "Repaint", status: "Selesai", payment: "Lunas", date: "2026-03-29", proof: true },
    { id: "ORD-1002", customer: "Tono Karno", service: "Cuci Reguler", status: "Menunggu Konfirmasi", payment: "Pending", date: "2026-03-31", proof: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Order Workflow Management</h1>
          <p className="text-sm text-gray-500 mt-1">Track orders, manage workflows, and verify courier proofs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm">
          <div className="h-10 w-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg text-xl"><FiCheckCircle /></div>
          <div><p className="text-2xl font-bold">12</p><p className="text-xs text-gray-500 font-medium">Selesai Hari Ini</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm">
          <div className="h-10 w-10 bg-amber-50 text-amber-600 flex items-center justify-center rounded-lg text-xl"><FiClock /></div>
          <div><p className="text-2xl font-bold">08</p><p className="text-xs text-gray-500 font-medium">Sedang Diproses</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm">
          <div className="h-10 w-10 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-lg text-xl"><FiBox /></div>
          <div><p className="text-2xl font-bold">04</p><p className="text-xs text-gray-500 font-medium">Pesanan Baru</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm">
          <div className="h-10 w-10 bg-purple-50 text-purple-600 flex items-center justify-center rounded-lg text-xl"><FiCamera /></div>
          <div><p className="text-2xl font-bold">03</p><p className="text-xs text-gray-500 font-medium">Menunggu Review Foto</p></div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search Order ID..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto">
            <FiFilter /> Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-medium border-b border-gray-200">
              <tr>
                <th className="py-3 px-6">Order ID</th>
                <th className="py-3 px-6">Customer</th>
                <th className="py-3 px-6">Service</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Payment</th>
                <th className="py-3 px-6">Proof of Work</th>
                <th className="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6 font-semibold text-blue-600">{order.id}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{order.customer}</td>
                  <td className="py-3 px-6">{order.service}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Selesai' ? 'bg-emerald-100 text-emerald-700' : 
                      order.status === 'Proses' ? 'bg-blue-100 text-blue-700' : 
                      order.status === 'Baru' ? 'bg-purple-100 text-purple-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    {order.payment === "Lunas" ? (
                      <span className="text-emerald-600 font-medium">Lunas</span>
                    ) : (
                      <span className="text-red-500 font-medium">Pending/Mayar</span>
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {order.proof ? (
                      <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium"><FiCheckCircle /> Verified</span>
                    ) : (
                      <span className="text-gray-400 text-xs">Waiting</span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors cursor-pointer">
                      Manage
                    </button>
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
