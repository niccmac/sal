import React from "react";
import { UserAuth } from "../providers/GoogleAuthProvider";
import Chat from "./chat";
import Eating from "./eating";
import Signin from "./signin";
import Toilet from "./toilet";

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
      <h1>PuppyWatch</h1>
      <div>
        <p>Welcome, {user ? user.displayName : "please sign in."}</p>
      </div>
      {user ? (
        <>
          <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
            Logout
          </button>
          <Chat />
          <Eating />
          <Toilet />
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default HomePage;
