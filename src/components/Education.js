import React, { Component} from 'react';
import './../css/education.css';

class Education extends Component {
    render () {
        const education = <div className="education wrapper">
            <h2>Education</h2>
            <div style={{display: 'inline-block'}}>University of California, San Diego</div>
            <div style={{display: 'inline-block', float: 'right'}}><i>2016 – 2018</i></div>
            <div>B.S, Mathematics and Computer science</div>
            <div className="Img-background" style={{marginTop: 10, marginBottom: 10}}></div>
        </div>
        return (
            <section className="education-section section">
                {education}
            </section>
        );
    }
};

export default Education;