import React from "react";
import styles from "./login.module.css";
import { useState } from "react";
import google from "../../pages/BackgroundPage/Asset/google.png";
import facebook from "../../pages/BackgroundPage/Asset/facebook.png";
import axios from "axios";
import { Route, useParams, Link } from "react-router-dom";
import Loader from "./loader.gif";
// import BackgroundPage from "../../pages/BackgroundPage/backgroundPage";

export default function Login() {
    const [load, setLoad] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...values, [name]: value });
    };

    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true);
        axios

            .post("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login", {
                email: values.email,
                password: values.password,
            })

            .then((Response) => {
                console.log(Response, "login");
                const token = Response.data.data;
                localStorage.setItem("tokenLogin", token);
                setLoad(false);
                window.location = "/account/welcome";
            })
            .catch((error) => {
                console.log(error.response.data.message, "wah ini eror login");

                alert(error.response.data.message);
                setLoad(false);
            });
    };

    // const googleSignin = () => {
    //     axios
    //         .get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login/google")
    //         .then((res) => console.log(res, "google"))
    //         .catch((err) => console.log(err, "google"));
    // };
    return (
        <React.Fragment>
            {/* <BackgroundPage /> */}
            <div className={styles.loginContainer}>
                <div className={styles.welcomeBoard}>
                    <h3>Welcome back!</h3>
                    <p>
                        New user?
                        <Link to="/account/register" style={{ textDecoration: "none" }}>
                            <span style={{ color: "#8AB9D3", cursor: "pointer" }}>
                                {" "}
                                Create an account
                            </span>
                        </Link>
                    </p>
                </div>
                <div className={styles.formWrapper}>
                    <form className={styles.formLogin} onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            onChange={handlechange}
                            type="email"
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
                            <button className={styles.buttonLogin} type="Submit">
                                Login
                            </button>
                        )}
                    </form>
                </div>
                <div className={styles.oAuth}>
                    <a
                        style={{textDecoration:"none", color:"black"}}
                        href="https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login/google"
                        className={styles.authGoogle}
                    >
                        <img src={google} alt="google" /> Sign in with Google
                    </a>
                    <a
                        style={{textDecoration:"none", color:"black"}}
                        href="https://hobbytalk-be-glints.herokuapp.com/api/v1/users/login/facebook"
                        className={styles.authFacebook}
                    >
                        <img src={facebook} alt="facebook" /> Login with Facebook
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
