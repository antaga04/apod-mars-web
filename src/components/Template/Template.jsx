import React, { useEffect, useState } from 'react';
import FunctionBar from '../FunctionBar/FunctionBar';
import './Template.css';
import { API_KEY, roverData } from '../../utils/data';
import Loading from '../Loading/Loading';

const Template = ({ name, endpoint, Model, day }) => {
  /* Evito pasar las props */
  /* Problema: tener que repetir lo que sea igual en ambos */
  /* Sobre todo los States. Ya que sería repetir lógica en vez de reutilizarla. */

  /* La idea sería tener 2 componentes específicos y así ahorrar las comprobaciones 
  de name y usar lógica innecesaria en el caso de no necesitarla dependiendo del name. 
  Véase donde poner // 🔴 mars. Y otras cosas más. */

  const [rover, setRover] = useState('curiosity'); // 🔴 mars
  const roverInfo = roverData.find((item) => item.rover === rover); // 🔴 mars

  const [date, setDate] = useState(day); // 2️⃣ ambas
  const [loading, setLoading] = useState(true); // 2️⃣ ambas
  const [data, setData] = useState([]); // 2️⃣ ambas
  const [error, setError] = useState(false); // 2️⃣ ambas

  const apodUrl = `date=${date}&api_key=${API_KEY}`; // evito prop 'endpoint'
  const mrpUrl = `${rover}/photos?earth_date=${date}&api_key=${API_KEY}`; // evito prop 'endpoint'
  const url = endpoint + (name === 'apod' ? apodUrl : mrpUrl); // no sería necesario

  /* También añadir un map a la información recibida para quedarme sólo con los campos
  que me interesan. En apod son todos pero en mrp es sólo un campo. */

  /* Esta lógica puede servir para las dos. Sacar la lógica a una function */
  const fetchData = async () => {
    console.log('API REQUEST');
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('There was an error in the request');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [date, rover]);
  /* HASTA AQUI */

  /* Esto es lo mismo para ambas */
  /* Cambiaría el modelo sólamente */
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
              minDate={roverInfo.min_date}
              maxDate={roverInfo.max_date}
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
