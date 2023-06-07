import React, { useEffect, useState } from 'react';
import "./Slide.css";
import moment from 'moment';
import axios from 'axios';




const Slide = () => {


    const [data, setData] = useState([]);
    // console.log(data);

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("error")
        } else {
            setData(res.data.getUser)
        }



        //  console.log(res);
    }


    const dltUser = async(id)=>{
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("error")
        } else {
            console.log("User Deleted")
        }
    }



    useEffect(() => {
        getUserData()
    }, [dltUser])





    return (
        <>
            <body className="newbody">
                <div className="containerfree">
                    <div className="products">

                        {
                            data.length > 0 ? data.map((el, i) => {
                                return (
                                    <>
                                        <div className="product">
                                            <div className="image">
                                                <img src={`/uploads/${el.imgpath}`} alt=""></img>
                                            </div>
                                            <div className="namePrice">
                                                <h3>{el.fname}</h3>
                                                <span>{moment(el.date).format("L")}</span>
                                            </div>
                                            <p>Trade Your Free Fire Accounts in FFIDTRADE.com</p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="buy">
                                                <button onClick={()=>dltUser(el._id)}>Buy Now</button>
                                            </div>
                                        </div>

                                    </>
                                )
                            }) : ""
                        }
                    </div>
                </div>
            </body>
        </>
    )
}

export default Slide