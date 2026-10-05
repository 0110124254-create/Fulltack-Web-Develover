<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Manajemen Produk Toko Online</title>
<style>
  :root {
    --bg: #f5f7f6; --card: #ffffff; --ink: #1d2b27; --muted: #5d6d68;
    --line: #d8e0dd; --accent: #0f766e; --accent-ink: #ffffff; --danger: #b42318;
    box-sizing: border-box;
    padding-top: env(safe-area-inset-top, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #121a18; --card: #1a2522; --ink: #e6efec; --muted: #9ab0a9;
      --line: #2c3b37; --accent: #2dd4bf; --accent-ink: #072724; --danger: #f97066;
    }
  }
  :root[data-theme="dark"] {
    --bg: #121a18; --card: #1a2522; --ink: #e6efec; --muted: #9ab0a9;
    --line: #2c3b37; --accent: #2dd4bf; --accent-ink: #072724; --danger: #f97066;
  }
  html { scroll-padding-top: env(safe-area-inset-top, 0px); }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--ink);
    font-family: "Segoe UI", system-ui, -apple-system, Roboto, sans-serif; line-height: 1.5;
  }
  main { max-width: 760px; margin: 0 auto; padding: 24px 16px 48px; }
  h1 { font-size: 1.6rem; margin: 0 0 4px; }
  h2 { font-size: 1.05rem; margin: 0 0 12px; }
  p.sub { margin: 0 0 20px; color: var(--muted); }
  section { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 16px; margin-bottom: 16px; }
  form { display: grid; grid-template-columns: 1fr 1fr auto; gap: 10px; align-items: end; }
  label { display: grid; gap: 4px; font-size: .9rem; color: var(--muted); }
  input[type="text"], input[type="number"] {
    font: inherit; padding: 8px 10px; border: 1px solid var(--line); border-radius: 6px;
    background: var(--bg); color: var(--ink); width: 100%;
  }
  button {
    font: inherit; cursor: pointer; padding: 9px 14px; border-radius: 6px;
    border: 1px solid var(--accent); background: var(--accent); color: var(--accent-ink);
  }
  button.ghost { background: transparent; color: var(--accent); }
  button.danger { background: transparent; border-color: var(--danger); color: var(--danger); padding: 5px 10px; }
  button:focus-visible, input:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
  .toolbar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
  .scroll { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; min-width: 480px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--line); }
  th { color: var(--muted); font-weight: 600; font-size: .9rem; }
  td.harga { font-variant-numeric: tabular-nums; }
  .kosong { color: var(--muted); padding: 12px 0; }
  #pesan { min-height: 1.4em; margin-top: 10px; color: var(--muted); font-size: .9rem; }
  @media (max-width: 560px) { form { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<main>
  <h1>Manajemen Produk</h1>
  <p class="sub">Tambah, hapus, dan tampilkan produk toko online. Buka console (F12) untuk melihat log.</p>

  <section>
    <h2>Tambah produk</h2>
    <form id="formTambah">
      <label>Nama produk
        <input type="text" id="inputNama" required placeholder="Contoh: Keyboard">
      </label>
      <label>Harga (Rp)
        <input type="number" id="inputHarga" required min="0" placeholder="350000">
      </label>
      <button type="submit">Tambah produk</button>
    </form>
    <div id="pesan" role="status" aria-live="polite"></div>
  </section>

  <section>
    <h2>Daftar produk</h2>
    <div class="toolbar">
      <button type="button" id="btnTampil" class="ghost">Tampilkan semua produk</button>
      <button type="button" id="btnHapusTerpilih" class="danger">Hapus yang dicentang</button>
    </div>
    <div class="scroll">
      <table>
        <thead><tr><th></th><th>ID</th><th>Nama</th><th>Harga</th><th></th></tr></thead>
        <tbody id="daftar"></tbody>
      </table>
    </div>
  </section>
</main>

<script>
  // **Data Produk** (minimal 5)
  let produkList = [
    { id: 1, nama: "Laptop",     harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone",  harga: 850000 },
    { id: 4, nama: "Smartwatch", harga: 2300000 },
    { id: 5, nama: "Mouse",      harga: 250000 }
  ];

  const rupiah = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
  const $ = (id) => document.getElementById(id);

  function tampilPesan(teks) { $("pesan").textContent = teks; }

  // **Menambahkan Produk dengan Spread Operator**
  function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }]; // salin array lama + objek baru
    console.log(`Produk ditambahkan: ${nama}`);
  }

  // **Menghapus Produk dengan Rest Parameter**
  // ...ids mengumpulkan semua argumen menjadi array: hapusProduk(2) atau hapusProduk(1, 3, 5)
  function hapusProduk(...ids) {
    const sebelum = produkList.length;
    produkList = produkList.filter(({ id }) => !ids.includes(id));
    console.log(`Dihapus ${sebelum - produkList.length} produk (id: ${ids.join(", ")})`);
  }

  // **Menampilkan Produk dengan Destructuring**
  function tampilkanProduk() {
    const tbody = $("daftar");
    tbody.replaceChildren();

    if (produkList.length === 0) {
      const tr = tbody.insertRow();
      const td = tr.insertCell();
      td.colSpan = 5; td.className = "kosong";
      td.textContent = "Belum ada produk. Tambahkan produk lewat formulir di atas.";
      return;
    }

    for (const { id, nama, harga } of produkList) {   // destructuring objek di dalam loop
      console.log(`${id}. ${nama} - ${rupiah(harga)}`);
      const tr = tbody.insertRow();

      const cek = document.createElement("input");
      cek.type = "checkbox"; cek.value = id; cek.className = "pilih";
      cek.setAttribute("aria-label", `Pilih ${nama}`);
      tr.insertCell().appendChild(cek);

      tr.insertCell().textContent = id;
      tr.insertCell().textContent = nama;       // textContent: aman dari injeksi HTML
      const tdHarga = tr.insertCell();
      tdHarga.className = "harga"; tdHarga.textContent = rupiah(harga);

      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "danger"; btn.dataset.id = id; btn.textContent = "Hapus";
      tr.insertCell().appendChild(btn);
    }
  }

  // Nama fungsi bebas: kumpulan event handler
  const eventHandler = {
    simpanProduk(event) {
      event.preventDefault();                    // cegah form me-reload halaman
      const nama = $("inputNama").value.trim();
      const harga = Number($("inputHarga").value);
      if (!nama || harga < 0) { tampilPesan("Isi nama dan harga dengan benar."); return; }
      const idBaru = produkList.reduce((maks, { id }) => Math.max(maks, id), 0) + 1;
      tambahProduk(idBaru, nama, harga);
      tampilkanProduk();
      event.target.reset();
      tampilPesan(`"${nama}" ditambahkan dengan ID ${idBaru}.`);
    },
    klikTabel(event) {                           // event delegation pada <tbody>
      const tombol = event.target.closest("button[data-id]");
      if (!tombol) return;
      hapusProduk(Number(tombol.dataset.id));
      tampilkanProduk();
      tampilPesan("Produk dihapus.");
    },
    hapusTerpilih() {
      const ids = [...document.querySelectorAll(".pilih:checked")].map((c) => Number(c.value));
      if (ids.length === 0) { tampilPesan("Centang produk yang ingin dihapus."); return; }
      hapusProduk(...ids);                       // spread: array -> argumen terpisah
      tampilkanProduk();
      tampilPesan(`${ids.length} produk dihapus.`);
    },
    tampilSemua() {
      tampilkanProduk();
      tampilPesan(`Menampilkan ${produkList.length} produk.`);
    }
  };

  // Event Listener
  $("formTambah").addEventListener("submit", eventHandler.simpanProduk);
  $("daftar").addEventListener("click", eventHandler.klikTabel);
  $("btnHapusTerpilih").addEventListener("click", eventHandler.hapusTerpilih);
  $("btnTampil").addEventListener("click", eventHandler.tampilSemua);

  // Contoh pemakaian (lihat console)
  tampilkanProduk();
  // tambahProduk(6, "Tablet", 7000000);
  // hapusProduk(2);
</script>
</body>
</html>
