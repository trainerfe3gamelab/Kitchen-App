import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "/kitchen-craft-logo.svg";
import RoundedButton from "../common/RoundedButton";
import { Icon } from "@iconify/react";
import InputWbtn from "../common/InputWbtn";
import toast from "react-hot-toast";
import Hamburger from "hamburger-react";
import { UserContext } from "../../context/userContext";
import {
  ModalProfileContext,
  ModalProfileProvider,
} from "../features/ModalProfile";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export default function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLogged } = useContext(UserContext);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSearch = (input) => {
    if (!input || input === "") {
      toast.error("Masukkan kata kunci pencarian");
    }
    console.log(input);
  };

  const hoverNav = "hover:text-accent-2 transition-all";

  return (
    <header className="fixed top-0 z-20 flex h-24 w-full items-center bg-bg shadow lg:justify-center lg:px-0">
      <MenuBar toggled={toggleHamburger} toggle={setToggleHamburger} />
      <div className="flex w-full min-w-[360px] items-center px-5 lg:mx-auto lg:max-w-[1080px] lg:justify-center lg:px-0">
        {/* Hamburger */}
        <div className="z-20 mr-2 -translate-x-2 lg:hidden">
          <Hamburger
            toggled={toggleHamburger}
            toggle={setToggleHamburger}
            size={30}
            color="#1A1F2B"
            direction="left"
            distance="sm"
            duration={0}
            rounded
          />
        </div>

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className={`mx-auto w-[88px] sm:w-[118px] lg:mx-0 ${searchFocus ? "hidden" : ""}`}
        />

        {/* Navigasi */}
        <nav
          className={`mx-14 hidden gap-8 font-semibold text-primary ${searchFocus ? "lg:hidden" : "lg:flex"}`}
        >
          <Link
            activeClass="text-accent-2"
            to="banner"
            spy={true}
            smooth={true}
            offset={-150}
            className="cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            activeClass="text-accent-2"
            to="popular"
            spy={true}
            smooth={true}
            offset={-110}
            className="cursor-pointer"
          >
            Terpopuler
          </Link>
          <Link
            activeClass="text-accent-2"
            to="category"
            spy={true}
            smooth={true}
            offset={-110}
            className="cursor-pointer"
          >
            Kategori
          </Link>
          <Link
            activeClass="text-accent-2"
            to="ingredients"
            spy={true}
            smooth={true}
            offset={-120}
            className="cursor-pointer whitespace-nowrap"
          >
            Bahan Makanan
          </Link>
        </nav>

        {/* Search Input */}
        <InputWbtn
          placeholder="Cari resep.."
          iconify="ri:search-line"
          className={`ml-6 mr-3 hidden w-56 transition-[width] duration-300 sm:ml-auto lg:flex ${searchFocus ? "w-full" : ""}`}
          onClick={(input) => handleSearch(input)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />

        <button className="pr-5 lg:hidden">
          <Icon
            icon="iconamoon:search-bold"
            width={24}
            className="text-primary"
            onClick={() => setSearchFocus(true)}
          />
        </button>
        {searchFocus && (
          <div
            className={`absolute left-0 z-40 flex h-full w-full items-center gap-3 bg-bg px-6 opacity-0 transition-opacity duration-300 sm:px-8 lg:hidden ${searchFocus ? "visible opacity-100" : "invisible"}`}
          >
            <button
              className="rounded-full bg-primary bg-opacity-30 px-3 py-1 font-medium text-bg active:bg-opacity-15"
              onClick={() => setSearchFocus(false)}
            >
              Batal
            </button>
            <InputWbtn
              placeholder="Cari resep.."
              iconify="ri:search-line"
              className={"w-full"}
              onClick={(input) => handleSearch(input)}
            />
          </div>
        )}

        {/* Profile & Auth Button */}
        {isLogged ? (
          <ModalProfileProvider>
            <Profile />
          </ModalProfileProvider>
        ) : (
          <>
            <AuthButton />
            <div className="group">
              <button className="text-primary lg:hidden">
                <Icon icon="iconamoon:profile-fill" className="text-[34px]" />
              </button>
              <div className="absolute right-4 hidden flex-col gap-4 rounded border bg-bg p-5 shadow-md group-focus-within:flex">
                <RoundedButton
                  className="h-10"
                  name="Masuk"
                  btnStroke={true}
                  onClick={() => console.log("Login")}
                />
                <RoundedButton
                  className="h-10"
                  name="Daftar"
                  onClick={() => console.log("Daftar")}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

function AuthButton() {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="ml-3 hidden gap-2 sm:ml-6 lg:flex">
      <RoundedButton
        name="Masuk"
        btnStroke={true}
        onClick={() => setShowModal(true)}
      />

      {/* Modal Login */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Login />
        </Modal>
      )}

      <RoundedButton
        className="h-10"
        name="Daftar"
        onClick={() => setShowRegisterModal(true)}
      />

      {/* Modal Register */}
      {showRegisterModal && (
        <Modal onClose={() => setShowRegisterModal(false)}>
          <Register />
        </Modal>
      )}
    </div>
  );
}

// Desain Modal
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-2 w-full max-w-md rounded-lg bg-white p-1 shadow-lg">
        <button className="absolute right-2 top-2 text-black" onClick={onClose}>
          <span>x</span>
        </button>
        {children}
      </div>
    </div>
  );
}

