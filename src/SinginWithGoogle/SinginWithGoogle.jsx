import React, { useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SinginWithGoogle = () => {
  const [user, setUser] = useState(null); //ui te dekanor jonno ata useState 

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  // ✅  LOGIN (google)
  const SinginWithGooglebtnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ✅ LOGOUT (google)
  const singOutbtn = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <img src={user?.photoURL} alt="photo" />
      <h3>{user?.displayName}</h3>
      <h3>{user?.email}</h3>

      {user ? 
        <button onClick={singOutbtn}>Log out</button> //judi user tak=ke tahole dekabe (log out)
       :
        <button onClick={SinginWithGooglebtnClick}>Sign in With Google</button>  // judi user na  take tahole dekabe  (Sign in With Google}
      }
    </div>
  );
};

export default SinginWithGoogle;
