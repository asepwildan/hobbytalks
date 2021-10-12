import React from "react";
import garis from '../../components/assets/logo/garis.svg';
import arrow from '../assets/logo/arrow.svg'
import './Trending.scss'

export default function Trending() {
    return(
    <div className="trending">
        <p className="text">Trending</p>
        <img className="garis" src={ garis }></img>
        <div className="panah">
            <img className="arrow" src={ arrow }></img>
            <p className="value">1.5k</p>
        </div>
        <p className="text2">My Journey into Piano: 1 year and still counting</p>
        <img className="garis2" src={ garis }></img>
        <div className="panah2">
            <img className="arrow" src={ arrow }></img>
            <p className="value">1.2k</p>
        </div>
        <p className="text3">Easy DIY Crafts Anyone Can Do at Home</p>
        <img className="garis3" src={ garis }></img>
        <div className="panah3">
            <img className="arrow" src={ arrow }></img>
            <p className="value">899</p>
        </div>
        <p className="text4">Ultrices adipiscing malesuada amet elementum a, mattis purus eget volutpat.</p>
        <img className="garis4" src={ garis }></img>
        <div className="panah4">
            <img className="arrow" src={ arrow }></img>
            <p className="value">564</p>
        </div>
        <p className="text5">Pulvinar aenean adipiscing cursus sollicitudin ac.</p>
        <img className="garis5" src={ garis }></img>
        <div className="panah5">
            <img className="arrow" src={ arrow }></img>
            <p className="value">455</p>
        </div>
        <p className="text6">Odio sed phasellus facilisis eros diam enim accumsan nec.</p>
        <img className="garis6" src={ garis }></img>
        <div className="panah6">
            <img className="arrow" src={ arrow }></img>
            <p className="value">234</p>
        </div>
        <p className="text7">Diam quam dolor, proin tempor in suspendisse ac faucibus pellentesque.</p>
        <img className="garis7" src={ garis }></img>
        <div className="panah7">
            <img className="arrow" src={ arrow }></img>
            <p className="value">123</p>
        </div>
        <p className="text8">Mi gravida quisque suspendisse ut mi elit sed.</p>
    </div>
    )
}
