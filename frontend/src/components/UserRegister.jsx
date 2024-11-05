import React, { useState } from "react";

// user registration form
function UserRegister() {
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // handle form submission
  function handleForm(event) {
    event.preventDefault();
    // fetch request to register user
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, password, name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Registration successful");
        }
      });
  }

  // user registration form
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="authCard">
          <div className="authCardBody">
            <form action="/register" method="POST">
              <div className="form-group">
                <label for="user_id">Username</label>
                <input
                  type="user_id"
                  className="form-control"
                  name="user_id"
                  onChange={(e) => setUser_id(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="password">Name</label>
                <br />
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Register
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;
