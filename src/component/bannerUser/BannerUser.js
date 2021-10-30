import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserAsync } from "../../redux/actions";
import getUserReducer from "../../redux/reducers/getUser";
import "./BannerUser.scss"

export default function BannerUser() {
    const dispatch = useDispatch();
    const { userInfo, threadUser, totalPage, nextPage, curentPage, loading, error } = useSelector(
        (state) => state.getUserReducer
    );
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("xyz");

    useEffect(() => {
        dispatch(getUserAsync( id));
    }, [dispatch, id]);
    return (
        <div className="bannerContainer">
            {/* <div className="update-cover">
    <ModalUpdateCover />
</div> */}
            <img className="cover-banner" src={userInfo.banner} alt="cover banner" />
            <div className="bannerContent">
                <div className="profileAva">
                    {/* {imageTes === null ? (
                        <div></div>
                    ) : (
                        <img src={picture} alt="preview" className="avaPreview" />
                    )}

                    {profileInfo.avatar === "" ? (
                        <img className="fp" src={AvaDefault} alt="profile" /> */}
                    {/* ) : ( */}
                        <img src={userInfo.avatar} className="avaProfile" alt="ava" />
                    {/* )} */}
{/* 
                    <div
                        id="loaderContainer"
                        style={loader === true ? { display: "flex" } : { display: "none" }}
                    >
                        <img src={Loader} alt="loader" />
                    </div>

                    {!picture.length ? (
                        <div id="buttonUploadContainer" style={{ textDecoration: "none" }}>
                            <button className="buttonUpload" onClick={onButtonClick}>
                                {" "}
                                <img src={iconUpload} alt="" />
                                <p>Edit</p>
                            </button>
                        </div>
                    ) : (
                        <div></div>
                    )} */}
                </div>

                {/* <form onSubmit={submitImg} className="formImg">
                    <input
                        type="file"
                        name="image"
                        id="customfileinput"
                        onChange={handlechangeAva}
                        ref={inputFile}
                    />
                    <br />
                    <br />
                    {imageTes === null ? (
                        <div></div>
                    ) : (
                        <div className="buttonUploadCancelContainer">
                            <button type="submit" name="upload" className="submitAva">
                                Save
                            </button>
                            <button onClick={cancelUpload} className="submitAva">
                                cancel
                            </button>
                        </div>
                    )}
                </form> */}
                <div className="profileInfo">
                    <div className="username-editBtn">
                        <p className="p1">{userInfo.name}</p>
                        {/* <button className="btn" onClick={openModal}>
                            <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.7691 6.11308C11.675 6.21351 11.6279 6.26372 11.5842 6.30075C11.2111 6.6171 10.6639 6.6171 10.2908 6.30075C10.2471 6.26372 10.2 6.21351 10.1059 6.11309L9.1684 5.11308C9.08455 5.02365 9.04263 4.97893 9.01081 4.93688C8.74071 4.57994 8.74071 4.08698 9.01081 3.73004C9.04263 3.68799 9.08455 3.64327 9.1684 3.55383C9.26255 3.45341 9.30962 3.40319 9.3533 3.36616C9.7264 3.04982 10.2736 3.04982 10.6467 3.36617C10.6904 3.40319 10.7375 3.45341 10.8316 3.55383L11.7691 4.55383C11.8529 4.64327 11.8949 4.68799 11.9267 4.73004C12.1968 5.08698 12.1968 5.57994 11.9267 5.93688C11.8949 5.97893 11.8529 6.02365 11.7691 6.11308ZM4.24431 13.3335C3.5475 13.3335 3.19909 13.3335 2.94815 13.1674C2.83613 13.0933 2.74019 12.9973 2.66606 12.8853C2.5 12.6344 2.5 12.286 2.5 11.5891V11.4225C2.5 11.0668 2.5 10.889 2.55827 10.7259C2.56579 10.7048 2.57401 10.684 2.58292 10.6635C2.65199 10.5047 2.77361 10.3749 3.01685 10.1155L6.48194 6.41939C7.04227 5.8217 7.32244 5.52285 7.66896 5.47259C7.76416 5.45879 7.86084 5.45879 7.95604 5.47259C8.30256 5.52285 8.58273 5.8217 9.14306 6.41939C9.6414 6.95095 9.89057 7.21673 9.93298 7.53451C9.9447 7.62231 9.9447 7.71128 9.93298 7.79908C9.89057 8.11685 9.6414 8.38263 9.14306 8.91419L5.51685 12.7822C5.29991 13.0136 5.19144 13.1293 5.05787 13.2046C4.99711 13.2388 4.93293 13.2666 4.86638 13.2875C4.7201 13.3335 4.5615 13.3335 4.24431 13.3335Z"
                                    fill="#1E8AC6"
                                />
                            </svg>
                            <p>Edit Profile</p>
                        </button> */}
                        {/* <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box>
                                <div className={styles.profileUserContainer}>
                                    <div className={styles.profileTitle}>
                                        <h4>Edit Profile</h4>
                                    </div>
                                    <div className={styles.formEditWrapper}>
                                        <form
                                            className={styles.formEditProfile}
                                            onSubmit={submitBioName}
                                        >
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handlechange}
                                                placeholder={profileInfo.name}
                                            />
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                placeholder={profileInfo.email}
                                                disabled
                                            />
                                            <label>Bio</label>
                                            <input
                                                type="text"
                                                name="bio"
                                                value={values.bio}
                                                onChange={handlechange}
                                                placeholder={bio}
                                            />
                                            {loaderUserEdit ? (
                                                <div className={styles.loaderUserEditContainer}>
                                                    <img
                                                        className={styles.loaderUserEdit}
                                                        src={Loader}
                                                        alt="loader"
                                                    />
                                                </div>
                                            ) : (
                                                <button>Save</button>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </Box>
                        </Modal> */}
                    </div>
                    <div className="bioContainer">
                        <p className="p2">{userInfo.bio}</p>
                    </div>
                </div>
            </div>
            </div>
    );
}