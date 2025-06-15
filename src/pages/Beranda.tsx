import React, { useEffect } from 'react';
import KartuProduk from '../components/KartuProduk';
import KartuBooking from '../components/KartuBooking';
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
];

// Data layanan (booking servis)
const dataLayanan = [
  {
    gambar: 'https://storage.googleapis.com/a1aa/image/dcb14f92-1897-4704-33d7-2aa5e643db86.jpg',
    nama: 'Servis Bulanan Matic 150CC',
    harga: 'Rp 300.000',
    rating: '4.9',
    dibooking: 20,
  },
  {
    gambar: 'https://storage.googleapis.com/a1aa/image/dcb14f92-1897-4704-33d7-2aa5e643db86.jpg',
    nama: 'Servis Bulanan Matic 125-110CC',
    harga: 'Rp 300.000',
    rating: '4.9',
    dibooking: 20,
  },
];

const HalamanBeranda: React.FC = () => {

  useEffect(() => {
    setTitle('Beranda | Bengkel Motor Indonesia');
  }, [])

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-md border border-gray-300  mx-auto p-4">
        {/* Banner */}
        <img
          src="https://storage.googleapis.com/a1aa/image/dd552a20-1625-4327-744d-635dbe5dc8d9.jpg"
          alt="Banner Promo"
          className="w-full rounded-xl mb-6"
          width={600}
          height={240}
        />

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
          <button className="mt-4 w-full bg-gray-300 text-gray-700 text-xs rounded py-2">
            Lihat Lainnya
          </button>
        </section>

        {/* Section Booking */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Layanan</h2>
          <div className="grid grid-cols-2 gap-4">
            {dataLayanan.map((item, index) => (
              <KartuBooking
                key={index}
                gambar={item.gambar}
                nama={item.nama}
                harga={item.harga}
                rating={item.rating}
                dibooking={item.dibooking}
                onBookingClick={() => console.log(`Booking layanan: ${item.nama}`)}
                onDetailClick={() => console.log(`Lihat detail layanan: ${item.nama}`)}
              />
            ))}
          </div>
          <button className="mt-4 w-full bg-gray-300 text-gray-700 text-xs rounded py-2">
            Lihat Lainnya
          </button>
        </section>
      </div>
    </div>
  );
};

export default HalamanBeranda;
