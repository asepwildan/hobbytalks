import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/profile.module.css";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import MoreUserInfo from "../../component/moreUserInfo/moreUserInfo";

export default function Profile() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContentProfile}>
                    <div className={styles.threadContanerProfile}>
                        <Thread />
                    </div>
                    <div className={styles.likeRekomContanerProfile}>
                        <Likerecomendation />
                        <div className={styles.trendingContanerProfile}>
                            <MoreUserInfo />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
