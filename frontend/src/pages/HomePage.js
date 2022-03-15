import React, { useState, useEffect } from 'react';

import TeamTile from '../components/TeamTile';
import YearTile from '../components/YearTile';
import logo from '../assets/images/versus-logo.png';

import './HomePage.scss';

const HomePage = () => {
  const [teams, setTeams] = useState();
  const [isFetched, setIsFetched] = useState(false);

  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`/teams`);
      const data = await response.json();
      setTeams(data);
      setIsFetched(true);
    };

    fetchTeams();
  }, []);

  return (
    <div className='HomePage'>
      <div className='home-header'>
        <img className='app-logo' src={logo} alt='Versus Logo' />
        <h1 className='app-tag-line'>Select Team</h1>
      </div>
      <div className='team-grid'>
        {isFetched &&
          teams.map((team) => {
            return <TeamTile key={Math.random()} teamName={team} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
