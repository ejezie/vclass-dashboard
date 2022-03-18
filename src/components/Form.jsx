import React from "react";

import Button from "./Button";
import Select from "./Select";

function Form({ option, btnText, btnAction }) {
  return (
    <div className="form">
      <Select option={option} />
      <Button btnText={btnText} btnAction={btnAction} />
    </div>
  );
}

export default Form;
