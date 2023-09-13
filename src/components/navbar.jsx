import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="brand">
          <p className="brand--name">Brand</p>
        </div>
        <ul className="navUl">
          <li className="navLi">
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
