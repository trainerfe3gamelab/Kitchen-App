import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ResepMakanan from './components/ResepMakanan';
import DetailResep from './components/DetailResep';
import SideNav from './components/SideNav';
import User from './components/User';
import DetailUser from './components/DetailUser';
import Login from './pages/Login';

const App = () => {
  const [open, setOpen] = useState(true); // State untuk mengontrol lebar SideNav
  const location = useLocation(); // Mengambil lokasi/jalur saat ini

  // Menentukan apakah kita berada di halaman login
  const isLoginPage = location.pathname === '/';

  return (
    <div className="flex h-screen overflow-hidden"> {/* overflow-hidden untuk menghilangkan scroll bar */}
      {!isLoginPage && <SideNav open={open} setOpen={setOpen} />} {/* Tampilkan SideNav jika bukan halaman login */}
      <div className={`w-full h-auto`}> {/* overflow-y-auto untuk membuat konten utama dapat digulir */}
        <Routes>
          <Route path="/" element={<Login />} /> {/* Halaman Login */}
          <Route path="/User" element={<User />} /> {/* Halaman User */}
          <Route path="/ResepMakanan" element={<ResepMakanan />} />
          <Route path="/DetailResep/:id" element={<DetailResep />} />
          <Route path="/DetailUser/:id" element={<DetailUser />} /> {/* Tambah Route untuk DetailUser */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
