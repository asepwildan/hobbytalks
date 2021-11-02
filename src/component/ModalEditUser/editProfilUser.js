// TIDAK TERPAKAI

import React, { useEffect } from "react";
import styles from "../ModalEditUser/editProfilUser.module.css";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileInfoAsync } from "../../redux/actions";
import axios from "axios";

export function EditProfilUser({ modal, ceking }) {
    let Token = localStorage.getItem("tokenLogin");
    const [response, setResponse] = useState("");
    const [testing, setTesting] = useState(false);
    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state) => state.getProfileReducer);

    useEffect(() => {
        dispatch(getProfileInfoAsync());
    }, [dispatch, response]);

    const [values, setValues] = useState({
        name: "",
        bio: "",
    });

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(
                "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/profile",

                {
                    name: values.name,
                    bio: values.bio,
                },

                {
                    headers: {
                        AUTHORIZATION: `Bearer ${Token}`,
                    },
                }
            )
            .then((response) => {
                setResponse(response.data.status);
                setTesting(false);
                modal(false);
            })
            .catch((error) => {
                console.log(error, "ini error");
            });
    };

    return (
        <div className={styles.profileUserContainer} response={response}>
            <div className={styles.profileTitle}>
                <h4>Edit Profile</h4>
            </div>
            <div className={styles.formEditWrapper}>
                <form className={styles.formEditProfile} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        onChange={handlechange}
                        type="text"
                        value={values.name}
                        name="name"
                        placeholder={profileInfo.name}
                    />
                    <label>Email</label>
                    <input
                        onChange={handlechange}
                        type="Email"
                        // value={values.name}
                        name="email"
                        placeholder={profileInfo.name}
                    />

                    <label>Bio</label>
                    <input
                        onChange={handlechange}
                        type="text"
                        value={values.bio}
                        name="bio"
                        placeholder={profileInfo.bio}
                    />
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
}
