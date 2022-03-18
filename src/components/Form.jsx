import React from "react";

import line from "../assets/icons/Line.png";
import select from "../assets/icons/select.png";

function Form({ option, btnText, btnAction }) {
  return (
    <div className="form">
      <form action="" className="form-wrap">
        <div className="text">Select</div>
        <img src={line} alt="line" />
        <div className="select-wrap">
          <img src={select} alt="select-icon" />
          <select name="" id="">
            <option value={option}>{option}</option>
          </select>
        </div>
      </form>
      <button onClick={btnAction} className="btn">
        {btnText}
      </button>
    </div>
  );
}

export default Form;
