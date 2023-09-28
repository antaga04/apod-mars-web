import React, { useState } from 'react'
import './Apod.css'
import Template from '../../components/Template/Template'
import { API_KEY, NASA_URL } from '../../utils/data';
import ApodModel from '../../components/APODModel/ApodModel';

const Apod = () => {
  const APOD_URL = `${NASA_URL}planetary/apod?`;

  return (
    <Template name="apod" endpoint={APOD_URL} Model={ApodModel}/>
  )
}

export default Apod