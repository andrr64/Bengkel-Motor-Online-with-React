import React from 'react';
import PageBarDetail from '../components/PageBarDetail';

const HalamanDetailBooking: React.FC = () => {
    return (
        <div className="flex justify-center items-start min-h-screen">
            <div className="border border-gray-300 bg-white w-full max-w-md p-4">
                <PageBarDetail title="Detail Layanan" onBack={() => window.history.back()} />

                {/* Image */}
                <div className="rounded-md overflow-hidden mb-3">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/26e0be3c-32ff-4a64-2678-1c1400970f55.jpg"
                        alt="Servis CVT Motor Matic"
                        className="w-full object-cover"
                        height={250}
                        width={400}
                    />
                </div>

                {/* Title and Price */}
                <div className="mb-1">
                    <p className="text-gray-800 text-sm font-normal">Servis CVT Motor Matic</p>
                    <p className="text-gray-900 font-bold text-lg">Rp 85.000</p>
                </div>

                {/* Rating and Button */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow-400 text-sm font-semibold">
                        <i className="fas fa-star mr-1" />
                        <span className="text-black">4.8 · 900+ dibooking</span>
                    </div>
                    <button
                        type="button"
                        className="bg-blue-900 text-white text-sm px-4 py-1 rounded flex items-center gap-2"
                    >
                        <i className="fas fa-calendar-check" />
                        Booking
                    </button>
                </div>

                {/* Description */}
                <div className="mb-4 text-gray-700 leading-relaxed">
                    <p className="font-semibold text-sm mb-1">Deskripsi</p>
                    <p className="text-xs">
                        Layanan servis CVT untuk motor matic Anda agar tarikan lebih enteng dan performa tetap optimal.
                        Proses pengerjaan dilakukan oleh mekanik berpengalaman dengan alat khusus dan oli CVT berkualitas.
                        Direkomendasikan setiap 6.000 km untuk menjaga komponen transmisi tetap awet.
                    </p>
                </div>

                {/* Reviews */}
                <div>
                    <p className="font-semibold text-gray-700 text-sm mb-2 border-b border-gray-400 pb-1">
                        Ulasan
                    </p>

                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-start gap-3 mb-3">
                            <img
                                src="https://storage.googleapis.com/a1aa/image/bbf90b34-ce4c-4081-65b5-8cc54082098e.jpg"
                                alt="User profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-gray-800 font-semibold text-xs flex items-center gap-1">
                                    Pelanggan {item}
                                    <span className="text-yellow-400 flex items-center gap-1">
                                        <i className="fas fa-star" />
                                        5.0
                                    </span>
                                </p>
                                <p className="text-gray-600 text-xs leading-tight">
                                    Layanan cepat dan ramah. Motor langsung enteng setelah servis. Recomended!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HalamanDetailBooking;
