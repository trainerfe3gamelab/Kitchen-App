import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = data;

        try {
            const response = await axios.post("/login", { email, password });
            const { data } = response;

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({ email: "", password: "" }); // Clear input fields
                toast.success("Login successful!");
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="Login">
            <form className="form-log" onSubmit={loginUser}>
                <div className="content0">
                    <h1 className="Welcome">Welcome to</h1>
                    <img className="Logo-log-reg" src="../src/assets/LOGO.png" alt="Logo-log" />
                    <p className="slogan">Time to cook, let’s Sign In</p>
                </div>
                <div className="content1">
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
                <div className="content2">
                    <a className="forget-pw" href="">
                        Forget Password?
                    </a>
                    <button className="btn-log" type="submit">
                        Sign In
                    </button>
                    <p className="Dont-have-account">
                        Dont have an account? <Link className="act-reg" to="/register">Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
