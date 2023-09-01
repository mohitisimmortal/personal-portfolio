import React from 'react'
import './testimonials.css'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className="numbers black">05 <span>Testimonials</span></div>

            <div className='testimonial-container'>
                <div className='testimonial-content'>
                    <p>
                        I can't thank him enough for his outstanding work. His attention to detail and commitment to delivering quality results is commendable. He made our project a breeze and added tremendous value. Highly recommended!
                    </p>
                    <h5>David M.</h5>
                </div>
                <div className='testimonial-content'>
                    <p>
                        Working with last dev. was a game-changer for our project. His dedication, technical expertise, and problem-solving skills are unmatched. He turned our vision into reality seamlessly. He is not just a developer, he's a partner you can trust.
                    </p>
                    <h5>Emma W.</h5>
                </div>
                <div className='testimonial-content'>
                    <p>
                        Choosing last dev. for our project was the best decision we made. His expertise, creativity, and commitment exceeded our expectations. He consistently delivered on time and within budget. A genuine pleasure to work with!
                    </p>
                    <h5>Jessica M.</h5>
                </div>
                <div className='testimonial-content'>
                    <p>
                        Last dev. is a true professional and a pleasure to work with. He transformed our website into a user-friendly masterpiece. His communication skills, combined with their technical prowess, made the entire process smooth and enjoyable.
                    </p>
                    <h5>Michael A.</h5>
                </div>

            </div>
        </section>
    )
}

export default Testimonials;