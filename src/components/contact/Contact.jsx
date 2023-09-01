import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="numbers black">03 <span>Contact me</span></div>
            <div className="contact-content">
                <h2>Connectwithlastdev@gmail.com</h2>
                <div>
                    <ul>
                        <li><a href="https://twitter.com/imlastdeveloper" target='_blank'><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://github.com/last-developer" target='_blank'><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;