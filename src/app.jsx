import React from 'react'
import Header from './componets/Header/Header'
import Nav from './componets/nav/Nav'
import About from './componets/about/About'
import Experience from './componets/experience/Experience'
import Service from './componets/service/Service'
import Portfolio from './componets/portfolio/Portfolio'
import Contact from './componets/contact/Contact'
import Footer from './componets/footer/Footer'



const app = () => {
    return (
    <div>
       <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
    
    </div>
    )
}

export default app
