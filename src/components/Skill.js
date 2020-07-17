import React, { Component } from 'react';
import './../css/skill.css';

class Skill extends Component {
    render () {
        const skill = <div className="skills wrapper col">
            <h2>Skills:</h2>
            <ul>
                <li>
                    <div>
                        Web Development
                    </div>
                </li>
                <li>
                    Project Management
                </li>
                <li>
                    Mircoservices Architecture
                </li>
                <li>
                    CI/CD
                </li>
                <li>
                    Java
                </li>
                <li>
                    Version Control/tools
                </li>
            </ul>
        </div>

        return <section className="personal-skills row">
            {skill}
            </section>
    }
}

export default Skill;