import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../components/common/RoundedButton";
import Logo from "/kitchen-craft-logo.svg";
import { UserContext } from "../context/userContext";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLogged } = useContext(UserContext);
  const [data, setData] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const { data } = await axios.post("/auth/login", { email, password });

      if (data.error) {
        toast.error(data.error);
      } else {
        console.log(data);
        setData({}); // Clear input fields
        toast.success("Login successful!");
        setIsLogged(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error!");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => loginUser(e)}
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
            Email
          </label>
          <input
            className="w-full rounded border border-black p-1 shadow-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-100"
            type="email"
            placeholder="enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mt-4 w-full max-w-md">
          <label className="mb-2 block text-base font-semibold text-black">
            Password
          </label>
          <input
            className="w-full rounded border border-black p-1 shadow-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-100"
            type="password"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <a href="#" className="mt-2 text-black">
          Forgot Password?
        </a>
        <RoundedButton
          name="Sign In"
          className="mt-2 w-60 rounded text-white"
        />

        <a href="#" className="mt-3 text-black">
          Don’t have an Account? <span className="font-semibold">Sign Up</span>
        </a>
      </form>
    </div>
  );
}
