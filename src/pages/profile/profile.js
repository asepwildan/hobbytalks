import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/profile.module.css";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Banner from "../../component/banner-profile/Banner";
import Trending from "../../component/trending/Trending";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    let Token = localStorage.getItem("tokenLogin");
    if (Token === null) {
        return (window.location = "/");
    }

    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Banner />
                <div className={styles.boxContentProfile}>
                    <div className={styles.threadContanerProfile}>
                        <Thread />
                    </div>
                    <div className={styles.likeRekomContanerProfile}>
                        <Likerecomendation />
                        <div className={styles.trendingContanerProfile}>
                            <Trending />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
