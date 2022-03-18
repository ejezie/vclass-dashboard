import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../assets/icons/ep_back.png";

function Nav({ clickTest, clickLecture, clickStudy, clickList, active }) {

  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav-wrap">
        <Link to={() => navigate(-1)}>
          <img src={back} alt="icon" />
        </Link>
        <div
          onClick={clickTest}
          className={`links ${active === "test" ? "active" : "not-active"}`}
        >
          Test
        </div>
        <div
          className={`links ${active === "lecture" ? "active" : "not-active"}`}
          onClick={clickLecture}
        >
          Lecture
        </div>
        <div
          className={`links ${active === "study" ? "active" : "not-active"}`}
          onClick={clickStudy}
        >
          Study material
        </div>
        <div
          className={`links ${active === "list" ? "active" : "not-active"}`}
          onClick={clickList}
        >
          List of student and teacher
        </div>
      </div>
    </div>
  );
}

export default Nav;
