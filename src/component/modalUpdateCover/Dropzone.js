import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Dropzone.scss";
import LoaderGif from "../Login/loader.gif";

// 1. Form handling
// 2. API integration

export default function Basic() {
    const [values, setValues] = useState({
        name: "",
    });
    let Token = localStorage.getItem("tokenLogin");
    //state untuk loader halaman
    const [loaderCover, setLoaderCover] = useState(false);

    const [avatar, setAvatar] = useState(null);

    // Handle change
    const handleChange = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const handleAvatar = (e) => {
        setAvatar(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // formData.append("name", values.name);
        formData.append("banner", avatar);
        setLoaderCover(true);

        axios({
            method: "PUT",
            url: "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/banner",
            data: formData,
            headers: {
                Authorization: `Bearer ${Token} `,
            },
        })
            .then((res) => {
                window.location.reload();
                setLoaderCover(false);
            })
            .catch((err) => {
                alert("gambar gagal di upload");
                setLoaderCover(false);
            });
    };

    return (
        <div className="container-dropzone">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="field">
                    <h6>Pilih Gambar: </h6>
                    <input
                        className="btn-upload"
                        type="file"
                        name="avatar"
                        onChange={handleAvatar}
                    />
                </div>
                {loaderCover === true ? (
                    <div className="loader-cover">
                        <img src={LoaderGif} alt="Loader" />
                    </div>
                ) : (
                    <div className="field">
                        <button className="btn-upload-submit" type="submit">
                            Simpan
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}
