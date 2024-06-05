import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../components/common/RoundedButton";
import Logo from "/kitchen-craft-logo.svg";
import Card from "../components/Card/Card"


export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const { data } = await axios.post("/auth/login", { email, password });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({}); // Clear input fields
        toast.success("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="">

      <form onSubmit={loginUser} className="justify-center m-20 flex flex-col items-center">

        <h2 className="text-center font-serif text-black text-2xl font-semibold">Welcome!</h2>
        <h3 className="text-center font-serif text-black text-2xl font-semibold">To</h3>
        <img src={Logo} alt="" className="mx-auto w-32 sm:w-[118px] mt-1"/>
        <h5 className="font-serif  text-black mt-1">Time to cook, let’s Sign In</h5>

        <div className="w-full max-w-md mt-3">
          <label className="text-black text-base font-semibold block mb-2">Email</label>
          <input
            className="transition duration-300 w-full focus:outline-none focus:ring
             focus:ring-blue-100 border border-black shadow-sm rounded p-1"
            type="email"
            placeholder="enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="w-full max-w-md mt-4">
          <label className="text-black text-base font-semibold block mb-2">Password</label>
          <input
            className="transition duration-300 w-full focus:outline-none focus:ring 
            focus:ring-blue-100 border border-black shadow-sm rounded p-1"
            type="password"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <a href="#" className="text-black mt-2">Forgot Password?</a>
        <RoundedButton name="Sign In" onClick={()=>console.log("JMBT")} className="text-white w-60 mt-2 rounded"/>

        <a href="#" className="text-black mt-3">Don’t have an Account? <span className="font-semibold">Sign Up</span></a>
      </form>
    </div>


  );
}
