import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "/kitchen-craft-logo.svg";
import RoundedButton from "../components/common/RoundedButton";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    namalengkap: "",
    username: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const { namalengkap, username, email, password } = data;

    try {
      const response = await axios.post("/register", {
        namalengkap,
        username,
        email,
        password,
      });

      const { data } = response;

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          namalengkap: "",
          username: "",
          email: "",
          password: "",
        });
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={registerUser}
        className="m-20 flex flex-col items-center justify-center"
      >
        <h2 className="text-center font-serif text-2xl font-semibold text-black">
          Welcome!
        </h2>
        <h3 className="text-center font-serif text-2xl font-semibold text-black">
          To
        </h3>
        <img src={Logo} alt="" className="mx-auto mt-1 w-32 sm:w-[118px]" />
        <h5 className="mt-1 font-serif text-black">
          Time to cook, let’s Sign In
        </h5>

        <div className="mt-3 w-full max-w-md">
          <label className="mb-2 block text-base font-semibold text-black">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded border border-black p-1 shadow-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-100"
            placeholder="enter name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className="mt-3 w-full max-w-md">
          <label className="mb-2 block text-base font-semibold text-black">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded border border-black p-1 shadow-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-100"
            placeholder="enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="mt-3 w-full max-w-md">
          <label className="mb-2 block text-base font-semibold text-black">
            Pasword
          </label>
          <input
            type="password"
            className="w-full rounded border border-black p-1 shadow-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-100"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <RoundedButton
          name="Sign Up"
          onClick={() => console.log("JMBT")}
          className="mt-2 w-60 rounded text-white"
        />
        <a href="#" className="mt-3 text-black">
          Already have an Account?{" "}
          <span className="font-semibold">Sign Ip</span>
        </a>
      </form>
    </div>
  );
}
