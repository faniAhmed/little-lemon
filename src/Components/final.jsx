import "./final.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Final() {
  return (
    <div className="last">
      <div className="logos">
        <FontAwesomeIcon className="logo" icon={faCalendarCheck} />
      </div>
      <h1>Thank you!</h1>
      <div className="cont">
        <h2>Your Reservation</h2>
        <h2>Requirement was successfully submited</h2>
        <h2>To check the details go to the MY Account page in the menu</h2>
      </div>
      <div className="butn">
      <Link className="links" to="/">
        Back to Home
      </Link>
      </div>
    </div>
  );
}
