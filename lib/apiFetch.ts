// lib/apiFetch.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fungsi fetch standar level Enterprise untuk nembak API Laravel.
 * Otomatis nyisipin header keamanan dan nangkap error dari peladen.
 */
export async function fetchFromLaravel(
  endpoint: string, 
  options: RequestInit = {}
) {
  // Proteksi kalau lupa set .env
  if (!API_URL) {
    throw new Error("FATAL: NEXT_PUBLIC_API_URL belum disetting di .env.local");
  }

  // Set header bawaan untuk keamanan dan format data
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // Nanti token otentikasi (Bearer) kita masukkan di sini saat fitur Login selesai
    ...options.headers,
  };

  try {
    // Jalankan request ke Laravel
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    // Tangkap error validasi atau server mati dari Laravel (HTTP 4xx & 5xx)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`[API Error ${response.status}]:`, errorData);
      
      throw new Error(
        errorData.message || 
        `Gagal terhubung ke server (Status: ${response.status})`
      );
    }

    // Kembalikan data dalam format JSON
    return await response.json();
    
  } catch (error) {
    console.error("[API Gateway Error]:", error);
    throw error;
  }
}