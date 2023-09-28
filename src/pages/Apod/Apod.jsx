import React, { useState } from 'react'
import './Apod.css'
import Template from '../../components/Template/Template'
import { NASA_URL, today } from '../../utils/data';
import ApodModel from '../../components/APODModel/ApodModel';

const Apod = () => {
  const APOD_URL = `${NASA_URL}planetary/apod?`;

  return (
    <Template name="apod" endpoint={APOD_URL} Model={ApodModel} day={today}/>
  )
}

export default Apod