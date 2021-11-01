import React from "react";
import icon1 from "../assets/logo/Group 2.svg";
// import icon2 from '../assets/logo/hobbytalk.svg';
import centang from "../assets/logo/logocentang.svg";
import btn from "../assets/logo/Frame 12.svg";
import "./EmailWelcome.scss";
import { Route, useParams, Link } from "react-router-dom";

export default function EmailWelcome() {
    return (
        <div className="welcomeContainer">
            <img src={centang} alt="icon" />
            <p className="welcomeBoard">Welcome board!</p>
            <p className="emailInfo">Email verification success</p>
            <div className="buttonwelcomeAction">
                <Link to="/category" style={{ textDecoration: "none" }}>
                    <button>Browse Hobby</button>
                </Link>
                <Link to="/forum" style={{ textDecoration: "none" }}>
                    <button>Go to Dashboard</button>
                </Link>
            </div>
        </div>
    );
}
