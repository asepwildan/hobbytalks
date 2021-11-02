import styles from "./skeleton.module.css";
import imgGaris from "../../pages/forum/img/garisSkeleton.svg";
export default function Skeleton() {
    return (
        <div className={styles.parentSkeleton}>
            <div className={styles.skeletonA}>
                <div className={styles.skeleton1}></div>
                <div className={styles.skeleton2}>
                    <div className={styles.skeleton21}></div>
                    <div className={styles.skeleton22}></div>
                </div>
                <div className={styles.skeleton3}>
                    <div className={styles.bulat}></div>
                    <div className={styles.saudaraBulat}></div>
                </div>
                <div className={styles.skeleton4}></div>
                <img className={styles.imgGaris} src={imgGaris}></img>
            </div>
            <div className={styles.skeletonA}>
                <div className={styles.skeleton1}></div>
                <div className={styles.skeleton2}>
                    <div className={styles.skeleton21}></div>
                    <div className={styles.skeleton22}></div>
                </div>
                <div className={styles.skeleton3}>
                    <div className={styles.bulat}></div>
                    <div className={styles.saudaraBulat}></div>
                </div>
                <div className={styles.skeleton4}></div>
                <img className={styles.imgGaris} src={imgGaris}></img>
            </div>
            <div className={styles.skeletonA}>
                <div className={styles.skeleton1}></div>
                <div className={styles.skeleton2}>
                    <div className={styles.skeleton21}></div>
                    <div className={styles.skeleton22}></div>
                </div>
                <div className={styles.skeleton3}>
                    <div className={styles.bulat}></div>
                    <div className={styles.saudaraBulat}></div>
                </div>
                <div className={styles.skeleton4}></div>
                <img className={styles.imgGaris} src={imgGaris}></img>
            </div>
            <div className={styles.skeletonA}>
                <div className={styles.skeleton1}></div>
                <div className={styles.skeleton2}>
                    <div className={styles.skeleton21}></div>
                    <div className={styles.skeleton22}></div>
                </div>
                <div className={styles.skeleton3}>
                    <div className={styles.bulat}></div>
                    <div className={styles.saudaraBulat}></div>
                </div>
                <div className={styles.skeleton4}></div>
                <img className={styles.imgGaris} src={imgGaris}></img>
            </div>
            <div className={styles.skeletonA}>
                <div className={styles.skeleton1}></div>
                <div className={styles.skeleton2}>
                    <div className={styles.skeleton21}></div>
                    <div className={styles.skeleton22}></div>
                </div>
                <div className={styles.skeleton3}>
                    <div className={styles.bulat}></div>
                    <div className={styles.saudaraBulat}></div>
                </div>
                <div className={styles.skeleton5}></div>
            </div>
        </div>
    );
}
