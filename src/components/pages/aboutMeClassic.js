import React, { Component } from 'react';
import '../../css/aboutMeClassic.css';

class AboutMeClassic extends Component {
    constructor (props) {
        super(props);
        this.aboutMe = props.params.aboutMe;
        this.responsible_items = props.params.responsible_items;
        this.achievements_items = props.params.achievements_items;
        this.skill_object = props.params.skill_objects;
        this.getSkillBar = this.getSkillBar.bind(this);
    }

    getSkillBar(props) {
        const percentage = props.level / 10 * 100;
        const experience_bar = (<div className="experience-bar-overall">
                <div className="experience-bar-level" style={{width: `${percentage}%`}}></div>
            </div>);
        return experience_bar; 
    }

    render() {
        const PERSONAL_DESCRIPTION = (<div className="about-me wrapper">
                <h2>About Me</h2>
                <p>{this.aboutMe}</p>
            </div>);
        
        const RESPONSIBLE_LIST = this.responsible_items.map((item, index) => (<li key={index}>{item}</li>));
        const ACHIEVEMENTS_ITEMS = this.achievements_items.map((item, index) => (<li key={index}>{item}</li>));
        const RESPONSIBILITY = (<div className="work-responsibility">
                <h5>Key Qualifications & Responsibilities:</h5>
                <ul>
                    {RESPONSIBLE_LIST}
                </ul>
                <h5>Key Achievements:</h5>
                <ul>
                    {ACHIEVEMENTS_ITEMS}
                </ul>
            </div>);

        const EXPERIENCE = (<div className="work-experience wrapper">
                <h2>Experience</h2>
                <div className="company">
                    <div className="company-name">Locbit Inc.</div>
                    <div className="years"><i>2018 - present</i></div>
                </div>
                {RESPONSIBILITY}
            </div>);

        const EDUCATION = (<div className="education wrapper">
                <h2>Education</h2>
                <div style={{display: 'inline-block'}}>University of California, San Diego</div>
                <div style={{display: 'inline-block', float: 'right'}}><i>2016 – 2018</i></div>
                <div>B.S, Mathematics and Computer science</div>
                <div className="Img-background" style={{marginTop: 10, marginBottom: 10}}></div>
            </div>);

        const SKILL_SECTION = this.skill_object.map((item, index) => (
                <li key={index} className={`skill-list ${item}`}>
                    <div>{item.skill}</div>
                    <this.getSkillBar level={item.level}/>
                </li>
            ));

        const SKILL_WRAPPER = (<div className="skills wrapper">
            <h2>Skills</h2>
            <ul>
                {SKILL_SECTION}
            </ul>
        </div>);

        return (
            <div className="container classic">
                <div className="row">
                    <div className="col-8">
                        {/* This section is persional infor and description */}
                        <section className="personal-info-section section">
                            {PERSONAL_DESCRIPTION}
                        </section>
                        {/* This section is job experience */}
                        <section className="experience-section section">
                            {EXPERIENCE}
                        </section>
                    </div>
                    <div className="col-4">
                        {/* This section is education */}
                        <section className="education-section section">
                            {EDUCATION}
                        </section>
                        
                        {/* This section is skill */}
                        <section className="personal-skills-section section">
                            {SKILL_WRAPPER}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeClassic;