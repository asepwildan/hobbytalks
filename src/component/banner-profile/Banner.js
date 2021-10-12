import React from "react";
import './Banner.scss';
import banner from '../assets/images/banner.png';
import union from '../assets/logo/Union.svg';
import fotoprofil from '../assets/images/image 7.png'

export default function Banner() {
    return(
        <banner>
            <img className="fp" src={ fotoprofil }></img>
            <p className="p1">Justin Junaedi</p>
            <p className="p2">Sprinkling kindness everywhere I go.</p>
            <img src={ banner }></img>
            <button className="btn">Edit Profile
                <img className="img" src={ union }></img>
            </button>
        </banner>

    )
}