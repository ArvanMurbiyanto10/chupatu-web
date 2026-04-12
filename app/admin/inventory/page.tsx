import { FiPlus, FiFilter, FiSearch, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function InventoryMaster() {
  const inventory = [
    { id: 1, name: "Cuci Reguler", category: "Service", price: "Rp 35.000", duration: "2 Hari", status: "Active" },
    { id: 2, name: "Deep Cleaning", category: "Service", price: "Rp 50.000", duration: "3 Hari", status: "Active" },
    { id: 3, name: "Unyellowing", category: "Service", price: "Rp 70.000", duration: "5 Hari", status: "Active" },
    { id: 4, name: "Repaint", category: "Service", price: "Rp 150.000", duration: "7 Hari", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inventory Master & Services</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all shoe cleaning services, pricing, and duration rules.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer w-fit">
          <FiPlus /> Add New Service
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto">
            <FiFilter /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-medium border-b border-gray-200">
              <tr>
                <th className="py-3 px-6">Service Name</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Est. Duration</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6 font-medium text-gray-900">{item.name}</td>
                  <td className="py-3 px-6">{item.category}</td>
                  <td className="py-3 px-6">{item.price}</td>
                  <td className="py-3 px-6">{item.duration}</td>
                  <td className="py-3 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right space-x-2">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer" title="Edit">
                      <FiEdit2 />
                    </button>
                    <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Delete">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-400 focus:outline-none" disabled>Prev</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-blue-50 text-blue-600 font-medium focus:outline-none">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 focus:outline-none" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
