const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: ['2048', '2048'],
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 5;
    for( let x = 0; x < 5; x++){
      for( let y = 0; y < 5; y++){
        const u = x / count;
        const v = y / count;
        points.push([ u, v ]);
      }
    }
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);
  }
};

canvasSketch(sketch, settings);
