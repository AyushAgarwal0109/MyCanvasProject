import React from 'react';
import { useCanvas } from '../context/CanvasContext';
import '../assets/css/canvas.css';

export const DownloadCanvas = () => {
  const { downloadCanvas } = useCanvas();

  return <button onClick={downloadCanvas}>Download Canvas</button>;
};
