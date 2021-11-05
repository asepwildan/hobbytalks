import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserAsync } from "../../redux/actions";
import getUserReducer from "../../redux/reducers/getUser";
import "./BannerUser.scss";
import bannerDefault from "../banner-profile/assets/bannerDefault.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function BannerUser() {
    const dispatch = useDispatch();
    const { userInfo, threadUser, totalPage, nextPage, curentPage, loading, error } = useSelector(
        (state) => state.getUserReducer
    );
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("xyz");
    const [prevAva, setPrevAva] = useState(false);
    useEffect(() => {
        dispatch(getUserAsync(id));
    }, [dispatch, id]);

    const openModal = () => {
        setPrevAva(true);
    };

    const closeModal = () => {
        setPrevAva(false);
    };

    return (
        <React.Fragment>
            <div className="bannerContainer">
                {userInfo.banner === undefined || loading === true ? (
                    <img className="cover-banner" src={bannerDefault} alt="banner" />
                ) : (
                    <img className="cover-banner" src={userInfo.banner} alt="cover banner" />
                )}

                <div className="bannerContent">
                    <div className="profileAva">
                        <img
                            src={userInfo.avatar}
                            className="avaProfile"
                            alt="ava"
                            onClick={openModal}
                        />
                    </div>

                    <div className="profileInfo">
                        <div className="username-editBtn">
                            <p className="p1">{userInfo.name}</p>
                        </div>
                        <div className="bioContainer">
                            <p className="p2">{userInfo.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                keepMounted
                open={prevAva}
                onClose={closeModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description">
                <Box>
                    <div className="ava-preview">
                        {" "}
                        <img src={userInfo.avatar} className="avaProfilepreview" alt="ava" />
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
