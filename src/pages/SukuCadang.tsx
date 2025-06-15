import React, { useEffect } from 'react';
import KartuProduk from '../components/KartuProduk';
import { setTitle } from '../utils/DOM';

// Data produk (suku cadang)
const dataProduk = [
  {
    gambar: 'https://storage.googleapis.com/a1aa/image/266c30b5-b513-459e-6e0d-b104b46f8441.jpg',
    nama: 'Bearing Roda Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
  {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
    {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
    {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
    {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
    {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
    {
    gambar: 'https://storage.googleapis.com/a1aa/image/b7e1d0b0-bcb9-4d62-7c77-2671f9d1d526.jpg',
    nama: 'Blok Silinder Aerox New',
    harga: 'Rp 300.000',
    rating: '4.9',
    terjual: 1200,
  },
];

const HalamanSukuCadang: React.FC = () => {

  useEffect(() => {
    setTitle('Beranda | Bengkel Motor Indonesia');
  }, [])

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-md border min-h-screen border-gray-300  mx-auto p-4">
        {/* Section Produk */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Suku Cadang</h2>
          <div className="grid grid-cols-2 gap-4">
            {dataProduk.map((item, index) => (
              <KartuProduk
                key={index}
                gambar={item.gambar}
                nama={item.nama}
                harga={item.harga}
                rating={item.rating}
                terjual={item.terjual}
                onDetailClick={() => console.log(`Lihat detail produk: ${item.nama}`)}
                onTambahClick={() => console.log(`Tambah ke keranjang: ${item.nama}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HalamanSukuCadang;
