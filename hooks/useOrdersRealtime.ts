// hooks/useOrdersRealtime.ts
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useOrdersRealtime() {
  const [orders, setOrders] = useState<any[]>([]);
  const [pipelineCounts, setPipelineCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "bookings"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedOrders: any[] = [];
      const counts: Record<string, number> = {
        pending: 0, confirmed: 0, "picked up": 0, 
        processing: 0, ready: 0, delivery: 0, done: 0, canceled: 0
      };

      snapshot.forEach((doc) => {
        const data = doc.data();
        const orderData = { id: doc.id, ...data };
        fetchedOrders.push(orderData);

        // Hitung status (case-insensitive)
        const s = (data.status || "pending").toLowerCase();
        if (counts.hasOwnProperty(s)) {
          counts[s]++;
        } else if (s === "canceled" || s === "batal") {
          counts["canceled"]++;
        }
      });

      // Urutkan berdasarkan waktu (terbaru di atas)
      fetchedOrders.sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : 0;
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : 0;
        return dateB - dateA;
      });

      setOrders(fetchedOrders);
      setPipelineCounts(counts);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 👉 FUNGSI UNTUK UBAH STATUS / CANCEL
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const orderRef = doc(db, "bookings", orderId);
      await updateDoc(orderRef, { status: newStatus });
      console.log(`Order ${orderId} updated to ${newStatus}`);
    } catch (error) {
      console.error("Gagal update status:", error);
      alert("Gagal mengubah status pesanan.");
    }
  };

  return { orders, pipelineCounts, loading, updateOrderStatus };
}