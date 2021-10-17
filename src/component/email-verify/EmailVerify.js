// import { style } from "@mui/system";
import React from "react";
// import logo1 from '../assets/logo/Group 2.svg';
import email from '../assets/logo/logoemail.svg'
import styles from "../email-verify/EmailVerify.module.css"

export default function EmailVerify() {
    return(
      <div className={styles.mainContainer}>
          <div className={styles.emailVerifyContainer}>
              <div className={styles.imgContainer}>
                  <img src={email} alt="email"/>
              </div>
              <div className={styles.infoEmailVerify}>
                  <h3 className={styles.heading3}>Please verify your email account!</h3>
                  <p className={styles.text1}>You’re almost there! We sent an email to</p>
                  <p className={styles.emailBold}>john.doe@gmail.com</p>
              </div>
              <div className={styles.infoText2}>
                  <p className={styles.textP1}>Just click on the link in that email to complete your signup.</p>
                  <p className={styles.textP2}>If you don’t see it, you may need to check your spam folder</p>
              </div>
          </div>
      </div>
    )
}
