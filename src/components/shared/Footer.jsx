import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-primary text-white mt-12">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <img src="./favicon.png" alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link rel="noopener noreferrer" to="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" to="#">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
