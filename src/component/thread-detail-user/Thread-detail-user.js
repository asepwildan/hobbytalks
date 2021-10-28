import React, { useState,useEffect } from "react";
import styles from "./thread-detail-user.module.css";
import plus from "./asset/plus.svg";
import foto from "./asset/image 7.png";
import piano from "./asset/piano.png";
import garis from "./asset/garis.svg";
import { style } from "@mui/system";
import panahnya from "./asset/panahnya.svg";
import garisVote from "./asset/garisVote.svg";
import panahBawah from "./asset/panahbawah.svg";
import chat from "./asset/Chat.svg";
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import getUserReducer from "../../redux/reducers/getUser";

export default function ThreadUser() {
    const {
        name,
        avatar,
        title,
        content,
        image,
        category,
        status,
        likeCount,
        dislikeCount,
        commentCount,
        date,
    } = useSelector((state) => state.getThreadDetail);
    return (
        <div className={styles.threadDetailUserContainer}>
            <div className={styles.buttonActionProfileContainer}>
                <div className={styles.buttonFIlter1}>
                    {status === "Hot" ? (
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
                    ) : status === "Popular" ? (
                        <button className={styles.buttonPopular}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M7.31185 1.0868C7.57296 0.484638 8.42691 0.484639 8.68803 1.0868L10.0916 4.32364C10.309 4.82487 10.7817 5.16829 11.3255 5.22011L14.8377 5.55478C15.4911 5.61704 15.7549 6.42919 15.2629 6.86361L12.6183 9.19875C12.2087 9.56036 12.0282 10.116 12.147 10.6493L12.914 14.093C13.0567 14.7336 12.3658 15.2355 11.8006 14.9019L8.76252 13.1082C8.29207 12.8305 7.70781 12.8305 7.23735 13.1082L4.19924 14.9019C3.63406 15.2355 2.9432 14.7336 3.08589 14.093L3.85292 10.6493C3.97169 10.116 3.79114 9.56036 3.38161 9.19875L0.736932 6.86361C0.244934 6.42919 0.508819 5.61704 1.1622 5.55478L4.67435 5.22011C5.21821 5.16829 5.69089 4.82487 5.90824 4.32364L7.31185 1.0868Z"
                                        fill="#9589DE"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Popular</p>
                        </button>
                    ) : (
                        <div></div>
                    )}

                    <button className={styles.buttonMusic}>{category}</button>
                </div>
                <div className={styles.buttonFIlter2}>
                    <button className={styles.followButtonThread}>
                        <img className="gambarPlus" src={plus} />
                        <p className={styles.followText}>Follow Thread</p>
                    </button>
                </div>
            </div>
            <div className={styles.identitas}>
                <img className={styles.foto} src={avatar}></img>
                <p className={styles.nama}>{name}</p>
            </div>
            <p className={styles.keterangan}>{title}</p>

            <img src={image} className={styles.piano}></img>

            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}></div>
            <img src={garis} className={styles.garis}></img>
            <div className={styles.bawah}>
                <div className={styles.btnVote}>
                    <img className={styles.panahnya} src={panahnya} />
                    <p className={styles.angkaPanah}>{likeCount}</p>
                    <div className={styles.dislikeGroup}>
                        <img src={panahBawah} className={styles.panahBawah} />
                        <p className={styles.dislike}>{dislikeCount}</p>
                    </div>
                    <img src={chat} className={styles.commentImage}></img>
                    <p className={styles.comment}>{commentCount}</p>
                </div>
                <date className={styles.tanggal}>{date}</date>
            </div>
        </div>
    );
}
