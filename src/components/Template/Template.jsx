import React, { useEffect, useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';
import { API_KEY } from '../../utils/data';

const Template = ({ name, endpoint, Model, day }) => {
  const [date, setDate] = useState(day);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url =
    endpoint +
    (name === 'apod' ? `date=${date}&api_key=${API_KEY}` : `earth_date=${date}&api_key=${API_KEY}`);

  useEffect(() => {
    console.log(day);

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
      <FunctionBar name={name} today={day} date={date} setDate={setDate} />
      <section className="content">
        {/* {loading === true ? <Loading /> : <Model data={data} name={name} />} */}
        <Model data={data} name={name} load={loading} />
      </section>
    </main>
  );
};

export default Template;
