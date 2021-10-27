import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'
// import useState from ''
function LoginScreen() {
    const [signup, setSignup] = useState(false);
    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img
                    className="loginscreen_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button className="loginscreen_button" onClick={() => setSignup(true)}>Sign in</button>

                <div className="loginscreen_gradient"></div>
            </div>

            {signup ? (
                <SignupScreen />
            ) : (
                <>
                    <div className="loginscreen_body">
                        <h1>Unlimited films, TV programmes and More</h1>
                        <h2>Watch anywhere. Cancel anytime</h2>
                        <h3>Ready to watch? Enter your email to
                            create or restart your
                            memebership</h3>

                        <div className="loginscreen_input">
                            <form>
                                <input type="email" placeholder="Enter your email" />
                                <button className="loginscreen_getstarted" onClick={() => setSignup(true)} >GET STARTED</button>
                            </form>
                        </div>
                    </div >
                </>
            )
            }
        </div >
    )
}

export default LoginScreen
