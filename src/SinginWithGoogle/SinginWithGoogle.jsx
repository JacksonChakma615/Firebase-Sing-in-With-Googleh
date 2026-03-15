import React, { useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SinginWithGoogle = () => {
  const [user, setUser] = useState(null); // ui তে দেখানোর জন্য state

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  // ✅  LOGIN (google)
  const SinginWithGooglebtnClick = () => {
    signInWithPopup(auth, provider) //ay line ta সবসময় btn-এ লাগবে
      .then((result) => {
        setUser(result.user); // login হলে user state set করা
      })
      .catch((error) => {
        console.log(error); // error থাকলে console এ দেখানো
      });
  };

  // ✅ LOGOUT (google)
  const singOutbtn = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // logout হলে state clear করা
      })
      .catch((error) => {
        console.log(error); // error থাকলে console এ দেখানো
      });
  };

  return (
    <div>
      <img src={user?.photoURL} alt="" /> {/* user photo */}
      <h3>{user?.displayName}</h3> {/* user name */}
      <h3>{user?.email}</h3> {/* user email */}
      {
        user ? (
          <button onClick={singOutbtn}>Log out</button> // যদি user থাকে তাহলে logout button দেখাবে
        ) : (
          <button onClick={SinginWithGooglebtnClick}>
            Sign in With Google
          </button>
        ) // যদি user না থাকে তাহলে login button দেখাবে
      }
    </div>
  );
};

export default SinginWithGoogle;
