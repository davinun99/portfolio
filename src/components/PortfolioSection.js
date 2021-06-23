import React from 'react'
import post6 from "../static/images/post_6.jpg"
import post4 from "../static/images/post_4.jpg"
import post3 from "../static/images/post_3.jpg"
const PortfolioSection = () => {
    return (
        <section class="site-section block__62272 mb-5" id="portfolio-section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 position-relative">
                        <h2 class="section-title text-center mb-5">My Portfolio</h2>
                    </div>
                </div>
                <div id="posts" class="row no-gutter">
                    <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/post_3.jpg" class="item-wrap fancybox">
                            <span class="icon-search2"></span>
                            <img class="img-fluid" alt="Post3" src={post3}/>
                        </a>
                    </div>
                    <div class="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/post_4.jpg" class="item-wrap fancybox">
                        <span class="icon-search2"></span>
                        <img class="img-fluid" alt="Post4" src={post4}/>
                        </a>
                    </div>

                    <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/post_6.jpg" class="item-wrap fancybox">
                            <span class="icon-search2"></span>
                            <img class="img-fluid" alt="Post5" src={post6}/>
                        </a>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </section>
    )
}

export default PortfolioSection
