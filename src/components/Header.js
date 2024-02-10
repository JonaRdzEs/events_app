import TextLink from "./TextLink";

function Header() {
  return (
    <header className="w-full">
      <nav>
        <ul className="flex justify-end items-center grow gap-6">
          <TextLink url="/" text="Home" />
          <TextLink url="/events" text="Events" />
          <TextLink url="/about-us" text="About us" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
