import BcbLogo from "../public/bcbLogo.png";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { token } = useStateContext();

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
              <Link
                to="/companies"
                className="text-xl hover:text-2xl hover:transition-all italic hover:underline font-bold text-violet-500"
              >
                /companies
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-xl hover:text-2xl hover:transition-all italic hover:underline font-bold text-violet-500"
              >
                /dashboard
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  to="/logout"
                  className="text-xl hover:text-2xl hover:transition-all italic hover:underline font-bold text-violet-500"
                >
                  <span className="inline">
                    <FiLogOut /> Logout
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <hr className="w-2/3 border-2 border-green-500 mx-auto mb-5" />
    </nav>
  );
};

export default Navbar;
