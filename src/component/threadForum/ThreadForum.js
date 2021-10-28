import React, { useState, useEffect } from "react";
import styles from "./style/ThreadForum.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getThreadListAsync } from "../../redux/actions";

export default function ThreadForum({ shorting }) {
    const [threadForum, setThreadForum] = useState([]);
    const [page, setPage] = useState("");
    // const [totalPage, setTotalPage] = useState();
    const dispatch = useDispatch();
    const { threadList, totalPage, nextPage, curentPage, loading, error } = useSelector(
        (state) => state.getThreadListReducer
    );
    // const [name, setName] = useState("");
    // const token = localStorage.getItem("tokenLogin");

    const handleChange = (e, value) => {
        // const value = e.target.innerText;
        setPage(value);
        // dispatch(getThreadListAsync(shorting, page));
        console.log(value, "test page");
    };

    useEffect(() => {
        dispatch(getThreadListAsync(shorting, page));
    }, [dispatch, shorting, page]);
    // // useEffect(() => {
    //     axios
    //         .get("https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/newest")
    //         .then((response) => {
    //             setThreadForum(response.data.data);
    //             setTotalPage(response.data.totalPage)
    //             // setName(response.data.data.name);
    //             console.log(threadForum, "iniforum");
    //         })
    //         .catch((error) => console.log(error, "error"));
    // }, []);
    return (
        <div className={styles.threadContainer}>
            {threadList.map((thread) => (
                <>
                    <div key={thread._id} className={styles.buttonActionProfileContainer}>
                        <div className={styles.buttonFIlter1}>
                            {thread.status === "Hot" ? (
                                <button className={styles.buttonHot}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.7734 7.46667C11.62 7.26667 11.4334 7.09333 11.26 6.92C10.8134 6.52 10.3067 6.23333 9.88003 5.81333C8.8867 4.84 8.6667 3.23333 9.30003 2C8.6667 2.15333 8.11337 2.5 7.64003 2.88C5.91337 4.26667 5.23337 6.71333 6.0467 8.81333C6.07337 8.88 6.10003 8.94667 6.10003 9.03333C6.10003 9.18 6.00003 9.31333 5.8667 9.36667C5.71337 9.43333 5.55337 9.39333 5.4267 9.28667C5.38864 9.2552 5.35695 9.21672 5.33337 9.17333C4.58003 8.22 4.46003 6.85333 4.9667 5.76C3.85337 6.66667 3.2467 8.2 3.33337 9.64667C3.37337 9.98 3.41337 10.3133 3.5267 10.6467C3.62003 11.0467 3.80003 11.4467 4.00003 11.8C4.72003 12.9533 5.9667 13.78 7.3067 13.9467C8.73337 14.1267 10.26 13.8667 11.3534 12.88C12.5734 11.7733 13 10 12.3734 8.48L12.2867 8.30667C12.1467 8 11.7734 7.46667 11.7734 7.46667ZM9.6667 11.6667C9.48003 11.8267 9.17337 12 8.93337 12.0667C8.1867 12.3333 7.44003 11.96 7.00003 11.52C7.79337 11.3333 8.2667 10.7467 8.4067 10.1533C8.52003 9.62 8.3067 9.18 8.22003 8.66667C8.14003 8.17333 8.15337 7.75333 8.33337 7.29333C8.46003 7.54667 8.59337 7.8 8.75337 8C9.2667 8.66667 10.0734 8.96 10.2467 9.86667C10.2734 9.96 10.2867 10.0533 10.2867 10.1533C10.3067 10.7 10.0667 11.3 9.6667 11.6667Z"
                                            fill="#E06044"
                                        />
                                    </svg>

                                    <p>Hot</p>
                                </button>
                            ) : thread.status === "Popular" ? (
                                <button className={styles.buttonPopular}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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

                            {thread.category === null ? null : (
                                <button>{thread.category.name}</button>
                            )}
                        </div>
                        {/* <div className={styles.buttonFIlter2}>
                            <button className={styles.editButtonThread}>
                                <svg
                                    width="15"
                                    height="16"
                                    viewBox="0 0 15 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.7691 6.11308C11.675 6.21351 11.6279 6.26372 11.5842 6.30075C11.2111 6.6171 10.6639 6.6171 10.2908 6.30075C10.2471 6.26372 10.2 6.21351 10.1059 6.11309L9.1684 5.11308C9.08455 5.02365 9.04263 4.97893 9.01081 4.93688C8.74071 4.57994 8.74071 4.08698 9.01081 3.73004C9.04263 3.68799 9.08455 3.64327 9.1684 3.55383C9.26255 3.45341 9.30962 3.40319 9.3533 3.36616C9.7264 3.04982 10.2736 3.04982 10.6467 3.36617C10.6904 3.40319 10.7375 3.45341 10.8316 3.55383L11.7691 4.55383C11.8529 4.64327 11.8949 4.68799 11.9267 4.73004C12.1968 5.08698 12.1968 5.57994 11.9267 5.93688C11.8949 5.97893 11.8529 6.02365 11.7691 6.11308ZM4.24431 13.3335C3.5475 13.3335 3.19909 13.3335 2.94815 13.1674C2.83613 13.0933 2.74019 12.9973 2.66606 12.8853C2.5 12.6344 2.5 12.286 2.5 11.5891V11.4225C2.5 11.0668 2.5 10.889 2.55827 10.7259C2.56579 10.7048 2.57401 10.684 2.58292 10.6635C2.65199 10.5047 2.77361 10.3749 3.01685 10.1155L6.48194 6.41939C7.04227 5.8217 7.32244 5.52285 7.66896 5.47259C7.76416 5.45879 7.86084 5.45879 7.95604 5.47259C8.30256 5.52285 8.58273 5.8217 9.14306 6.41939C9.6414 6.95095 9.89057 7.21673 9.93298 7.53451C9.9447 7.62231 9.9447 7.71128 9.93298 7.79908C9.89057 8.11685 9.6414 8.38263 9.14306 8.91419L5.51685 12.7822C5.29991 13.0136 5.19144 13.1293 5.05787 13.2046C4.99711 13.2388 4.93293 13.2666 4.86638 13.2875C4.7201 13.3335 4.5615 13.3335 4.24431 13.3335Z"
                                        fill="#1E8AC6"
                                    />
                                </svg>
                                <p>Edit</p>
                            </button>
                        </div> */}
                    </div>
                    <div key={thread.userId} className={styles.threadListProfile}>
                        <div className={styles.titleThreadProfile}>
                            <div className={styles.threadInfo}>
                                <div>
                                    <p className={styles.titleInfoText}>{thread.title}</p>
                                    <div className={styles.threadProfileInfo}>
                                        {thread.userId === null ? (
                                            <Avatar
                                                className={styles.avatarForum}
                                                src={""}
                                                alt="img1"
                                            />
                                        ) : (
                                            <Link to={""}>
                                                {" "}
                                                <Avatar
                                                    className={styles.avatarForum}
                                                    src={thread.userId.avatar}
                                                    alt="img1"
                                                />
                                            </Link>
                                        )}
                                        {thread.userId === null ? (
                                            <p className={styles.threadAccountName}>Anonim</p>
                                        ) : (
                                            <p className={styles.threadAccountName}>
                                                {thread.userId.name}
                                            </p>
                                        )}
                                    </div>

                                    <Link
                                        to={`/thread-detail/${thread._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {" "}
                                        <p className={styles.threadTextAnchor}>
                                            {thread.content}
                                        </p>{" "}
                                    </Link>
                                </div>
                                    <div className={styles.imgThread}>
                                <Link to={`/thread-detail/?xyz=${thread._id}`}>
                                        <img src={thread.image} alt="imgthread" />
                                </Link>
                                    </div>
                            </div>

                            <div className={styles.threadActionContainer}>
                                <div className={styles.threadAction}>
                                    <svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.3896 6.36L7.38965 0.240002C7.22965 0.0800025 7.02965 0 6.80965 0C6.58965 0 6.38965 0.0800025 6.22965 0.240002L0.229649 6.36C0.00964881 6.58 -0.0703512 6.98 0.0696488 7.26C0.189649 7.56 0.489649 7.78 0.809649 7.78H3.40965V15.18C3.40965 15.62 3.86965 15.98 4.30965 15.98H9.30965C9.74965 15.98 10.2096 15.62 10.2096 15.18V7.78H12.8096C13.1296 7.78 13.4296 7.54 13.5496 7.26C13.6696 6.98 13.6096 6.6 13.3896 6.36ZM9.30965 6.2C8.86965 6.2 8.60965 6.48 8.60965 6.92V14.4H5.00965V6.92C5.00965 6.48 4.74965 6.2 4.30965 6.2H2.70965L6.80965 2.02L10.9096 6.2H9.30965Z"
                                            fill="#1E8AC6"
                                        />
                                        <path
                                            d="M7 1.5L2 6.5H4.8697V14.6044H9V6.5H11.5L7 1.5Z"
                                            fill="#1E8AC6"
                                        />
                                    </svg>
                                    <div className={styles.threadActionInfo}>
                                        {thread.likeCount}
                                    </div>
                                </div>
                                <div className={styles.threadAction}>
                                    <svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.7449 8.72C13.6249 8.42 13.3249 8.2 13.0049 8.2H10.4049V0.8C10.4049 0.36 9.94486 0 9.50486 0H4.50486C4.06486 0 3.60486 0.36 3.60486 0.8V8.2H1.00486C0.684864 8.2 0.384864 8.44 0.264864 8.72C0.144864 9.02 0.204865 9.38 0.424865 9.6L6.42487 15.74C6.58487 15.9 6.78486 15.98 7.00486 15.98C7.22486 15.98 7.42486 15.9 7.58486 15.74L13.5849 9.6C13.8049 9.38 13.8649 9.02 13.7449 8.72ZM7.00486 13.98L2.90486 9.8H4.50486C4.94486 9.8 5.20486 9.52 5.20486 9.08V1.6H8.80486V9.08C8.80486 9.52 9.06486 9.8 9.50486 9.8H11.1049L7.00486 13.98Z"
                                            fill="#828282"
                                        />
                                    </svg>

                                    <div className={styles.threadActionInfo}>
                                        {thread.dislikeCount}
                                    </div>
                                </div>
                                <div className={styles.threadAction}>
                                    <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15.2548 6.4248C15.1464 7.08272 14.9215 7.71041 14.5976 8.29351C14.6371 8.48516 14.6575 8.67981 14.6575 8.87579C14.6575 9.45219 14.4904 10.003 14.1823 10.5021C14.0417 10.7299 14.0039 11.0004 13.9892 11.1867C13.9725 11.3979 13.978 11.6305 13.9934 11.8559C14.0132 12.1477 14.0516 12.4568 14.0941 12.7407C13.7743 12.6456 13.4174 12.5472 13.0793 12.4709C12.8302 12.4147 12.5772 12.3673 12.3491 12.3437C12.1478 12.3229 11.8687 12.3085 11.6229 12.388C11.0433 12.5753 10.406 12.6797 9.7348 12.6797C8.87312 12.6797 8.08463 12.5139 7.4032 12.2284C7.3106 12.2309 7.21761 12.2322 7.12425 12.2322C6.27378 12.2322 5.45354 12.1263 4.68213 11.9298C5.84791 13.2228 7.72508 14.0223 9.7348 14.0223C10.5392 14.0223 11.3107 13.8981 12.0208 13.6703L12.0206 13.6705C12.0207 13.6708 12.0234 13.6708 12.0292 13.6706C12.0491 13.67 12.1052 13.6682 12.2112 13.6792C12.3649 13.695 12.5605 13.7302 12.7839 13.7806C13.2287 13.8809 13.7276 14.0287 14.1153 14.1518C14.8817 14.3951 15.6253 13.7258 15.4882 12.9476C15.4249 12.5882 15.3588 12.1478 15.3328 11.765C15.3198 11.5726 15.3181 11.4122 15.3276 11.2924C15.3328 11.2267 15.3401 11.1911 15.3431 11.1773C15.7603 10.4903 16.0001 9.7082 16.0001 8.87579C16.0001 7.97189 15.7274 7.14208 15.2548 6.4248Z"
                                            fill="#828282"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.04913 2.6245C2.02954 3.40418 1.45573 4.43372 1.45573 5.51941C1.45573 6.06011 1.59658 6.58021 1.85969 7.06268C1.95054 7.22928 1.9771 7.40283 1.9867 7.52394C1.9971 7.65527 1.99199 7.79153 1.9803 7.92073C1.95689 8.17938 1.90085 8.47424 1.83294 8.76693C1.74242 9.15712 1.62272 9.57738 1.50472 9.96087C1.93426 9.80228 2.41811 9.6347 2.87349 9.50185C3.20202 9.406 3.53184 9.32343 3.82396 9.27724C4.0791 9.2369 4.43325 9.20059 4.73326 9.30438C5.45752 9.55496 6.26705 9.69626 7.12432 9.69626C8.74074 9.69626 10.1793 9.19447 11.1995 8.41432C12.2191 7.63463 12.7929 6.6051 12.7929 5.51941C12.7929 4.43372 12.2191 3.40418 11.1995 2.6245C10.1793 1.84434 8.74074 1.34256 7.12432 1.34256C5.50789 1.34256 4.06933 1.84434 3.04913 2.6245ZM2.23359 1.55803C3.50796 0.583506 5.23933 0 7.12432 0C9.0093 0 10.7407 0.583506 12.015 1.55803C13.29 2.53302 14.1355 3.92755 14.1355 5.51941C14.1355 7.11126 13.29 8.50579 12.015 9.48079C10.7407 10.4553 9.0093 11.0388 7.12432 11.0388C6.12033 11.0388 5.16227 10.8734 4.2943 10.5732C4.30348 10.5763 4.30841 10.5778 4.3083 10.5785C4.30788 10.5812 4.23177 10.572 4.03364 10.6033C3.82137 10.6369 3.55268 10.7022 3.24949 10.7907C2.64563 10.9669 1.96861 11.2157 1.454 11.416C0.622297 11.7397 -0.225558 10.9402 0.0546224 10.0895C0.213836 9.60606 0.402158 8.99353 0.525121 8.46352C0.587014 8.19674 0.627808 7.96987 0.643203 7.79974C0.649667 7.72831 0.65055 7.67817 0.64928 7.64634C0.306141 6.99622 0.113175 6.27719 0.113175 5.51941C0.113175 3.92755 0.958595 2.53302 2.23359 1.55803ZM0.646498 7.61466C0.646557 7.61459 0.646897 7.61626 0.647342 7.61987C0.646661 7.61654 0.646438 7.61473 0.646498 7.61466Z"
                                            fill="#828282"
                                        />
                                    </svg>
                                    <div className={styles.threadActionInfo}>
                                        {thread.commentCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            <div className={styles.paginationContainer}>
                <Pagination count={totalPage} page={curentPage} onChange={handleChange} />
            </div>
        </div>
    );
}
