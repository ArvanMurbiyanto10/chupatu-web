import Link from "next/link";
import { FiHome, FiBox, FiList, FiDollarSign, FiSettings, FiLogOut } from "react-icons/fi";

export const metadata = {
  title: "Chupatu Command Center",
  description: "Super-Admin & Backend Command Center",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex sticky top-0 h-screen">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Chupatu Admin
          </span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <NavItem href="/admin" icon={<FiHome />} label="Dashboard" />
          <NavItem href="/admin/orders" icon={<FiList />} label="Orders" />
          <NavItem href="/admin/inventory" icon={<FiBox />} label="Inventory Master" />
          <NavItem href="/admin/finance" icon={<FiDollarSign />} label="Finance & CRM" />
          <NavItem href="/admin/cms" icon={<FiSettings />} label="CMS & Promo" />
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors cursor-pointer">
            <FiLogOut />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm sticky top-0 z-10">
          <div className="text-sm text-gray-500 font-medium">Command Center / Dashboard</div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              SA
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="block">
      <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer group">
        <span className="text-lg group-hover:text-blue-600">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
}
