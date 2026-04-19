import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useDashboardRealtime() {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    completedOrders: 0, // 👉 1. Kita ganti jadi Pesanan Selesai
    totalExpenses: 6482460, 
    chartData: new Array(12).fill(0),
    topServices: [] as any[],
    topCustomers: [] as any[],
    loading: true
  });

  useEffect(() => {
    const q = query(collection(db, "bookings"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let totalUang = 0;
      let totalPesanan = 0;
      let pesananSelesai = 0; // 👉 2. Keranjang untuk ngitung yang udah "Done"
      
      const monthlyRekap = new Array(12).fill(0);
      const servicesCount: Record<string, number> = {};
      const customersCount: Record<string, { count: number, rating: number }> = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        
        if (data.status !== "Canceled") {
          const harga = Number(data.totalPrice) || 0;
          totalUang += harga;
          totalPesanan++;

          // 👉 3. Logika: Kalau statusnya Done, tambahin ke keranjang selesai
          if (data.status === "Done") {
            pesananSelesai++;
          }

          // Hitung Pendapatan Bulanan
          if (data.createdAt) {
            const date = data.createdAt.toDate 
              ? data.createdAt.toDate() 
              : new Date(data.createdAt);
            const month = date.getMonth(); 
            monthlyRekap[month] += harga;
          }

          // Hitung Layanan Populer
          const serviceName = data.serviceName || "Lainnya";
          servicesCount[serviceName] = (servicesCount[serviceName] || 0) + 1;

          // Hitung Pelanggan Setia
          const custName = data.customerName || "Anonim";
          if (!customersCount[custName]) {
            customersCount[custName] = { count: 0, rating: 4.5 };
          }
          customersCount[custName].count += 1;
          if (customersCount[custName].count > 2) {
            customersCount[custName].rating = 4.9;
          }
        }
      });

      const maxOmset = Math.max(...monthlyRekap) || 1; 
      const chartPercentages = monthlyRekap.map(
        omset => Math.round((omset / maxOmset) * 100)
      );

      const rankedServices = Object.entries(servicesCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      const rankedCustomers = Object.entries(customersCount)
        .map(([name, val]) => ({ name, count: val.count, rating: val.rating }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      setStats({
        totalSales: totalUang,
        totalOrders: totalPesanan,
        completedOrders: pesananSelesai, // 👉 4. Masukkan ke hasil akhir
        totalExpenses: 6482460,
        chartData: chartPercentages,
        topServices: rankedServices,
        topCustomers: rankedCustomers,
        loading: false
      });
    });

    return () => unsubscribe();
  }, []);

  return stats;
}