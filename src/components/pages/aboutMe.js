import React, { Component } from 'react';
import AboutMeClassic from './aboutMeClassic';
import AboutMeInnovative from './aboutMeInnovative'

const ABOUT_ME = "Project lead of architecture design and develop microservices for IoT technology. Utilize API and modules in Nodejs for scalable websites architecture and real-time technology. Responsible for CI/CD pipeline management and development, develop automated vision regression testing tools for frontend user interface.";

const RESPONSIBLE_ITEMS = [
    "Developed a CI/CD pipeline to automate the deployment process to reduce manual accessing the server.",
    "Architecture designed of microservices to the IoT technology and developed API services.",
    "Managed features, requirement, schedules, bug tracking, metrics, priorities.",
    "Led device integration team to integrate IoT devices into core product.",
    "Directed and managed a staff of 2 software engineers for IoT devices integration and platform features development."
];

const ACHIEVEMENTS_ITEMS = [
    "Developed an Automated Fault Detection and Diagnostic system to identify faults and errors, successfully save 5%-30% of the energy used in grocery store and commercial buildings.",
    "Implemented the CI/CD pipeline to automate the deployment report, deployment and testing process, reduce 90% of the workflows into one command.",
    "Developed a visual regression testing tool that uses in frontend user interface development to minimize over 80% of visualization error.",
    "Integrated over 1,000 IoT technologies devices into core product. "
];

const SKILL_OBJECTS = [
    {skill: "Web Development", level: 8},
    {skill: "Project Management", level: 9},
    {skill: "CI/CD", level: 7},
    {skill: "Version Control/tools", level: 8},
    {skill: "Database", level: 8},    
];

class AboutMe extends Component {
    constructor (props) {
        super(props);
        this.state = {
            is_classic_mode: true
        }
        this.aboutMe            = ABOUT_ME;
        this.responsible_items  = RESPONSIBLE_ITEMS;
        this.achievements_items = ACHIEVEMENTS_ITEMS;
        this.skill_objects  = SKILL_OBJECTS
        this.styleChange    = this.styleChange.bind(this);
        this.AboutMeSection = this.AboutMeSection.bind(this);
    }

    styleChange () {
        this.setState({is_classic_mode: this.state.is_classic_mode ? false: true});
    };
    
    AboutMeSection() {
        if(this.state.is_classic_mode) {
            return <AboutMeClassic params={this} />
        }
        return <AboutMeInnovative params={this} />
    }

    render() {
        return (
            <div claassName="about-me-container">
              <button onClick={this.styleChange}>Change style</button>
              <this.AboutMeSection />
            </div>
        );
    }
}

export default AboutMe;