import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import About from "./About";

const Header =()=>{
  const [btnName, setbtnName]=useState("Login");
    return (
        <div className="header">
          <div className="logo-container">
            <img src={LOGO_URL}/>
          </div>
          <div className="navbar-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li>Contact Us</li>
                <li>Cart</li>
                <div className="login-btn-container">
                <button className="login-btn"onClick={()=>{btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
                </div>
            </ul>
          </div>
        </div>
    )
}

export default Header;