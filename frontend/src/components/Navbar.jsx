import { useContext } from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);

  const token = localStorage.getItem("authTokens");

  return (
    <nav className="w-full py-3">
      <div className="w-full flex justify-between items-center px-5">
        <Link className="text-xl font-semibold text-orange-400" to="/">
          CRM APP
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="w-full flex justify-center items-center gap-4">
            {token ? (
              <>
                <li className="">
                  <Link className="hover:text-orange-400" to="dashboard/add-record">
                    Add Record
                  </Link>
                </li>
                <li className="hover:bg-neutral-200 hover:text-orange-500 px-3 py-1 rounded-lg">
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2"
                    onClick={logoutUser}
                  >
                    Logout
                    <IoIosLogOut />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="bg-orange-400 hover:bg-orange-500 text-neutral-50 px-2 py-1 rounded-lg">
                  <Link className="" to="/register">
                    Register
                  </Link>
                </li>
                <li className="hover:text-orange-400">
                  <Link className="" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
