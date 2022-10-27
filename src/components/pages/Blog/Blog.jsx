import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="min-h-[65vh] w-11/12 md:w-10/12 mx-auto  mt-10">
      <h2 className="text-3xl mb-5 text-center">Blog</h2>
      {/* Question 1 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is CORS?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            Cross-origin resource sharing (CORS) defines a way for client web
            applications that are loaded in one domain to interact with
            resources in a different domain. With CORS support, one can build
            rich client-side web applications and selectively allow cross-origin
            access resources resides in a different server.{" "}
          </p>{" "}
          <p className="mb-3">
            An example of a cross-origin request: the front-end JavaScript code
            served from https://domain-a.com uses <code>XMLHttpRequest</code> to
            make a request for https://domain-b.com/data.json.{" "}
          </p>{" "}
          <p>
            For security reasons, browsers don't allow cross-origin HTTP
            requests from scripts. For example, <code>XMLHttpRequest</code> and
            the Fetch API follow the same-origin policy. This means that a web
            application using those APIs can only request resources from the
            same origin the application was loaded from unless the response from
            other origins includes the right CORS headers.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            Answer: Among many other things firebase provides authentication
            system to be used by developers. Firebase's authentication system is
            secure. So, developers can use it without creating their own
            authentication system.
          </p>{" "}
          <p className="mb-3">
            Other than firebase, we can implement authentication system by using
            the following services.
          </p>
          <ul className="list-disc ml-5">
            <li>Supabase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
            <li>Keycloak</li>
            <li>Ory</li>
            <li>STYTCH</li>
            <li>Frontegg</li>
            <li>Authress</li>
            <li>Auth0</li>
          </ul>
        </div>
      </div>

      {/* Question 3 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          3. How does the private route work?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            Private Routes or Protected Routes in React Router require a user
            being authorized to visit a route. So, if a user is not authorized
            for a specific page, he cannot access it. The most common example is
            authentication in a React application where a user can only access
            the protected pages when they are authorized (which means in this
            case being authenticated). In order to achieve this, a private route
            component is declared, and all private routes are passed as children
            of private route component.
          </p>
        </div>
      </div>

      {/* Question 4 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is Node? How does Node work?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            Node.js is an open-source, cross-platform, JavaScript runtime
            environment that executes JavaScript code outside of a web browser.
            It is a popular, lightweight web framework for beginners, and it is
            used by many big companies like Netflix and Uber.
          </p>
          <p className="mb-3">
            When we normally think of JavaScript, our mind tends to go to web
            development. Until Node.js came along, there was really no way to
            run JavaScript outside of a browser. When we write a backend server
            and database, Node.js is a popular choice because we can run our
            code as a standalone application rather than something that can only
            be evaluated in a browser environment.
          </p>
          <p>
            Node.js is an important tool for any JavaScript developer to
            understand. So, today, we’ll introduce you to Node.js and show you
            how to get started with a project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
