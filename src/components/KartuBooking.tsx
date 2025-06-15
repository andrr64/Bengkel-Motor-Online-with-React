import React from 'react';

interface KartuBookingProps {
  gambar: string;
  nama: string;
  harga: string;
  rating: string;
  dibooking: number;
  onBookingClick: () => void;
  onDetailClick: () => void;
}

const KartuBooking: React.FC<KartuBookingProps> = ({
  gambar,
  nama,
  harga,
  rating,
  dibooking,
  onBookingClick,
  onDetailClick,
}) => {
  const handleBooking = () => {
    if (onBookingClick) {
      onBookingClick();
    } else {
      console.log(`Booking layanan: ${nama}`);
    }
  };

  const handleDetail = () => {
    if (onDetailClick) {
      onDetailClick();
    } else {
      console.log(`Lihat detail layanan: ${nama}`);
    }
  };

  return (
    <div>
      <img src={gambar} alt={nama} className="w-full rounded" width={140} height={80} />
      <div className="flex-col space-y-1">
        <p className="mt-2 text-sm">{nama}</p>
        <p className="font-semibold text-sm">{harga}</p>
        <p className="text-xs text-yellow-500 flex items-center gap-1">
          <i className="fas fa-star" />
          <span className="text-black">{rating} · {dibooking} dibooking</span>
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="flex items-center gap-1 text-xs bg-blue-900 text-white px-3 py-1 rounded"
          onClick={handleBooking}
        >
          <i className="fas fa-shopping-cart" />
          Booking
        </button>
        <button
          className="text-xs border border-blue-300 text-blue-600 px-3 py-1 rounded"
          onClick={handleDetail}
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default KartuBooking;
