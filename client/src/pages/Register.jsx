import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "/kitchen-craft-logo.svg";
import RoundedButton from "../components/common/RoundedButton";


export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "" });

    const registerUser = async e => {
        e.preventDefault();

        const { name, email, password } = data;

        try {

            const { data } = await axios.post("/register", { name, email, password });

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({ name: "", email: "", password: "" });
                toast.success(data.message);
                navigate("/login");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={registerUser} className="justify-center m-20 flex flex-col items-center">

                <h2 className="text-center font-serif text-black text-2xl font-semibold">Welcome!</h2>
                <h3 className="text-center font-serif text-black text-2xl font-semibold">To</h3>
                <img src={Logo} alt="" className="mx-auto w-32 sm:w-[118px] mt-1" />
                <h5 className="font-serif  text-black mt-1">Time to cook, let’s Sign In</h5>

                <div className="w-full max-w-md mt-3">
                    <label className="text-black text-base font-semibold block mb-2">Name</label>
                    <input type="text"
                        className="transition duration-300 w-full focus:outline-none focus:ring
                         focus:ring-blue-100 border border-black shadow-sm rounded p-1"
                        placeholder='enter name...' value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })} />
                </div>

                <div className="w-full max-w-md mt-3">
                    <label className="text-black text-base font-semibold block mb-2" >Email</label>
                    <input type="email"
                        className="transition duration-300 w-full focus:outline-none focus:ring
                         focus:ring-blue-100 border border-black shadow-sm rounded p-1"
                        placeholder='enter email...' value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })} />
                </div>

                <div className="w-full max-w-md mt-3">
                    <label className="text-black text-base font-semibold block mb-2" >Pasword</label>
                    <input type="password" 
                        className="transition duration-300 w-full focus:outline-none focus:ring
                         focus:ring-blue-100 border border-black shadow-sm rounded p-1"
                    placeholder='enter password...' value={data.password} 
                    onChange={e => setData({ ...data, password: e.target.value })} />
                </div>
                <RoundedButton name="Sign Up" onClick={() => console.log("JMBT")} className="text-white w-60 mt-2 rounded" />
                <a href="#" className="text-black mt-3">Already have an Account? <span className="font-semibold">Sign Ip</span></a>

            </form>
        </div>
    )
}
