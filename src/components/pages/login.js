import React, {useState} from 'react';
import User from './../classes/user';
import './../../css/login.css';

const UserModal = ({handleClose, handleSignIn, show}) => {
    const showHideClassName = show ? "user-modal display-flex" : "user-modal display-none";
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");

    function handleLogin(event) {
        event.preventDefault();
        let params = { email, password };
        let user = new User();
        user.login(params).then((data) =>{
            console.log(data.token);
            /** TODO
             *  Store token to cookies, user will need that to access for apis
             */
            handleSignIn(data.username);
            handleClose();
        });
    }

    function handleRegister(event) {
        event.preventDefault();
        let params = { username, email, password, repeat_password: repeatPassword };
        let user = new User();
        user.register(params).then((data) => {
            if (!data) {
                console.log("Fail to register")
            } else {
                handleSignIn(data.username);
                handleClose();

            }
        });
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

    function showSignIn(event){
        document.querySelector(".modal-main").classList.toggle('display-sign_in');
        document.querySelector(".modal-side").classList.toggle('display-sign_in');
        document.querySelector(".modal-close-button").classList.toggle('display-sign_in');
    }

    function showSignUp(event){
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
                        <input id="username" placeholder="Username" onChange={handleUsernameChange.bind(this)}></input>
                        <input id="userRegisterEmail" placeholder="Email" onChange={handleEmailChange.bind(this)}></input>
                        <input id="userRegisterPassword" placeholder="Password" onChange={handlePassowrdChange.bind(this)}></input>
                        <input id="userRegisterRepeatPassword" placeholder="Repeat Password" onChange={hadleRepeatPasswordChange.bind(this)}></input>
                        <button type="submit">Sign Up</button>
                    </form>
                </section>

                <section className="login-modal-main">
                    <h2>Login to Your Account</h2>
                    <form className="modal-form" align="center" onSubmit={handleLogin}>
                        <input id="signinEmail" placeholder="Email" onChange={handleEmailChange.bind(this)}></input>
                        <input id="signinPassword" placeholder="Password" onChange={handlePassowrdChange.bind(this)}></input>
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

/**
 * @IDEA
 *  the login page idea is comes from the webside 
 *          https://diprella.com/sign-in
 *  It will be use for a personal project
 */

const loginModal = () => {
    /**
     * TODO
     *  1. Create a smooth transition to to login modal
     *  2. Login modal will be on the right side, left side will be the asking 
     *     the user first time user and ask to create account
     *  3. Once user click the signUp button on the left side, there will be an animation transition to the right
     *      then will be reigister page
     */
}

const registerModal = () => {
    /**
     * TODO
     *  1. Create a smooth transition to to register modal
     *  2. register modal will be on the left side, right side will be the asking 
     *     the user if existing user, there will be a button for sign in
     *  3. Once user click the sign in button on the right side, there will be an animation transition to the left
     *      then will be login page
     */
}

export default UserModal;
