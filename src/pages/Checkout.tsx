import { useEffect } from "react";
import KartuCheckoutProduk from "../components/KartuCheckoutProduk";
import PageBarDetail from '../components/PageBarDetail';
import { setTitle } from "../utils/DOM";

export default function HalamanCheckout() {
  const produkList = [
    {
      nama: "Blok Silinder Aerox New",
      harga: 300000,
      kuantitas: 2,
      gambar: "https://storage.googleapis.com/a1aa/image/0280eca5-b194-49a9-6282-302bef0e250c.jpg",
    },
    {
      nama: "Blok Silinder Aerox New",
      harga: 300000,
      kuantitas: 2,
      gambar: "https://storage.googleapis.com/a1aa/image/0280eca5-b194-49a9-6282-302bef0e250c.jpg",
    },
    {
      nama: "Blok Silinder Aerox New",
      harga: 300000,
      kuantitas: 2,
      gambar: "https://storage.googleapis.com/a1aa/image/0280eca5-b194-49a9-6282-302bef0e250c.jpg",
    },
  ];

  useEffect(() => {
    setTitle('Checkout | Bengkel Motor Indonesia');
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col flex-grow">
        {/* Main Content */}
        <main className="flex-grow px-4 pt-4 pb-28 overflow-y-auto">
          <PageBarDetail title="Checkout" onBack={() => window.history.back()} />

          {/* Daftar Produk */}
          <section>
            <h2 className="text-gray-800 font-semibold text-base mb-3">
              Daftar Produk
            </h2>
            <ul className="space-y-3">
              {produkList.map((produk, index) => (
                <li key={index}>
                  <KartuCheckoutProduk
                    gambar={produk.gambar}
                    nama={produk.nama}
                    harga={produk.harga}
                    kuantitas={produk.kuantitas}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* Keterangan */}
          <section className="mt-6">
            <h2 className="text-gray-800 font-semibold text-base mb-2">
              Keterangan
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-xs leading-tight space-y-1">
              <li>
                Layanan ini hanya tersedia untuk pengambilan langsung di toko
                pada pukul 08.00 sampai 18.00 WIB.
              </li>
              <li>Tidak tersedia layanan pengantaran.</li>
              <li>
                Pembatalan pesanan yang telah dibayar akan dikenakan biaya
                sebesar 20%.
              </li>
            </ul>
          </section>
        </main>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 bg-white border-t border-gray-300 p-4 w-full max-w-md mx-auto">
          <button
            type="button"
            className="w-full bg-[#0F2F56] text-white text-sm font-normal py-3 rounded-md"
          >
            Konfirmasi Pesanan
          </button>
        </footer>
      </div>
    </div>
  );
}
