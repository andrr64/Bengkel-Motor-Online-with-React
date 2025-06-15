type Produk = {
  nama: string;
  harga: number;
  image: string;
};

type KartuDetailProdukProps = {
  produk: Produk;
  jumlah: number;
};

export default function KartuDetailProduk({ produk, jumlah }: KartuDetailProdukProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-3 space-x-3">
      <img
        src={produk.image}
        alt={produk.nama}
        className="w-16 h-10 object-contain rounded"
      />
      <div className="flex flex-col text-gray-900 space-y-1 text-sm">
        <span>{produk.nama}</span>
        <span className="text-red-600 font-semibold">{produk.harga}</span>
        <span className="text-xs text-gray-500">Jumlah: {jumlah}</span>
      </div>
    </div>
  );
}
