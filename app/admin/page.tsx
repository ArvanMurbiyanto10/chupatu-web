import { FiTrendingUp, FiShoppingBag, FiUsers, FiDollarSign } from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Financial Dashboard & CRM</h1>
        <div className="space-x-3 text-right">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Download Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Refresh Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="Rp 12.500.000" trend="+15%" icon={<FiDollarSign className="text-blue-600" />} />
        <StatCard title="Active Orders" value="48" trend="+5%" icon={<FiShoppingBag className="text-indigo-600" />} />
        <StatCard title="Total Customers" value="1,204" trend="+22%" icon={<FiUsers className="text-emerald-600" />} />
        <StatCard title="Avg. Order Value" value="Rp 85.000" trend="+2%" icon={<FiTrendingUp className="text-amber-600" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center h-80">
          <div className="text-center">
            <FiTrendingUp className="mx-auto text-gray-300 text-4xl mb-3" />
            <p className="text-gray-400 font-medium">Revenue Chart (Integration Pending)</p>
          </div>
        </div>
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Actvities</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Order #ORD-{1000 + i}</p>
                  <p className="text-xs text-gray-500">Completed by Courier Andy</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{trend}</span>
      </div>
    </div>
  );
}
