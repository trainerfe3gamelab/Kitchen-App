import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav-logo" src="../src/assets/LOGO.png" alt="Image" />
            <Link to="/" id="beranda">Beranda</Link>
            <Link to="/" id="bahan-makanan">Bahan Makanan</Link>
            <Link to="/" id="kategori">Kategori</Link>
            <Link to="/" id="populer">Populer</Link>
            <Link to="/login" id="login">Login</Link>
            <Link to="/register" id="register">Register</Link>
        </nav>
    )
}

