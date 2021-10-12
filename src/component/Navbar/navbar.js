import React from "react";
// import { Modal } from "react-modal";
import styles from "../Navbar/navbar.module.css";
import logo from "../Navbar/hobbytalk.png";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown, NotificationsNone } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
// import { useHistory } from "react-router";
import { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { CreateThread } from "../ModalThreadPage/createThread";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { EditProfilUser } from "../ModalEditUser/editProfilUser";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [drop, setDrop] = useState(false);
    const [threadModal, setThreadModal] = useState(false);
    const [isOpen, setIsOpen] = useState();

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

    // const openThread = () => {
    //     if (threadModal === false) {
    //         setThreadModal(true);
    //     } else {
    //         setThreadModal(false);
    //     }
    // };
    console.log(threadModal, "in modal");

    const dropDown = () => {
        if (drop === false) {
            setDrop(true);
        } else {
            setDrop(false);
        }
    };
    console.log(drop, "ini dropdown");

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.leftbar}>
                <div className={styles.pictureBar}>
                    <a href="#">
                        <img src={logo} alt="hobbytalk" />
                    </a>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What do you want to talk about?" />
                    <SearchIcon className={styles.navbarInputButton} />
                </div>
            </div>
            <div className={styles.rightbar}>
                <div className={styles.buttonCreate}>
                    {/* <Button onClick={openModal}>Create a thread</Button> */}
                    <button onClick={openModal}>Create a thread</button>
                    <Modal
                        keepMounted
                        open={isOpen}
                        onClose={closeModal}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box>
                            {/* <CreateThread /> */}
<EditProfilUser/>                        
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
                        <div className={drop === false ? styles.dropdownNone : styles.dropdownctn}>
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
                    <span className={styles.nameUser}>Wahyu</span>
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
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Setting</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    {/* <div className={styles.dropdownContent}>
                        <a onClick={"logout"}>Log Out</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
