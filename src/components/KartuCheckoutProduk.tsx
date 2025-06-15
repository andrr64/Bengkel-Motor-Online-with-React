import React from 'react';

interface KartuCheckoutProdukProps {
  gambar: string;
  nama: string;
  harga: number;
  kuantitas: number;
}

const KartuCheckoutProduk: React.FC<KartuCheckoutProdukProps> = ({ gambar, nama, harga, kuantitas }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-3">
      <img
        src={gambar}
        alt={nama}
        className="w-14 h-14 object-contain rounded"
      />
      <div className="flex flex-col">
        <span className="text-gray-800 text-sm font-normal">{kuantitas}x {nama}</span>
        <span className="text-red-600 text-sm font-semibold mt-0.5">{harga}</span>
      </div>
    </div>
  );
};

export default KartuCheckoutProduk;
