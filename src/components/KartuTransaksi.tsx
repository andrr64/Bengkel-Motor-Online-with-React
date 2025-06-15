import React from 'react';

interface KartuTransaksiProps {
  status: string;
  statusColor: string;
  image: string;
  title: string;
  harga: string;
  tanggal: string;
  info: string;
  buttons: string[];
}

const KartuTransaksi: React.FC<KartuTransaksiProps> = ({
  status,
  statusColor,
  image,
  title,
  harga,
  tanggal,
  info,
  buttons,
}) => {
  return (
    <div className="border border-[#D9D9D9] rounded-lg p-4 space-y-2">
      <div>
        <span className={`status-label ${statusColor}`}>{status}</span>
      </div>
      <div className="flex space-x-3 mt-2">
        <img src={image} alt={title} className="w-15 h-15 rounded" width={60} height={60} />
        <div className="flex-1">
          <p className="font-semibold text-sm text-[#2E2E2E] leading-tight">{title}</p>
          <p className="text-[#D32F2F] font-semibold text-sm mt-1">{harga}</p>
        </div>
      </div>
      <div className="flex justify-between text-xs text-[#2E2E2E] mt-1">
        <span>{tanggal}</span>
        <span>{info}</span>
      </div>
      <div className="flex space-x-3 mt-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            type="button"
            className={`${
              btn === 'Batalkan'
                ? 'bg-[#9B4B4B]'
                : btn === 'Upload Bukti' || btn === 'Tulis Review'
                ? 'bg-[#5B8A73]'
                : 'bg-[#4A6B8A]'
            } text-white text-xs rounded px-4 py-1 font-semibold`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KartuTransaksi;