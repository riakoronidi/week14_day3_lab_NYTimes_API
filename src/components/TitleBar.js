import React from 'react';

const TitleBar = (props) => {
  return (
    <div className="title">
      <p className="date-now">Today: {(new Date(new Date().getTime())).toDateString()}</p>
      <h1>News of the day</h1>
    </div>
  )
}

export default TitleBar;
