import React from "react";

import Button from "./Button";
import Filter from "./Filter";

function FormStudy() {
  return (
    <div className="formstudy">
      <div className="wrap">
        <Filter />
        <Button btnText={"Upload new matrial"} btnAction={() => {}} />
      </div>

      <div className="border"></div>
    </div>
  );
}

export default FormStudy;
