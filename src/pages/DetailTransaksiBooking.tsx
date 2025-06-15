import React from "react";
import PageBarDetail from "../components/PageBarDetail";
const HalamanDetailTransaksiBooking: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="max-w-md w-full flex flex-col border border-gray-200 min-h-screen">
        {/* Content */}
        <main className="p-4 flex-grow">
          <PageBarDetail
            title="Detail Transaksi Booking"
            onBack={() => window.history.back()} />

          {/* Booking item card */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden mb-6" style={{ minHeight: "72px" }}>
            <img
              alt="Servis Bulanan Matic"
              src="https://storage.googleapis.com/a1aa/image/14271b2d-5403-4465-343a-c3c9d713e465.jpg"
              className="w-18 h-18 object-cover"
              width={72}
              height={72}
            />
            <div className="flex flex-col justify-center px-3 text-xs text-gray-700 max-w-[calc(100%-72px)]">
              <span className="font-medium text-sm">
                Servis Bulanan Matic 150CC - 160CC
              </span>
              <span className="text-red-600 font-semibold mt-1">Rp 300.000</span>
            </div>
          </div>

          {/* No. Booking */}
          <div className="mb-4">
            <p className="font-semibold text-gray-800 text-sm mb-0.5">No. Booking</p>
            <p className="text-xs text-gray-600">Tidak ada</p>
          </div>

          {/* Tanggal */}
          <div className="mb-4 flex-col items-center space-y-1">
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-0.5">Tanggal</p>
              <p className="text-xs text-gray-600">20 Juni 2024</p>
            </div>
            <button
              className="text-xs bg-blue-200 border border-[#597790] font-medium text-[#597790] rounded px-2 py-0.5"

              type="button"
            >
              Ubah Tanggal
            </button>
            <button
              aria-label="Help"
              className="text-blue-600 ml-2 text-xs hover:text-blue-800"
              type="button"
            >
              <i className="fas fa-question-circle" />
            </button>
          </div>

          {/* Status */}
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-0.5">Status</p>
            <p className="text-xs text-gray-600">Menunggu bukti pembayaran</p>
          </div>
        </main>

        {/* Sticky Footer */}
        <footer className="p-4 sticky bottom-0 bg-white border-t border-gray-200">
          <div className="space-y-2">
            <button
              className="w-full bg-blue-900 text-white text-xs font-normal py-2 rounded"
              type="button"
              onClick={() => alert("Upload bukti pembayaran")}
            >
              Upload Bukti
            </button>
            <button
              className="w-full bg-red-600 text-white text-xs font-normal py-2 rounded"
              type="button"
              onClick={() => alert("Pesanan dibatalkan")}
            >
              Batalkan Pesanan
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HalamanDetailTransaksiBooking;
