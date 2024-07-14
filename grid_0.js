const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: ['200', '200'],
};

const margin = 400;

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 40;
    for( let x = 0; x < count; x++){
      for( let y = 0; y < count; y++){
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push([ u, v ]);
      }
    }

    return points;
  }

  random.setSeed('gtx');
  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);

    points.forEach(([ u, v ]) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      context.strokeStyle = 'black';
      context.beginPath();
      context.lineWidth = 10;
      context.arc(x, y, 8, 0, Math.PI * 2, false);
      context.stroke();  
    });
  }
};

canvasSketch(sketch, settings);
