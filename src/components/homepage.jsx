import React from "react";
import { UserAuth } from "../providers/GoogleAuthProvider";
import Signin from "./signin";

const HomePage = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sally</h1>
      <div>
        <p>Welcome, {user ? user.displayName : "please sign in."}</p>
      </div>
      {user ? (
        <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
          Logout
        </button>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default HomePage;
