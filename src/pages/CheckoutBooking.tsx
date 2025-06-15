import React from 'react';
import PageBarDetail from '../components/PageBarDetail';

const CheckoutBooking: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md flex flex-col border border-gray-300 rounded-md min-h-screen">
                <main className="flex-grow p-4 overflow-y-auto pb-28">
                    <PageBarDetail
                        title="Checkout Booking"
                        onBack={() => window.history.back()}
                    />
                    {/* Product Card */}
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-6 cursor-pointer select-none">
                        <img
                            alt="Servis Bulanan"
                            src="https://storage.googleapis.com/a1aa/image/f54f47fb-669c-4c3b-e171-4cb9d10bf7ef.jpg"
                            className="w-14 h-14 rounded-sm object-cover mr-3 flex-shrink-0"
                        />
                        <div className="text-xs leading-tight">
                            <p className="text-gray-700">Servis Bulanan Matic 150CC - 160CC</p>
                            <p className="text-red-600 font-semibold mt-1">Rp 300.000</p>
                        </div>
                    </div>

                    {/* Tanggal Booking */}
                    <section className="mb-6">
                        <h2 className="text-gray-900 font-semibold text-base mb-1">Tanggal</h2>
                        <p className="text-xs text-gray-400 mb-2">20 Juni 2024</p>
                        <button
                            type="button"
                            className="text-xs bg-blue-200 border border-[#597790] font-medium text-[#597790] rounded px-2 py-0.5"
                            onClick={() => alert('Pilih tanggal booking')}
                        >
                            Pilih Tanggal
                        </button>
                    </section>

                    {/* Keterangan */}
                    <section>
                        <h2 className="text-gray-900 font-semibold text-base mb-2">Keterangan</h2>
                        <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 leading-tight">
                            <li>Layanan ini hanya tersedia untuk pengambilan langsung di toko pada pukul 08.00 sampai 18.00 WIB.</li>
                            <li>Tidak tersedia layanan pengantaran.</li>
                            <li>Pembatalan pesanan yang telah dibayar akan dikenakan biaya sebesar 10%.</li>
                        </ul>
                    </section>
                </main>

                {/* Sticky Footer */}
                <footer className="sticky bottom-0 bg-white border-t border-gray-300 p-4">
                    <button
                        type="button"
                        className="w-full bg-[#0F2F56] text-white text-sm font-normal py-3 rounded-md"
                    >
                        Konfirmasi Checkout
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default CheckoutBooking;
