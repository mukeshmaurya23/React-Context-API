import axios from "axios";
import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import userContext from "./context/context";
const App = () => {
  const { state } = useContext(userContext);
  return (
    <>
      <Header />
      {state.isGuestUser ? <LoginForm /> : <Home />}
    </>
  );
};

export default App;
