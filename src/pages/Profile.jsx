import React, { useState } from "react";

import Nav from "../components/Nav";
import Form from "../components/Form";
import Test from "../components/Test";
import Lecture from "../components/Lecture";

function Profile() {
  const [active, setActive] = useState("test");

  const clickTest = () => {
    setActive("test");
  };
  const clickLecture = () => {
    setActive("lecture");
  };
  const clickStudy = () => {
    setActive("study");
  };
  const clickList = () => {
    setActive("list");
  };

  const btnAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page profile">
      <Nav
        clickTest={clickTest}
        clickStudy={clickStudy}
        clickLecture={clickLecture}
        clickList={clickList}
        active={active}
      />
      { (active==="test" || active ==="lecture") &&
        <Form
          option={"Past test"}
          btnAction={btnAction}
          btnText={"Schedule new test"}
        />
      }
      {active === "test" && [<Test />, <Test />]}
      {active === "lecture" && [<Lecture />, <Lecture />]}
    </div>
  );
}

export default Profile;
