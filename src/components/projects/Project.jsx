import React from 'react'
import './Project.css'
import im1 from '../../assets/im1.png'
import im2 from '../../assets/im2.png'
import kickcase from '../../assets/kickcase.png'

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

                {/* project-3 */}
                <div className='project-container'>

                    <div className="project-content">
                        <div className="project-content-1">
                            <h3>Kickcase Creations</h3>
                            <h4>A Personalised Drawer selling Startup</h4>
                            <p>Framework- Next.js</p>
                            <p>Database- PostgreSQL</p>
                            <p>State Management Library- Recoil</p>
                            <p>Programming Language- TypeScript</p>
                        </div>

                        <div className="project-content-2">
                            <div>
                                <a href="https://kickcasecreations.in/" className='button' target='_blank'>visit the webapp</a>
                            </div>
                            <div>
                                <a href="https://github.com/last-developer/kickcase_creations" className='button' target='_blank'>see the code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-image">
                        <img src={kickcase} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;