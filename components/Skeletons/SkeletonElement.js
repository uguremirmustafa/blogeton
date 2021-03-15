import React from 'react';

function SkeletonElement({ type }) {
  const classes = `${type} skeleton`;
  return <div className={classes}></div>;
}

export default SkeletonElement;
