import Thread from "../../component/thread-profile/thread-profile";
import styles from "./style/profile.module.css";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";

export default function Profile() {
    return (
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
    );
}
