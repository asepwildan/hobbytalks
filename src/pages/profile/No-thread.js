import React, { useState } from "react";
import garis from "../../component/assets/logo/garis.svg";
import nothread from "../../component/assets/images/no.png";
import TextEditor from "../../component/createThread/createThread";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./No-thread.scss";

export default function NoThread() {
  const [openCt, setOpenCt] = useState();
  const createThreadFirst = () => {
    setOpenCt(true);
  };
  const closeCreateThread = () => {
    setOpenCt(false);
  };
  return (
    <div className="container">
      <div className="no-thread">
        <div className="text">
          <p>Thread</p>
        </div>
        <div className="garis">
          <img src={garis}></img>
        </div>
        <img className="notfound" src={nothread}></img>
        <p className="text2">You haven't posted any thread yet. </p>
        <p className="text3">
          Any interesting story to share? Create a thread now!
        </p>
        <button className="tombol" onClick={createThreadFirst}>
          Create a thread
        </button>
        <Modal
          keepMounted
          open={openCt}
          onClose={closeCreateThread}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box>
            <div className="containerTextEditor">
              <TextEditor />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
