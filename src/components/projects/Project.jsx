import React from 'react'
import './Project.css'
import im1 from '../../../public/im1.png'
import im2 from '../../../public/im2.png'
import im3 from '../../../public/im3.png'

function Project() {
    return (
        <section className="projects" id="projects">
            <div className="numbers">02 <span>My projects</span> </div>

            <div className="project">

                {/* project-1 */}
                <div className='project-container'>

                    <div className="project-content">
                        <div className="project-content-1">
                            <h3>Fusion Courses</h3>
                            <h4>A course selling webapp</h4>
                            <p>Stack- MERN</p>
                            <p>Frontend Library- React</p>
                            <p>State Management Library- Recoil</p>
                            <p>Programming Language- JavaScript</p>
                        </div>

                        <div className="project-content-2">
                            <div>
                                <a href="https://fusioncourses.vercel.app/" className='button' target='_blank'>visit the webapp</a>
                            </div>
                            <div>
                                <a href="https://github.com/last-developer/fusion-courses" className='button' target='_blank'>see the code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-image">
                        <img src={im1} alt="image" />
                    </div>
                </div>

                {/* project-2 */}
                <div className='project-container'>

                    <div className="project-content">
                        <div className="project-content-1">
                            <h3>Celestial Notes</h3>
                            <h4>A notes saving webapp</h4>
                            <p>Stack- MERN</p>
                            <p>Frontend Library- React</p>
                            <p>State Management Library- Recoil</p>
                            <p>Programming Language- TypeScript</p>
                        </div>

                        <div className="project-content-2">
                            <div>
                                <a href="https://celestialnotes.vercel.app/" className='button' target='_blank'>visit the webapp</a>
                            </div>
                            <div>
                                <a href="https://github.com/last-developer/celestial-notes" className='button' target='_blank'>see the code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-image">
                        <img src={im3} alt="image" />
                    </div>
                </div>

                {/* project-3 */}
                <div className='project-container'>

                    <div className="project-content">
                        <div className="project-content-1">
                            <h3>Ether Watches</h3>
                            <h4>A watch Ecommerce store</h4>
                            <p>Stack- MERN</p>
                            <p>Frontend Library- React</p>
                            <p>State Management Library- Recoil</p>
                            <p>Programming Language- JavaScript</p>
                        </div>

                        <div className="project-content-2">
                            <div>
                                <a href="https://etherwatches.vercel.app/" className='button' target='_blank'>visit the webapp</a>
                            </div>
                            <div>
                                <a href="https://github.com/last-developer/ether-watches" className='button' target='_blank'>see the code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-image">
                        <img src={im2} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;