import React from 'react'
import './Project.css'

function Project() {
    return (
        <section className="projects" id="projects">
            <div className="numbers black">02 <span>My projects</span> </div>

            {/* project-1 */}
            <div className="project">
                <div className="project-content pr1">
                    <div className='project-content-1'>
                        <h3>Fusion Courses</h3>
                        <p>A course selling webapp</p>
                        <p>Mern + Recoil</p>
                    </div>
                    <div className="project-content-2">
                        <div>
                            <a href="https://fusioncourses.vercel.app/" className='button' target="_blank">visit the webapp</a>
                        </div>
                        <div>
                            <a href="https://github.com/last-developer/fusion-courses" className='button' target='_blank'>see the code</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* project-2 */}
            <div className="project">
                <div className="project-content pr2">
                    <div className='project-content-1'>
                        <h3>Celestial Notes</h3>
                        <p>A notes saving webapp</p>
                        <p>( Mern + Recoil ) * TypeScript</p>
                    </div>
                    <div className="project-content-2">
                        <div>
                            <a href="#" className='button'>coming soon</a>
                        </div>
                        <div>
                            {/* <a href="#" className='button'>see the code</a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* project-3 */}
            <div className="project">
                <div className="project-content pr3">
                    <div className="project-content-1">
                        <h3>Ether Watches</h3>
                        <p>A watch Ecommerce store</p>
                        <p>( Mern + Recoil ) * TypeScript</p>
                    </div>
                    <div className="project-content-2">
                        <div>
                            <a href="#" className='button'>coming soon</a>
                        </div>
                        <div>
                            {/* <a href="#" className='button'>see the code</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;