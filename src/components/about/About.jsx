import React, { useEffect } from 'react';
import './About.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="numbers">
                01 <span>About me</span>
            </div>
            <div className="about-content">
                <p className="small-about">Mohit ( last dev - studio name )</p>
                <div className="large-about-1">
                    Hey there! Welcome to my world of full stack web development powered by MERN Stack!
                    <br />
                    <div>
                        I'm not just your ordinary developer. I'm a digital architect who crafts captivating web experiences that leave a lasting impression. With over two years of expertise in building stunning and interactive webapps, I thrive on transforming ideas into pixel-perfect reality.
                    </div>
                </div>
                <div className="large-about-2">
                    <h3>What Sets Me Apart</h3>
                    In an ever-evolving digital landscape, staying ahead of the game is key. I am constantly honing my skills and experimenting with the latest tools and technologies in MERN development. From cutting-edge UI/UX designs to seamless integration of APIs, I'm always pushing the boundaries of what's possible.
                </div>
                <div className="large-about-3">
                    <h3>My Superpowers</h3>
                    <ul>
                        <li><span>Creativity :</span> I live and breathe creativity. I don't just build websites, I design immersive online experiences that engage and delight users.</li>
                        <li><span>Attention to Detail :</span> Every pixel matters to me. I obsess over the fine details to ensure your website is nothing short of perfection.</li>
                        <li><span>Collaboration :</span> I love working in a dynamic and collaborative environment. I thrive on exchanging ideas, brainstorming, and bringing concepts to life as part of a team.</li>
                    </ul>
                </div>
                <div className="large-about-4">
                    <h3>Let's Build Something Extraordinary</h3>
                    Enough about me - let's talk about you and your project! Whether you have a vision in mind or need help shaping one, let's join forces and create something extraordinary together.
                    <br /><br />
                    <span><a href="#contact">Get in touch</a></span> and let's embark on this exciting journey together.
                    <br />
                    Remember, great things happen when creativity and technology collide!
                    Thank you for visiting. I can't wait to connect with you and bring your ideas to life.
                    Let's build the future, one MERN stack innovation at a time!
                </div>
            </div>
        </section>
    );
}

export default About;
