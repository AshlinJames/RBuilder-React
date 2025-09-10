import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import Button from '@mui/material/Button';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="container-fluid p-4 text-white" style={{backgroundColor:"#4a148c"}}>
                <div className="row">
                    <div className="col-4" style={{fontFamily:"Libertinus Sans"}}>
                        <h1>rBuilder</h1>
                        <p>Our resume builder is relied upon by job seekers, professionals, and career coaches across the globe. Whether you’re a fresh graduate or a seasoned executive, thousands of users trust our platform to showcase their skills with confidence and precision.</p>
                    </div>
                    <div className="col-4">
                        <h1>Quick Links</h1>
                        <ul>
                            <li>Home</li>
                            <li>Resume Creator</li>
                            <li>History</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h1>Contact Us</h1>
                        <form action="">
                            <div className="d-flex justify-content-between align-items-center">
                                <input type="text" className='form-control me-3' placeholder='Enter Your Email' />
                                <Button variant="outlined" color="white" className='py-1 px-4 text-light'>
                                    Send
                                </Button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-between align-items-center mt-5">
                            <IoLogoFacebook className='fs-2'/>
                            <AiFillInstagram className='fs-2'/>
                            <FaLinkedin className='fs-2'/>
                            <FaSquareXTwitter className='fs-2'/>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-3'>Designed & Built by ASHLIN JAMES ❤️ using React</p>
            </div>
        </>


    )
}

export default Footer
