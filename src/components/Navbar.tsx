import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarBengkel: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0B2E4F] max-w-md mx-auto">
      <header className="flex text-sm items-center justify-between px-6 py-4">
        {/* Logo dan Teks */}
        <div className="flex items-center space-x-2">

        </div>

        {/* Input Pencarian */}
        <div className="flex-1 mx-6">
          <div className="flex items-center bg-[#2F4F6F] rounded-full px-4 py-2">
            <i className="fas fa-search text-[#9CA3AF] text-lg" />
            <input
              type="text"
              placeholder="Cari produk atau layanan"
              className="bg-transparent placeholder-[#9CA3AF] text-white ml-3 w-full focus:outline-none"
            />
          </div>

        </div>

        {/* Tombol Menu */}
        <div className="relative">
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl focus:outline-none"
          >
            <i className="fas fa-bars" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-sm text-gray-700 rounded-md shadow-lg z-20">
              <button onClick={(_) => {navigate('/login')}} className="w-full text-left px-4 py-2 hover:bg-gray-100">Login</button>
              <button onClick={(_) => {navigate('/daftar')}} className="w-full text-left px-4 py-2 hover:bg-gray-100">Daftar</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavbarBengkel;
