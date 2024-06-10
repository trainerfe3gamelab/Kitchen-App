import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import { useEffect } from "react";

// Pages & Components
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import Simpan from "./pages/Simpan";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 1200 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Simpan" element={<Simpan />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
