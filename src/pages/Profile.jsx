import React, { useState } from "react";

import Nav from "../components/Nav";
import Form from "../components/Form";
import FormStudy from "../components/FormStudy";
import FormList from "../components/FormList";
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
      {(active === "test" || active === "lecture") && (
        <Form
          option={active === "test" ? "Past test" : "Past lecture"}
          btnAction={btnAction}
          btnText={active === "test" ? "Schedule new test" : "Schedule lecture"}
        />
      )}
      {active === "study" && (
        <FormStudy
          btnAction={btnAction}
          btnText={active === "Search material"}
        />
      )}
      {active === "list" && (
        <FormList
          btnAction={btnAction}
          btnText={active === "Search material"}
        />
      )}
      {active === "test" && [<Test />, <Test />]}
      {active === "lecture" && [<Lecture />, <Lecture />]}
    </div>
  );
}

export default Profile;
