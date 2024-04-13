import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu, LuPackage2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-b-neutral-500  px-4 md:px-6 text-neutral-400">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <LuPackage2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          to="/dashboard"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          to="/product"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          to="/order"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          to="/chat"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Chat
        </Link>
      </nav>

      <div className="relative flex md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <LuMenu />}
        </button>
        {menuOpen && (
          <div
            className={`w-0 mt-10 absolute left-0 top-0 bg-neutral-900 text-white overflow-hidden transition-all duration-300 px-10 py-44 ${
              menuOpen ? "w-64" : "w-0"
            }`}
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link
                to="/dashboard"
                className="text-foreground transition-colors hover:text-foreground hover:text-blue-500"
              >
                Dashboard
              </Link>
              <Link
                to="/product"
                className="text-muted-foreground transition-colors hover:text-foreground hover:text-blue-500"
              >
                Products
              </Link>
              <Link
                to="/order"
                className="text-muted-foreground transition-colors hover:text-foreground hover:text-blue-500"
              >
                Orders
              </Link>
              <Link
                to="/chat"
                className="text-muted-foreground transition-colors hover:text-foreground hover:text-blue-500"
              >
                Chat
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
