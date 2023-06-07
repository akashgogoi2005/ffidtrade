import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import SignUp from './components/signup_sign/SignUp';
import { Routes, Route } from "react-router-dom";
import Signin from './components/signup_sign/Signin';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
// import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import VerticalLinearStepper from './components/guide/Guide';
import CardProfile from './components/upload/Upload';
import FixedBottomNavigation from './components/bottomnav/Bottom';
import Multiple from './components/multiplefile/Multiple';
// import PrimarySearchAppBar from './components/header/NavbarMUI';
import ImageUpload from './components/imageupload/ImageUpload';









function App() {

  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 3000)
  }, [])

  return (
    <>
      {
        data ? (
          <>
            
            {/* <PrimarySearchAppBar /> */}
            <Navbar />
            <Newnav />
            <Routes>
              <Route path="/" element={<Maincomp />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/getproductsone/:id" element={<Cart />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/buynow" element={<Buynow />} />
              <Route path="/guide" element={<VerticalLinearStepper />} />
              <Route path="/edit" element={<CardProfile />} />
              <Route path="/click" element={<FixedBottomNavigation />} />
              <Route path="/multiple" element={<Multiple />} />
              <Route path="/ploat" element={<ImageUpload />} />
              
            </Routes>
            <Footer />
          </>
        ) : (
          <div className='wrap'>
            <div class="spinner"></div>
            <h2>
              FFIDTRADE
            </h2>
          </div>
        )
      }

    </>
  );
}

export default App;
