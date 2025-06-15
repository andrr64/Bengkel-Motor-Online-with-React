import KartuDetailProduk from '../components/KartuDetailProduk';
import PageBarDetail from '../components/PageBarDetail';

type Produk = {
    nama: string;
    harga: number;
    image: string;
};

const produkList: Produk[] = [
    {
        nama: 'Blok Silinder Aerox New',
        harga: 20000,
        image: 'https://storage.googleapis.com/a1aa/image/944a0e56-8199-458d-047a-8c7e71975cf0.jpg',
    },
    {
        nama: 'Blok Silinder Aerox New',
        harga: 20000,
        image: 'https://storage.googleapis.com/a1aa/image/944a0e56-8199-458d-047a-8c7e71975cf0.jpg',
    },
    {
        nama: 'Blok Silinder Aerox New',
        harga: 20000,
        image: 'https://storage.googleapis.com/a1aa/image/944a0e56-8199-458d-047a-8c7e71975cf0.jpg',
    },
    {
        nama: 'Blok Silinder Aerox New',
        harga: 20000,
        image: 'https://storage.googleapis.com/a1aa/image/944a0e56-8199-458d-047a-8c7e71975cf0.jpg',
    },
];

export default function HalamanDetailTransaksi() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full border border-gray-300 max-w-md min-h-screen bg-white rounded-md">
                <main className="px-4 pt-4 pb-6 ">
                    <PageBarDetail title="Detail Transaksi" onBack={() => window.history.back()} />

                    {/* Waktu */}
                    <section className="mb-6">
                        <h2 className="text-gray-900 font-semibold text-base mb-1">Waktu</h2>
                        <p className="text-gray-600 text-xs">10 Jan 2024 02.24 WIB</p>
                    </section>

                    {/* Daftar Produk */}
                    <section className="mb-6">
                        <h2 className="text-gray-900 font-semibold text-base mb-2">Daftar Produk</h2>
                        <ul className="space-y-3">
                            {produkList.map((produk, index) => (
                                <li key={index}>
                                    <KartuDetailProduk produk={produk} jumlah={1} />
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Status */}
                    <section className="mb-10">
                        <h2 className="text-gray-900 font-semibold text-base mb-1">Status</h2>
                        <p className="text-gray-500 text-xs">Menunggu bukti pembayaran</p>
                    </section>

                    {/* Tombol */}
                    <div className="space-y-3">
                        <button className="w-full bg-[#10304A] text-white text-sm py-2 rounded-md font-normal">
                            Upload Bukti
                        </button>
                        <button className="w-full bg-[#E03A4F] text-white text-sm py-2 rounded-md font-normal">
                            Batalkan Pesanan
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
