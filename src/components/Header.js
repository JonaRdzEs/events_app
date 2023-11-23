import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <img src="" alt="events logo" />
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/events">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
