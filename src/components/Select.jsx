import React from 'react'

import line from "../assets/icons/Line.png";
import select from "../assets/icons/select.png";

function Select({option}) {
  return (
    <form action="" className="form-wrap">
        <div className="text">Select</div>
        <img className='line' src={line} alt="line" />
        <div className="select-wrap">
          <img src={select} alt="select-icon" />
          <select name="" id="">
            <option value={option}>{option}</option>
          </select>
        </div>
      </form>
  )
}

export default Select