import React from 'react';

const FunctionBar = ({ name, date, today, setDate }) => {
  return (
    <div className="flex-center">
      <label>{name}</label>
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
