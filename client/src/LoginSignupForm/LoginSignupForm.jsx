import React, { useState } from 'react';
import './LoginSignupForm.sass'
function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login Form' : 'Signup Form'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} onChange={toggleForm} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={toggleForm} />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form action="#" className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="#" onClick={toggleForm}>Signup now</a>
              </div>
            </form>
          ) : (
            <form action="#" className="signup">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Confirm password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignupForm;
