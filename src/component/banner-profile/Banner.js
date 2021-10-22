import React, { useEffect, useState, useRef } from "react";
import "./Banner.scss";
import fotoprofil from "../assets/images/image 7.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { EditProfilUser } from "../ModalEditUser/editProfilUser";
import { useDispatch, useSelector } from "react-redux";
import { getProfileInfoAsync } from "../../redux/actions";
import AvaDefault from "./ava.png";
import { Avatar } from "@material-ui/core";
import axios from "axios";
import iconUpload from "./assets/upload.svg";

function Banner() {
    let Token = localStorage.getItem("tokenLogin");
    const inputFile = useRef(null);
    const dispatch = useDispatch();
    const { profileInfo, loading, error } = useSelector((state) => state.getProfileReducer);
    const [isOpen, SetIsOpen] = useState();
    const [response, setResponse] = useState({});
    const [imageTes, setImageTes] = useState(null);

    const [picture, setPicture] = useState([]);

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch, response]);

    const openModal = () => {
        SetIsOpen(true);
    };

    const closeModal = () => {
        SetIsOpen(false);
    };

    const handlechangeAva = (e) => {
        const value = e.target.files[0];
        const name = e.target.name;
        setImageTes(e.target.files[0]);
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    const submitImg = (e) => {
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("avatar", imageTes);

        console.log(formdata, "formdata");
        axios
            .put(
                "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/profile",

                formdata,

                {
                    headers: {
                        AUTHORIZATION: `Bearer ${Token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response.data, "image banner");
                setResponse(response.data);
                setImageTes(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const onButtonClick = () => {
        inputFile.current.click();
    };
    console.log(profileInfo.avatar, "ava");

    return (
        <div className="bannerContainer">
            <div className="bannerContent">
                <div className="profileAva">
                    {imageTes === null ? (
                        <div></div>
                    ) : (
                        <img src={picture} alt="preview" className="avaPreview" />
                    )}

                    {profileInfo.avatar === undefined ? (
                        <img className="fp" src={AvaDefault} alt="profile" />
                    ) : (
                        // <img className="avaProfile" src={profileInfo.avatar} alt="profile" />
                        <img src={profileInfo.avatar} className="avaProfile" alt="ava" />
                    )}
                    <div id="buttonUploadContainer">
                        <button className="buttonUpload" onClick={onButtonClick}>
                            {" "}
                            <img src={iconUpload} alt="" />
                            <p>Edit</p>
                        </button>
                    </div>
                </div>

                <form onSubmit={submitImg} className="formImg">
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
                        <button type="submit" name="upload" className="submitAva">
                            Save
                        </button>
                    )}
                </form>
                <div className="profileInfo">
                    <div className="username-editBtn">
                        <p className="p1">{profileInfo.name}</p>
                        <button className="btn" onClick={openModal}>
                            <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.7691 6.11308C11.675 6.21351 11.6279 6.26372 11.5842 6.30075C11.2111 6.6171 10.6639 6.6171 10.2908 6.30075C10.2471 6.26372 10.2 6.21351 10.1059 6.11309L9.1684 5.11308C9.08455 5.02365 9.04263 4.97893 9.01081 4.93688C8.74071 4.57994 8.74071 4.08698 9.01081 3.73004C9.04263 3.68799 9.08455 3.64327 9.1684 3.55383C9.26255 3.45341 9.30962 3.40319 9.3533 3.36616C9.7264 3.04982 10.2736 3.04982 10.6467 3.36617C10.6904 3.40319 10.7375 3.45341 10.8316 3.55383L11.7691 4.55383C11.8529 4.64327 11.8949 4.68799 11.9267 4.73004C12.1968 5.08698 12.1968 5.57994 11.9267 5.93688C11.8949 5.97893 11.8529 6.02365 11.7691 6.11308ZM4.24431 13.3335C3.5475 13.3335 3.19909 13.3335 2.94815 13.1674C2.83613 13.0933 2.74019 12.9973 2.66606 12.8853C2.5 12.6344 2.5 12.286 2.5 11.5891V11.4225C2.5 11.0668 2.5 10.889 2.55827 10.7259C2.56579 10.7048 2.57401 10.684 2.58292 10.6635C2.65199 10.5047 2.77361 10.3749 3.01685 10.1155L6.48194 6.41939C7.04227 5.8217 7.32244 5.52285 7.66896 5.47259C7.76416 5.45879 7.86084 5.45879 7.95604 5.47259C8.30256 5.52285 8.58273 5.8217 9.14306 6.41939C9.6414 6.95095 9.89057 7.21673 9.93298 7.53451C9.9447 7.62231 9.9447 7.71128 9.93298 7.79908C9.89057 8.11685 9.6414 8.38263 9.14306 8.91419L5.51685 12.7822C5.29991 13.0136 5.19144 13.1293 5.05787 13.2046C4.99711 13.2388 4.93293 13.2666 4.86638 13.2875C4.7201 13.3335 4.5615 13.3335 4.24431 13.3335Z"
                                    fill="#1E8AC6"
                                />
                            </svg>
                            <p>Edit Profile</p>
                        </button>
                        <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description">
                            <Box>
                                <EditProfilUser />
                            </Box>
                        </Modal>
                    </div>
                    <div className="bioContainer">
                        <p className="p2">{profileInfo.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
