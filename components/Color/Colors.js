import React from 'react';

const Colors = ({ size, bgColor, borderColor }) => {
  const circleStyle = {
    width: size,
    height: size,
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  return (
    <div
      className='rounded-full  border-4'
      style={circleStyle}
    >
      {/* Adjust 'border-4' for the border size */}
    </div>
  );
};

export default Colors;
