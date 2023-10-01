import React, { useState } from 'react';
import './Mars.css';
import Template from '../../components/Template/Template';
import { NASA_URL, otherDay } from '../../utils/data';
import MarsModel from '../../components/MarsModel/MarsModel';

const Mars = () => {
  const MARS_URL = `${NASA_URL}mars-photos/api/v1/rovers/`;

  return <Template name="mrp" endpoint={MARS_URL} Model={MarsModel} day={otherDay}/>;
};

export default Mars;
