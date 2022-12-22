import React from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/register.jpg";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [userLoading, setUserLoading] = useState(false);
  const {
    setUser,
    createUserWithEmail,
    profileUpdate,
    googleSignIn,
    twitterSignIn,
    githubSignIn,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUserLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password length validation

    if (password.length < 8) {
      setError("Password must contain at least 8 characters");
      return;
    }

    // Password uppercase validation
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must contain at least one capital letter");
      return;
    }

    // Password number validation
    if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    // Password special character validation
    if (!/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    createUserWithEmail(email, password)
      .then((result) => {
        profileUpdate(name, photo)
          .then(() => {
            console.log("Profile Update");
            const newUser = result.user;
            setUser(newUser);
            setUserLoading(false);
            toast.success("You're registered. Please RELOAD the page.", {
              duration: 5000,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleTwitterSignIn = () => {
    twitterSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="min-h-[90vh] lg:w-10/12 mx-auto mt-10">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:mr-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 lg:mb-0">
            <form onSubmit={handleRegister}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-lg mb-0 mr-4">Register in with</p>
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

              {/* <!-- Name input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Your Full Name"
                  required
                />
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

              {/* <!-- Photo url input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  name="photo"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Photo URL"
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

              {/* Show Error */}
              {error && <p className="mb-6 text-error">{error}</p>}

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {userLoading ? (
                    <svg
                      class="h-6 w-6 animate-spin inline mr-2"
                      viewBox="3 3 18 18"
                    >
                      <path
                        class="fill-gray-200"
                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                      ></path>
                      <path
                        class="fill-gray-800"
                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                      ></path>
                    </svg>
                  ) : null}
                  Register
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={registerImg} className="w-full" alt="Sample image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
