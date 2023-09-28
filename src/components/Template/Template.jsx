import React, { useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';

const Template = ({ name }) => {
  // formato ISO -> 2023-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);

  return (
    <main id={name} className="page__wrapper flex-center">
      <FunctionBar name={name} today={today} date={date} setDate={setDate} />
      <img src="" alt="Img" />
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum nam ut corrupti illum
        odio nostrum in quibusdam nesciunt quia harum distinctio eligendi, illo ipsam minus incidunt
        delectus facilis recusandae?
      </p>
      <p>Copyright</p>
    </main>
  );
};

export default Template;
