import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/login.jpg";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { login, setUser, googleSignIn, twitterSignIn, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleTwitterSignIn = () => {
    twitterSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="min-h-[90vh] lg:w-10/12 mx-auto mt-10">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 lg:mb-0">
            <img src={loginImg} className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleLogin}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-lg mb-0 mr-4">Sign in with</p>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <FaGoogle />
                </button>

                <button
                  onClick={handleTwitterSignIn}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-sky-400 text-white font-medium text-2xl leading-tight uppercase rounded-full shadow-md hover:bg-sky-500 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <FaTwitter />
                </button>

                <button
                  onClick={handleGithubSignIn}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-stone-800 text-white font-medium text-2xl leading-tight uppercase rounded-full shadow-md hover:bg-stone-900 hover:shadow-lg focus:bg-stone-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <FaGithub />
                </button>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>

              {/* Show Error */}
              {error && <p className="mb-6 text-error">{error}</p>}

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
