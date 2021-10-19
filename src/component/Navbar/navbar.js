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

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [drop, setDrop] = useState(false);
    const [threadModal, setThreadModal] = useState(false);
    const [isOpen, setIsOpen] = useState();
    const register = "register";
    // let Token = localStorage.getItem("tokenLogin");

    const [nama, setNama] = useState("");
    let Token = localStorage.getItem("tokenLogin");
    useEffect(() => {
        axios
            .get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me", {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            })
            .then((Res) => {
                console.log(Res.data.data.name);
                setNama(Res.data.data.name);
                //   setUserName(Res.data.data.name)
            })
            .catch((error) => console.log(error));
    }, [Token]);

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
                        <Avatar className={styles.userAvatar} alt="" />
                        <span className={styles.nameUser}>{nama}</span>
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
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
                    <Link to={`/login`} style={{ textDecoration: "none" }}>
                        <button className={styles.loginBtn} onClick={openModal}>
                            Login
                        </button>
                    </Link>
                    <Link to={`/${register}`} style={{ textDecoration: "none" }}>
                        <button className={styles.signUpBtn}>Signup</button>
                    </Link>
                    {/* </div> */}
                </div>
            )}
        </div>
    );
}
