import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useDashboardRealtime() {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    todayVisitors: 425, // Butuh koleksi terpisah di masa depan
    totalExpenses: 6482460, // Butuh koleksi terpisah di masa depan
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
      
      // Keranjang sementara untuk Data Aggregation
      let monthlyRekap = new Array(12).fill(0);
      let servicesCount: Record<string, number> = {};
      let customersCount: Record<string, { count: number, rating: number }> = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        
        if (data.status !== "Canceled") {
          const harga = Number(data.totalPrice) || 0;
          totalUang += harga;
          totalPesanan++;

          // 1. Hitung Pendapatan Bulanan (Agregasi Chart)
          if (data.createdAt) {
            // Konversi Firestore Timestamp ke format Date Javascript
            const date = data.createdAt.toDate 
              ? data.createdAt.toDate() 
              : new Date(data.createdAt);
            
            const month = date.getMonth(); // 0 = Jan, 11 = Des
            monthlyRekap[month] += harga;
          }

          // 2. Hitung Layanan Populer
          const serviceName = data.serviceName || "Lainnya";
          servicesCount[serviceName] = (servicesCount[serviceName] || 0) + 1;

          // 3. Hitung Pelanggan Setia
          const custName = data.customerName || "Anonim";
          if (!customersCount[custName]) {
            customersCount[custName] = { 
              count: 0, 
              // Simulasi rating turun-naik berdasarkan jumlah order
              rating: 4.5 
            };
          }
          customersCount[custName].count += 1;
          // Naikkan rating jika order banyak (Logika Gamifikasi)
          if (customersCount[custName].count > 2) {
            customersCount[custName].rating = 4.9;
          }
        }
      });

      // Kalkulasi persentase tinggi grafik (Max 100%)
      const maxOmset = Math.max(...monthlyRekap) || 1; 
      const chartPercentages = monthlyRekap.map(
        omset => Math.round((omset / maxOmset) * 100)
      );

      // Urutkan Layanan dari yang paling laku (Top 3)
      const rankedServices = Object.entries(servicesCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      // Urutkan Pelanggan dari yang paling sering order (Top 3)
      const rankedCustomers = Object.entries(customersCount)
        .map(([name, val]) => ({ name, count: val.count, rating: val.rating }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      setStats({
        totalSales: totalUang,
        totalOrders: totalPesanan,
        todayVisitors: 425,
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