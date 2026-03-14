import React from "react";
// import app from "../Firebase/firebase.config";
import { app } from "../Firebase/firebase.config";   // ✅ FIX
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const SinginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);


  const SinginWithGooglebtnClick = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    });

  };
  return (
    <div>
      <button onClick={SinginWithGooglebtnClick}>Sing in With Google</button>
    </div>
  );
};

export default SinginWithGoogle;
