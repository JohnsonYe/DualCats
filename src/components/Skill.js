import React, { Component } from 'react';
import './../css/skill.css';

class Skill extends Component {
    render () {
        const skill_arr = ["Web Development", "Project Management", "Ci/CD", "Version Control/tools", "Database"];
        const skill_set = skill_arr.map((item, index) => ( <li key={index}>{item}</li> ));

        const skill = <div className="skills wrapper">
            <h2>Skills</h2>
            <ul>
                {skill_set}
            </ul>
        </div>

        return <section className="personal-skills-section section">
                {skill}
            </section>
    }
}

export default Skill;