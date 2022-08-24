import React, { useEffect } from "react";
import { UserAuth } from "../providers/GoogleAuthProvider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn}>Sign in</button>
      </div>
    </div>
  );
};

export default Signin;
