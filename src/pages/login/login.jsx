import { FormEvent, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {};
  return (
    <div className="login-main">
      <h1 className="login-header-text">Restaurant Dashboard</h1>
      <div className="image-login">
        <img
          src="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg"
          alt=""
          className="login-image"
        />

        <form className="login" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <h2 className="usernm-pass">Username</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h2 className="usernm-pass">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
