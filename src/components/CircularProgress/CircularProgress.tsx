import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';


interface CircularProgressProps {
  value: number;
  maxValue: number;
  text: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, maxValue, text }) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={text}
        styles={buildStyles({
          pathColor: value > maxValue * 0.75 ? 'red' : 'green',
          textColor: 'black',
        })}
      />
    </div>
  );
};

export default CircularProgress;
