import React from 'react';
import { Link } from 'react-router-dom';

import './TeamTile.scss';

const TeamTile = ({ teamName }) => {
  const currentYear = process.env.REACT_APP_DATA_END_YEAR;

  return (
    <div className='TeamTile'>
      <h1 className='team-tile-container'>
        <Link to={`/teams/${teamName}/${currentYear}`}>{teamName}</Link>
      </h1>
    </div>
  );
};

export default TeamTile;
