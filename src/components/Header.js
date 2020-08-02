import React, {Component} from 'react';
import profilePic from './../images/milky.png';
import './../css/header.css';

const PROFILE_NAME = "Johnson Ye";
const POSITION = "Software Engineer";
const GITHUB_URL= "https://github.com/JohnsonYe";
const LINKEDIN_URL = "https://www.linkedin.com/in/johnsonye0303/";

class Header extends Component {
    render () {
        const profileContent = <div className="profile-content">
            <h1 className="profile-name">{PROFILE_NAME}</h1>
            <h3 className="profile-job-position">{POSITION}</h3>
        </div>;

        const profileImage = <img src={profilePic} className="profile-pic"></img>

        const contact = <div className="contact">
            <h2>Contact Me</h2>
            <h3>johnsonye0303@gmail.com</h3>
            <ul className="socialMedia-list">
                <li className="socialMedia-github">
                    <a href={GITHUB_URL} target="_blank" aria-label="Github Profile">
                        <i className="fa fa-github-alt" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="socialMedia-linkedIn">
                    <a href={LINKEDIN_URL} target="_blank" aria-label="LinkedIn Profile">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>

        const header = <div className="header-wrapper">
            {profileImage}
            {profileContent}
            {contact}
        </div>;

        return (
            <header>{header}</header>
        )
    }
}

export default Header;