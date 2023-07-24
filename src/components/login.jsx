import "./login.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="logins">
      <Link to="/">
        <FontAwesomeIcon className="back" icon={faArrowLeft} />
      </Link>
      <h1>Already a Customer?</h1>
      <div className="movh2">
        <h2>Login to Continue</h2>
      </div>
      <div className="inputing">
        <input type="text" placeholder=" Username" />
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="logg">
        <Link to="/reservation" className="links">
          Log In
        </Link>
      </div>
      <h3>Forgot Password?</h3>
      <div className="movh2">
      <h2 >
        New here?
      </h2>
      </div>
      <div className="logg">
        <Link to="/signup" className="links">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
