import React from 'react'
import './SignupScreen.css'
function SignupScreen() {
    return (
        <div className="signupscreen">
            <form>
                <h1>Sign Up</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" > Sign Up</button>
                <h4>
                    <span className="signupscreen_gray">New to Netflix? </span>
                    <span className="signupscreen_signlink">Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen;
