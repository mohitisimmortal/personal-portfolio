import React from 'react';

const Resume = () => {
    return (
        <section style={{ padding: '0px' }}>
            <div className="resume-content">
                <iframe
                    src="/MohitResume.pdf"
                    title="Resume"
                    width="100%"
                    height="600px"
                />
            </div>

        </section>
    );
}

export default Resume;