import { FiImage, FiPlus, FiTag, FiBookOpen } from "react-icons/fi";

export default function CMSPromo() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">CMS & Dynamic Promo</h1>
          <p className="text-sm text-gray-500 mt-1">Manage app banners, discounts, and educational contents.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Dynamic Promos Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-gray-800 flex items-center gap-2"><FiImage className="text-blue-600" /> Banner Promosi (Aplikasi)</h2>
              <button className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 flex items-center gap-1 transition-colors">
                <FiPlus /> Tambah Banner
              </button>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-400 cursor-pointer transition-colors group relative">
                <div className="h-32 bg-blue-100 rounded flex items-center justify-center mb-3">
                  <span className="text-blue-500 font-bold">Banner Ramadhan</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800">Promo Ramadhan 2026</h3>
                <p className="text-xs text-gray-500">Active until 15 April 2026</p>
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow">LIVE</div>
              </div>
              <div className="border border-gray-200 border-dashed rounded-lg p-3 flex flex-col items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors h-full min-h-[160px]">
                <FiPlus className="text-2xl mb-2" />
                <span className="text-sm font-medium">Upload New Banner</span>
                <span className="text-xs text-gray-400 mt-1">1024x500px recommended</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-gray-800 flex items-center gap-2"><FiBookOpen className="text-emerald-600" /> Konten Edukasi Perawatan</h2>
              <button className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 flex items-center gap-1 transition-colors">
                <FiPlus /> Buat Artikel
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">Cara Merawat Suede agar Tidak Pudar</h3>
                  <p className="text-xs text-gray-500">Published • 2 days ago</p>
                </div>
                <button className="text-blue-600 text-sm font-medium">Edit</button>
              </div>
              <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">Tips Mencuci Sepatu Kanvas Putih</h3>
                  <p className="text-xs text-gray-500">Published • 1 week ago</p>
                </div>
                <button className="text-blue-600 text-sm font-medium">Edit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Discount Codes Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 flex items-center gap-2"><FiTag className="text-amber-500" /> Kode Diskon</h2>
              <FiPlus className="text-gray-400 hover:text-blue-600 cursor-pointer text-xl" />
            </div>
            <div className="p-4 space-y-4">
              <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded">CHUPATUSUCI</span>
                  <span className="text-[10px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded">ACTIVE</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">Diskon 20% untuk semua layanan.</p>
                <div className="flex justify-between mt-3 text-[10px] font-medium text-gray-500">
                  <span>Used: 45/100</span>
                  <span>Exp: 20-04-2026</span>
                </div>
                <div className="w-full bg-amber-200 h-1 mt-1 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[45%]"></div>
                </div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold font-mono text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEWUSER10</span>
                  <span className="text-[10px] font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded">AUTO</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">Potongan flat Rp 10.000 pengguna baru.</p>
                <div className="flex justify-between mt-3 text-[10px] font-medium text-gray-500">
                  <span>Used: ∞</span>
                  <span>No Expiry</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-800">Lihat Semua Logika Diskon &rarr;</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
