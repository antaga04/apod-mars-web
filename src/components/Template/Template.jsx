import React, { useEffect, useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';
import { API_KEY } from '../../utils/data';
import Loading from '../Loading/Loading';

// `${NASA_URL}planetary/${name}?date=${date}&api_key=${key}`

const Template = ({ name, endpoint, Model }) => {
  // formato ISO -> 2023-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [date, setDate] = useState(today);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url =
    endpoint +
    (name === 'apod' ? `date=${date}&api_key=${API_KEY}` : `earth_date=${date}&api_key=${API_KEY}`);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        // setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  return (
    <main id={name} className="page__wrapper flex-center">
      <FunctionBar name={name} today={today} date={date} setDate={setDate} />
      <section className="content">
        {/* {loading === true ? <Loading /> : <Model data={data} name={name} />} */}
        <Model data={data} name={name} load={loading}/>
      </section>
    </main>
  );
};

export default Template;
