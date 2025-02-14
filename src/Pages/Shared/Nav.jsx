import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const Nav = () => {
  // const {user , logOut} = useContext(AuthContext);
  // use hooks -[useAuth]

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/events"> Events</Link>
      </li>
      <li>
        <Link to="/gallery"> Gallery</Link>
      </li>
    </>
  );

  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Digital Week
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link to="/login" >
              <button className="btn btn-outline btn-info">Login</button>
            </Link> */}
          {user?.email ? (
            <>
              <div className="flex place-items-center gap-5">
                <Link to="/registers">My Events </Link>

                <button className="btn btn-outline" onClick={handleLogOut}>
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <Link className="btn btn-outline" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;









