import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="notfound">
      <section className="black-hole">
        <b></b>
      </section>
      <div className="error-message">
        <h1>Error 404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </main>
  );
};

export default NotFound;
