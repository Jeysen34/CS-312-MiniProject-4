import React from "react";

function Home() {
  return (
    <div>
      <div className="welcomeContainer">
        <h2>Welcome to How to Blog...</h2>
        <p>Get Started Below!</p>
        <hr />
        <div className="authBtnContainer">
          <a className="authBtn" href="/UserRegister" role="button">
            Register
          </a>
          <a className="authBtn" href="/UserLogin" role="button">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
