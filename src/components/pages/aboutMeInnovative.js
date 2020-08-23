import React, { Component } from 'react';
import '../../css/aboutMeInnovative.css';

class AboutMeInnovative extends Component {
    constructor (props) {
        super(props);
        this.aboutMe = props.params.aboutMe;
        this.responsible_items = props.params.responsible_items;
        this.achievements_items = props.params.achievements_items;
        this.skill_object = props.params.skill_objects;
        // this.getSkillBar = this.getSkillBar.bind(this);
    }
    
    render() {
        return (    
            <div className="container innovative grid" id="innovative-container">
                {/* We are working on it, the innovative page */}
                {/* <div className="outter-circle">
                    <div id="section-main-contenct">
                        hahahah
                    </div>
                    <div className="info-section" id="experience">
                        <p>Experience</p>
                    </div>
                    <div className="info-section" id="education">Education</div>
                    <div className="info-section" id="skill">Skills</div>
                    <div className="info-section" id="aboutMySelf">About Me</div>
                    <div className="info-section" id="project">Projects</div>
                </div> */}
                    <div>
                    <div className="info-section wrapper" id="aboutMySelf">About Me</div>
                    <div className="info-section wrapper" id="skill">Skills</div>
                    <div className="info-section wrapper" id="experience">Experience</div>
                    </div>
                    <div>
                    <div className="info-section wrapper" id="education">Education</div>
                    <div className="info-section wrapper" id="project">Projects</div>
                    <div className="info-section wrapper" id="picture">My Beautiful Cats</div>
                    </div>
                    
            </div>
        );
    }
}

export default AboutMeInnovative;