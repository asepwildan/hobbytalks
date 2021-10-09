import React from "react";
import styles from "./register.module.css";
import { useState } from "react";
import google from "../BackgroundPage/Asset/google.png";
import facebook from "../BackgroundPage/Asset/facebook.png";
import BackgroundPage from "../BackgroundPage/backgroundPage";

export default function Register() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        setValues({ ...value, [name]: name });
    };

    const handleSubmit = () => {};

    return (
        <React.Fragment>
            <BackgroundPage />
            <div className={styles.mainContainter}>
                <div className={styles.registerContainer}>
                    <div className={styles.welcomeBoard}>
                        <h3>Join our community!</h3>
                        <p>
                            Already have account?
                            <span style={{ color: "#8AB9D3", cursor: "pointer" }}> Login</span>
                        </p>
                    </div>
                    <div className={styles.formWrapper}>
                        <form className={styles.formRegister} onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input
                                onChange={handlechange}
                                type="name"
                                name="name"
                                value={values.name}
                                required
                            />
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={handlechange}
                                name="email"
                                value={values.email}
                                required
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                onChange={handlechange}
                                name="password"
                                value={values.password}
                                required
                            />
                            <button className={styles.buttonRegister} type="Submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className={styles.oAuth}>
                        <button className={styles.authGoogle}>
                            <img src={google} alt="google" /> Sign in with Google
                        </button>
                        <button className={styles.authFacebook}>
                            <img src={facebook} alt="facebook" /> Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
