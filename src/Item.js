import React, { useEffect, useState } from 'react';

const Item = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight } = color;
  const rgbColor = `rgb(${rgb.join(',')})`;

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(rgbColor);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      style={{ backgroundColor: rgbColor }}
      className={`grid-item ${index > 10 && 'white'}`}
      onClick={handleClick}
    >
      <p>{rgbColor}</p>
      <p>{weight}%</p>
      {alert && <p>copied to clipboard</p>}
    </div>
  );
};

export default Item;
