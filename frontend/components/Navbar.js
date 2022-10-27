import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="bcbLogo.png"></img>
        <p>Total vat and tax solution center</p>
      </div>
      <h1>BCB App</h1>
      <ul>
        <li>
          <Link href="/">
            <i>Home</i>
          </Link>
        </li>
        <li>
          <Link href="/companies">
            <i>Company_List</i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
