import React, { useEffect } from 'react';
import './FunctionBar.css';
import { Shuffle } from '../Icons/Icons';
import { roverData } from '../../utils/data';
import { randomDate } from '../../utils/functions';

const FunctionBar = ({ name, date, setDate, setRover, rover, minDate, maxDate }) => {
  useEffect(() => {
    if (name === 'apod') return;
    
    const selectedRoverInfo = roverData.find((item) => item.rover === rover);

    if (selectedRoverInfo && selectedRoverInfo.min_date && selectedRoverInfo.max_date) {
      if (date < selectedRoverInfo.min_date || date > selectedRoverInfo.max_date) {
        setDate(selectedRoverInfo.max_date);
      }
    }
  }, [rover, date]);

  return (
    <div className={`flex-center function-bar ${name}`}>
      <input
        className="pill"
        type="date"
        value={date}
        min={minDate}
        max={maxDate}
        onInput={(e) => {
          setDate(e.target.value.toLocaleString());
        }}
      />

      {name == 'apod' ? null : (
        <select
          className="pill"
          name="rovers"
          id="roverSelect"
          onChange={(e) => {
            setRover(e.target.value);
          }}
          value={rover}
        >
          <option value="curiosity">Curiosity</option>
          <option value="spirit">Spirit</option>
          <option value="opportunity">Opportunity</option>
        </select>
      )}

      <button
        className="pill flex-center shuffle-btn"
        onClick={() => {
          setDate(randomDate(minDate, maxDate));
        }}
      >
        <Shuffle />
        <span>Date</span>
      </button>
    </div>
  );
};

export default FunctionBar;
