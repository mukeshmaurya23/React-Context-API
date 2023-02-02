import React, { useState, useContext } from "react";
import userContext from "../context/context";
const LoginForm = () => {
  const { logIn } = useContext(userContext);
  console.log(logIn);
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [classname, setClassname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be atleast 8 characters long");
      return;
    }
    if (username === "" || age === "" || classname === "" || password === "") {
      setError("Please fill all the fields");
      return;
    }

    setError("");
    setAge("");
    setUsername("");
    setClassname("");
    setPassword("");

    logIn(username, age, classname);

    console.log(username, age, classname, password);
  };

  return (
    <div>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="age">Age:</label>
            <input
              type="number"
              id="age"
              placeholder="Enter age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="class">Class:</label>
            <input
              type="text"
              id="class"
              placeholder="Enter class"
              onChange={(e) => {
                setClassname(e.target.value);
              }}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
