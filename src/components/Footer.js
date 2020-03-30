import React from 'react'

const Footer = () => {
    return (
        <footer className="site-section bg-light footer">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-3">
                        <h3 className="footer-title">Me Address</h3>
                        <p><span className="d-inline-block d-md-block">203 Fake St. Mountain View,</span> San Francisco, California, USA</p>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <div className="row">
                            <div className="col-lg-4">
                                <h3 className="footer-title">Services</h3>
                                <ul className="list-unstyled">
                                    <li><a href="/">Web App</a></li>
                                    <li><a href="/">Graphic</a></li>
                                    <li><a href="/">Branding</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3 className="footer-title">Resources</h3>
                                <ul className="list-unstyled">
                                    <li><a href="/">Web App</a></li>
                                    <li><a href="/">Graphic</a></li>
                                    <li><a href="/">Branding</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3 className="footer-title">Links</h3>
                                <ul className="list-unstyled">
                                    <li><a href="/">Web App</a></li>
                                    <li><a href="/">Graphic</a></li>
                                    <li><a href="/">Branding</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="footer-title">Follow Me</h3>
                        <a href="https://twitter.com/nundavid99" className="social-circle mr-1" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a>
                        <a href="https://www.facebook.com/davidramonn" className="social-circle mr-1" target="_blank" rel="noopener noreferrer"><span className="icon-facebook"></span></a>
                        <a href="https://www.instagram.com/nundavid99" className="social-circle mr-1" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></a>
                        <a href="https://www.linkedin.com/in/david-nu%C3%B1ez-652a99187/" className="social-circle mr-1" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>
                            Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '} 
                            <i className="icon-heart text-danger" aria-hidden="true"></i> by 
                            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">{' '}Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
