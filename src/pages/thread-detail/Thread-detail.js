import React, { useState, useEffect } from "react";
import styles from "./style/Thread-detail.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import MoreUserInfo from "../../component/moreUserInfo/moreUserInfo";
import RelatedTopic from "../../component/relatedTopic/relatedTopic";
import Comment from "../../component/comment/comment";
import imgAvatar from "./img/imgAvatar.png";
import ThreadUser from "../../component/thread-detail-user/Thread-detail-user";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import getProfileReducer from "../../redux/reducers/getProfile";
import { getProfileInfoAsync, getThreadDetailAsync, getCommentAsync } from "../../redux/actions";
import { Avatar } from "@material-ui/core";
import Loading from "./img/loaderComment.gif";

export default function ThreadDetail() {
    const [login, setLogin] = useState(false);
    const [comment, setComment] = useState();
    const [values, setValues] = useState({ content: "" });
    const Token = localStorage.getItem("tokenLogin");
    const [status, setStatus] = useState();
    const [load, setLoad] = useState(false);
    // let { id } = useParams();

    const queryParams = new URLSearchParams(window.location.search);

    const idThread = queryParams.get("xyz");

    console.log(idThread, "wayaghe");

    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state) => state.getProfileReducer);
    // console.log(id, "id thread");
    const { error } = useSelector((state) => state.getCommentReducer);
    console.log(error, "error komen");

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCommentAsync(idThread));
    }, [dispatch]);

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...value, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true);
        axios
            .post(
                `https://hobbytalk-be-glints.herokuapp.com/api/v1/comments/${idThread}`,
                {
                    content: values.content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                }
            )
            .then(
                (response) => {
                    setComment(response);
                    console.log(response, "ini comment");
                    setLoad(false);
                    e.target.reset();
                    window.location.reload();
                },
                [comment]
            )
            .catch((message) => {
                setStatus(message);
                console.log(message, "ini error");
            });
    }
    useEffect(() => {
        setLogin(Token);
    }, [Token]);

    useEffect(() => {
        dispatch(getThreadDetailAsync(idThread));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className={styles.boxContentThreadDetail}>
                    <div className={styles.threadContanerThreadDetail}>
                        <ThreadUser />
                        <div className={styles.formCommentContainer}>
                            {login ? (
                                <div className={styles.formCommentDoang}>
                                    <div className={styles.identitas}>
                                        <Avatar src={profileInfo.avatar} alt="img" />
                                        <p className={styles.nama}>{profileInfo.name}</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                            onChange={handleChange}
                                            name="content"
                                            className={styles.inputThreadDetail}
                                            type="text"
                                            placeholder="Add a comment"
                                            required></textarea>
                                        {load === true ? (
                                            <button type="submit" className={styles.tombol}>
                                                Add a comment <img src={Loading} alt="gif" />
                                            </button>
                                        ) : (
                                            <button type="submit" className={styles.tombol}>
                                                Add a comment
                                            </button>
                                        )}
                                    </form>
                                </div>
                            ) : (
                                <div className={styles.formCommentNoLogin}>
                                    <Link to={`/account/login`} style={{ textDecoration: "none" }}>
                                        <button className={styles.tombolThreadNoLogin}>
                                            Login to add comment
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        {error !== "" ? (
                            <div></div>
                        ) : (
                            <div className={styles.commentLineContainer}>
                                <Comment ava={profileInfo.avatar} />
                            </div>
                        )}
                    </div>

                    <div className={styles.likeRekomContanerThreadDetail}>
                        <RelatedTopic />
                        <div className={styles.trendingContanerThreadDetail}>
                            <MoreUserInfo />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
