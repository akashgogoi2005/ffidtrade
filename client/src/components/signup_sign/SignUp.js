import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./signup.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {


  const [udata, setUdata] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  });


  const adddata = (e)=>{
    const {name, value} = e.target;

    setUdata(()=>{
      return{
        ...udata,
        [name]: value
      }
    })
  };


  const senddata = async(e)=>{
    e.preventDefault();
    const {fname,email,mobile,password,cpassword} = udata;

    if(fname === ""){
      toast.warn("please provide full name",{
        position: "top-center",
      })
    }else if(email === ""){
      toast.warn("please provide email ID",{
        position: "top-center",
      })
    }else if(mobile === ""){
      toast.warn("please provide mobile number",{
        position: "top-center",
      })
    }


    const res = await fetch("register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });

    const data = await res.json();
    // console.log(data);


    if(res.status === 422 || !data){
      // alert("no data")
      toast.dark("invalid details",{
        position: "top-center",
      })
    }else{
      // alert("data successfully added")
      toast.success("data successfully added",{
        position: "top-center",
      })
      setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
    }
  }

  return (
    <section className='SignSec'>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./LOGO.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form method='POST'>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input type="text"
              onChange={adddata}
              value={udata.fname}
               name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text"
              onChange={adddata}
              value={udata.email}
               name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input type="text"
              inputMode='numeric'
              onChange={adddata}
              value={udata.mobile}
               name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password"
              onChange={adddata}
              value={udata.password}
               name="password" placeholder='At least 6 character' id="password" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Confirm your Password</label>
              <input type="password"
              onChange={adddata}
              value={udata.cpassword}
               name="cpassword" id="cpassword" />
            </div>
            <button className='signin_btn' onClick={senddata}>Continue</button>
            <p>Already have an account?</p>
            <NavLink to="/login">Signin</NavLink>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  )
}

export default SignUp