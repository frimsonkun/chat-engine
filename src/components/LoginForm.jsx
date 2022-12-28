import { useState } from "react";
import axios from "axios";

const LoginForm = ({isAuth, setIsAuth}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "0c98ecf7-f2b9-4759-b3eb-e0f35ac45503",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
	  setIsAuth(true)
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (error) {
      setError("Спробуйте ще раз");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Чат на React.js</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Логін"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Пароль"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Почати листування</span>
            </button>
          </div>
          <h2 className="error" style={{color: '#45175E'}}>{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
