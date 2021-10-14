import React from "react";
import styles from "../ModalThreadPage/createThread.module.css";

export function CreateThread() {
    return (
        <div className={styles.threadContainer}>
            <h1>Create Thread</h1>
            <form>
                <label>Title</label>
                <input /><br/>
                <label>Story</label>           
                <input /><br/>
                <button>Create</button>
            </form>
        </div>
    );
}
