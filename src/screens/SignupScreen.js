import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';


function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })
    }

    const signup = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="signupscreen">
            <form>
                <h1>Sign Up</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signup} > Sign Up</button>
                <h4>
                    <span className="signupscreen_gray">New to Netflix? </span>
                    <span className="signupscreen_signlink" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen;
