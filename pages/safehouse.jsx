import { useEffect, useState } from "react";

import { SignOutButton, RedirectToSignIn, useUser } from "@clerk/nextjs";

export default function SafeHouse() {
  const { isSignedIn } = useUser();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("/api/clerk-safehouse")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <>
      <main style={{ padding: "50px" }}>
        <h1>Safehouse </h1>
        <p>
          You Safehouse key is{" "}
          <strong>{userData?.safehouseKey || "Loading..."}</strong>
        </p>
        <SignOutButton />
      </main>
    </>
  );
}
