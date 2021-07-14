import React from 'react';
import { useCanvas } from '../context/CanvasContext';
import '../assets/css/canvas.css';

export const ClearCanvas = () => {
  const { clearCanvas } = useCanvas();

  return <button onClick={clearCanvas}>Clear Canvas</button>;
};
