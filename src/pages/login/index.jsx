import React, { useState } from "react";
import api from "../../services/api";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function authenticate(event) {
    event.preventDefault()
    try {
      api.post("auth", {
        username,
        password,
      });
    } catch (error) {
      alert("Erro ao efetuar o login");
    }
  }

  return (
    <form onSubmit={authenticate}>
      <label>
        Login:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Entrar" />
    </form>
  );
}
