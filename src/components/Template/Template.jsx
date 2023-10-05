import React, { useEffect, useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';
import { API_KEY, roverData } from '../../utils/data';
import Loading from '../Loading/Loading';
import { formatDateToDayFirst } from '../../utils/functions';

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

  const minDate = name === 'apod' ? '1995-06-16' : roverInfo.min_date;
  const maxDate = name === 'apod' ? day : roverInfo.max_date;

  const isWrongDate = (inputDate) => {
    const parsedDate = new Date(inputDate);
    console.log('iswongdate');

    if (parsedDate > new Date(maxDate) || parsedDate < new Date(minDate)) {
      return true;
    }
    return false;
  };

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

  /* useEffect(() => {
    setLoading(true);
    isWrongDate(date) ? setError(true) : fetchData();
  }, [date, rover]);
 */
  useEffect(() => {
    if (isWrongDate(date)) {
      setError(
        'La fecha seleccionada es incorrecta. Debe estar entre ' +
          formatDateToDayFirst(minDate) +
          ' y ' +
          formatDateToDayFirst(maxDate)
      );
    } else {
      setError(false);
      setLoading(true);
      fetchData();
    }
  }, [date, rover]);

  return (
    <main id={name} className="page__wrapper flex-center">
      {loading ? (
        <Loading />
      ) : (
        <section className="content flex-center">
          <figure className="card-container">
            <FunctionBar
              name={name}
              date={date}
              minDate={minDate}
              maxDate={maxDate}
              setDate={setDate}
              setRover={setRover}
              rover={rover}
            />
            {error ? (
              <div className="error-message flex-center" style={{ flex: '1', fontWeight: '700' }}>
                {error}
              </div>
            ) : (
              <Model data={data} name={name} />
            )}
          </figure>
        </section>
      )}
    </main>
  );
};

export default Template;
