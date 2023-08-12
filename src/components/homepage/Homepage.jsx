import React, { useEffect } from 'react';
import './Homepage.css';
import About from '../about/About';
import Project from '../projects/Project';
import Casual from '../casual/Casual';
import Contact from '../contact/Contact';
import { useRecoilState } from 'recoil';
import { logoColorState } from '../../atom';

function Homepage() {
    const [logoColor, setLogoColor] = useRecoilState(logoColorState);

    useEffect(() => {
        const handleScroll = () => {
            const homepageOffset = document.getElementById('homepage').offsetTop;
            const aboutOffset = document.getElementById('about').offsetTop;
            const projectOffset = document.getElementById('projects').offsetTop;
            const casualOffset = document.getElementById('casual').offsetTop;
            const contactOffset = document.getElementById('contact').offsetTop;

            const scrollPosition = window.scrollY;

            if (scrollPosition >= homepageOffset && scrollPosition < aboutOffset) {
                setLogoColor('black-logo');
            } else if (scrollPosition >= aboutOffset && scrollPosition < projectOffset) {
                setLogoColor('white-logo');
            } else if (scrollPosition >= projectOffset && scrollPosition < casualOffset) {
                setLogoColor('black-logo');
            } else if (scrollPosition >= casualOffset && scrollPosition < contactOffset) {
                setLogoColor('white-logo');
            } else if (scrollPosition >= contactOffset) {
                setLogoColor('black-logo');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <Casual />
            <Contact />
        </>
    );
}

export default Homepage;