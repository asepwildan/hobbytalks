import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfileInfoAsync } from "../../redux/actions/index.js";

import Thread from "../../component/thread-profile/thread-profile";
import NoThread from "./No-thread";
import styles from "./style/profile.module.css";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Banner from "../../component/banner-profile/Banner";
import Trending from "../../component/trending/Trending";

export default function Profile() {
    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state) => state.getProfileReducer);

    let Token = localStorage.getItem("tokenLogin");

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, []);

    if (Token === null || Token === "null") {
        return (window.location = "/");
    }

    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Banner />
                <div className={styles.boxContentProfile}>
                    <div className={styles.threadContanerProfile}>
                        <div classNmae="containerNoThread">
                            {(profileInfo.threads && profileInfo.threads.length) || "" ? (
                                <Thread />
                            ) : (
                                <NoThread />
                            )}
                        </div>
                        {/* <Thread /> */}
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
