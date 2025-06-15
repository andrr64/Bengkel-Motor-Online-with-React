import React, { useEffect, useState } from 'react';
import PageBarDetail from '../components/PageBarDetail';
import { setTitle } from '../utils/DOM';

interface Item {
  id: number;
  nama: string;
  harga: number;
  jumlah: number;
  gambar: string;
  terpilih: boolean;
}

const HalamanKeranjang: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      nama: 'Blok Silinder Aerox New',
      harga: 300000,
      jumlah: 1,
      gambar: 'https://storage.googleapis.com/a1aa/image/d132502e-ee1a-49f8-983f-e60deafa8cd8.jpg',
      terpilih: false,
    },
    {
      id: 2,
      nama: 'Lorem ipsum dolor sit amet',
      harga: 300000,
      jumlah: 1,
      gambar: 'https://storage.googleapis.com/a1aa/image/d132502e-ee1a-49f8-983f-e60deafa8cd8.jpg',
      terpilih: true,
    },
  ]);

  const toggleSemua = (checked: boolean) => {
    setItems(prev =>
      prev.map(item => ({ ...item, terpilih: checked }))
    );
  };

  const toggleItem = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, terpilih: !item.terpilih } : item
      )
    );
  };

  const ubahJumlah = (id: number, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, jumlah: Math.max(1, item.jumlah + delta) }
          : item
      )
    );
  };

  const totalHarga = items
    .filter(item => item.terpilih)
    .reduce((acc, item) => acc + item.harga * item.jumlah, 0);

  const semuaTerpilih = items.every(item => item.terpilih);

  useEffect(() => {
    setTitle('Keranjang | Bengkel Motor Indonesia');
  }, [])

  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="bg-white w-full max-w-md min-h-screen flex flex-col">

        <main className="flex-1 px-4 pt-4 pb-6  overflow-y-auto">
          <PageBarDetail title="Keranjang" onBack={() => window.history.back()} />
          <label className="flex items-center space-x-2 text-gray-400 text-xs mb-5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={semuaTerpilih}
              onChange={(e) => toggleSemua(e.target.checked)}
            />
            <span>Semua</span>
          </label>
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-4 mb-6">
              <input
                type="checkbox"
                checked={item.terpilih}
                onChange={() => toggleItem(item.id)}
                className="w-5 h-5"
              />
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-800">{item.nama}</span>
                <span className="text-red-600 font-semibold text-sm mt-1">
                  Rp {item.harga.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="ml-auto flex items-center border border-gray-300 rounded-md text-xs text-gray-700 select-none" style={{ minWidth: 60 }}>
                <button className="px-2 py-0.5" onClick={() => ubahJumlah(item.id, -1)}>-</button>
                <span className="px-2 py-0.5 border-x border-gray-300 w-6 text-center">{item.jumlah}</span>
                <button className="px-2 py-0.5" onClick={() => ubahJumlah(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </main>
        <footer className="flex items-center space-x-3 justify-end px-5 py-3 border-t border-gray-300 bg-white sticky bottom-0 z-10">
          <div className="text-right">
            <p className="text-xs text-gray-700">Total</p>
            <p className="text-red-600 font-semibold text-lg">
              Rp {totalHarga.toLocaleString('id-ID')}
            </p>
          </div>
          <button className="bg-[#1a365d] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#163153] transition">
            Checkout
          </button>
        </footer>
      </div>
    </div>
  );
};

export default HalamanKeranjang;
