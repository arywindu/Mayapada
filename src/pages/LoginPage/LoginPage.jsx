import "./LoginPage.css";

import React, { useState } from "react";

import logo from "../../assets/images/logo.svg";

const LoginPage = (props) => {
  const { handleLogin } = props;

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <img src={logo}></img>

                <div class="form-outline mb-4 mt-5">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    placeholder="Username"
                    class="form-control form-control-lg"
                    onChange={handleUsername}
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    placeholder="Password"
                    class="form-control form-control-lg"
                    onChange={handlePassword}
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={() => handleLogin(username, password)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
