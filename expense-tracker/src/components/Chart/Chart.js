import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const max = Math.max(...values);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
