import { Link, NavLink } from "react-router-dom";
import Logo from "/kitchen-craft-logo.svg";
import DefaultButton from "./DefaultButton";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const hoverNav = "hover:text-accent-2 transition-all";
  return (
    <header className="w-full bg-white py-7 shadow">
      <div className="mx-auto flex max-w-[1080px] items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" width={110} />

        {/* Navigasi */}
        <nav className="text-primary mx-16 flex flex-wrap gap-8 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-accent-1` : hoverNav
            }
            to="/"
          >
            Beranda
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-accent-1` : hoverNav
            }
            to="/login"
          >
            Bahan Makanan
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-accent-1` : hoverNav
            }
            to="/register"
          >
            Kategori
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-accent-1` : hoverNav
            }
            to="/register"
          >
            Populer
          </NavLink>
        </nav>

        {/* Search Input */}
        <div className="outline-primary ml-auto flex w-56 min-w-40 items-center rounded-full outline outline-[2px] focus-within:outline-[2.5px]">
          <input
            className="h-10 w-full rounded-l-full pl-4 pr-1 outline-none"
            type="search"
            placeholder="Cari resep..."
          />
          <button className="text-bg bg-primary group flex h-10 w-14 items-center justify-center rounded-r-full">
            <Icon
              icon="ri:search-line"
              className="text-[18px] transition-all group-hover:text-[20px] group-active:text-[18px]"
            />
          </button>
        </div>

        {/* Button Auth */}
        <div className="ml-6 flex flex-wrap gap-2">
          <DefaultButton
            className="h-10"
            name="Masuk"
            btnStroke={true}
            onClick={() => console.log("Login")}
          />
          <DefaultButton
            className="h-10"
            name="Daftar"
            onClick={() => console.log("Daftar")}
          />
        </div>
      </div>
    </header>
  );
}
