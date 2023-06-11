import BcbLogo from "../public/bcbLogo.png";
const Navbar = () => {
  return (
    <nav>
      {/* holds the 2 parts */}
      <div className="flex items-end">
        {/* images and slogans */}
        <div className="basis-2/3 pl-80">
          <img className="" src={BcbLogo}></img>
          <h2 className="text-2xl">Total VAT & Tax Solution Center</h2>
        </div>
        {/* links */}
        <div className="basis-1/3 ml-16">
          <ul className="flex gap-x-2">
            <li>
              <a
                href="/"
                className="text-xl hover:text-2xl hover:transition-all italic underline font-bold text-violet-500"
              >
                /home
              </a>
            </li>
            <li>
              <a
                href="/companies"
                className="text-xl hover:text-2xl hover:transition-all italic underline font-bold text-violet-500"
              >
                /companies
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="text-xl hover:text-2xl hover:transition-all italic underline font-bold text-violet-500"
              >
                /dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-2/3 border-2 border-green-500 mx-auto" />
    </nav>
  );
};

export default Navbar;
