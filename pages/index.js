import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home
      <br />
      <ol>
        <li>
          <Link href={"/jwt-home"}>JWT Home</Link>
        </li>
        <li>
          <Link href={"/jwt-safehouse"}>JWT Safe house</Link>
        </li>
        <li>
          <Link href={"/safehouse"}>Clerk Safe house</Link>
        </li>
      </ol>
    </div>
  );
}
