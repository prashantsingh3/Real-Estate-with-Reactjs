import React from "react";
import "./Navbar.css";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="list">
      <div className="r_icon">
        <FaRegEnvelopeOpen
          style={{
            backgroundColor: "rgb(69, 102, 250)",
            borderRadius: " 19px 19px 2px 2px"
          }}
        />
        <span>Estatery</span>
      </div>

      <ul className="listItem">
        <li id="rent_clr" className="items">
          Rent
        </li>
        <li className="items">Buy</li>
        <li className="items">Sell</li>
      </ul>

      <div className="nav_select">
        <select>
          <option>Manage Properties</option>
        </select>
        <select>
          <option>Resources</option>
        </select>
      </div>

      <div className="log_in">
        <button className="btn">Login</button>
        <button id="sign" className="btn">
          SignUp
        </button>
      </div>
    </nav>
  );
}
