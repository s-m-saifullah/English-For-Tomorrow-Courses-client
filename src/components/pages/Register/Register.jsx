import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/register.jpg";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const {
    setUser,
    createUserWithEmail,
    profileUpdate,
    googleSignIn,
    twitterSignIn,
    githubSignIn,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    createUserWithEmail(email, password)
      .then((result) => {
        profileUpdate(name, photo)
          .then(() => {
            console.log("Profile Update");
            const newUser = result.user;
            setUser(newUser);
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
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleTwitterSignIn = () => {
    twitterSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="min-h-[90vh] lg:w-10/12 mx-auto mt-10">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:mr-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
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
                  placeholder="Your Name"
                />
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
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
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
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
