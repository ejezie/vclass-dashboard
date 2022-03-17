import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../assets/icons/logo.jpg";
import calenda from "../assets/icons/calenda.png";
import chat from "../assets/icons/chat.png";
import settin from "../assets/icons/settin.png";
import Group from "../assets/icons/Group.png";
import hat from "../assets/icons/hat.png";
import stack from "../assets/icons/stack.png";
import grid from "../assets/icons/grid.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <img src={logo} alt="icon" />
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/dashboard"}
        >
          <img src={grid} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/courses"}
        >
          <img src={hat} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/room"}
        >
          <img src={chat} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/"}
        >
          <img src={Group} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/stack"}
        >
          <img src={stack} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/schedule"}
        >
          <img src={calenda} alt="icon" />
        </NavLink>
        <NavLink
          className={(navigationData) =>
            navigationData.isActive ? `active` : null
          }
          to={"/settings"}
        >
          <img src={settin} alt="icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
