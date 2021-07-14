import React, { useState } from 'react';
import { Canvas } from './components/Canvas';
import { ClearCanvas } from './components/ClearCanvas';
import { DownloadCanvas } from './components/DownloadCanvas';

const App = () => {
  const [strokeColor, setStroke] = useState('yellow');

  return (
    <>
      <div className='canvas-portal'>
        <div className='color-palatte'>
          <div
            className='red'
            onClick={() => {
              setStroke('red');
            }}
          ></div>
          <div
            className='blue'
            onClick={() => {
              setStroke('blue');
            }}
          ></div>
          <div
            className='green'
            onClick={() => {
              setStroke('green');
            }}
          ></div>
          <div
            className='yellow'
            onClick={() => {
              setStroke('yellow');
            }}
          ></div>
        </div>
        <div className='main-canvas'>
          <Canvas strokeColor={strokeColor} />
        </div>
        <div className='canvas-buttons'>
          <ClearCanvas />
          <DownloadCanvas />
        </div>
      </div>
    </>
  );
};

export default App;
