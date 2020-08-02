import React, { Component } from 'react';
import './../css/skill.css';

// const skill_arr = ["Web Development", "Project Management", "CI/CD", "Version Control/tools", "Database"];
// Max is 10, Lowest is 0
const skill_Object = [
    {skill: "Web Development", level: 8},
    {skill: "Project Management", level: 9},
    {skill: "CI/CD", level: 7},
    {skill: "Version Control/tools", level: 7},
    {skill: "Database", level: 8},
    
];

class Skill extends Component {
    constructor (props) {
        super(props);
        this.getSkillBar = this.getSkillBar.bind(this);

    }
    // constrcute a skill bar level 1-5
    getSkillBar(props) {
        const percentage = props.level / 10 * 100;
        const experience_bar = (<div className="experience-bar-overall">
                <div className="experience-bar-level" style={{width: `${percentage}%`}}></div>
                
            </div>);
        return experience_bar; 
    }

    render () {

        var skill_section = skill_Object.map((item, index) => (
            <li key={index} className={`skill-list ${item}`}>
                <div>{item.skill}</div>
                <this.getSkillBar level={item.level}/>
            </li>
        ));

        const skill_wrapper = <div className="skills wrapper">
            <h2>Skills</h2>
            <ul>
                {skill_section}
            </ul>
        </div>

        return <section className="personal-skills-section section">
                {skill_wrapper}
            </section>
    }
}

export default Skill;