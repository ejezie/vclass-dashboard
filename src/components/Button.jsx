import React from "react";

function Button({ btnText, btnAction }) {
  return <div className="button" onClick={btnAction}>{btnText}</div>;
}

export default Button;
