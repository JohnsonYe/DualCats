import React, { Component} from 'react';
import './../css/experience.css';

const responsibe_items = [
    "Developed a CI/CD pipeline to automate the deployment process to reduce manual accessing the server.",
    "Architecture designed of microservices to the IoT technology and developed API services.",
    "Managed features, requirement, schedules, bug tracking, metrics, priorities.",
    "Led device integration team to integrate IoT devices into core product.",
    "Directed and managed a staff of 2 software engineers for IoT devices integration and platform features development."
];

const achievements_items = [
    "Developed an Automated Fault Detection and Diagnostic system to identify faults and errors, successfully save 5%-30% of the energy used in grocery store and commercial buildings.",
    "Implemented the CI/CD pipeline to automate the deployment report, deployment and testing process, reduce 90% of the workflows into one command.",
    "Developed a visual regression testing tool that uses in frontend user interface development to minimize over 80% of visualization error.",
    "Integrated over 1,000 IoT technologies devices into core product. "

];

class Experience extends Component {
    render () {
        const responsibe_list = responsibe_items.map((item, index) => (<li key={index}>{item}</li>));
        const achievements_list = achievements_items.map((item, index) => (<li key={index}>{item}</li>));
        const responsibility = <div className="work-responsibility">
            <h5>Key Qualifications & Responsibilities:</h5>
            <ul>
                {responsibe_list}
            </ul>
            <h5>Key Achievements:</h5>
            <ul>
                {achievements_list}
            </ul>
        </div>
        

        const experience = <div className="work-experience wrapper">
                <h2>Experience</h2>
                <div className="company">
                    <div className="company-name">Locbit Inc.</div>
                    <div className="years"><i>2018 - present</i></div>
                </div>
                {responsibility}
            </div>

        
        
        
        return (
            <section className="experience-section section">
                {experience}
            </section>
        );
    }
};

export default Experience;