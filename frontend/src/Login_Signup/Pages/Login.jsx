import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email: email,
      pass: pass,
    };
    // console.log(payload);
    fetch(`https://long-ruby-crab-hose.cyclic.app/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        // alert(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("fill correct  details");
      });
  };

  return (
    <>
      <Navbar />
      <div className={styles.signup_box}>
        <div className={styles.signup_main_container}>
          <h1 className={styles.reg}>Login</h1>
          <div className={styles.signup_container}>
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button className={styles.praButton} onClick={handleSubmit}>
              Login
            </button>
            <div className="login_link">
              <br />
              Not a member? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
