import React from "react";
import styles from "./style/Forum.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Trending from "../../component/trending/Trending";
import { getProfileInfoAsync, getThreadCategoryAsync } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import getProfileReducer from "../../redux/reducers/getProfile";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// import Thread from "../../component/thread-profile/thread-profile";
import Search from "@material-ui/icons/Search";
// import { Menu, MenuItem } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import CreateThread from "../../component/createThread/createThread";
import ThreadForum from "../../component/threadForum/ThreadForum";
import { getThreadListAsync } from "../../redux/actions";
import axios from "axios";
//  import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
    // const [category, setCategory] = useState
    console.log(profileInfo, "test profil");
    // const categoryLike = profileInfo.categoryLike;
    // const [laman, setlaman] = useState(1);
    // const {totalPage, nextPage, currentPage, loading, error } = useSelector(
    // (state) => state.getThreadListReducer);
    // console.log(categoryLike, "testcategory")
    const handleChange = (e) => {
        const value = e.target.value;
        setValues(value);
    };

    const handleChangePage = (e) => {
        dispatch(getThreadListAsync(values));
    };
    const buttonSelectedTesting = (e) => {
        dispatch(getThreadCategoryAsync(e));
    };

    useEffect(() => {
        dispatch(getThreadListAsync(values));
    }, [dispatch, values]);

    // console.log(laman, "test page")
    console.log(values, "ini newest");

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

    // useEffect(() => {
    //     axios.get('https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/threadscategory/6166ef8c98472010a2d7e988?page=1')
    //     .then((response) => {
    //         console.log(response.data.data, "test category")

    //     })
    //     .catch((error) => {
    //         console.log(error, "test eror")
    //     })

    // },[])

    // const temporary = category.map((category))

    return (
        // <Router >
        <React.Fragment>
            <Navbar />
            <div className={styles.boxContentForum}>
                <div className={styles.boxContainerLeftSide}>
                    <div className={styles.navTop}>
                        <ul>
                            <li
                                tabIndex="-1"
                                className={styles.navTopBtn}
                                onClick={handleChangePage}
                                // onClick={buttonTopSelected}
                            >
                                Home
                            </li>
                            <li className={styles.navTopBtn}>Following</li>
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
                                        onClick={() => buttonSelectedTesting(category.value)}>
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
                            aria-describedby="keep-mounted-modal-description">
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
                                <input placeholder="What do you want to talk about" type="text" />
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
                                        required>
                                        <option value="newest">Newest</option>
                                        <option value="mostpopular">Most Popular</option>
                                        <option value="oldest">Oldest</option>
                                    </select>
                                    {/* <Box sx={{ minWidth: 120 }}> */}
                                    {/* <FormControl>
                                        <InputLabel
                                            className={styles.inputLabel}
                                            variant="standart"
                                            htmlFor="uncontrolled-native"
                                        ></InputLabel>
                                        <NativeSelect
                                            className={styles.selectInput}
                                            defaultValue={"30"}
                                            
                                        >
                                            <option value="text">Newest</option>
                                            <option value="tes">Most Popular</option>
                                            <option value="text">Oldest</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Box> */}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={styles.threaForumContainer}>
                        <ThreadForum shorting={values} />
                    </div>
                </div>
                <div className={styles.boxRightContainer}>
                    <Trending />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
