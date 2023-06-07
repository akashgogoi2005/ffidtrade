import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import Styles from './banner.module.css'



const Banner = ({ images }) => {
  return (
    <Carousel
      className={Styles.carasousel}
      autoPlay={false}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        }
      }}>
      {
        images.map((images, i) => {
          return (
            <div key={i}>
              <img src={images.url} alt="" className={Styles.banner_img} />
            </div>
          )
        })
      }
    </Carousel>
  )
}

// export default Banner


const BannerContainer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from database
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return <Banner images={images} />;
};

export default BannerContainer;