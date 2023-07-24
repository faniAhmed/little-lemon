import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="sup">
      <Link to="/login">
        <FontAwesomeIcon className="back" icon={faArrowLeft} />
      </Link>
      <h1>Sign Up</h1>
      <div className="inp">
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name" required/>
        <input type="email" placeholder="E-mail" required/>
        <input type="tel" placeholder="Contact Number" required/>
      </div>
      <div className="inp2">
        <input type="text" placeholder="Username" required/>
        <input type="pass" placeholder="Password" required/>
      </div>
      <div className="subm">
        <Link to="/login" className="links">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
