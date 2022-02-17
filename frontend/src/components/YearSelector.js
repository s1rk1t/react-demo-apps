import React from 'react';
import { Link } from 'react-router-dom';

export const YearSelector = ({ team }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  console.log('start year: ', startYear);
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <div>
      {years.map((year) => (
        <li key={Math.random().toString()}>
          <Link to={`/teams/${team}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </div>
  );
};
