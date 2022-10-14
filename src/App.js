import React from 'react';
import { useState } from 'react';
import Item from './Item';
import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState(new Values('rgb(71,17,71)').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors(new Values(color).all(10));
  };

  const handleRandom = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  };

  return (
    <main>
      <header>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="color"
            value={color}
            placeholder="rgb(71,17,71)"
            onChange={(e) => setColor(e.target.value)}
          />
          <button>Submit</button>
          <button onClick={handleRandom}>Random</button>
        </form>
      </header>

      <section>
        {colors.map((color, index) => {
          return <Item key={index} color={color} index={index} />;
        })}
      </section>
    </main>
  );
};

export default App;
