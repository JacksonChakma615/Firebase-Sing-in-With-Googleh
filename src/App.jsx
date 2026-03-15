import "./App.css";
import PasswordAuth from "./SingInWithFacebook/PasswordAuth/PasswordAuth";
import SingInWithFacebook from "./SingInWithFacebook/SingInWithFacebook";
import SinginWithGoogle from "./SinginWithGoogle/SinginWithGoogle";

function App() {
  return (
    <div>
      <PasswordAuth></PasswordAuth> <br />
      <SingInWithFacebook></SingInWithFacebook>
      <SinginWithGoogle></SinginWithGoogle>
    </div>
  );
}

export default App;
