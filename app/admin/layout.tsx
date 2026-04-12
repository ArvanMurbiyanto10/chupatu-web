"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiHome, FiShoppingCart, FiUsers, FiTool, FiBox, FiShoppingBag,
  FiDollarSign, FiGift, FiMessageSquare, FiSettings, FiLogOut,
  FiMenu, FiX, FiSearch, FiBell, FiChevronDown, FiChevronRight
} from "react-icons/fi";

const menuItems = [
  { href: "/admin", icon: FiHome, label: "Dashboard", group: "MENU UTAMA" },
  { href: "/admin/orders", icon: FiShoppingCart, label: "Pesanan", group: "MENU UTAMA" },
  { href: "/admin/customers", icon: FiUsers, label: "Pelanggan", group: "MENU UTAMA" },
  { href: "/admin/services", icon: FiTool, label: "Layanan", group: "APLIKASI" },
  { href: "/admin/inventory", icon: FiBox, label: "Inventaris", group: "APLIKASI" },
  { href: "/admin/pos", icon: FiShoppingBag, label: "POS / Kasir", group: "APLIKASI" },
  { href: "/admin/finance", icon: FiDollarSign, label: "Keuangan", group: "LAPORAN" },
  { href: "/admin/cms", icon: FiGift, label: "Promosi", group: "LAPORAN" },
  { href: "/admin/communications", icon: FiMessageSquare, label: "Komunikasi", group: "LAPORAN" },
  { href: "/admin/settings", icon: FiSettings, label: "Pengaturan", group: "SISTEM" },
];

const groups = ["MENU UTAMA", "APLIKASI", "LAPORAN", "SISTEM"];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen bg-[#f0f2f5] font-sans">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-[260px] bg-[#1a1c23] text-gray-300
        flex flex-col transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10 flex-shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/25">
              C
            </div>
            <span className="text-[15px] font-bold text-white tracking-wide">Chupatu</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 sidebar-scroll">
          {groups.map((group) => {
            const items = menuItems.filter((item) => item.group === group);
            return (
              <div key={group} className="mb-2">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] px-3 mb-2 mt-3">{group}</p>
                {items.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 group
                        ${active
                          ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 text-emerald-400 shadow-sm"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <item.icon size={18} className={active ? "text-emerald-400" : "text-gray-500 group-hover:text-gray-300"} />
                      <span>{item.label}</span>
                      {active && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 mb-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Super Admin</p>
              <p className="text-[10px] text-gray-500 truncate">admin@chupatu.id</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg w-full transition-colors text-[13px] font-medium">
            <FiLogOut size={16} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200/80 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiMenu size={20} />
            </button>
            <div className="hidden sm:flex items-center relative">
              <FiSearch className="absolute left-3 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Cari fitur, pesanan, pelanggan..."
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm w-72 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
              <FiBell size={18} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
            <div className="hidden sm:block h-8 w-px bg-gray-200" />
            <div className="flex items-center gap-2.5 pl-1 cursor-pointer group">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                SA
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">Super Admin</p>
                <p className="text-[11px] text-gray-400 mt-0.5">Administrator</p>
              </div>
              <FiChevronDown size={14} className="text-gray-400 hidden sm:block group-hover:text-gray-600" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>

      <style jsx global>{`
        .sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
