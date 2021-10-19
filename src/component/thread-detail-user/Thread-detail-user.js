import React from "react";
import styles from "./thread-detail-user.module.css";
import plus from './asset/plus.svg';
import foto from './asset/image 7.png';
import piano from './asset/piano.png';
import garis from './asset/garis.svg'
import { style } from "@mui/system";
import panahnya from './asset/panahnya.svg'
import garisVote from './asset/garisVote.svg'
import panahBawah from './asset/panahbawah.svg'
import chat from './asset/Chat.svg'

export default function ThreadUser() {
    
    return (
        <div className={styles.threadDetailUserContainer}>
            <div className={styles.buttonActionProfileContainer}>
                <div className={styles.buttonFIlter1}>
                    <button className={styles.buttonHot}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.7734 7.46667C11.62 7.26667 11.4334 7.09333 11.26 6.92C10.8134 6.52 10.3067 6.23333 9.88003 5.81333C8.8867 4.84 8.6667 3.23333 9.30003 2C8.6667 2.15333 8.11337 2.5 7.64003 2.88C5.91337 4.26667 5.23337 6.71333 6.0467 8.81333C6.07337 8.88 6.10003 8.94667 6.10003 9.03333C6.10003 9.18 6.00003 9.31333 5.8667 9.36667C5.71337 9.43333 5.55337 9.39333 5.4267 9.28667C5.38864 9.2552 5.35695 9.21672 5.33337 9.17333C4.58003 8.22 4.46003 6.85333 4.9667 5.76C3.85337 6.66667 3.2467 8.2 3.33337 9.64667C3.37337 9.98 3.41337 10.3133 3.5267 10.6467C3.62003 11.0467 3.80003 11.4467 4.00003 11.8C4.72003 12.9533 5.9667 13.78 7.3067 13.9467C8.73337 14.1267 10.26 13.8667 11.3534 12.88C12.5734 11.7733 13 10 12.3734 8.48L12.2867 8.30667C12.1467 8 11.7734 7.46667 11.7734 7.46667ZM9.6667 11.6667C9.48003 11.8267 9.17337 12 8.93337 12.0667C8.1867 12.3333 7.44003 11.96 7.00003 11.52C7.79337 11.3333 8.2667 10.7467 8.4067 10.1533C8.52003 9.62 8.3067 9.18 8.22003 8.66667C8.14003 8.17333 8.15337 7.75333 8.33337 7.29333C8.46003 7.54667 8.59337 7.8 8.75337 8C9.2667 8.66667 10.0734 8.96 10.2467 9.86667C10.2734 9.96 10.2867 10.0533 10.2867 10.1533C10.3067 10.7 10.0667 11.3 9.6667 11.6667Z"
                                fill="#E06044"
                            />
                        </svg>

                        <p>Hot</p>
                    </button>
                    <button className={styles.buttonMusic}>Music</button>
                </div>
                <div className={styles.buttonFIlter2}>
                    <button className={styles.followButtonThread}>
                        <img className="gambarPlus" src={ plus }/>
                        <p className={styles.followText}>Follow Thread</p>
                    </button>
                </div>
            </div>
            <div className={styles.identitas}>
                <img className={styles.foto} src={foto}></img>
                <p className={styles.nama}>Stella Hobart</p>
            </div>
                <p className={styles.keterangan}>My Journey into Piano: 1 year and still counting</p>
                <img src={piano} className={styles.piano}></img>
                <div>
                    <p className={styles.caption}>I did not learn the pieces entirely guys, obviously. And did not learn to read sheet music. I was an absolute beginner in the first video. I have no intention to trick anyone</p>
                    <p className={styles.caption}>Viverra suscipit risus feugiat sodales egestas est tortor fermentum dictum. Sit tempus id sed et. Ipsum egestas augue leo augue sed et. Interdum risus nunc in ac. Risus mi velit donec senectus. In consequat lectus pellentesque tempus et nec integer. Ullamcorper ut magna fames sit pharetra, ornare vitae orci. Vitae, pellentesque tristique turpis turpis pretium libero proin. Ultrices viverra amet sit egestas.</p>
                    <p className={styles.caption}>Pellentesque egestas viverra lacinia mi mattis eget. Odio massa elit, sem convallis posuere magna felis.
                    Purus lectus consectetur mattis luctus sed bibendum. Ultrices congue augue magna gravida sed. Nisl netus suscipit feugiat nunc, ipsum. Lectus leo egestas metus nisl posuere tempus amet scelerisque libero. Augue diam tellus fringilla non aliquet. Accumsan aliquet egestas facilisis duis. Vestibulum, erat tristique egestas sit nunc, sed pellentesque.</p>
                </div>
                <img src={garis} className={styles.garis}></img>
                <div className={styles.bawah}>
                    <div className={styles.btnVote}>
                        <img className={styles.panahnya} src={panahnya}/>
                        <p className={styles.angkaPanah}>1.5k</p>
                        <div className={styles.dislikeGroup}>
                            <img src={panahBawah} className={styles.panahBawah}/>
                            <p className={styles.dislike}>0</p>
                        </div>
                        <img src={chat} className={styles.commentImage}></img>
                        <p className={styles.comment}>124</p>
                    </div>
                    <date className={styles.tanggal}>28 June 2021</date>
                </div>
        </div>
            
    
    )
}