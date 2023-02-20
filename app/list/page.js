import React from 'react'

export default function page() {
  return (
    <>
      <h2>Tipe Usaha</h2>
      <ul>
        <li>Pasar Umum/UMKM</li>
        <li>Warung Makan Skala Kecil</li>
        <li>HORECA</li>
        <li>Pasar Modern</li>
        <li>B2B2C</li>
      </ul>

      <h2>Produk</h2>
      <ul>
        <li>Dari Platform</li>
        <li>Dari Petani Langsung (GAPOKTAN)</li>
      </ul>

      <div>LIST DISPLAY PRODUK GAPOKTAN</div>
      <ul>
        <li>Nama Gapoktan</li>
        <li>lokasi gapoktan</li>
        <li>Kategori Produk</li>
        <li>nama produk</li>
        <li>stock produk</li>
        <li>satuan penjualan</li>
        <li>harga/satuan penjualan</li>
        <li>tanggal panen (cth: 2hari lagi panen, sudah panen 5 hari)</li>
        <li>deskripsi (sudah panen 2 hari, brg disimpan dalam freezer)</li>
      </ul>
      <small>produk dapat di filter berdasarkan lokasi, nama gapoktan, kategori produk</small>
      <br />
      <small>produk dapat disearch berdasarkan kategori/nama produk</small>
      <br />
      <div>Konsep: Menghilangkan pihak ketiga antara produsen(petani) dan customer(customer), sehingga dapat meningkatkan nilai jual hasil panen petani, dan mampu menjaga kestabilan dan menciptakan keseragaman harga kebutuhan pokok di seluruh wilayah Indonesia</div>
      <div>Dapat dicapai dengan menggabungkan para petani dimasing masing regional kedalam satu GAPOKTAN dan memanage GAPOKTAN tersebut dengan membuat aturan dan kontrak perjanjian kerjasama</div>
      <div>Harga produk diplatform telah dimarkup dengan perhitungan keuntungan untuk platform</div>
      <br />
      <br />
      <br />
    </>
  )
}
