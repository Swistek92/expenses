import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );

  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className='chart'>
      {props.dataPoints.map((e) => (
        <ChartBar
          key={e.label}
          value={e.value}
          maxValue={totalMaximum}
          label={e.label}
        />
      ))}
    </div>
  );
};

export default Chart;
