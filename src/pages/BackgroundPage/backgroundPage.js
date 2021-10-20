import React from "react";
import styles from "./backgroundPage.module.css";
import logo from "./Asset/logoBgrndPage.png";
import image1 from "./Asset/image1.png";
import image2 from "./Asset/image2.png";
import image3 from "./Asset/image3.png";
import image4 from "./Asset/image4.png";
import image5 from "./Asset/image5.png";
import image6 from "./Asset/image6.png";
import image7 from "./Asset/image7.png";
import image8 from "./Asset/image8.png";
import image9 from "./Asset/image9.png";
import image10 from "./Asset/image10.png";
import Register from "../../component/Register/register";
import Login from "../../component/Login/login";
import Email from "../../component/email-verify/EmailVerify";
import Welcome from "../../component/email-welcome/EmailWelcome";
import LandingGoogle from "../landingGoogle/landingGoogle";
import { Route, useParams, Link } from "react-router-dom";
// import image3 from "../Asset/Rectangle30.png"
// import image4 from "../Asset/Rectangle31.png"
// import image8 from "../Asset/rect4.png"
// import image9 from "../Asset/Rectangle36.png"
// import image10 from "../Asset/rect.png"

export default function BackgroundPage() {
    let { id } = useParams();
    return (
        <React.Fragment>
            {/* {window.location.pathname === "/register" ? <Register /> : <Login />} */}
            <Route path={`/account/welcome`} render={() => <Welcome />} />
            <Route path={`/account/register`} render={() => <Register />} />
            <Route path={`/account/login`} render={() => <Login />} />
            <Route path={`/account/loading`} render={() => <LandingGoogle />} />

            <div className={styles.backgroundPageContainer} style={{ backgroundColor: "#254557" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img className={styles.logo} src={logo} alt="hobbytalk" />
                </Link>
                <ul className={styles.backgroundImage}>
                    <li>
                        <img src={image1} alt="pctr" />
                    </li>
                    <li>
                        <img src={image2} alt="pctr" />
                    </li>
                    <li>
                        <img src={image3} alt="pctr" />
                    </li>
                    <li>
                        <img src={image4} alt="pctr" />
                    </li>
                    <li>
                        <img src={image9} alt="pctr" />
                    </li>
                    <li>
                        <img src={image5} alt="pctr" />
                    </li>
                    <li>
                        <img src={image6} alt="pctr" />
                    </li>
                    <li>
                        <img src={image7} alt="pctr" />
                    </li>
                    <li>
                        <img src={image8} alt="pctr" />
                    </li>
                    <li>
                        <img src={image10} alt="pctr" />
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
