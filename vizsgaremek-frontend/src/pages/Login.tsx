import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { username, password });
      localStorage.setItem("jwt", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Pass"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
