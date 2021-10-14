import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/Thread-detail.module.css"
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import MoreUserInfo from "../../component/moreUserInfo/moreUserInfo";

export default function ThreadDetail() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContentThreadDetail}>
                    <div className={styles.threadContanerThreadDetail}>
                        <Thread />
                    </div>
                    <div className={styles.likeRekomContanerThreadDetail}>
                        <Likerecomendation />
                        <div className={styles.trendingContanerThreadDetail}>
                            <MoreUserInfo />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