function Profile() {
  const { toggle, setToggle } = useContext(ModalProfileContext);

  return (
    <div className="flex w-fit min-w-fit cursor-pointer items-center gap-1 lg:ml-3">
      <img
        src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
        alt="Profile"
        className="aspect-square w-10 rounded-full bg-slate-300 object-cover sm:w-11"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={"hidden text-lg text-primary hover:text-accent-1 sm:flex"}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <Icon icon="mingcute:up-fill" />
        ) : (
          <Icon icon="mingcute:down-fill" />
        )}
      </div>
    </div>
  );
}

function MenuBar(props) {
  return (
    <aside
      className={`fixed left-0 top-0 h-svh w-0 border bg-bg shadow transition-all duration-200 ${props.toggled ? "z-50 w-[70%]" : "invisible"}`}
    >
      <div
        className={`ml-7 mr-5 flex h-24 items-center justify-between lg:hidden ${!props.toggled ? "hidden" : ""}`}
      >
        <img src={Logo} alt="Logo" className={`w-[88px]`} />
        <Hamburger
          toggled={props.toggled}
          toggle={(t) => props.toggle(t)}
          size={30}
          color="#1A1F2B"
          direction="right"
          distance="sm"
          duration={0.9}
          rounded
        />
      </div>
      <hr />
      <nav
        className={`mx-7 mt-4 flex flex-col gap-6 ${!props.toggled ? "hidden" : ""}`}
      >
        <Link
          activeClass="text-accent-2"
          to="banner"
          spy={true}
          smooth={true}
          offset={-150}
          className="cursor-pointer"
          onClick={() => props.toggle(false)}
        >
          Beranda
        </Link>
        <Link
          activeClass="text-accent-2"
          to="popular"
          spy={true}
          smooth={true}
          offset={-110}
          className="cursor-pointer"
          onClick={() => props.toggle(false)}
        >
          Terpopuler
        </Link>
        <Link
          activeClass="text-accent-2"
          to="category"
          spy={true}
          smooth={true}
          offset={-110}
          className="cursor-pointer"
          onClick={() => props.toggle(false)}
        >
          Kategori
        </Link>
        <Link
          activeClass="text-accent-2"
          to="ingredients"
          spy={true}
          smooth={true}
          offset={-120}
          className="cursor-pointer"
          onClick={() => props.toggle(false)}
        >
          Bahan Makanan
        </Link>
      </nav>
      <div
        className={`absolute -right-full top-0 h-svh w-full bg-primary bg-opacity-5 backdrop-blur-[2px] ${!props.toggled ? "hidden" : ""}`}
        onClick={() => props.toggle(false)}
      ></div>
    </aside>
  );
}
