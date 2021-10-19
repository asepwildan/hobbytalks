import styles from "./style/footer.module.css";
import FooterLogo from "./img/footerlogo.png";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <div className={styles.footerLogoContainer}>
                    <img src={FooterLogo} alt="footer logo" />
                </div>
                <p>©2021 hobbytalk. All right reserved</p>
            </div>
            <div className={styles.footerContentContainer}>
                <div>
                    <p>About Us</p>
                    <ul>
                        <li>About hobbyTalk</li>
                        <li>Contact Us</li>
                        <li>Features</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li>Help center</li>
                        <li>Privacy Policy</li>
                        <li>Term of Service</li>
                    </ul>
                </div>
                <div>
                    <p>Get in touch</p>
                    <ul>
                        <li>Questions or feedback?</li>
                        <li>We’d love to hear from you</li>
                    </ul>
                    <div className={styles.sosmedFooter}>
                        <a href="https://www.facebook.com/" target="_blank">
                            <svg
                                width="12"
                                height="22"
                                viewBox="0 0 12 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5628 0.00457747L8.78558 0C5.66542 0 3.64903 2.12509 3.64903 5.41423V7.91055H0.85662C0.615322 7.91055 0.419922 8.1115 0.419922 8.35937V11.9763C0.419922 12.2241 0.615545 12.4249 0.85662 12.4249H3.64903V21.5514C3.64903 21.7993 3.84443 22 4.08573 22H7.72904C7.97033 22 8.16573 21.799 8.16573 21.5514V12.4249H11.4307C11.672 12.4249 11.8674 12.2241 11.8674 11.9763L11.8688 8.35937C11.8688 8.24036 11.8226 8.12638 11.7409 8.04215C11.6591 7.95793 11.5477 7.91055 11.4318 7.91055H8.16573V5.79439C8.16573 4.77727 8.40168 4.26094 9.6915 4.26094L11.5624 4.26025C11.8035 4.26025 11.9989 4.0593 11.9989 3.81166V0.453169C11.9989 0.205757 11.8037 0.00503522 11.5628 0.00457747Z"
                                    fill="white"
                                />
                            </svg>
                        </a>

                        <a href="https://twitter.com/" target="_blank">
                            <svg
                                width="22"
                                height="18"
                                viewBox="0 0 22 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.5 2.77246C20.7271 3.10039 19.8978 3.32279 19.0264 3.42208C19.9161 2.91193 20.5972 2.10275 20.92 1.14152C20.0854 1.61395 19.1642 1.957 18.1826 2.14297C17.3966 1.34007 16.2785 0.839966 15.0384 0.839966C12.6593 0.839966 10.7303 2.68703 10.7303 4.96382C10.7303 5.28673 10.7683 5.60211 10.8418 5.9037C7.26201 5.73153 4.08768 4.08929 1.96314 1.59385C1.59176 2.20201 1.38049 2.91065 1.38049 3.66709C1.38049 5.09827 2.14161 6.36105 3.2964 7.09985C2.5904 7.07725 1.92639 6.89128 1.34508 6.58217V6.63369C1.34508 8.63153 2.83056 10.2989 4.80024 10.6784C4.43936 10.7714 4.05882 10.8229 3.66514 10.8229C3.38696 10.8229 3.11794 10.7965 2.85417 10.7462C3.40267 12.386 4.99315 13.5784 6.87756 13.6111C5.40388 14.7168 3.54573 15.374 1.52749 15.374C1.17976 15.374 0.837236 15.3539 0.5 15.3174C2.40671 16.4898 4.67036 17.1733 7.10327 17.1733C15.028 17.1733 19.3597 10.8882 19.3597 5.43754L19.3453 4.90353C20.1917 4.32549 20.9239 3.59924 21.5 2.77246Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/asep-wildan-nugraha/" target="_blank">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.9951 22V21.9992H22.0001V14.6642C22.0001 11.0758 21.2276 8.31165 17.0326 8.31165C15.0159 8.31165 13.6626 9.41831 13.1101 10.4675H13.0517V8.64665H9.07422V21.9992H13.2159V15.3875C13.2159 13.6467 13.5459 11.9633 15.7017 11.9633C17.8259 11.9633 17.8576 13.95 17.8576 15.4992V22H21.9951Z"
                                    fill="white"
                                />
                                <path
                                    d="M2.33008 8.64746H6.47675V22H2.33008V8.64746Z"
                                    fill="white"
                                />
                                <path
                                    d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2V2Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
