import React from "react";
import garis from '../../component/assets/logo/garis.svg';
import nothread from '../../component/assets/images/no.png';
import './No-thread.scss';

export default function NoThread () {
    return(
        <div className="container">
            <div className="no-thread">
                <p className="text">Thread</p>
                <img className="garis" src={ garis }></img>
                <img className="notfound" src={ nothread }></img>
                <p className="text2">You haven't posted any thread yet. </p>
                <p className="text3">Any interesting story to share? Create a thread now!</p>
                <button className="tombol">Create a thread</button>
            </div>
        </div>
    )
}