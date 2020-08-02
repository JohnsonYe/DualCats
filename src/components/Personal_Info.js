import React, { Component } from 'react';
import './../css/personal_info.css';


const ABOUT_ME = "Project lead of architecture design and develop microservices for IoT technology. Utilize API and modules in Nodejs for scalable websites architecture and real-time technology. Responsible for CI/CD pipeline management and development, develop automated vision regression testing tools for frontend user interface.";

class Personal_Info extends Component {
    render () {
        const aboutMe = <div className="about-me wrapper">
                <h2>About Me</h2>
                <p>{ABOUT_ME}</p>
            </div>
        
        return (
            <section className="personal-info-section section">
                {aboutMe}
            </section>
        );
    }
}



export default Personal_Info;