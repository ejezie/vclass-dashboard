import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import back from "../assets/icons/ep_back.png";

function Nav() {

  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav-wrap">
        {/* <NavLink to={() => navigate(-1)}> */}
        <img src={back} alt="icon" />
        {/* </NavLink> */}
        <NavLink to={"/"}>Test</NavLink>
        <NavLink to={"/lecture"}>Lecture</NavLink>
        <NavLink to={"profile/stack"}>Study material</NavLink>
        <NavLink to={"profile/room"}>List of student and teacher</NavLink>
      </div>
    </div>
  );
}

export default Nav;
