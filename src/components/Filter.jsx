import React from 'react'

import filterIcon from "../assets/icons/filter.png"

function Filter({btntext}) {
  return (
    <div className="filter">
      <form action="" className="filter-form">
        <label htmlFor="input">Input keyword</label>
        <div className="input-wrap">
          <input type="text" id="input" />
          <img src={filterIcon} alt="icon" />
        </div>
        <button className="form-btn">Search material</button>
      </form>
    </div>
  );
}

export default Filter