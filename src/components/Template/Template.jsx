import React from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';

const Template = ({ name }) => {
  return (
    <div id={name}>
      <FunctionBar name={name}/>
      <img src="" alt="Img" />
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum nam ut corrupti illum
        odio nostrum in quibusdam nesciunt quia harum distinctio eligendi, illo ipsam minus incidunt
        delectus facilis recusandae?
      </p>
      <p>Copyright</p>
    </div>
  );
};

export default Template;
