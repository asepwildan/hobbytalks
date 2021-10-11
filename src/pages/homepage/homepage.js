import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import Vector from "./img/Vector1.png";
import Vector2 from "./img/Vector5.png";
import Search from "./img/search.png";
import Display from "./img/Frame8.png";
import Content1 from "./img/Content1.png";
import Content2 from "./img/Content2.png";
import Content3 from "./img/Content3.png";
import Content4 from "./img/Content4.png";
import styles from "./style/homepage.module.css";
import Footer from "../../component/footer/footer";

export default function Hompepage() {
    return (
        <React.Fragment>
            <div className={styles.homepageContainer}>
                <div className={styles.vector1Container}>
                    <img className={styles.vector1} src={Vector} alt="Vector" />
                </div>

                <header className={styles.homeHeader}>
                    <nav className={styles.homeNav}>
                        <img src={Logo} alt="logo" />
                        <div className={styles.homeButtonContainer}>
                            <Link to={`/login`} style={{ textDecoration: "none" }}>
                                <button className={styles.buttonLoginHomepage}>Login</button>
                            </Link>
                            <Link to={`/register`} style={{ textDecoration: "none" }}>
                                <button className={styles.buttonSignupHomepage}>Signup</button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <div className={styles.homeContent}>
                    <div className={styles.contentLeft}>
                        <p>Find your best interest</p>
                        <h2>Share your unique story</h2>
                        <div className={styles.paragraphContainer}>
                            <p>
                                Ut sapien, neque, a nulla neque vestibulum. Ligula enim velit neque,
                                vitae eu venenatis vel. Pretium pretium tincidunt magna aenean vitae
                                auctor mus.
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.homeSearch}>
                            <div className={styles.homeInputContainer}>
                                <input
                                    type="text"
                                    name="home-input"
                                    placeholder="What do you want to talk about?"
                                />
                                <img className={styles.iconSearch} src={Search} alt="searc icon" />
                            </div>
                        </div>
                        <div className={styles.displayForum}>
                            <img src={Display} alt="display forum" />

                            {/* <div>
                        <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.31185 1.0868C7.57296 0.484638 8.42691 0.484639 8.68803 1.0868L10.0916 4.32364C10.309 4.82487 10.7817 5.16829 11.3255 5.22011L14.8377 5.55478C15.4911 5.61704 15.7549 6.42919 15.2629 6.86361L12.6183 9.19875C12.2087 9.56036 12.0282 10.116 12.147 10.6493L12.914 14.093C13.0567 14.7336 12.3658 15.2355 11.8006 14.9019L8.76252 13.1082C8.29207 12.8305 7.70781 12.8305 7.23735 13.1082L4.19924 14.9019C3.63406 15.2355 2.9432 14.7336 3.08589 14.093L3.85292 10.6493C3.97169 10.116 3.79114 9.56036 3.38161 9.19875L0.736932 6.86361C0.244934 6.42919 0.508819 5.61704 1.1622 5.55478L4.67435 5.22011C5.21821 5.16829 5.69089 4.82487 5.90824 4.32364L7.31185 1.0868Z" fill="#9589DE"/>
                                </svg> Popular
                        </button>
                        <button>Music</button>
                      </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.homeContent2}>
                    <div className={styles.contentLeft2}>
                        <div className={styles.content1_2}>
                            <img src={Content1} alt="img1" />
                            <img src={Content2} alt="img2" />
                        </div>
                        <div className={styles.content2_2}>
                            <img src={Content3} alt="img3" />
                            <img src={Content4} alt="img4" />
                        </div>
                    </div>
                    <div className={styles.contentRight2}>
                        <p>It's easy to share</p>
                        <h2>the experiences</h2>
                        <div className={styles.paragraphContainer}>
                            <p>
                                Ut sapien, neque, a nulla neque vestibulum. Ligula enim velit neque,
                                vitae eu venenatis vel. Pretium pretium tincidunt magna aenean vitae
                                auctor mus.
                            </p>
                        </div>
                    </div>
                </div>
                <img className={styles.vector2} src={Vector2} alt="display forum" />
            </div>
            <Footer />
        </React.Fragment>
    );
}
