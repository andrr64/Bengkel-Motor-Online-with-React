import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import HalamanSukuCadang from './pages/SukuCadang';
import HalamanDaftarTransaksi from './pages/DaftarTransaksi';
import HalamanDetailTransaksi from './pages/DetailTransaksi';
import HalamanLogin from './pages/Login';
import HalamanDaftar from './pages/DaftarAkun';
import HalamanCheckout from './pages/Checkout';
import Keranjang from './pages/Keranjang';
import DetailProduk from './pages/DetailProduk';
import NavbarBengkel from './components/Navbar';
import HalamanBeranda from './pages/Beranda';
import HalamanDetailBooking from './pages/DetailBooking';
import HalamanCheckoutBooking from './pages/CheckoutBooking';
import HalamanDetailTransaksiBooking from './pages/DetailTransaksiBooking';
import HalamanDaftarTransaksiBooking from './pages/DaftarTransaksiBooking';

// Komponen wrapper untuk inject Navbar
function AppWrapper() {
  const location = useLocation();

  // Path yang tidak ingin menampilkan navbar
  const hideNavbar = location.pathname === '/login' || location.pathname === '/daftar';

  useEffect(() => {
    window.scrollTo(0, 0); // opsional: scroll ke atas saat pindah halaman
  }, [location]);

  return (
    <>
      {!hideNavbar && <NavbarBengkel />}
      <Routes>
        <Route path="/" element={<HalamanBeranda />} />
        <Route path="/transaksi" element={<HalamanDaftarTransaksi />} />
        <Route path="/transaksi-booking" element={<HalamanDaftarTransaksiBooking />} />
        <Route path="/transaksi/:id" element={<HalamanDetailTransaksi />} />
        <Route path="/transaksi-booking/:id" element={<HalamanDetailTransaksiBooking />} />
        <Route path="/login" element={<HalamanLogin />} />
        <Route path="/daftar" element={<HalamanDaftar />} />
        <Route path="/checkout" element={<HalamanCheckout />} />
        <Route path="/checkout-booking" element={<HalamanCheckoutBooking />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/produk/:id" element={<DetailProduk />} />
        <Route path="/booking/:id" element={<HalamanDetailBooking />} />
        <Route path="/suku-cadang" element={<HalamanSukuCadang />} />        
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
