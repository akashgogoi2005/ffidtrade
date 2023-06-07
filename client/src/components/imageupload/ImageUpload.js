import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"


const ImageUpload = () => {

  const [file, setFile] = useState("");
  const [fname, setFName] = useState("");

  // console.log(file)

  const history = useNavigate();



  const setdata = (e) => {
    const { value } = e.target;

    setFName(value);
    // console.log(e.target.value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0]);

    // console.log(e.target.files[0]);
  }

  // adduser data
  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/newprofile", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("error")
    } else {
      history("/")
    }
    // console.log(res);
  }

  return (
    <>
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>Colorlib Contact Form</h3>
          <h4>Contact us for custom quote</h4>
          <fieldset>
            <input name='fname' placeholder="Your name" type="text" tabindex="1" required autofocus onChange={setdata}></input>
          </fieldset>
          <fieldset>
            <input name='photo' className='uinput' id="photo-upload" type="file" onChange={setimgfile} />
          </fieldset>

          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={addUserData}>Submit</button>
          </fieldset>

          <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
        </form>
      </div>
    </>
  )
}

export default ImageUpload