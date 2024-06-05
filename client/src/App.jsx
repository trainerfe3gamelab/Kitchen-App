import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_MOCK;
// axios.defaults.withCredentials = true;

function App() {
  let bahan = localStorage.getItem("bahan");
  let kategori = localStorage.getItem("kategori");
  useEffect(() => {
    setAdditionalData(bahan, kategori);
    console.log("effect");
  }, [bahan, kategori]);

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 1200 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

async function setAdditionalData(bahan, kategori) {
  if (!bahan && !kategori) {
    try {
      const b = await axios.get("/bahan");
      const k = await axios.get("/kategori");
      localStorage.setItem("bahan", JSON.stringify(b.data.bahan));
      localStorage.setItem("kategori", JSON.stringify(k.data.kategori));
    } catch (error) {
      console.log(error);
    }
  }
}
