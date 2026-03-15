import React, { useState } from "react";
import {
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const SignInWithFacebook = () => {
  const [user, setUser] = useState(null); //ui te dekanor jonno ata useState
  const provider = new FacebookAuthProvider();
  const auth = getAuth(app);

  // Sign in with Facebook
  const handleSignIn = () => {
    signInWithPopup(auth, provider) //ay line ta  sobsomoy btn ne takbe
      .then((result) => {
        setUser(result.user); // store user in state
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Log out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // clear user from state
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user && (
        <div>
          <img src={user.photoURL} alt="photo" />
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
        </div>
      )}

      {user ? (
        <button onClick={handleSignOut}>Log out</button>
        //judi user takke tahole dekabe (log out)
      ) : (
        <button onClick={handleSignIn}>Sign in With Facebook</button>
        // judi user na  take tahole dekabe  (Sign in With Google}
        
      )}
    </div>
  );
};

export default SignInWithFacebook;
