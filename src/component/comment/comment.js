import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./style/comment.module.css";
import { useState } from "react";
import SubComment from "./Replies/replies";
import Loader from "./loaderComment.gif";
import { useSelector, useDispatch } from "react-redux";
import { getCommentAsync } from "../../redux/actions";

export default function Comment({ ava }) {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { commentList, commentDetail, loading, error } = useSelector(
        (state) => state.getCommentReducer
    );
    const id = "616bc20a15f73f8d5d5bbeab";
    const limit = 5;

    console.log(loading, "ini loading list redux");

    useEffect(() => {
        updateComment();
    }, [dispatch, page]);

    const loadMore = () => {
        setPage(page + 1);
    };

    const loadLess = () => {
        setPage(0);
    };

    const updateComment = () => {
        dispatch(getCommentAsync(id, page, limit));
    };

    const CommentItem = ({ ...comment }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div key={comment._id} className={styles.commentWrapper}>
                <div className={styles.commentRightPart}>
                    {comment.userId === null ? (
                        <Avatar className={styles.avatar} alt="A" />
                    ) : (
                        <Avatar className={styles.avatar} src={comment.userId.avatar} alt="A" />
                    )}
                    {comment.userId === null ? (
                        <div className={styles.commentAuthor}>Anonim</div>
                    ) : (
                        <div className={styles.commentAuthor}>{comment.userId.name}</div>
                    )}
                    <div className={styles.commentTimes}>| {comment.date}</div>
                </div>
                <div className={styles.commentContent}>
                    <div className={styles.commentText}>{comment.content}</div>
                    <div className={styles.commentActionContainer}>
                        <div className={styles.commentAction}>
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
                            <div className={styles.commentVoteInfo}>{comment.likes.length}</div>
                        </div>
                        <div className={styles.commentAction}>
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

                            <div className={styles.commentActionInfo}>{comment.dislike.length}</div>
                        </div>
                        <div className={styles.commentAction}>
                            <svg
                                onClick={() => setIsOpen(!isOpen)}
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
                            <div className={styles.commentActionInfo}>{comment.reply.length}</div>
                        </div>
                    </div>
                </div>
                <button className={styles.repliesBtn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Hide" : "See"} all {comment.reply.length} replies...
                </button>
                {isOpen && <SubComment ava={ava} replies={comment} updateComment={updateComment} />}
            </div>
        );
    };
    return (
        <div className={styles.commentContainer}>
            {commentDetail.map((comment) => (
                <CommentItem key={comment._id} {...comment} />
            ))}
            <div className={styles.loaderContainer}>
                {loading === true ? (
                    <img src={Loader} alt="Load" className={styles.loaderComment} />
                ) : (
                    <div></div>
                )}
            </div>

            <div className={styles.loadButtonContainer}>
                {page < commentList.totalPage ? (
                    <button onClick={loadMore} className={styles.loadComment}>
                        Load more comments
                    </button>
                ) : commentList.totalPage === 1 ? (
                    <div></div>
                ) : (
                    <button onClick={loadLess} className={styles.loadComment}>
                        Load less comments
                    </button>
                )}
            </div>
        </div>
    );
}
