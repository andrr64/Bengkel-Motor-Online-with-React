import React from "react";
import PageBarDetail from "../components/PageBarDetail";
import KartuDaftarTransaksiBooking from "../components/KartuTransaksiBooking";

const HalamanDaftarTransaksiBooking: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900 min-h-screen">
      <div className="max-w-md mx-auto p-4">
        <PageBarDetail
          title="Daftar Transaksi Booking"
          onBack={() => window.history.back()}
        />

        {/* Daftar Booking */}
        <KartuDaftarTransaksiBooking
          status="Menunggu Pembayaran"
          statusColor="blue"
          imageUrl="https://storage.googleapis.com/a1aa/image/9e95e631-ccc5-4d1a-b06e-c265f64b138e.jpg"
          title="Servis Bulanan Matic 150CC - 160CC"
          price="Rp 300.000"
          note="#Belum ada no antri"
          date="20 Jan 2024"
          actions={["Detail", "Batalkan", "Upload Bukti"]}
        />

        <KartuDaftarTransaksiBooking
          status="Menunggu Antrian"
          statusColor="yellow"
          imageUrl="https://storage.googleapis.com/a1aa/image/9e95e631-ccc5-4d1a-b06e-c265f64b138e.jpg"
          title="Servis Bulanan Matic 150CC - 160CC"
          price="Rp 300.000"
          note="No. Antri #24"
          date="20 Jan 2024"
          actions={["Detail", "Batalkan"]}
        />

        <KartuDaftarTransaksiBooking
          status="Selesai"
          statusColor="green"
          imageUrl="https://storage.googleapis.com/a1aa/image/9e95e631-ccc5-4d1a-b06e-c265f64b138e.jpg"
          title="Servis Bulanan Matic 150CC - 160CC"
          price="Rp 300.000"
          note="No. Antri #24"
          date="20 Jan 2024"
          actions={["Detail", "Tulis Review"]}
        />

        <KartuDaftarTransaksiBooking
          status="Dibatalkan"
          statusColor="red"
          imageUrl="https://storage.googleapis.com/a1aa/image/9e95e631-ccc5-4d1a-b06e-c265f64b138e.jpg"
          title="Servis Bulanan Matic 150CC - 160CC"
          price="Rp 300.000"
          note="No. Antri #24"
          date="20 Jan 2024"
          actions={["Detail"]}
        />
      </div>
    </div>
  );
};

export default HalamanDaftarTransaksiBooking;
