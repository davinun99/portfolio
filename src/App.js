import React from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import Footer from './components/Footer'
import SkillsSection from './components/SkillsSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
const App = () => {
    return (
        <div className="site-wrap">
            <Header/>
            <HomeSection/>
            <SkillsSection/>
            <AboutSection/>
            <PortfolioSection/>
            <Footer/>
        </div>
    )
}

export default App
