import "./reservation.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Reservation() {
    const [count, setCount] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const increment = () =>{
        if(count<16){
            setCount(count+1);
        }
        else{
            window.alert("Maximum 16 people allowed");
        }
    }
    const decrement = () =>{
        if(count>1){
            setCount(count-1);
        }
        else{
            window.alert("Invalid Number of people")
        }
    }
  return ( 
    <div className="reserv">
      <Link to="/">
        <FontAwesomeIcon className="back" icon={faArrowLeft} />
      </Link>
      <h1>Reservation Details</h1>
      <div className="inp">
        <input type="date" required/>
        <input type="time" value="10:00"/>
      </div>
      <h3>
        Table for
      </h3>
      <div className="cnt" style={{width: "none"}}>
        <button onClick={increment}>
        <FontAwesomeIcon icon={faCirclePlus}/>
        </button>
        <p>{count}</p>
        <button onClick={decrement}>
            <FontAwesomeIcon icon={faCircleMinus}/>
        </button>
      </div>
      <div className="req">
        <h2>Special Requests</h2>
        <input type="text" placeholder="Special Requests" />
      </div>
      <div className="logg">
        <Link to="/final" className="links">
          Confirm Table
        </Link>
      </div>
    </div>
  );
}
