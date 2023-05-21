import React from 'react'
import davidPhoto from '../static/images/davidv2.png'
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
                        <p>
                            One semester away from being a Software Engineer in the best university of Paraguay. 
                            Currently working as a fullstack developer in Nimbl.ai using modern technologies such as React, Node JS and AWS Lambda, 
                            involved in many internal and external projects.
                        </p> 
                        <p>
                            My life has taught me the importance of teamwork and how projects become easier when you have a great team so 
                            I try to always help others and be a good example when I'm in charge of leading a team!
                        </p>
                    </div>
                    <div className="col-lg-4 order-3 order-lg-3">
						Experienced Software Engineer with 5 years of extensive experience in software development, design, and troubleshooting. 
						Proven ability to work with cross-functional teams and deliver high-quality software applications. 
						Skilled in developing web applications and reliable software solutions. 
						Looking forward to challenges where I can lead technical projects or be part of a high-productivity team and develop innovative software applications.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
