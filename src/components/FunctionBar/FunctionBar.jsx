import React from 'react';
import './FunctionBar.css'

const FunctionBar = ({ name, date, today, setDate }) => {
  return (
    <div className="flex-center function-bar">
      <label>{name.toUpperCase()}</label>
      <input
        type="date"
        value={date}
        min="1996-01-01"
        max={today}
        onInput={(event) => {
          setDate(event.target.value.toLocaleString());
        }}
      />
      <button>Random</button>
    </div>
  );
};

export default FunctionBar;
