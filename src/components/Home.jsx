import React, { useContext } from "react";
import userContext from "../context/context";
const Home = () => {
  const { state, logOut } = useContext(userContext);

  return (
    <div>
      <div class="card">
        <div class="card-header">Welcome</div>
        <div class="card-body">
          <code>
            Welcome to our website! We hope you find what you're looking for
            {state.name}
            <div>
              {!state.isGuestUser && (
                <button class="btn" onClick={logOut}>
                  Logout
                </button>
              )}
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Home;
