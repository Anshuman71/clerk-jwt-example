import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function submitUser(event) {
    event.preventDefault();
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          localStorage.setItem("jwt-token", data.token);
          setUsername("");
          setPassword("");
          router.push("/jwt-safehouse");
        } else {
          alert(data.message);
        }
      });
  }
  return (
    <>
      <main style={{ padding: "50px" }}>
        <h1>Login </h1>
        <br />

        <form onSubmit={submitUser}>
          <input
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}
