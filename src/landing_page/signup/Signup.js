import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
const Signup = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = state === "login" ? "/api/user/login" : "/api/user/register";

    try {
      const { data } = await axios.post(url, { name, email, password });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);

        // Redirect to dashboard
       window.location.href = process.env.REACT_APP_DASHBOARD_URL;

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="card shadow p-4"
        style={{ width: "24rem" }}
      >
        <h3 className="text-center mb-4 text-primary">
          User {state === "login" ? "Login" : "Sign Up"}
        </h3>

        {state === "register" && (
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>

        {state === "register" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-primary fw-bold cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-primary fw-bold"
              style={{ cursor: "pointer" }}
            >
              Click here
            </span>
          </p>
        )}

        <button type="submit" className="btn btn-primary w-100">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
