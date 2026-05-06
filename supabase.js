// 1. Deklarasi Library (Jika menggunakan CDN)
const { createClient } = supabase;

// 2. Konfigurasi Client Delta Lunox
const SUPABASE_URL = 'https://ziqimmcdfjhhjpcloxzs.supabase.co'; // Ganti dengan URL Project Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcWltbWNkZmpoaGpwY2xveHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNTM2MzIsImV4cCI6MjA5MzYyOTYzMn0.PSWyImlqJZ7F4Gfw5UecmZSHXYQ4Aa-1er5sAEGgcq8'; // Ganti dengan Anon Key Anda

// 3. Inisialisasi Koneksi
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sekarang anda bisa menggunakan 'supabaseClient' untuk query data
// Contoh: ambil data produk untuk Backoffice
async function getProducts() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*');
    
    if (error) console.error('Error:', error);
    else console.log('Data Produk:', data);
}
