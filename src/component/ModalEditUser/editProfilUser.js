import React from "react";
import styles from "../ModalEditUser/editProfilUser.module.css";
import { useState } from "react";

export function EditProfilUser() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        bio: "",
    });

    const handlechange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        setValues({ ...value, [name]: name });
    };

    const handleSubmit = () => {};

    return (
        <div className={styles.profileUserContainer}>
           <div className={styles.profileTitle}><h4>Edit Profile</h4></div>
            <div className={styles.formEditWrapper}>
                <form className={styles.formEditProfile} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input onChange={handlechange} type="name" value={values.name} name="name" />
                    <label>Email</label>
                    <input onChange={handlechange} type="email" value={values.email} name="email" />
                    <label>Bio</label>
                    <input onChange={handlechange} type="bio" value={values.bio} name="bio" />
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
}
