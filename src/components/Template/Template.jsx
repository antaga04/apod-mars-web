import React, { useEffect, useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';
import { API_KEY, roverData } from '../../utils/data';
import Loading from '../Loading/Loading';

const Template = ({ name, endpoint, Model, day }) => {
  const [rover, setRover] = useState('curiosity');
  const roverInfo = roverData.find((item) => item.rover === rover);
  const [date, setDate] = useState(day);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const apodUrl = `date=${date}&api_key=${API_KEY}`;
  const mrpUrl = `${rover}/photos?earth_date=${date}&api_key=${API_KEY}`;
  const url = endpoint + (name === 'apod' ? apodUrl : mrpUrl);

  const fetchData = async () => {
    try {
      const cachedData = localStorage.getItem(url);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        console.log('API REQUEST');

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('There was an error in the request');
        }
        const newData = await response.json();
        setData(newData);
        setLoading(false);

        localStorage.setItem(url, JSON.stringify(newData));
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [date, rover]);

  return (
    <main id={name} className="page__wrapper flex-center">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="error-message">Error: {error.message}</div>
      ) : (
        <section className="content flex-center">
          <figure className="card-container">
            <FunctionBar
              name={name}
              date={date}
              minDate={name === 'apod' ? '1995-06-16' : roverInfo.min_date}
              maxDate={name === 'apod' ? day : roverInfo.max_date}
              setDate={setDate}
              setRover={setRover}
              rover={rover}
            />
            <Model data={data} name={name} />
          </figure>
        </section>
      )}
    </main>
  );
};

export default Template;
