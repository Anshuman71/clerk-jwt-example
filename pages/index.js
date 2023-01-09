import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home
      <br />
      <ol>
        <li>
          <Link passHref href={"/jwt-home"}>
            JWT Home
          </Link>
        </li>
        <li>
          <Link passHref href={"/jwt-safehouse"}>
            JWT Safe house
          </Link>
        </li>
        <li>
          <Link passHref href={"/safehouse"}>
            Clerk Safe house
          </Link>
        </li>
      </ol>
    </div>
  );
}
