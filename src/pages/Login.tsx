import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BMILogoWBG from '../assets/logo-with-background.png';
import { setTitle } from '../utils/DOM';

export default function HalamanLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle('Login | Bengkel Motor Indonesia');
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <main className="bg-white w-full max-w-sm p-8 border border-gray-300 rounded-md">
        <div className="flex justify-center mb-6">
          <img
            src={BMILogoWBG}
            alt="Logo Bengkel Motor Indonesia"
            className="w-18 h-18 rounded-lg"
          />
        </div>
        <h2 className="text-center text-gray-700 font-semibold text-xl mb-6 font-['Inter']">
          Login
        </h2>

        <form className="space-y-5">
          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
            />
          </div>

          {/* Input Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="************"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-10 placeholder-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-[#12304B] text-white rounded-full py-3 mt-2 font-normal text-sm"
          >
            Login
          </button>

          {/* Lupa Password dan Daftar */}
          <div className="flex justify-between text-sm text-blue-700 mt-3">
            <button type="button" className="hover:underline">
              Lupa Password?
            </button>
            <button onClick={(_) => navigate('/daftar')} type="button" className="hover:underline">
              Daftar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
