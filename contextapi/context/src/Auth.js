import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  console.log(status);

  //   const Auth = useContext(AuthContext);
  //   console.log(Auth.status);

  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>Ohooo çoktaan</p> : <p>Hayıır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
