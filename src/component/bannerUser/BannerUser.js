import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserAsync } from "../../redux/actions";
import getUserReducer from "../../redux/reducers/getUser";
import "./BannerUser.scss";
import bannerDefault from "../banner-profile/assets/bannerDefault.png";
export default function BannerUser() {
    const dispatch = useDispatch();
    const { userInfo, threadUser, totalPage, nextPage, curentPage, loading, error } = useSelector(
        (state) => state.getUserReducer
    );
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("xyz");

    useEffect(() => {
        dispatch(getUserAsync(id));
    }, [dispatch, id]);
    return (
        <div className="bannerContainer">
            {userInfo.banner === undefined || loading === true ? (
                <img className="cover-banner" src={bannerDefault} alt="banner" />
            ) : (
                <img className="cover-banner" src={userInfo.banner} alt="cover banner" />
            )}

            <div className="bannerContent">
                <div className="profileAva">
                    <img src={userInfo.avatar} className="avaProfile" alt="ava" />
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
    );
}
