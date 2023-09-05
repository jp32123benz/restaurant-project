import React from 'react'
import HeroText from '../components/homepage/HeroText'
import About from '../components/homepage/About'
import '../components/homepage/home.css'
import WhyUs from '../components/homepage/WhyUs'
import StatsCounter from '../components/homepage/StatsCounter'
import Menu from '../components/homepage/Menu'
import Testimonials from '../components/homepage/Testimonials'
import Chefs from '../components/homepage/Chefs'
import BookTable from '../components/homepage/BookTable'
import Events from '../components/homepage/Events'
import Contact from '../components/homepage/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <HeroText />
            <About />
            <WhyUs />
            <StatsCounter />
            <Menu />
            <Testimonials />
            <Events />
            <Chefs />
            <BookTable />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage