import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? (
        <button onClick={logout}>Çıkış Yap</button>
      ) : (
        <button onClick={loginWithRedirect}>Giriş Yap</button>
      )}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <p>{user.name}</p>
          <small>{user.nickname}</small>
        </div>
      )}
    </div>
  );
}

export default App;
