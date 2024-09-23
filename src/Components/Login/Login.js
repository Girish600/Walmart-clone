import React from "react";
import "./Login.css";

function Login() {
  return (
    <React.Fragment>
      <main>
        <div className="Login-main">
          <img src="/image/walmartlogo.png" />
          <h3>Sign in or create your account</h3>
          <div className="contain">
            <p>Not sure if you have an account?</p>
            <p>Enter your email and we’ll check for you.</p>
          </div>
          <div className="form">
            <form>
              <label>
                <h5>Email Address</h5>
              </label>
              <br />
              <input type="Email" placeholder="" className="input" />
            </form>
            <button>Continue</button>
          </div>
          <div className="contain02">
            <p>Securing your personal information is our priority.</p>
            <a href="#">See our privacy measures.</a>
          </div>
        </div>
      </main>
      <hr className="customHr" />
      <footer>
        <div className="foot1">
          <div className="Rights">
            <p> © 2024 Walmart. All Rights Reserved.</p>
          </div>
          <div className="Policys">
            <ul>
              <li>
                <a href="#">Give Feedback</a>
              </li>
              <li>
                <a href="#">CA Privacy Rights</a>
              </li>
              <li>
                <a href="#">Your Privacy Choices</a>
              </li>
              <li>
                <a href="#">Notice at Collection</a>
              </li>
              <li>
                <a href="#">Request My personal information</a>
              </li>
              <li>
                <a href="#">Delete Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot2">
          <p>California Supply Chains Act</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Login;
