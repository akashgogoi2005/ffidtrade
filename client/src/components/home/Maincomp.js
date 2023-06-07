import React from 'react';
import BannerContainer from './Banner';
import './home.css';
import Slide from './Slide';
// import { getProducts } from "../redux/actions/action"
// import { useDispatch, useSelector } from "react-redux"
// import axios from 'axios';
// import './Slide.css';
// import moment from 'moment';


const Maincomp = () => {


  // const { products } = useSelector(state => state.getproductsdata);
  // console.log(products);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <div className='home_section'>
      <div className="banner_part">
        <BannerContainer />
      </div>
      <div>
        <Slide />
      </div>
    </div>
  )
}

export default Maincomp