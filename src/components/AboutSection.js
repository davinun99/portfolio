import React from 'react'
import davidPhoto from '../static/images/david.png'
const AboutSection = () => {
    return (
        <div className="site-section" id="about-section">
            <div className="container">
                <div className="row ">
                    <div className="col-12 mb-4 position-relative">
                        <h2 className="section-title">About Me</h2>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                        <div className="bg-light">
                            <img src={davidPhoto} alt="David Nuñez" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-4 order-2 order-lg-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                    </div>
                    <div className="col-lg-4 order-3 order-lg-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam qui maiores, ipsa quibusdam distinctio! Expedita ipsum ex porro obcaecati.</p>
                        <p><a href="#contact-section" className="btn smoothscroll btn-primary">Contact Me</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
