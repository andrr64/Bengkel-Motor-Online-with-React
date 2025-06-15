import React from 'react';
import KartuTransaksi from '../components/KartuTransaksi';
import PageBarDetail from '../components/PageBarDetail';
interface Transaksi {
  status: string;
  statusColor: string;
  image: string;
  title: string;
  harga: string;
  tanggal: string;
  info: string;
  buttons: string[];
}

const transaksi: Transaksi[] = [
  {
    status: 'Menunggu Pembayaran',
    statusColor: 'border-[#A3B8D9] text-[#A3B8D9] bg-[#E6F0FF]',
    image: 'https://storage.googleapis.com/a1aa/image/54733ffa-5143-4c72-17ce-8197c49f2a67.jpg',
    title: 'Servis Bulanan Matic 150CC - 160CC',
    harga: 'Rp 300.000',
    tanggal: '20 Jan 2024',
    info: '#Belum ada no antri',
    buttons: ['Detail', 'Batalkan', 'Upload Bukti'],
  },
  {
    status: 'Menunggu Antrian',
    statusColor: 'border-[#D9D18A] text-[#D9D18A] bg-[#FFFBEB]',
    image: 'https://storage.googleapis.com/a1aa/image/54733ffa-5143-4c72-17ce-8197c49f2a67.jpg',
    title: 'Servis Bulanan Matic 150CC - 160CC',
    harga: 'Rp 300.000',
    tanggal: '20 Jan 2024',
    info: 'No. Antri #24',
    buttons: ['Detail', 'Batalkan'],
  },
  {
    status: 'Selesai',
    statusColor: 'border-[#73A89A] text-[#73A89A] bg-[#E6F4F1]',
    image: 'https://storage.googleapis.com/a1aa/image/54733ffa-5143-4c72-17ce-8197c49f2a67.jpg',
    title: 'Servis Bulanan Matic 150CC - 160CC',
    harga: 'Rp 300.000',
    tanggal: '20 Jan 2024',
    info: 'No. Antri #24',
    buttons: ['Detail', 'Tulis Review'],
  },
  {
    status: 'Dibatalkan',
    statusColor: 'border-[#D98A8A] text-[#D98A8A] bg-[#FDEDED]',
    image: 'https://storage.googleapis.com/a1aa/image/54733ffa-5143-4c72-17ce-8197c49f2a67.jpg',
    title: 'Servis Bulanan Matic 150CC - 160CC',
    harga: 'Rp 300.000',
    tanggal: '20 Jan 2024',
    info: 'No. Antri #24',
    buttons: ['Detail'],
  },
];

const HalamanDaftarTransaksi: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-md border border-gray-300">
        <PageBarDetail title="Keranjang" onBack={() => window.history.back()} />

        <div className="bg-white px-4 pt-4 pb-6  min-h-screen">
          <div className="flex items-center mb-6">
            <button aria-label="Back" className="text-[#2E4B6E] text-xl mr-4">
              <i className="fas fa-chevron-left" />
            </button>
            <h1 className="text-center flex-grow font-semibold text-[#2E2E2E] text-lg">
              Daftar Transaksi
            </h1>
            <div className="w-8" />
          </div>

          <div className="space-y-6">
            {transaksi.map((trx, index) => (
              <KartuTransaksi key={index} {...trx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanDaftarTransaksi;
