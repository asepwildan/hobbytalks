import React from "react";
import styles from "./style/Forum.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Trending from "../../component/trending/Trending";
import { getProfileInfoAsync } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getProfileReducer from "../../redux/reducers/getProfile";

export default function Forum() {
    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state) => state.getProfileReducer);
    // const category = profileInfo.categoryLike;

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch]);

   
      
   
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContainerLeftSide}>
                    <div className={styles.navTop}>
                        <button className={styles.navTopBtn}>Home</button>
                        <button className={styles.navTopBtn}>Following</button>
                    </div>
                    <div className={styles.navBottom}>
                        <div className={styles.headingNavBottom}>
                            <h4>Category</h4>
                        </div>
                        <div>
                            <button className={styles.navBottomBtn}>Electronics</button>
                            <button className={styles.navBottomBtn}>Sport</button>
                            <button className={styles.navBottomBtn}>DIY</button>
                            <button className={styles.navBottomBtn}>Travel</button>
                            <button className={styles.navBottomBtn}>Music</button>
                        </div>
                    </div>
                    <div className={styles.boxMiddleContainer}>
                        <div className={styles.wrapperCreateThread}>
                            <h4>Share your hobby</h4>
                            <button>Create Thread</button>
                        </div>
                        <div className={styles.wrapperSearchBar}>
                            <div className={styles.search}>
                                <input placeholder="What do you want to talk about" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
