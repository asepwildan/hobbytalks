import React from "react";
import styles from "./login.module.css"
import { useState } from "react";
import google from "../Asset/google.png"
import facebook from "../Asset/facebook.png"
import BackgroundPage from "../BackgroundPage/backgroundPage";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.value;
    setValues({ ...value, [name]: name });
  };

  const handleSubmit = () => {};

  return (
    <React.Fragment>
    <BackgroundPage/>
    <div className={styles.loginContainer}>
      <div className={styles.welcomeBoard}>
        <h3>Welcome back!</h3>
        <p>
          New user?{" "}
          <span style={{ color: "#8AB9D3", cursor: "pointer" }}>
            Create an account
          </span>
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
        <button className={styles.buttonLogin} type="Submit">
          Login
        </button>
      </form>
      </div>
      <div className={styles.oAuth}>
        <button className={styles.authGoogle}><img src={google} alt="google"/> Sign in with Google</button>
        <button className={styles.authFacebook}><img src={facebook} alt="facebook"/> Login with Facebook</button>
      </div>
    </div>
    </React.Fragment>

  );
}