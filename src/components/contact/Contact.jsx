import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="numbers black">03 <span>Contact me</span></div>
            <div className="contact-content">
                <h2>mohitisimmortal@gmail.com</h2>
                <div>
                    <ul>
                        <li><a href="https://x.com/mohitisimmortal" target='_blank'><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://github.com/mohitisimmortal" target='_blank'><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;