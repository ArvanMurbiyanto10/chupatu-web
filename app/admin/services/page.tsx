import {
  FiPlus, FiSearch, FiEdit2, FiTrash2, FiStar, FiMessageCircle,
  FiGrid, FiList, FiClock, FiDollarSign
} from "react-icons/fi";

export default function ServiceManagement() {
  const services = [
    { id: 1, name: "Cuci Reguler", desc: "Pencucian standar untuk sepatu sehari-hari", price: "Rp 35.000", duration: "2 Hari", category: "Cleaning", rating: 4.5, reviews: 128, color: "from-blue-500 to-cyan-500" },
    { id: 2, name: "Deep Cleaning", desc: "Pembersihan mendalam hingga ke sela-sela", price: "Rp 50.000", duration: "3 Hari", category: "Cleaning", rating: 4.8, reviews: 256, color: "from-emerald-500 to-teal-500" },
    { id: 3, name: "Unyellowing", desc: "Mengembalikan warna putih kekuningan pada sole", price: "Rp 70.000", duration: "5 Hari", category: "Treatment", rating: 4.6, reviews: 89, color: "from-amber-500 to-orange-500" },
    { id: 4, name: "Repaint Full", desc: "Cat ulang seluruh permukaan sepatu", price: "Rp 150.000", duration: "7 Hari", category: "Repaint", rating: 4.9, reviews: 67, color: "from-violet-500 to-purple-500" },
    { id: 5, name: "Repaint Partial", desc: "Cat ulang sebagian area yang rusak/pudar", price: "Rp 100.000", duration: "5 Hari", category: "Repaint", rating: 4.7, reviews: 43, color: "from-pink-500 to-rose-500" },
    { id: 6, name: "Premium Package", desc: "Deep clean + unyellowing + protection coating", price: "Rp 120.000", duration: "5 Hari", category: "Package", rating: 4.9, reviews: 34, color: "from-indigo-500 to-blue-500" },
  ];

  const reviews = [
    { customer: "Budi S.", service: "Deep Cleaning", rating: 5, text: "Sepatu bersih banget, kayak baru lagi!", date: "2 jam lalu", avatar: "from-emerald-400 to-teal-500" },
    { customer: "Rina M.", service: "Repaint Full", rating: 5, text: "Cat nya rapi, warna persis yang diminta. TOP!", date: "5 jam lalu", avatar: "from-pink-400 to-rose-500" },
    { customer: "Andi W.", service: "Unyellowing", rating: 4, text: "Lumayan bersih, tapi ada sedikit sisa kuning di pinggir.", date: "1 hari lalu", avatar: "from-blue-400 to-indigo-500" },
    { customer: "Siska S.", service: "Cuci Reguler", rating: 3, text: "Hasilnya oke, tapi agak lama prosesnya.", date: "2 hari lalu", avatar: "from-amber-400 to-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Layanan</h1>
          <p className="text-sm text-gray-500 mt-1">Katalog layanan cuci sepatu dan moderasi review pelanggan.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 w-fit">
          <FiPlus size={16} /> Tambah Layanan
        </button>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {services.map((svc) => (
          <div key={svc.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
            <div className={`h-2 bg-gradient-to-r ${svc.color}`} />
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-800">{svc.name}</h3>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">{svc.category}</span>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 size={14} /></button>
                  <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 size={14} /></button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">{svc.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <FiDollarSign size={12} className="text-emerald-500" />
                    <span className="font-semibold text-gray-800">{svc.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <FiClock size={12} />
                    <span>{svc.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                  <FiStar size={12} className="fill-amber-400" /> {svc.rating}
                  <span className="text-gray-400 font-normal">({svc.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiMessageCircle className="text-emerald-500" />
            <h3 className="font-bold text-gray-800">Review & Rating Terbaru</h3>
          </div>
          <button className="text-xs text-emerald-600 font-semibold hover:text-emerald-700">Lihat Semua →</button>
        </div>
        <div className="divide-y divide-gray-50">
          {reviews.map((r, i) => (
            <div key={i} className="p-4 flex gap-3 hover:bg-gray-50/50 transition-colors">
              <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${r.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {r.customer.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-gray-800">{r.customer}</p>
                  <span className="text-[10px] text-gray-400">• {r.service}</span>
                  <span className="text-[10px] text-gray-400 ml-auto flex-shrink-0">{r.date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <FiStar key={si} size={12} className={si < r.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{r.text}</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-[11px] text-emerald-600 font-medium hover:text-emerald-700">Balas</button>
                  <button className="text-[11px] text-gray-400 font-medium hover:text-gray-600">Sembunyikan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
