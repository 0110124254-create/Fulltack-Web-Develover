// ===== Tugas Pertemuan 3 JS: Manajemen Produk Toko Online =====

// Ini daftar produk di toko, disimpan dalam array
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi buat nambah produk baru
function tambahProduk(nama, harga, stok) {
  let idBaru = 1; // kalau array kosong, id mulai dari 1

  if (produkToko.length > 0) {
    // cari id paling besar, terus tambah 1 buat id baru
    idBaru = Math.max(...produkToko.map(p => p.id)) + 1;
  }

  // masukin produk baru ke akhir array
  produkToko.push({ id: idBaru, nama: nama, harga: harga, stok: stok });
  console.log(`Produk "${nama}" berhasil ditambah, id-nya ${idBaru}.`);
}

// Fungsi buat hapus produk berdasarkan id
const hapusProduk = function (id) {
  // cari posisi produk di array, kalau gak ketemu hasilnya -1
  const index = produkToko.findIndex(p => p.id === id);

  if (index === -1) {
    console.log(`Produk dengan id ${id} gak ketemu.`);
    return; // berhenti di sini
  }

  // hapus 1 produk di posisi tadi
  const dihapus = produkToko.splice(index, 1);
  console.log(`Produk "${dihapus[0].nama}" berhasil dihapus.`);
};

// Fungsi buat nampilin semua produk
const tampilkanProduk = () => {
  console.log("\n=== Daftar Produk ===");

  if (produkToko.length === 0) {
    console.log("Belum ada produk.");
    return;
  }

  // tampilin satu-satu tiap produk
  produkToko.forEach(p => {
    console.log(
      `ID: ${p.id} | ${p.nama} | Harga: Rp${p.harga.toLocaleString("id-ID")} | Stok: ${p.stok}`
    );
  });
};

// ===== Coba jalanin =====
tampilkanProduk();

tambahProduk("Monitor", 1800000, 4); // tambah produk baru
tampilkanProduk();

hapusProduk(2);  // hapus Mouse
hapusProduk(99); // id ini gak ada, jadi muncul pesan gak ketemu
tampilkanProduk();
