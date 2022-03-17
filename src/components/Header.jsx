import React from "react";
import { Link } from "react-router-dom";
import notify from "../assets/icons/notify.png";
import dot from "../assets/icons/dot.png";
import settings from "../assets/icons/settings.png";
import message from "../assets/icons/message.png";
import profile from "../assets/images/profile.png";

function Header() {
  return (
    <div className="header">
      <div className="text">Dashboard</div>
      <div className="icon-wraps">
        <Link className="notify-wrap" to={""}>
          <img className="notify" src={notify} alt="icon" />
          <div className="notify-num">{`2`}</div>
        </Link>
        <Link className="message-wrap" to={""}>
          <img className="message-icon" src={message} alt="icon" />
          <img className="dot" src={dot} alt="icon" />
        </Link>
        <Link className="settings-icon" to={""}>
          <img src={settings} alt="icon" />
        </Link>
        <Link className="profile-image" to={""}>
          <img className="image" src={profile} alt="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
