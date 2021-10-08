import React from "react";
import logo1 from '../assets/logo/Group 2.svg';
import email from '../assets/logo/logoemail.svg'
import './EmailVerify.scss'

export default function EmailVerify() {
    return(
        <div className="container">  
            <div className="icons">
                <img className="icon1" src={ logo1 }alt="tanpa gambar"/>
            </div>
            <div className="table">
                <img className="icon4" src={ email }alt="tanpa gambar"/>
                <h3 className="t1">Please verify your email account!</h3>
                <div>
                    <p className="t2">You’re almost there! We sent an email to</p>
                    <p className="t3">john.doe@gmail.com</p>
                </div>
                <div>
                    <p className="t4">Just click on the link in that email to complete your signup.</p>
                    <p className="t5">If you don’t see it, you may need to <b>check your spam</b> folder</p>
                </div>
                
            </div>
        </div>
    )
}
