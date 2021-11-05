import React from "react";
import styles from "./register.module.css";
import { useState, useEffect } from "react";
import google from "../../pages/BackgroundPage/Asset/google.png";
import facebook from "../../pages/BackgroundPage/Asset/facebook.png";
import { Route, useParams, Link } from "react-router-dom";
import Email from "../email-verify/EmailVerify";
import axios from "axios";
import Loader from "../Login/loader.gif";
// import BackgroundPage from "../../pages/BackgroundPage/backgroundPage";

export default function Register() {
    let { register } = useParams();
    const [load, setLoad] = useState(false);
    let [linkWelcome, setLinkWelcome] = useState("");
    let [emailValue, setEmailvalue] = useState("");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true);
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
                setLinkWelcome(Response.data.message);
                setLoad(false);
            })
            .catch((error) => {
                alert(error.response.data.message);
                setLoad(false);
            });
        setEmailvalue(values.email);
    };

    return (
        <React.Fragment>
            {linkWelcome !== "" ? (
                <Email emailValue={emailValue} />
            ) : (
                <div className={styles.mainContainter}>
                    <div className={styles.registerContainer}>
                        <div className={styles.welcomeBoard}>
                            <h3>Join our community!</h3>
                            <p>
                                Already have account?
                                <Link to="/account/login" style={{ textDecoration: "none" }}>
                                    <span style={{ color: "#8AB9D3", cursor: "pointer" }}>
                                        {" "}
                                        Login
                                    </span>
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
                                    maxLength="16"
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
                                {load === true ? (
                                    <div className={styles.loaderContainer}>
                                        <img src={Loader} alt="Loader" />
                                    </div>
                                ) : (
                                    <button className={styles.buttonRegister} type="Submit">
                                        Sign Up
                                    </button>
                                )}
                            </form>
                        </div>
                        <div className={styles.oAuth}>
                            <a
                                style={{ textDecoration: "none", color: "black" }}
                                href="https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login/google"
                                className={styles.authGoogle}>
                                <img src={google} alt="google" /> Sign in with Google
                            </a>
                            <a
                                style={{ textDecoration: "none", color: "black" }}
                                href="https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login/facebook"
                                className={styles.authFacebook}>
                                <img src={facebook} alt="facebook" /> Login with Facebook
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
