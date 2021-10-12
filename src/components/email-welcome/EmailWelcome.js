import React from "react";
import icon1 from '../assets/logo/Group 2.svg';
// import icon2 from '../assets/logo/hobbytalk.svg';
import centang from '../assets/logo/logocentang.svg';
import btn from '../assets/logo/Frame 12.svg'
import './EmailWelcome.scss'

export default function EmailWelcome() {
    return(
    <div className="container2">
        <div className="icons">
            <img className="icon1" src={ icon1 }alt="tanpa gambar"/>
        </div>
        <div className="table">
            <img className="icon4" src={ centang }alt="tanpa gambar"/>
            <h3 className="t1">Welcome Board!</h3>
            <p className="t2">Email verification succes!</p>
            <div className="btn">
                <button className="tombol">Browse Hobby</button>
                <button className="tombol2">Go to Dashboard</button>
            </div>
        </div>
    </div>
    )
}