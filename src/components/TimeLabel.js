import React from 'react';

const formatNumber = (number) => {
  return ("0" + number).slice(-2);
}

export default function TimeLabel({
	seconds,
  minutes,
}) {

  const currentTime = `${formatNumber(minutes)}:${formatNumber(seconds)}`;
	return (
    <div>
      <h1
        data-testid="currentTime" 
        className={`${minutes === 5 ? 'max-limit' : ''}`}
      >{currentTime}
      </h1>
    </div>
	)
}