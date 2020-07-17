import React, { Component } from 'react';
import './../css/personal_info.css';
import ucsdTriton from './../images/ucsd_triton.png';

const ABOUT_ME = "My name is Milky, Drink, eat, sleep, repeate every single day. Look at my belly, I am so fat";

class Personal_Info extends Component {
    render () {
        const aboutMe = <div className="about-me wrapper col">
                <h2>About Me</h2>
                <p>{ABOUT_ME}</p>
            </div>
        
        const education = <div className="education wrapper col">
            <h2>Education</h2>
            University of California, San Diego
        </div>
        return (
            <section className="personal-info row">
                {aboutMe}
                {education}
            </section>
        );
    }
}

export default Personal_Info;