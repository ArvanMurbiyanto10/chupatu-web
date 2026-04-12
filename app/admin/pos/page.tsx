"use client";

import { useState } from "react";
import {
  FiShoppingBag, FiUser, FiPhone, FiCreditCard, FiTrash2,
  FiPlus, FiMinus, FiPrinter, FiCheck, FiX, FiSearch
} from "react-icons/fi";

const serviceList = [
  { id: 1, name: "Cuci Reguler", price: 35000, color: "from-blue-500 to-cyan-500" },
  { id: 2, name: "Deep Cleaning", price: 50000, color: "from-emerald-500 to-teal-500" },
  { id: 3, name: "Unyellowing", price: 70000, color: "from-amber-500 to-orange-500" },
  { id: 4, name: "Repaint Full", price: 150000, color: "from-violet-500 to-purple-500" },
  { id: 5, name: "Repaint Partial", price: 100000, color: "from-pink-500 to-rose-500" },
  { id: 6, name: "Premium Package", price: 120000, color: "from-indigo-500 to-blue-500" },
];

export default function POSPage() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [payMethod, setPayMethod] = useState("cash");

  const addToCart = (svc: typeof serviceList[0]) => {
    setCart((prev) => {
      const exist = prev.find((c) => c.id === svc.id);
      if (exist) return prev.map((c) => c.id === svc.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: svc.id, name: svc.name, price: svc.price, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const tax = 0;
  const total = subtotal + tax;

  const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">POS / Kasir</h1>
        <p className="text-sm text-gray-500 mt-1">Input pesanan langsung untuk pelanggan walk-in (drop-off).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left – Service Selector */}
        <div className="lg:col-span-3 space-y-4">
          {/* Customer Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><FiUser className="text-emerald-500" /> Info Pelanggan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Nama</label>
                <input type="text" placeholder="Nama pelanggan" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">No. HP</label>
                <input type="text" placeholder="08xx-xxxx-xxxx" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Tipe Sepatu</label>
                <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer text-gray-600">
                  <option>Sneakers</option>
                  <option>Running Shoes</option>
                  <option>Canvas</option>
                  <option>Leather</option>
                  <option>Suede/Nubuck</option>
                  <option>Boots</option>
                </select>
              </div>
            </div>
          </div>

          {/* Service Grid */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiShoppingBag className="text-emerald-500" /> Pilih Layanan</h3>
              <div className="relative w-48">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input type="text" placeholder="Cari layanan..." className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceList.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => addToCart(svc)}
                  className="text-left p-4 rounded-xl border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 group cursor-pointer bg-white"
                >
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white font-bold text-sm mb-3 group-hover:scale-110 transition-transform`}>
                    {svc.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{svc.name}</p>
                  <p className="text-xs font-bold text-emerald-600">{fmt(svc.price)}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right – Cart / Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
            <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-cyan-50">
              <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiShoppingBag className="text-emerald-600" /> Ringkasan Pesanan</h3>
            </div>

            {cart.length === 0 ? (
              <div className="p-8 text-center">
                <FiShoppingBag className="mx-auto text-gray-200 text-4xl mb-3" />
                <p className="text-sm text-gray-400">Belum ada layanan dipilih</p>
                <p className="text-xs text-gray-300 mt-1">Klik layanan di sebelah kiri</p>
              </div>
            ) : (
              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">{fmt(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => updateQty(item.id, -1)} className="h-7 w-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                        <FiMinus size={12} />
                      </button>
                      <span className="text-sm font-bold text-gray-800 w-6 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="h-7 w-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                        <FiPlus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-gray-800 w-24 text-right">{fmt(item.price * item.qty)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Payment Method */}
            <div className="px-4 py-3 border-t border-gray-100">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Metode Bayar</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "cash", label: "Tunai", icon: "💵" },
                  { key: "qris", label: "QRIS", icon: "📱" },
                  { key: "transfer", label: "Transfer", icon: "🏦" },
                ].map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setPayMethod(m.key)}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      payMethod === m.key
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700 shadow-sm"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <span className="block text-lg mb-0.5">{m.icon}</span>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="px-4 py-3 border-t border-gray-100 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium">{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Pajak</span>
                <span className="font-medium">{fmt(tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t border-dashed border-gray-200">
                <span>Total</span>
                <span className="text-emerald-600">{fmt(total)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-gray-100 space-y-2">
              <button className="w-full py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                <FiCheck size={16} /> Proses Pesanan
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2.5 border border-gray-200 text-gray-600 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                  <FiPrinter size={14} /> Cetak Struk
                </button>
                <button onClick={() => setCart([])} className="py-2.5 border border-gray-200 text-red-500 rounded-xl text-xs font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5">
                  <FiX size={14} /> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
