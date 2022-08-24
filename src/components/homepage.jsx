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
      {/* <h1>Sally {process.env ? process.env.REACT_APP_API_KEY : "Fail"}</h1> */}
      <h1>Sally </h1>
      <div>
        <p>Welcome, {user ? user.displayName : "please sign in."}</p>
      </div>
      {user ? (
        <>
          <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
            Logout
          </button>
          <Chat />
        </>
      ) : (
        <Signin />
      )}

      <Eating />
      <Toilet />
    </div>
  );
};

export default HomePage;
