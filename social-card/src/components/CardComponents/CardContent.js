import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="card-content">
      <h2>Get started with 100 Days of Code</h2>
      <p>
      Learn more about the main rules, as well as some other considerations.

Code for minimum an hour a day
Tweet your progress daily with the hashtag: #100DaysOfCode
Each day, reach out to at least two people on Twitter who are also doing the challenge
      </p>
      <h3>100daysofcode.com</h3>
    </div>
  );
};

export default CardContent;
