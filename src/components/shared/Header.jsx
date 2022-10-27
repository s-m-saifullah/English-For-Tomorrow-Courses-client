import React, { useState } from "react";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-light.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { user, setUser, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-100 py-4 shadow-lg w-full">
      <div className="navbar md:w-10/12 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="w-36 md:w-44 lg:w-52">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal p-0 hidden lg:flex">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <Link
                    className="tooltip p-0 my-1 mx-4"
                    data-tip={user.displayName}
                    to="/profile"
                  >
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL}
                        alt={`${user.displayName} display pic`}
                      />
                    ) : (
                      <>{user.displayName}</>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-primary rounded-lg text-white mr-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li className="mr-3">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 right-0 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link
                      className="tooltip"
                      data-tip={user.displayName}
                      to="/profile"
                    >
                      {user.photoURL ? (
                        <img
                          className="w-10 h-10 rounded-full "
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <>{user.displayName}</>
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-primary rounded-lg text-white "
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <button className="btn btn-accent cursor-pointer text-white">
                <FaSun />
              </button>
            ) : (
              <button className="btn btn-accent cursor-pointer text-white">
                <FaMoon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
