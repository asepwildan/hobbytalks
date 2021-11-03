import React from "react";
import styles from "./style/Forum.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Trending from "../../component/trending/Trending";
import {
    getProfileInfoAsync,
    getThreadCategoryAsync,
    getFollowingThreadAsync,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import getProfileReducer from "../../redux/reducers/getProfile";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Search from "@material-ui/icons/Search";
import Modal from "@mui/material/Modal";
import CreateThread from "../../component/createThread/createThread";
import ThreadForum from "../../component/threadForum/ThreadForum";
import { getThreadListAsync, getSearchAsync, paginationConditionAsync } from "../../redux/actions";
import axios from "axios";
import ThreadSearch from "../../component/threadSearch/threadSearch";
import imgGaris from "./img/garisSkeleton.svg";
import Skeleton from "../../component/skeleton/skeleton";

export default function Forum() {
    let [category, setCategory] = useState([
        {
            value: "6166eed398472010a2d7e97e",
            title: "Music",
            isCheck: false,
            id: "1a",
        },
        {
            value: "6166eed998472010a2d7e980",
            title: "Games",
            isCheck: false,
            id: "2a",
        },
        ,
        {
            value: "6166eee898472010a2d7e982",
            title: "Sports",
            isCheck: false,
            id: "3a",
        },
        {
            value: "6177f8721ffa070699dd876e",
            title: "Travel",
            isCheck: false,
            id: "4a",
        },
        {
            value: "6166eeed98472010a2d7e984",
            title: "Arts",
            isCheck: false,
            id: "5a",
        },
        {
            value: "6166eef398472010a2d7e986",
            title: "DIY",
            isCheck: false,
            id: "6a",
        },
        {
            value: "6166ef8c98472010a2d7e988",
            title: "Tech",
            isCheck: false,
            id: "7a",
        },
        {
            value: "6166effb98472010a2d7e98c",
            title: "Business",
            isCheck: false,
            id: "8a",
        },
        {
            value: "6172d7ef0f79346bbb9db5ca",
            title: "Cooking",
            isCheck: false,
            id: "9a",
        },
    ]);

    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state) => state.getProfileReducer);
    const [isOpen, setIsOpen] = useState();
    const [buttonActive, setButtonActive] = useState();
    const [buttonTopActive, setButtonTopActive] = useState();
    const [values, setValues] = useState("newest");
    const [catValue, setCatValue] = useState("");
    const [valuesSearch, setValuesSearch] = useState({
        search: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setValues(value);
        setValuesSearch({
            search: "",
        });
    };

    const handleChangePage = (e) => {
        setValuesSearch({
            search: "",
        });
        dispatch(getThreadListAsync(values));
        dispatch(paginationConditionAsync("home"))

    };

    const buttonSelectedTesting = (e) => {
        dispatch(paginationConditionAsync("category"))
        dispatch(getThreadCategoryAsync(e));
        setValuesSearch({
            search: "",
        });
    };

    const buttonListFollowingThread = (isPage) => {
        dispatch(paginationConditionAsync("following"))
        dispatch(getFollowingThreadAsync(isPage));
    };

    useEffect(() => {
        dispatch(getThreadListAsync(values));
    }, [dispatch, values]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const buttonSelected = (e) => {
        setButtonActive(e.target.innerHTML);
    };

    const buttonTopSelected = (e) => {
        setButtonTopActive(e.target.innerHTML);
    };

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch]);

    const queryParams = new URLSearchParams(window.location.search);
    const valueNavbar = queryParams.get("valsearch");

    useEffect(() => {
        if (valueNavbar) {
            setValuesSearch({ ...valuesSearch, ["search"]: valueNavbar });
        }
    }, []);

    const handleChangeSearch = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValuesSearch({ ...valuesSearch, [name]: value });
    };

    useEffect(() => {
        dispatch(getSearchAsync(valuesSearch.search));
    }, [dispatch, valuesSearch]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.boxContentForum}>
                <div className={styles.boxContainerLeftSide}>
                    <div className={styles.navTop}>
                        <ul>
                            <li
                                tabIndex="-1"
                                className={styles.navTopBtn}
                                onClick={handleChangePage}>
                                Home
                            </li>
                            <li
                                className={styles.navTopBtn}
                                onClick={() => buttonListFollowingThread()}
                                tabIndex="-1"
                            >
                                Following
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navBottom}>
                        <div className={styles.headingNavBottom}>
                            <h4>Category</h4>
                        </div>
                        <br />
                        <div clasName={styles.category}>
                            {category.map((category) => (
                                <ul>
                                    <li
                                        tabindex="-1"
                                        className={styles.navBottomBtn}
                                        onClick={() => buttonSelectedTesting(category.value)}
                                    >
                                        {category.title}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.boxMiddleContainer}>
                    <div className={styles.wrapperCreateThread}>
                        <h4>Share your hobby</h4>
                        <button onClick={openModal}>Create Thread</button>
                        <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <div className={styles.createThreadContainer}>
                                <Box>
                                    <CreateThread />
                                </Box>
                            </div>
                        </Modal>
                    </div>
                    <div className={styles.wrapperSearchBar}>
                        <div className={styles.searchForum}>
                            <form className={styles.formForum}>
                                <input
                                    value={valuesSearch.search}
                                    name="search"
                                    onChange={handleChangeSearch}
                                    placeholder="What do you want to talk about"
                                    type="text"
                                />
                                <button>
                                    <Search />
                                </button>
                            </form>
                            <div className={styles.dropdownBar}>
                                <form>
                                    <select
                                        id="category"
                                        className={styles.createThreadOption}
                                        name="category"
                                        value={values.shorting}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="newest">Newest</option>
                                        <option value="mostpopular">Most Popular</option>
                                        <option value="oldest">Oldest</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>

                    {!loading ? (
                        <div className={styles.threaForumContainer}>
                            {valuesSearch.search !== "" ? (
                                <ThreadSearch />
                            ) : (
                                <ThreadForum shorting={values} category={category.value}/>
                            )}
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                </div>

                <div className={styles.boxRightContainer}>
                    <Trending />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
