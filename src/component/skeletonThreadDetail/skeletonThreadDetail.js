import styles from "./skeletonThreadDetail.module.css";

export default function SkeletonThreadDetail() {
    return (
        <div className={styles.parentSkeleton}>
            <div className={styles.skeletonContainer1}>
                <div className={styles.skeleton1a}></div>
                <div className={styles.skeleton1b}></div>
            </div>
            <div className={styles.skeletonContainer2}>
                <div className={styles.skeleton2a}></div>
                <div className={styles.skeleton2b}></div>
            </div>
            <div className={styles.skeletonContainer3}></div>
            <div className={styles.skeletonContainer4}></div>
            <div className={styles.skeletonContainer5}></div>
        </div>
    );
}
