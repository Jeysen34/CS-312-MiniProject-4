import React, { useState } from "react";

// user login form
function UserLogin() {
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");

  // handle form submission
  function handleForm(event) {
    event.preventDefault();
    // fetch request to login user
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Login successful");
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="authCard">
          <h1>Login</h1>
          <div className="authCardBody">
            <form action="/login" method="POST">
              <div className="form-group">
                <label for="user_id">Username</label>
                <input
                  type="user_id"
                  className="form-control"
                  name="user_id"
                  onChange={(e) => setUser_id(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="loginBtn" href="/BigPostForm">
                Login
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
