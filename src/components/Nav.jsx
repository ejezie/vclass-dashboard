import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import back from "../assets/icons/ep_back.png";

function Nav() {

  const navigate = useNavigate();

  return (
    <div className="nav">
      {/* <NavLink to={() => navigate(-1)}> */}
      <img src={back} alt="icon" />
      {/* </NavLink> */}
      <NavLink to={"/"}>Test</NavLink>
      <NavLink to={"/profile/lecture"}>Lecture</NavLink>
      <NavLink to={"profile/lecture"}>Study material</NavLink>
      <NavLink to={"profile/lecture"}>List of student and teacher</NavLink>
    </div>
  );
}

export default Nav;
