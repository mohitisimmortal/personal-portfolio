import React from 'react';
import './Homepage.css';
import About from '../about/About';
import Project from '../projects/Project';
import Casual from '../casual/Casual';
import Contact from '../contact/Contact';
import Testimonials from '../testimonials/Testimonials';

function Homepage() {

    return (
        <>
            <section className="homepage" id="homepage">
                <div className="homepage-content">
                    <p id='p1'>Full</p>
                    <p id='p2'>Stack</p>
                    <p id='p3'>Developer</p>
                    <p id='p4'>from blueprint to deployment</p>
                    <a href="#projects" className="button josefin-font" id='view-projects'>View Projects</a>
                </div>
            </section>
            <About />
            <Project />
            <Contact />
            <Casual />
            <Testimonials />
        </>
    );
}

export default Homepage;