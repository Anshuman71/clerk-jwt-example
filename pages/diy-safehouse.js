import { useEffect, useState } from "react";
import Link from "next/link";

export default function SafeHouse() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("diy-jwt-token");
    setToken(token);
    fetch("/api/safehouse", {
      headers: {
        "diy-jwt-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  function logout() {
    setToken("");
    localStorage.removeItem("diy-jwt-token");
  }

  if (!token) {
    return (
      <>
        <main style={{ padding: "50px" }}>
          <p>You&apos;re not logged in.</p>
          <Link href={"/diy-home"}>Home</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <main style={{ padding: "50px" }}>
        <h1>Safehouse </h1>
        <p>
          You Safehour key is{" "}
          <strong>{userData?.safehouseKey || "Loading..."}</strong>
        </p>
        <button onClick={logout}>Logout</button>
      </main>
    </>
  );
}
