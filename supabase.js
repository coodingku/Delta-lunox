// 1. Deklarasi Library (Jika menggunakan CDN)
const { createClient } = supabase;

// 2. Konfigurasi Client Delta Lunox
const SUPABASE_URL = 'https://enrlufzsigxcrhzhzwaa.supabase.co'; // Ganti dengan URL Project Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucmx1ZnpzaWd4Y3Joemh6d2FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzU3NzYsImV4cCI6MjA5MTkxMTc3Nn0.AV0Pd39hp5qo_1Ltjas5n6d0C25md6HweJOFBBzfumM'; // Ganti dengan Anon Key Anda

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
