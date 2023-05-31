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
      <h1 className="login-header-text">Bucket Card Dashboard</h1>
      <div className="image-login">
        <img
          src="https://img.officetimeline.com/website/Content/images/articles/PM-Task-Management/task-management-hero-banner.png"
          alt=""
          className="login-image"
        />

        <form className="login" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <h2 className="usernm-pass">Username</h2>
          <input
            className="usernm-input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h2 className="usernm-pass">Password</h2>
          <input
            className="pswd-input"
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
