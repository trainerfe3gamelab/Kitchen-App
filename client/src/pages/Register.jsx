import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        namalengkap: "",
        username: "",
        email: "",
        password: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();

        const { namalengkap, username, email, password } = data;

        try {
            const response = await axios.post("/register", {
                namalengkap,
                username,
                email,
                password
            });

            const { data } = response;

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({
                    namalengkap: "",
                    username: "",
                    email: "",
                    password: ""
                });
                toast.success(data.message);
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="Register">
            <form onSubmit={registerUser}>
                <div className="content0">
                    <h1 className="Welcome">Welcome to</h1>
                    <img className="Logo-log-reg" src="../src/assets/LOGO.png" alt="Logo-reg" />
                    <p className="slogan">Time to cook, let’s Sign Up</p>
                </div>
                <div className="content1">
                    <label>Nama Lengkap</label>
                    <input
                        type="text"
                        placeholder="enter nama lengkap..."
                        value={data.namalengkap}
                        onChange={(e) =>
                            setData({ ...data, namalengkap: e.target.value })
                        }
                    />
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="enter username..."
                        value={data.username}
                        onChange={(e) => setData({ ...data, username: e.target.value })}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="enter email..."
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="enter password..."
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                </div>
                <div className="content 2">
                    <button className="btn-reg" type="submit">
                        Sign Up
                    </button>
                    <p className="Dont-have-account">
                        Already have an account? <Link className="act-reg" to="/login">Log In</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
