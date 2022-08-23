import "firebase/auth";
import firebase from "firebase/app";
const auth = firebase.auth();

export default function SignIn() {
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={googleSignIn}>Sign In</button>;
}
