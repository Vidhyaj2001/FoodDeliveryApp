import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/signup.css";

const Signup = () => {
  const [formType, setFormType] = useState("signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = (type) => {
    setFormType(type);
    setFormData({ email: "", password: "", confirmPassword: "" });
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password)
      ? ""
      : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character (@$!%*?&).";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (formType === "signup") {
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const existingUser = JSON.parse(localStorage.getItem(email));
      if (existingUser) {
        setError("User already exists. Please log in.");
        return;
      }

      localStorage.setItem(email, JSON.stringify({ email, password }));
      alert("Sign-up successful! Please log in.");
      toggleForm("login");
    } else {
      const savedUser = JSON.parse(localStorage.getItem(email));
      if (savedUser && savedUser.password === password) {
        alert("Login successful!");
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="hero-wrapper">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2>{formType === "signup" ? "Sign Up" : "Login"}</h2>
              {error && <p className="error">{error}</p>}
              
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />

              {formType === "signup" && (
                <>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </>
              )}

              <button type="submit">
                {formType === "signup" ? "Sign Up" : "Login"}
              </button>

              <p className="toggle-form">
                {formType === "signup"
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <span
                  className="toggle-form-btn"
                  onClick={() => toggleForm(formType === "signup" ? "login" : "signup")}
                >
                  {formType === "signup" ? "Login" : "Sign Up"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
