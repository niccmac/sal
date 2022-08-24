import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { app } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log("in then");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log("in catch", errorMessage, errorCode);
      });
    // firebase.auth.signInWithPopup(provider);
  };
  return (
    <>
      <button onClick={signInWithGoogle}>Sign In</button>
    </>
  );
}
