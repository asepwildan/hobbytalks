import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./style/subReplies.module.css";
import { useState } from "react";
import axios from "axios";
import Loader from "../../../comment/loaderComment.gif"

export default function SubReplies({ subReplies, ava, updateComment }) {
    const subReplay = subReplies.subReply;
    console.log(subReplay, "iniprop subreplay");
    const [login, setLogin] = useState(false);
    const token = localStorage.getItem("tokenLogin");
    const [postSubReplie, setPostSubReplie] = useState();
    const [values, setValues] = useState({ content: "" });
    const [status, setStatus] = useState();
    const [load, setLoad] = useState(false)

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...value, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true)
        axios
            .post(
                `https://hobbytalk-be-glints.herokuapp.com/api/v1/subReply/${subReplies._id}`,
                {
                    content: values.content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(
                (response) => {
                    setPostSubReplie(response);
                    console.log(response, "ini post sub replie");
                    e.target.reset();
                    // window.location.reload(false);
                    updateComment();
                    setLoad(false)
                },
                [postSubReplie]
            )
            .catch((message) => {
                setStatus(message);
                console.log(message, "ini error");
            }, []);
    }

    useEffect(() => {
        setLogin(token);
    }, [token]);

    const SubRepliesItem = ({ ...subRep }) => {
        return (
            <div className={styles.subRepliesWrapper}>
                <div className={styles.subRepliesRightPart}>
                {subRep.userId === null ? <Avatar className={styles.subRepavatar} alt="A" /> :
                    <Avatar className={styles.subRepavatar} src={subRep.userId.avatar} alt="A" />}
                    {subRep.userId === null ? (
                        <div className={styles.commentAuthor}>Anonim</div>
                    ) : (
                        <div className={styles.subRepliesAuthor}>{subRep.userId.name}</div>
                    )}
                    <div className={styles.subRepliesTimes}> | {subRep.date}</div>
                </div>
                <div className={styles.subRepliesContent}>
                    <div className={styles.subRepliesText}>{subRep.content}</div>
                    <div className={styles.subRepliesActionContainer}>
                        <div className={styles.subRepliesAction}>
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
                            <div className={styles.subRepliesVoteInfo}>{subRep.likes.length}</div>
                        </div>
                        <div className={styles.subRepliesAction}>
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

                            <div className={styles.subRepliesActionInfo}>
                                {subRep.dislike.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className={styles.subRepliesContainer}>
            {login ? (
                <form onSubmit={handleSubmit} className={styles.formSubReplies}>
                    <Avatar className={styles.avaSubReplies} src={ava} />
                    <textarea
                        onChange={handleChange}
                        className={styles.inputSubReplies}
                        name="content"
                        type="text"
                        placeholder="Add a comment"
                        required
                    ></textarea>
                   {load === true ? (
                        <button type="submit" className={styles.postBtn}>
                            Post <img src={Loader} alt="Loader" />
                        </button>
                    ) : (
                        <button type="submit" className={styles.postBtn}>
                            Post
                        </button>
                    )}
                </form>
            ) : null}
            {subReplay.map((subRep) => (
                <SubRepliesItem key={subRep.id} {...subRep} />
            ))}
        </div>
    );
}
