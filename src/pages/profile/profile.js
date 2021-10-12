import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/profile.module.css";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";

export default function Profile() {
    return (
        <React.Fragment>
            <div>
                <h1>Page Profile</h1>
                <div className={styles.boxContentProfile}>
                    <div className={styles.threadContanerProfile}>
                        <Thread />
                    </div>
                    <div className={styles.likeRekomContanerProfile}>
                        <Likerecomendation />
                        <div className={styles.trendingContanerProfile}>
                            <h3>trending</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
