import { useEffect, useState } from 'react';
import BMILogoWBG from '../assets/logo-with-background.png';
import { setTitle } from '../utils/DOM';

export default function HalamanDaftar() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setTitle('Daftar | Bengkel Motor Indonesia');
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border border-gray-300 rounded-md w-full max-w-sm p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={BMILogoWBG}
            alt="Logo Bengkel Motor Indonesia"
            className="w-18 h-18 rounded-lg"
          />
        </div>

        {/* Judul */}
        <h2 className="text-center text-gray-700 font-semibold text-lg mb-6">
          Register
        </h2>

        {/* Formulir */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full border border-gray-200 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Konfirmasi Email */}
          <div>
            <label htmlFor="confirm-email" className="block text-gray-700 font-semibold text-sm mb-1">
              Konfirmasi Email
            </label>
            <input
              id="confirm-email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full border border-gray-200 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold text-sm mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="************"
                className="w-full border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-gray-500 text-sm"
              >
                {showPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
              </button>
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-gray-700 font-semibold text-sm mb-1">
              Konfirmasi Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="************"
                className="w-full border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2 right-3 text-gray-500 text-sm"
              >
                {showConfirmPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
              </button>
            </div>
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full bg-[#0F2F4F] text-white rounded-full py-3 mt-4 text-center text-sm font-normal"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
