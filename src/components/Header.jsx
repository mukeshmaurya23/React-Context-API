import React, { useContext } from "react";
import userContext from "../context/context";
const Header = () => {
  const { state, logOut } = useContext(userContext);
  return (
    <nav class="navbar">
      <div class="navbar-left">
        {!state.isGuestUser && (
          <button className="btn" onClick={logOut}>
            Logout
          </button>
        )}
      </div>
      <div class="navbar-right">
        <p class="nav-text">Welcome {state.name}</p>
      </div>
    </nav>
  );
};

export default Header;
