import React from "react";
// import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/Thread-detail.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import MoreUserInfo from "../../component/moreUserInfo/moreUserInfo";
// import RelatedTopic from "../../component/relatedTopic/relatedTopic";
import ThreadUser from "../../component/thread-detail-user/Thread-detail-user";

//bagian form comment
import imgAvatar from './img/imgAvatar.png';

export default function ThreadDetail() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContentThreadDetail}>
                    <div className={styles.threadContanerThreadDetail}>
                        {/* <Thread /> */}
                        <div className={styles.formCommentContainer}>
                            <ThreadUser />
                        </div>
                        <div className={styles.formCommentDoang}>
                            <div className={styles.identitas}>
                                <img src={imgAvatar}></img>
                                <p className={styles.nama}>Kevin Alexander</p>
                            </div>
                            <form>
                                <textarea className={styles.inputThreadDetail} type="text" placeholder="Add a comment"></textarea>
                                <button className={styles.tombol}>Add a comment</button>
                            </form>
                            
                        </div>
                        <div className={styles.commentLineContainer}>
                            {/* <Thread /> */}
                        </div>
                    </div>

                    <div className={styles.likeRekomContanerThreadDetail}>
                        {/* <RelatedTopic /> */}
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
