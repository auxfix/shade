const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'green';
    context.beginPath();
    context.arc(width/2, height/2, 200, 0, 2 * Math.PI);
    context.fill();
    context.lineWidth = 20;
    context.stroke();
  }
};

canvasSketch(sketch, settings);
