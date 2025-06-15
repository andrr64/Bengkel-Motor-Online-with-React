// components/KartuDaftarTransaksiBooking.tsx

import React from "react";

type KartuDaftarTransaksiBookingProps = {
  status: string;
  statusColor: "blue" | "yellow" | "green" | "red";
  imageUrl: string;
  title: string;
  price: string;
  note: string;
  date: string;
  actions: string[];
};

const KartuDaftarTransaksiBooking: React.FC<KartuDaftarTransaksiBookingProps> = ({
  status,
  statusColor,
  imageUrl,
  title,
  price,
  note,
  date,
  actions,
}) => {
  const colorClasses: Record<string, string> = {
    blue: "text-blue-600 bg-blue-100",
    yellow: "text-yellow-700 bg-yellow-100",
    green: "text-green-700 bg-green-100",
    red: "text-red-700 bg-red-100",
  };

  const buttonColor: Record<string, string> = {
    Detail: "bg-blue-600",
    Batalkan: "bg-red-700",
    "Upload Bukti": "bg-green-600",
    "Tulis Review": "bg-green-700",
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-3 mb-4"
      aria-label={`Booking transaction card ${status}`}
    >
      {/* Status */}
      <div>
        <span
          className={`inline-block text-[10px] font-medium rounded px-2 py-0.5 mb-2 ${colorClasses[statusColor]}`}
        >
          {status}
        </span>
      </div>

      {/* Isi */}
      <div className="flex space-x-3 mb-3">
        <img
          src={imageUrl}
          alt={title}
          className="w-14 h-14 rounded object-cover"
          width={60}
          height={60}
        />
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-gray-900 leading-tight mb-1" style={{ lineHeight: "1.2" }}>
            {title}
          </h2>
          <p className="text-red-600 font-semibold text-sm mb-1">{price}</p>
          <p className="text-xs text-gray-500 mb-1">{note}</p>
          <p className="text-xs text-gray-600">{date}</p>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex space-x-2">
        {actions.map((label) => (
          <button
            key={label}
            className={`flex-1 text-white text-xs font-semibold rounded-md py-1 ${buttonColor[label] || "bg-gray-500"}`}
            type="button"
            onClick={() => alert(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KartuDaftarTransaksiBooking;
