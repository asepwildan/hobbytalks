import React, { useState, useEffect }from "react";
import styles from "./style/Thread-detail.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import MoreUserInfo from "../../component/moreUserInfo/moreUserInfo";
import RelatedTopic from "../../component/relatedTopic/relatedTopic";
import Comment from "../../component/comment/comment";
import imgAvatar from "./img/imgAvatar.png";
import ThreadUser from "../../component/thread-detail-user/Thread-detail-user";

export default function ThreadDetail() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("tokenLogin")
        setLogin(token)
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContentThreadDetail}>
                    <div className={styles.threadContanerThreadDetail}>
                        <ThreadUser />
                        <div className={styles.formCommentContainer}>
                        {login ?       <div className={styles.formCommentDoang}>
                                <div className={styles.identitas}>
                                    <img src={imgAvatar} alt="img"></img>
                                    <p className={styles.nama}>Kevin Alexander</p>
                                </div>
                                
                                <form>
                                    <textarea
                                        className={styles.inputThreadDetail}
                                        type="text"
                                        placeholder="Add a comment">
                                    </textarea>
                                    <button className={styles.tombol}>Add a comment</button>
                                </form> 
                            </div> : <div className={styles.formCommentNoLogin}>
                                <button className={styles.tombolThreadNoLogin}>Login to add comment</button>
                            </div>}
                            
                        </div>
                        <div className={styles.commentLineContainer}>
                            <Comment />
                        </div>
                    </div>

                    <div className={styles.likeRekomContanerThreadDetail}>
                        <RelatedTopic />
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
