import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileInfoAsync } from "../../redux/actions";

import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown, NotificationsNone } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import searchLogo from "../Navbar/search-solid.svg";
import logo from "../Navbar/hobbytalks.svg";
import styles from "../Navbar/navbar.module.css";
import CreateThread from "../createThread/createThread";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [drop, setDrop] = useState(false);
    const [isOpen, setIsOpen] = useState();
    const dispatch = useDispatch();
    const { profileInfo, loading, error } = useSelector((state) => state.getProfileReducer);

    let Token = localStorage.getItem("tokenLogin");

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const dropDown = () => {
        if (drop === false) {
            setDrop(true);
        } else {
            setDrop(false);
        }
    };

    const signOut = () => {
        localStorage.removeItem("tokenLogin");
        window.location.reload();
    };
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.leftbar}>
                <div className={styles.pictureBar}>
                    <Link to={"/forum"} style={{ textDecoration: "none" }}>
                        <img src={logo} alt="hobbytalk" />
                    </Link>
                </div>
                {window.location.pathname === "/forum" ? (
                    <div></div>
                ) : (
                    <div className={styles.searchBar}>
                        <form className={styles.formSearchBar}>
                            <input type="text" placeholder="What do you want to talk about?" />
                            <button>
                                <SearchIcon className={styles.navbarInputButton} />
                            </button>
                        </form>
                    </div>
                )}
            </div>
            {Token !== null ? (
                <div className={styles.rightbar}>
                    <div className={styles.buttonCreate}>
                        <button onClick={openModal}>Create a thread</button>
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
                    <div className={styles.notifBar}>
                        <NotificationsNone onClick={dropDown} />
                        <div className={styles.dropdown}>
                            <div
                                className={
                                    drop === false ? styles.dropdownNone : styles.dropdownctn
                                }>
                                <p style={{ color: "black" }}></p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                                <p>My Journey into Piano: 1 year and still counting</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.avaBar}>
                        <Link to={"/profile"} style={{ textDecoration: "none" }}>
                            <Avatar className={styles.userAvatar} src={profileInfo.avatar} alt="" />
                        </Link>
                        <span className={styles.nameUser}>{profileInfo.name}</span>
                    </div>

                    <div className={styles.profilDropdown}>
                        <ArrowDropDown
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        />
                        <Menu
                            className={styles.dropdownMenu}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <MenuItem onClick={handleClose} className={styles.dropdownProfile}>
                                    Profile
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>Setting</MenuItem>
                            <MenuItem onClick={signOut}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            ) : (
                <div className={styles.rightbar}>
                    <Link to={`/account/login`} style={{ textDecoration: "none" }}>
                        <button className={styles.loginBtn} onClick={openModal}>
                            Login
                        </button>
                    </Link>
                    <Link to={`/account/register`} style={{ textDecoration: "none" }}>
                        <button className={styles.signUpBtn}>Signup</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
