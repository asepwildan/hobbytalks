import React from 'react';
import axios from "axios";
import { useState } from "react";
import "./Dropzone.scss";

// 1. Form handling
// 2. API integration

export default function Basic() {
  const [values, setValues] = useState({
    name: ""
  });

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

    formData.append("name", values.name);
    formData.append("avatar", avatar);

    axios({
      method: "PUT",
      url:
        "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/profile",
      data: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1cm9tYXNoaXJvMDEyM0BnbWFpbC5jb20iLCJpZCI6IjYxNjZlMzRkMDQ5MTEzMTBhYWZlZGFjOSIsImlhdCI6MTYzNTE2NzkwMSwiZXhwIjoxNjM1MjU0MzAxfQ.vHqCaiY2X7tHjmXPED15A_ULfmSqWYPFpP58PucqgdY"
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(JSON.stringify(err)));
  };

  console.log(avatar);

  return (
    <div className="container-dropzone">

      <form encType="multipart/form-data" onSubmit={handleSubmit}>

        <div className="field">
          <h6>Pilih Gambar: </h6>
          <input className='btn-upload' type="file" name="avatar" onChange={handleAvatar} />
        </div>

        <div className="field">
          <input
            className="btn-upload-submit"
            type="submit"
            value="Simpan"
          />
        </div>
      </form>
    </div>
  );
}



// import {useDropzone} from 'react-dropzone';

// export default function Basic(props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Tarik dan letakkan disini, atau <b>klik</b> untuk memilih</p>
//       </div>
//       <aside>
//         <h6>Document:</h6>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }

{/* <Basic /> */}