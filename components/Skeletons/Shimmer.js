import React from 'react';

function Shimmer({ theme }) {
  return (
    <div className="shimmer-wrapper">
      <div className={`shimmer ${theme}`}></div>
    </div>
  );
}

export default Shimmer;
