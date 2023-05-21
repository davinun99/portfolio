import React from 'react'
import DavidPhoto from '../static/images/davidBg.jpg';
const HomeSection = () => {
    return (
        <div className="site-blocks-cover overlay bg-light" id="home-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="text-black">I'm David Núñez</h1>
                                <p className="lead">A fullStack Web Developer based on Asunción - Paraguay</p>
                                <p><a href="#portfolio-section" className="btn smoothscroll btn-primary">Portfolio</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<img src={DavidPhoto} alt="This is David" className="img-face" data-aos="fade"/>*/}
            <img src={DavidPhoto} alt="This is David" className="img-face"/>
        </div>
    )
}

export default HomeSection
