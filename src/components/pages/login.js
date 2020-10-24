import React, {useState} from 'react';
import Oauth from './../classes/oauth';
import cookie from "./../classes/cookie.js";
import './../../css/login.css';
import GlobalStore from '../../GlobalStore';

const UserModal = ({handleClose, show}) => {
    const showHideClassName = show ? "user-modal display-block" : "user-modal display-none";
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    const [errorMessaage, setErrorMessaage] = React.useState("");
    const { setCurrentUser } = GlobalStore();
    
    function handleLogin(event) {
        event.preventDefault();
        let params = { email, password };
        let oauth = new Oauth();
        oauth.login(params).then((response) =>{
            if (!response.success) {
                setIsError(true);
                setErrorMessaage(response.message);
            } else {
                cookie.set("refresh_token", response.data.refresh_token, process.env.REFRESH_TOKEN_EXPIRE_TIME);
                setCurrentUser(response.data.username, email, response.data.token);
                handleClose();
            }
        });
    }


    function handleRegister(event) {
        event.preventDefault();
        let params = { username, email, password, repeat_password: repeatPassword };
        let oauth = new Oauth();
        oauth.register(params).then((response) => {
            if (!response.success) {
                setIsError(true);
                setErrorMessaage(response.message);
            } else {
                cookie.set("refresh_token", response.data.refresh_token, process.env.REFRESH_TOKEN_EXPIRE_TIME);
                setCurrentUser(username, email, response.data.token);
                handleClose();
            }
        });
    }

    function showErrorMessage() {
        if (isError) {
            return (<div className="error-message"> {errorMessaage} </div>)
        }
    }

    function handleUsernameChange (event) {
        setUsername(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePassowrdChange(event) {
        setPassword(event.target.value);
    }

    function hadleRepeatPasswordChange(event) {
        setRepeatPassword(event.target.value);
    }

    function showSignIn(){
        setIsError(false);
        setErrorMessaage("");
        document.querySelector(".modal-main").classList.toggle('display-sign_in');
        document.querySelector(".modal-side").classList.toggle('display-sign_in');
        document.querySelector(".modal-close-button").classList.toggle('display-sign_in');
    }

    function showSignUp(){
        setIsError(false);
        setErrorMessaage("");
        document.querySelector(".modal-main").classList.toggle('display-sign_in');
        document.querySelector(".modal-side").classList.toggle('display-sign_in');
        document.querySelector(".modal-close-button").classList.toggle('display-sign_in');
    }
  
    return (
      <div className={showHideClassName}>
        <div className="backdrop" onClick={handleClose}></div>
        <div className="modal">
            <div className="modal-main">
                <section className="signup-modal-main">
                    <h2>Create Free Account</h2>
                    <form className="modal-form" align="center" onSubmit={handleRegister}>
                        <input id="username" placeholder="Username" onChange={handleUsernameChange.bind(this)} ></input>
                        <input id="userRegisterEmail" placeholder="Email" onChange={handleEmailChange.bind(this)} ></input>
                        <input id="userRegisterPassword" placeholder="Password" onChange={handlePassowrdChange.bind(this)} ></input>
                        <input id="userRegisterRepeatPassword" placeholder="Repeat Password" onChange={hadleRepeatPasswordChange.bind(this)} ></input>
                        {showErrorMessage()}
                        <button type="submit">Sign Up</button>
                    </form>
                </section>

                <section className="login-modal-main">
                    <h2>Login to Your Account</h2>
                    <form className="modal-form" align="center" onSubmit={handleLogin}>
                        <input id="signinEmail" placeholder="Email" onChange={handleEmailChange.bind(this)} required></input>
                        <input id="signinPassword" placeholder="Password" onChange={handlePassowrdChange.bind(this)} required></input>
                        {showErrorMessage()}
                        <button type="submit">Sign In</button>
                    </form>
                </section>
            </div>

            <div className="modal-side">
                <section className="signup-modal-side">
                    <h2>Already have an account?</h2>
                    <button onClick={showSignIn}>Go Sign In</button>
                </section>

                <section className="login-modal-side">
                    <h2>Don't have an account?</h2>
                    <button onClick={showSignUp}>Sign Up</button>
                </section>
            </div>

            <button className="modal-close-button" onClick={handleClose}>X</button>
        </div>
      </div>
    );
}

export default UserModal;