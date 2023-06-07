import React from 'react'
import "./footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { blue, pink, yellow } from '@mui/material/colors';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    {/* <h3>FFIDTRADE<span>.com</span></h3> */}
                    <img style={{width: 300}} src="./LOGO.png" alt=""/>
                    <p className="footer-links">
                        <NavLink to="/homeo" className="link-1">Home</NavLink>
                        <NavLink to="/float">Blog</NavLink>
                        <NavLink to="/nav">Pricing</NavLink>
                        <NavLink to="/ploat">About</NavLink>
                        <NavLink to="/butter">FAQ</NavLink>
                        <NavLink to="/multiple">Contact</NavLink>
                    </p>
                    <p className="footer-company-name">FFIDTRADE.com © {year}</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Bokakhat, 785612</span> Assam, India</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p className='color'>1800 270 470</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@ffidtrade.com">support@ffidtrade.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="footer-icons">
                        {/* <a href="guide"><TwitterIcon  sx={{ color: blue[500] }}/></a> */}
                        <NavLink to="/guide"><TwitterIcon sx={{ color: blue[500] }} /></NavLink>
                        <NavLink to="/profile"><FacebookIcon sx={{ color: blue[500] }} /></NavLink>
                        <NavLink to="/edit"><YouTubeIcon sx={{ color: pink[500] }} /></NavLink>
                        <NavLink to="/click"><InstagramIcon sx={{ color: yellow[500] }} /></NavLink>
                    </div>
                    <img className='payment' src="https://ecards.hypupad.com/wp-content/uploads/2021/01/payment-logo-icons-1024x272.png" alt="" />
                </div>
            </footer>
        </>
    );
};




export default Footer











/* <iframe className='spline' src='https://my.spline.design/macbookprocopy-c379cd1e8c681772105ad9624ad8898c/' frameborder='0' width='100%' height='100%'></iframe> */
/* <footer>

    
        <div className="footer_container">
            <div className="footer_details_one">
                <h3>Get to Know US</h3>
                <p>Jobs</p>
                <p>About Us</p>
                <p>Newsroom</p>
                <p>FFIDTRADE Cares</p>
            </div>
            <div className="footer_details_one">
                <h3>Connect with Us</h3>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            <div className="footer_details_one forres">
                <h3>Buy at FFIDTRADE.com</h3>
                <p>How to Buy</p>
                <p>Commssion Fee</p>
                <p>Airdrops</p>
            </div>
            <div className="footer_details_one forres">
                <h3>Sell at FFIDTRADE.com</h3>
                <p>How to Sell</p>
                <p>Rules and Guidlines</p>
                <p>Payments issues</p>
            </div>
            <div className="footer_details_one forres">
                <h3>Support and Resources</h3>
                <p>Help Center</p>
                <p>Customer Service Point</p>
                <p>Help</p>
            </div>
        </div>
        <div className="last_details">
            <img src="./FFBUILD.png" alt="" />
            <p>Conditions of Trade or Buy & Sell of Accounts &nbsp; &nbsp;&nbsp;  Privacy Policy  &nbsp; &nbsp;&nbsp; No-Ads  &nbsp; &nbsp;&nbsp;  © {year}, FFIDTRADE.com, or its affiliates</p>           
        </div>
    </footer> */