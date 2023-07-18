import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Signup.module.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      name: name,
      email: email,
      pass: pass,
      location: location,
      gender: gender,
      role: role,
    };
    // console.log(payload);
    fetch(`https://long-ruby-crab-hose.cyclic.app/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => alert("User Registered Successfully!"))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className={styles.signup_box}>
        <div className={styles.signup_main_container}>
          <h1 className={styles.reg}>Register</h1>
          <div className={styles.signup_container}>
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <select name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.input_space}>
              <select name="role" onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button className={styles.praButton} onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className={styles.login_link}>
            Already a member? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
