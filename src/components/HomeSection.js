import React from 'react'

const HomeSection = () => {
    return (
        <div className="site-blocks-cover overlay bg-light" id="home-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="text-black">I'm Ben Carson</h1>
                                <p className="lead">I'm Web Developer Based on NY City</p>
                                <p><a href="#portfolio-section" className="btn smoothscroll btn-primary">Portfolio</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/face.png" alt="Image" className="img-face" data-aos="fade"/>
        </div>
    )
}

export default HomeSection
