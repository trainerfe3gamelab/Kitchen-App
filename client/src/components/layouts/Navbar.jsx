import { NavLink } from "react-router-dom";
import Logo from "/kitchen-craft-logo.svg";
import DefaultButton from "../common/RoundedButton";
import { Icon } from "@iconify/react";
import InputWbtn from "../common/InputWbtn";
import toast from "react-hot-toast";
import { useState } from "react";
import Hamburger from "hamburger-react";
import ModalProfile from "../features/ModalProfile";

export default function Navbar() {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(toggleHamburger);

  const handleSearch = (input) => {
    if (!input || input === "") {
      toast.error("Masukkan kata kunci pencarian");
    }
    console.log(input);
  };

  const handleProfileClick = () => {
    setToggleProfile(!toggleProfile);
    console.log("Profile: " + toggleProfile);
  };

  const hoverNav = "hover:text-accent-2 transition-all";

  return (
    <header className="flex h-24 w-full items-center justify-center bg-bg shadow">
      <div className="mx-auto flex w-[380px] items-center justify-between sm:mx-10 sm:w-full lg:max-w-[1080px] lg:justify-center">
        {/* Hamburger */}
        <div className="z-20 lg:hidden">
          <Hamburger
            toggled={toggleHamburger}
            toggle={setToggleHamburger}
            size={30}
            color="#1A1F2B"
            direction="right"
            distance="sm"
            duration={0.4}
            rounded
          />
        </div>

        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-24 sm:w-[118px]" />

        {/* Navigasi */}
        <nav className="mx-14 hidden flex-wrap gap-8 font-semibold text-primary lg:flex">
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
        <InputWbtn
          placeholder="Cari resep.."
          iconify="ri:search-line"
          className="ml-6 mr-3 hidden w-56 sm:ml-auto lg:flex"
          onClick={(input) => handleSearch(input)}
        />

        <MenuBar show={toggleHamburger} />

        {/* Profile & Auth Button */}
        {isLoggedIn ? (
          <Profile
            toggle={toggleProfile}
            onClick={() => handleProfileClick()}
          />
        ) : (
          <AuthButton />
        )}
      </div>
    </header>
  );
}

function AuthButton() {
  return (
    <div className="ml-3 flex flex-wrap gap-2 sm:ml-6">
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
  );
}

function Profile(props) {
  return (
    <>
      <div
        className="ml-3 flex cursor-pointer items-center gap-1"
        onClick={props.onClick}
      >
        <img
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
          alt="Profile"
          className="aspect-square w-11 rounded-full bg-slate-300 object-cover"
        />
        <div className={"text-lg text-primary"}>
          {props.toggle ? (
            <Icon icon="mingcute:up-fill" />
          ) : (
            <Icon icon="mingcute:down-fill" />
          )}
        </div>
        {props.toggle && <ModalProfile />}
      </div>
    </>
  );
}

function MenuBar(props) {
  return (
    <aside
      className={`absolute right-0 top-0 z-10 h-svh w-full bg-bg transition-all duration-200 sm:px-10 ${props.show ? "bg-opacity-30 backdrop-blur-[2px]" : "invisible bg-opacity-0"} `}
    >
      <div
        className={`absolute left-0 mx-auto h-svh border border-primary border-opacity-10 bg-bg shadow-md transition-all duration-500 ${props.show ? "w-1/2" : "invisible w-0"} `}
      ></div>
    </aside>
  );
}
