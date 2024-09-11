import { ArrowRight } from 'phosphor-react'
import React from 'react'
import './Footer.css'
import webLogo from '../../Assets/Image/Files/webLogo.png'
import bankCard from '../../Assets/Image/Footer/bank-card.avif'
import { EnvelopeSimple, FacebookLogo, InstagramLogo, MapPinLine, PhoneCall, PinterestLogo, XLogo } from '@phosphor-icons/react'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="footer-container-for-news">
                    {/* updated news*/}
                    <div className="update-news">

                        <div className="update-news-text inter">
                            <h1 className="update-news-heading">
                                Join Us & Get Updates
                            </h1>
                            <p className="update-news-discription">
                                Sign up for exclusive offers, letest news and updates
                            </p>
                        </div>

                        <div className="update-news-form">
                            <form action="">
                                <label for="exampleInput">
                                    <input type="email" name="" id="" placeholder='Enter email address' />
                                </label>
                                <button type="submit" className='btn btn-primary'>Subscribe <ArrowRight className='ArrowRight' size={24} /></button>
                            </form>
                        </div>

                    </div>
                </div>
                <hr className='hr' />

                <div className="footer-container-content">
                    <div className="footer-row row">
                        <div className="col-3 footer-col-1">
                            <div className="web-logo">
                                <img src={webLogo} alt="" srcset="" />
                            </div>
                            <div className="footer-1-icon">
                                <FacebookLogo className='footer-media-icon' size={24} />
                                <XLogo className='footer-media-icon' size={24} />
                                <InstagramLogo className='footer-media-icon' size={24} />
                                <PinterestLogo className='footer-media-icon' size={24} />
                            </div>
                            <div className="copy-right">
                                <p className="copy-ringt-text inter">
                                    &copy; 2024 Ecommerce. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-3 footer-col-2">
                            <h4 className="footer-col-heading  inter">
                                Get to Know Us
                            </h4>

                            <div className="know-us">
                                <h6 className="footer-col-content inter">
                                    About Us
                                </h6>
                                <h6 className="footer-col-content inter">
                                    News & Blog
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Careers
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Contact Us
                                </h6>
                                <h6 className="footer-col-content inter">
                                    How To Shop
                                </h6>
                            </div>

                        </div>
                        <div className="col-3 footer-col-3">
                            <h4 className="footer-col-heading inter">
                                Orders & Returns
                            </h4>

                            <div className="know-us">
                                <h6 className="footer-col-content inter">
                                    Shipping & Delivery
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Return & Exchange
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Track Order
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Selling Tips
                                </h6>
                                <h6 className="footer-col-content inter">
                                    Payment
                                </h6>
                            </div>
                        </div>
                        <div className="col-3 footer-col-4">
                            <h4 className="footer-col-heading inter">
                                Contact
                            </h4>

                            <div className="know-us">
                                <h6 className="footer-col-content">
                                    <PhoneCall className='Contact-icon' size={24} /> (720) 555-0122
                                </h6>
                                <h6 className="footer-col-content">
                                    <EnvelopeSimple className='Contact-icon' size={24} /> ecommerce@gmail.com
                                </h6>
                                <h6 className="footer-col-content">
                                    <MapPinLine className='Contact-icon' size={24} /> 4170 Wasgington Ave.

                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="hr" />


                <div className="footer-at-last">
                    <div className="footer-bank-card">
                        <img src={bankCard} alt="" srcset="" />
                    </div>
                    <div className="last-line">
                        <p className="last-line-text inter">
                            Privacy Policy
                        </p>
                        <p className="last-line-text inter">
                            Terms of Use
                        </p>
                        <p className="last-line-text inter">
                            Shipping Policy
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
