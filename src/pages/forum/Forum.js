import React from "react";
import styles from "./style/Forum.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Trending from "../../component/trending/Trending";
import { getProfileInfoAsync } from "../../redux/actions";
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
import { Pagination } from "@mui/material";
// import ForumSearch from "../../component/forum-search/Forum-search";

export default function Forum() {
  const dispatch = useDispatch();
  const { profileInfo } = useSelector((state) => state.getProfileReducer);
  const [isOpen, setIsOpen] = useState();
  const [buttonActive, setButtonActive] = useState();
  const [buttonTopActive, setButtonTopActive] = useState();
  const [values, setValues] = useState("newest");
  // const [laman, setlaman] = useState(1);
  // const {totalPage, nextPage, currentPage, loading, error } = useSelector(
  // (state) => state.getThreadListReducer);

  const handleChange = (e) => {
    const value = e.target.value;
    setValues(value);
  };

  // const handleChangePage = (e) => {
  //     const nilai = e.target.value;
  //     setlaman(nilai)
  // }

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

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.boxContentForum}>
        <div className={styles.boxContainerLeftSide}>
          <div className={styles.navTop}>
            <ul>
              <li
                className={
                  buttonTopActive === "Home"
                    ? styles.navTopBtnActive
                    : styles.navTopBtn
                }
                onClick={buttonTopSelected}
              >
                Home
              </li>
              <li
                className={
                  buttonTopActive === "Following"
                    ? styles.navTopBtnActive
                    : styles.navTopBtn
                }
                onClick={buttonTopSelected}
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
              <ul>
                <li
                  className={
                    buttonActive === "Electronics"
                      ? styles.navBottomBtnActive
                      : styles.navBottomBtn
                  }
                  onClick={buttonSelected}
                >
                  Electronics
                </li>
                <li
                  className={
                    buttonActive === "Sport"
                      ? styles.navBottomBtnActive
                      : styles.navBottomBtn
                  }
                  onClick={buttonSelected}
                >
                  Sport
                </li>
                <li
                  className={
                    buttonActive === "DIY"
                      ? styles.navBottomBtnActive
                      : styles.navBottomBtn
                  }
                  onClick={buttonSelected}
                >
                  DIY
                </li>
                <li
                  className={
                    buttonActive === "Travel"
                      ? styles.navBottomBtnActive
                      : styles.navBottomBtn
                  }
                  onClick={buttonSelected}
                >
                  Travel
                </li>
                <li
                  className={
                    buttonActive === "Music"
                      ? styles.navBottomBtnActive
                      : styles.navBottomBtn
                  }
                  onClick={buttonSelected}
                >
                  Music
                </li>
              </ul>
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
          <div>{/* <ForumSearch /> */}</div>
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
