import React, { useEffect } from 'react';
import { useCanvas } from '../context/CanvasContext';

export function Canvas(props) {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw } =
    useCanvas();

  useEffect(() => {
    prepareCanvas(props);
  }, [props]);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}
