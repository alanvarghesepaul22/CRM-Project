import React, { useContext } from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (user) {
    const decoded = jwtDecode(token);
    let user_id = decoded.user_id;
    console.log(user_id);
  }
  return (
    <nav className="w-full bg-neutral-900 py-3">
      <div className="w-full flex justify-between items-center px-5">
        <Link className="text-xl font-semibold text-orange-400" to="/">
          CRM APP
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="w-full flex justify-center items-center gap-4">
            {user ? (
              <>
                <li className="">
                  <Link className="hover:text-orange-400" to="">
                    Add Record
                  </Link>
                </li>
                <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg">
                  <button
                    type="button"
                    onClick={logoutUser}
                    className="flex justify-center items-center gap-2"
                  >
                    Logout
                    <IoIosLogOut />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="bg-orange-400 hover:bg-orange-500 px-2 py-1 rounded-lg">
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
