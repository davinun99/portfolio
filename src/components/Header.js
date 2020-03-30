import React from 'react'

const Header = () => {
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="#home-section" className="nav-link">Home</a></li>
                                    <li><a href="#services-section" className="nav-link">Skills</a></li>
                                    <li><a href="#about-section" className="nav-link">About</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className=" text-center mx-5">
                            <h1 className="m-0 site-logo"><a href="index.html">Me.</a></h1>
                        </div>
                        <div className="text-left">
                            <nav className="site-navigation position-relative" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                                    {/*<li><a href="#clients-section" className="nav-link">Client</a></li>*/}
                                    <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                            {/*<div className="d-inline-block d-lg-none" style="position: relative; top: 3px;">*/}
                            <div className="d-inline-block d-lg-none" style={{position: "relative", top: "3px"}}>
                                <a href="/" className="site-menu-toggle js-menu-toggle float-right">
                                    <span className="icon-menu h3"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
