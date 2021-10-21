import React from "react";
// import { Modal } from "react-modal";
import { Link } from "react-router-dom";
import styles from "../Navbar/navbar.module.css";
import logo from "../Navbar/hobbytalks.svg";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown, NotificationsNone } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { CreateThread } from "../ModalThreadPage/createThread";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { EditProfilUser } from "../ModalEditUser/editProfilUser";
import Login from "../Login/login";
import { getProfileInfoAsync } from "../../redux/actions";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [drop, setDrop] = useState(false);
    const [threadModal, setThreadModal] = useState(false);
    const [isOpen, setIsOpen] = useState();
    const register = "register";
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
                    <Link to={Token === null ? "/" : "/profile"} style={{ textDecoration: "none" }}>
                        <img src={logo} alt="hobbytalk" />
                    </Link>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What do you want to talk about?" />
                    <SearchIcon className={styles.navbarInputButton} />
                </div>
            </div>
            {Token !== null ? (
                <div className={styles.rightbar}>
                    <div className={styles.buttonCreate}>
                        {/* <Button onClick={openModal}>Create a thread</Button> */}
                        <button onClick={openModal}>Create a thread</button>
                        <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description">
                            <Box>
                                {/* <CreateThread /> */}
                                <EditProfilUser />
                            </Box>
                        </Modal>

                        {/* <button onClick={openModal}>Create a thread</button>
                    <Modal className={styles.Modal} isOpen={isOpen} onRequestClose={closeModal}>
                        <CreateThread openModal={openModal}/>
                    </Modal> */}
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
                        <Avatar className={styles.userAvatar} src={profileInfo.avatar} alt="" />
                        <span className={styles.nameUser}>{profileInfo.name}</span>
                    </div>

                    <div className={styles.profilDropdown}>
                        <ArrowDropDown
                            // className={styles.dropdown}
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        />
                        <Menu
                            className={styles.dropdownMenu}
                            // id="basic-menu"

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
                        {/* <div className={styles.dropdownContent}>
                        <a onClick={"logout"}>Log Out</a>
                    </div> */}
                    </div>
                </div>
            ) : (
                <div className={styles.rightbar}>
                    {/* <div className={styles.loginButton}> */}
                    <Link to={`/account/login`} style={{ textDecoration: "none" }}>
                        <button className={styles.loginBtn} onClick={openModal}>
                            Login
                        </button>
                    </Link>
                    <Link to={`/account/register`} style={{ textDecoration: "none" }}>
                        <button className={styles.signUpBtn}>Signup</button>
                    </Link>
                    {/* </div> */}
                </div>
            )}
        </div>
    );
}
