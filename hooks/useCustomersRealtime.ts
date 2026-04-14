import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useCustomersRealtime() {
  const [customersData, setCustomersData] = useState<any[]>([]);
  const [bookingsData, setBookingsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Tarik Data Pelanggan (Users)
    const unsubUsers = onSnapshot(query(collection(db, "users")), (snapshot) => {
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCustomersData(users);
    });

    // 2. Tarik Data Transaksi (Bookings) untuk dihitung
    const unsubBookings = onSnapshot(query(collection(db, "bookings")), (snapshot) => {
      const bookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookingsData(bookings);
    });

    // Beri sedikit jeda agar kedua data selesai ditarik sebelum loading hilang
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      unsubUsers();
      unsubBookings();
      clearTimeout(timer);
    };
  }, []);

  // 3. Proses Penggabungan (Data Joining) - Berjalan otomatis kalau ada data baru
  const customers = customersData.map(user => {
    // Cari semua pesanan milik user ini, abaikan yang dibatalkan
    const userHistory = bookingsData.filter(
      b => b.userId === user.id && (b.status || "").toLowerCase() !== 'canceled'
    );

    const totalOrders = userHistory.length;
    // Hitung total uang yang udah dia keluarin
    const totalSpent = userHistory.reduce((sum, b) => sum + (Number(b.totalPrice) || 0), 0);

    // Urutkan riwayat dari yang paling baru
    const sortedHistory = userHistory.sort((a, b) => {
      const dateA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : 0;
      const dateB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : 0;
      return dateB - dateA;
    });

    return {
      ...user,
      totalOrders,
      totalSpent,
      history: sortedHistory // Kita simpan riwayatnya buat ditampilin di Modal Detail
    };
  }).sort((a, b) => {
    // Urutkan pelanggan yang paling baru daftar di urutan atas
    const dateA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : 0;
    const dateB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : 0;
    return dateB - dateA;
  });

  return { customers, loading };
}