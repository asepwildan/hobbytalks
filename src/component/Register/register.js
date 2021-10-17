import React from "react";
import styles from "./register.module.css";
import { useState, useEffect } from "react";
import google from "../../pages/BackgroundPage/Asset/google.png";
import facebook from "../../pages/BackgroundPage/Asset/facebook.png";
import { Route, useParams, Link } from "react-router-dom";
import axios from "axios";
// import BackgroundPage from "../../pages/BackgroundPage/backgroundPage";

export default function Register() {
    let { register } = useParams();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...values, [name]: value });
    };

    console.log(values, "values");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/signup",
                {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                },
                {
                    headers: {
                        Authorization: "",
                    },
                }
            )

            .then((Response) => {
                console.log(Response, "nanananana");
                window.location = "/login";
                //  <Link to={`/login`} style={{ textDecoration: "none" }}>
                //             {/* <button className={styles.buttonLoginHomepage}>Login</button> */}
                //         </Link>
            })
            .catch((error) => {
                console.log(error.response.data.message, "wah ini eror register");
                alert(error.response.data.message);
            });
    };

    console.log(register, " get url register");

    return (
        <React.Fragment>
            <div className={styles.mainContainter}>
                <div className={styles.registerContainer}>
                    <div className={styles.welcomeBoard}>
                        <h3>Join our community!</h3>
                        <p>
                            Already have account?
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <span style={{ color: "#8AB9D3", cursor: "pointer" }}> Login</span>
                            </Link>
                        </p>
                    </div>
                    <div className={styles.formWrapper}>
                        <form className={styles.formRegister} onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input
                                onChange={handlechange}
                                type="text"
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
