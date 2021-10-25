import { Button } from 'react-bootstrap';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Basic from './Dropzone'
import './ModalUpdateCover.scss';

export default function ModalUpdateCover() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
      <button variant="primary" onClick={handleShow}>
        Update Cover
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Unggah Gambar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Basic />
          </div>
        </Modal.Body>
      </Modal>
    </>
    )
}

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer> */}



// import React from "react";
// import { useDropzone } from "react-dropzone";

// export default function Basic(props) {
//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

//   const files = acceptedFiles.map((file) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({ className: "dropzone" })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }
