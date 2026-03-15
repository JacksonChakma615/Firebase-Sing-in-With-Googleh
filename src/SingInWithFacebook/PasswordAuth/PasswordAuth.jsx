import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

const PasswordAuth = () => {
  const [user, setUser] = useState(null); //✅ লগ ইন করা user কে state/Ui এ রাখার জন্য

  //
  const auth = getAuth(); //✅ Firebase auth object তৈরি করা

  const formHandel = (e) => {
    // ✅ Form submit handle করার function

    e.preventDefault(); // ❌ Form submit করলে page reload না হওয়ার জন্য

    const email = e.target.email.value; // ✅ Form input থেকে email এবং password নেওয়া
    const password = e.target.password.value; //✅ Form input থেকে email এবং password নেওয়া

    if (password.length < 6) {
      // ✅ সহজ password validation (Firebase এ minimum ৬ character দরকার)
      alert(
        "Password must be at least 6 characters / পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password) // ✅ Email & password দিয়ে নতুন user তৈরি করা
      .then((result) => {
        setUser(result.user);
        // ✅ Save the user object in state / user কে state/Ui এ save করা
        e.target.reset();
        // ✅ Clear the form after successful signup / signup successful হলে form খালি করা
      })
      .catch((error) => {
        console.error(error.message);
        // ❌ Log any errors / error দেখানো
      });
  };

  // ✅ Logout function

  const handleLogout = () => {
    // ✅ User logout করার function

    auth.signOut().then(() => setUser(null));
    // logout হলে state clear করা
  };

  return (
    <div>
      {/* ✅ Form for Email/Password signup */}
      {/* ✅ Email/Password signup এর form */}
      <form onSubmit={formHandel}>
        <input type="email" name="email" placeholder="Enter Email " required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password "
          required
        />
        <br />
        <input type="submit" value="Register / Sign Up / log in" />
      </form>

      {/* ✅ Display user info and logout button if user is logged in */}
      {/* ✅ User login করলে তার info এবং logout button দেখানো */}
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout / লগ আউট</button>
        </div>
      )}
    </div>
  );
};

export default PasswordAuth;
