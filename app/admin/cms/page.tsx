"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  FiImage, FiPlus, FiTag, FiEdit2, FiTrash2, FiCalendar,
  FiPercent, FiGift, FiX, FiUploadCloud,
  FiEye, FiCheck, FiSlash // 👉 Icon baru untuk tombol besar dan preview
} from "react-icons/fi";

import { db } from "@/lib/firebase";
import {
  collection, onSnapshot, doc,
  deleteDoc, updateDoc, addDoc, serverTimestamp
} from "firebase/firestore";

export default function PromoManagement() {
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 👉 STATE BARU: Untuk nampilin Pop-up Preview Gambar
  const [previewImage, setPreviewImage] = useState({
    isOpen: false, url: "", title: ""
  });

  const statusBadge: Record<string, string> = {
    Active: "bg-emerald-100 text-emerald-700",
    Auto: "bg-blue-100 text-blue-700",
    Expired: "bg-gray-100 text-gray-500",
    Live: "bg-emerald-500 text-white",
    Draft: "bg-gray-100 text-gray-500",
  };

  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bannerForm, setBannerForm] = useState({
    id: "", title: "", description: "", isActive: true, imageFile: null as File | null, imageUrl: "",
  });

  const [voucherForm, setVoucherForm] = useState({
    id: "", code: "", type: "Persentase", value: "", desc: "", quota: 100, expiry: "", status: "Active",
  });

  useEffect(() => {
    const unsubBanners = onSnapshot(collection(db, "promos"), (snapshot) => {
      const bannerData = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, title: data.title || "Tanpa Judul", desc: data.description || "",
          status: data.isActive ? "Live" : "Draft", imageUrl: data.imageUrl || "", isActiveAsli: data.isActive
        };
      });
      setBanners(bannerData);
    });

    const unsubVouchers = onSnapshot(collection(db, "vouchers"), (snapshot) => {
      const voucherData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVouchers(voucherData);
      setLoading(false);
    });

    return () => { unsubBanners(); unsubVouchers(); };
  }, []);

  const openBannerModal = (banner: any = null) => {
    if (banner) {
      setBannerForm({
        id: banner.id, title: banner.title, description: banner.desc,
        isActive: banner.isActiveAsli, imageFile: null, imageUrl: banner.imageUrl,
      });
    } else {
      setBannerForm({ id: "", title: "", description: "", isActive: true, imageFile: null, imageUrl: "" });
    }
    setIsBannerModalOpen(true);
  };

  const handleBannerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let finalImageUrl = bannerForm.imageUrl;

      if (bannerForm.imageFile) {
        const formData = new FormData();
        formData.append("image", bannerForm.imageFile);

        // 👉 PERBAIKAN: Ganti URL ini dengan Link Ngrok lo yang aktif!
        // Dan tambahkan headers anti-block Ngrok.
        const uploadRes = await fetch("https://malik-pseudomonocyclic-misti.ngrok-free.dev/api/upload-promo", {
          method: "POST",
          body: formData,
          headers: {
            "ngrok-skip-browser-warning": "69420"
          }
        });

        if (!uploadRes.ok) throw new Error("Gagal upload gambar ke Laravel");

        const uploadData = await uploadRes.json();
        finalImageUrl = uploadData.imageUrl;
      }

      const promoData = {
        title: bannerForm.title, description: bannerForm.description,
        isActive: bannerForm.isActive, imageUrl: finalImageUrl, updatedAt: serverTimestamp(),
      };

      if (bannerForm.id) {
        await updateDoc(doc(db, "promos", bannerForm.id), promoData);
      } else {
        await addDoc(collection(db, "promos"), { ...promoData, createdAt: serverTimestamp() });
      }

      setIsBannerModalOpen(false);
    } catch (error) {
      console.error("Gagal simpan banner:", error);
      alert("Terjadi kesalahan saat menyimpan banner. Pastikan Laravel & Ngrok menyala.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteBanner = async (id: string, title: string) => {
    if (window.confirm(`⚠️ Yakin ingin menghapus promo "${title}"?`)) {
      await deleteDoc(doc(db, "promos", id));
    }
  };

  const handleToggleBannerStatus = async (id: string, currentIsActive: boolean) => {
    await updateDoc(doc(db, "promos", id), { isActive: !currentIsActive });
  };

  const openVoucherModal = (voucher: any = null) => {
    if (voucher) {
      setVoucherForm({ ...voucher });
    } else {
      setVoucherForm({ id: "", code: "", type: "Persentase", value: "", desc: "", quota: 100, expiry: "", status: "Active" });
    }
    setIsVoucherModalOpen(true);
  };

  const handleVoucherSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const vData = {
        code: voucherForm.code.toUpperCase(), type: voucherForm.type, value: voucherForm.value, desc: voucherForm.desc,
        quota: Number(voucherForm.quota), expiry: voucherForm.expiry, status: voucherForm.status, updatedAt: serverTimestamp(),
      };

      if (voucherForm.id) {
        await updateDoc(doc(db, "vouchers", voucherForm.id), vData);
      } else {
        await addDoc(collection(db, "vouchers"), { ...vData, used: 0, createdAt: serverTimestamp() });
      }
      setIsVoucherModalOpen(false);
    } catch (error) {
      console.error("Gagal simpan voucher:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteVoucher = async (id: string, code: string) => {
    if (window.confirm(`⚠️ Yakin ingin menghapus voucher ${code}?`)) {
      await deleteDoc(doc(db, "vouchers", id));
    }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Promosi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola voucher diskon dan banner promosi aplikasi.</p>
        </div>
      </div>

      {/* BANNER SECTION */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <FiImage className="text-blue-500" /> Banner Aplikasi
          </h3>
          <button
            onClick={() => openBannerModal()}
            className="px-3 py-2 bg-emerald-600 text-white rounded-xl text-xs font-medium 
                       hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
          >
            <FiPlus size={14} /> Tambah Banner
          </button>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-gray-100 overflow-hidden 
                         hover:shadow-lg transition-all flex flex-col bg-white"
            >
              {/* 👉 PERUBAHAN UI: Gambar Bisa Diklik Preview */}
              <div
                onClick={() => setPreviewImage({ isOpen: true, url: b.imageUrl, title: b.title })}
                className="h-44 cursor-zoom-in group relative overflow-hidden bg-gray-100"
              >
                <img
                  src={b.imageUrl || "https://via.placeholder.com/400x200?text=No+Image"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={b.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                transition-all flex items-center justify-center 
                                opacity-0 group-hover:opacity-100">
                  <FiEye className="text-white" size={30} />
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg 
                                    ${b.isActiveAsli ? 'bg-emerald-500 text-white' : 'bg-gray-500 text-white'}`}>
                    {b.status}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-gray-800 text-lg line-clamp-1">{b.title}</h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 mb-4">{b.desc}</p>

                {/* 👉 PERUBAHAN UI: Tombol Jauh Lebih Besar & Nyaman Diklik */}
                <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-gray-50">
                  <button
                    onClick={() => openBannerModal(b)}
                    className="flex flex-col items-center justify-center py-2 bg-blue-50 text-blue-600 
                               rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FiEdit2 size={16} />
                    <span className="text-[10px] font-bold mt-1">Edit</span>
                  </button>

                  <button
                    onClick={() => handleToggleBannerStatus(b.id, b.isActiveAsli)}
                    className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all 
                      ${b.isActiveAsli
                        ? 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white'
                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white'}`}
                  >
                    {b.isActiveAsli ? <FiSlash size={16} /> : <FiCheck size={16} />}
                    <span className="text-[10px] font-bold mt-1">{b.isActiveAsli ? "Off" : "On"}</span>
                  </button>

                  <button
                    onClick={() => handleDeleteBanner(b.id, b.title)}
                    className="flex flex-col items-center justify-center py-2 bg-red-50 text-red-600 
                               rounded-xl hover:bg-red-600 hover:text-white transition-all"
                  >
                    <FiTrash2 size={16} />
                    <span className="text-[10px] font-bold mt-1">Hapus</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div
            onClick={() => openBannerModal()}
            className="rounded-2xl border-2 border-dashed border-gray-200 flex flex-col 
                       items-center justify-center text-gray-400 hover:text-emerald-500 
                       hover:border-emerald-400 hover:bg-emerald-50/50 cursor-pointer 
                       transition-all min-h-[250px]"
          >
            <FiPlus className="text-3xl mb-2" />
            <span className="text-sm font-bold">Upload Banner Baru</span>
          </div>
        </div>
      </div>

      {/* VOUCHER SECTION (Tidak ada yang dirubah) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 flex items-center gap-2"><FiTag className="text-amber-500" /> Kode Voucher & Diskon</h3>
          <button onClick={() => openVoucherModal()} className="px-3 py-2 bg-emerald-600 text-white rounded-xl text-xs font-medium hover:bg-emerald-700 transition-colors flex items-center gap-1.5">
            <FiPlus size={14} /> Buat Voucher
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50/80 text-[11px] text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3 px-5">Kode</th><th className="py-3 px-5">Tipe & Nilai</th><th className="py-3 px-5">Deskripsi</th>
                <th className="py-3 px-5">Pemakaian</th><th className="py-3 px-5">Kadaluarsa</th><th className="py-3 px-5">Status</th><th className="py-3 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {vouchers.length === 0 ? (
                <tr><td colSpan={7} className="py-8 text-center text-xs text-gray-400">Belum ada voucher yang dibuat.</td></tr>
              ) : (
                vouchers.map((v) => (
                  <tr key={v.id} className={`hover:bg-gray-50/50 transition-colors ${v.status === "Expired" ? "opacity-50" : ""}`}>
                    <td className="py-3.5 px-5"><span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs">{v.code}</span></td>
                    <td className="py-3.5 px-5"><span className="flex items-center gap-1 text-xs font-bold text-gray-800">{v.type === "Persentase" ? <FiPercent className="text-gray-400" size={11} /> : <FiGift className="text-gray-400" size={11} />} {v.value}</span></td>
                    <td className="py-3.5 px-5 text-xs text-gray-500 max-w-[200px] truncate">{v.desc}</td>
                    <td className="py-3.5 px-5">
                      <div>
                        <span className="text-xs font-medium text-gray-700">{v.quota === -1 ? "∞" : `${v.used || 0}/${v.quota}`}</span>
                        {v.quota > 0 && (<div className="w-16 bg-gray-200 h-1 mt-1 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full rounded-full" style={{ width: `${((v.used || 0) / v.quota) * 100}%` }} /></div>)}
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-xs text-gray-500"><span className="flex items-center gap-1"><FiCalendar size={11} /> {v.expiry}</span></td>
                    <td className="py-3.5 px-5"><span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusBadge[v.status] || statusBadge['Draft']}`}>{v.status}</span></td>
                    <td className="py-3.5 px-5 text-right space-x-1">
                      <button onClick={() => openVoucherModal(v)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 size={14} /></button>
                      <button onClick={() => handleDeleteVoucher(v.id, v.code)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 size={14} /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 👉 TAMBAHAN UI: MODAL PREVIEW GAMBAR JUMBO */}
      {previewImage.isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 
                     bg-black/90 backdrop-blur-sm transition-all"
          onClick={() => setPreviewImage({ ...previewImage, isOpen: false })}
        >
          <div className="relative max-w-4xl w-full animate-in zoom-in duration-300">
            <button className="absolute -top-12 right-0 text-white hover:text-emerald-400 
                               flex items-center gap-2 font-bold">
              <FiX size={30} /> <span>Tutup Preview</span>
            </button>
            <img
              src={previewImage.url}
              className="w-full rounded-2xl shadow-2xl border-4 border-white/10"
              alt="Preview"
            />
            <p className="text-white text-center mt-4 font-bold text-lg">
              {previewImage.title}
            </p>
          </div>
        </div>
      )}

      {/* MODAL BANNER */}
      {isBannerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-gray-800">{bannerForm.id ? "Edit Banner" : "Tambah Banner Baru"}</h2>
              <button onClick={() => setIsBannerModalOpen(false)} className="text-gray-400 hover:text-red-500"><FiX size={20} /></button>
            </div>
            <form onSubmit={handleBannerSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Judul Promo</label>
                <input type="text" required value={bannerForm.title} onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                  placeholder="Promo Lebaran..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea required value={bannerForm.description} onChange={(e) => setBannerForm({ ...bannerForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                  rows={3} placeholder="Diskon spesial untuk..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Upload Gambar <span className="text-gray-400 font-normal">(Laravel Storage)</span></label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50 transition-colors relative">
                  <input type="file" accept="image/*" onChange={(e) => setBannerForm({ ...bannerForm, imageFile: e.target?.files?.[0] || null })} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <FiUploadCloud className="text-gray-400 mb-2" size={24} />
                  <span className="text-xs font-medium text-emerald-600">{bannerForm.imageFile ? bannerForm.imageFile.name : (bannerForm.imageUrl ? "Gambar Terpilih, klik untuk ganti" : "Pilih File Gambar")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="isActive" checked={bannerForm.isActive} onChange={(e) => setBannerForm({ ...bannerForm, isActive: e.target.checked })} className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500" />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Langsung Tayang (Live)</label>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 disabled:opacity-50 transition-all mt-4">
                {isSubmitting ? "Menyimpan..." : "Simpan Banner"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL VOUCHER */}
      {isVoucherModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-gray-800">{voucherForm.id ? "Edit Voucher" : "Buat Voucher Baru"}</h2>
              <button onClick={() => setIsVoucherModalOpen(false)} className="text-gray-400 hover:text-red-500"><FiX size={20} /></button>
            </div>
            <form onSubmit={handleVoucherSubmit} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Kode Voucher</label>
                  <input type="text" required value={voucherForm.code} onChange={(e) => setVoucherForm({ ...voucherForm, code: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 font-mono uppercase focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                    placeholder="CHUPATU10" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tipe Diskon</label>
                  <select value={voucherForm.type} onChange={(e) => setVoucherForm({ ...voucherForm, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none">
                    <option value="Persentase">Persentase (%)</option>
                    <option value="Nominal">Nominal (Rp)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Nilai (ex: 20% / 15000)</label>
                  <input type="text" required value={voucherForm.value} onChange={(e) => setVoucherForm({ ...voucherForm, value: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                    placeholder="20%" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Status</label>
                  <select value={voucherForm.status} onChange={(e) => setVoucherForm({ ...voucherForm, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none">
                    <option value="Active">Active</option>
                    <option value="Auto">Auto (Tanpa Ketik)</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Deskripsi Singkat</label>
                <input type="text" required value={voucherForm.desc} onChange={(e) => setVoucherForm({ ...voucherForm, desc: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                  placeholder="Diskon layanan reguler..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Batas Kuota (-1 = ∞)</label>
                  <input type="number" required value={voucherForm.quota} onChange={(e) => setVoucherForm({ ...voucherForm, quota: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tanggal Expired</label>
                  <input type="text" required value={voucherForm.expiry} onChange={(e) => setVoucherForm({ ...voucherForm, expiry: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                    placeholder="31 Des 2026" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 disabled:opacity-50 transition-all mt-4">
                {isSubmitting ? "Menyimpan..." : "Simpan Voucher"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}