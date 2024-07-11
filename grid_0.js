const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: ['200', '200'],
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

    return points;
  }
  const points = createGrid();

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);

    points.forEach(([ u, v ]) => {
      const x = u * width;
      const y = v * height;
      context.strokeStyle = 'black';
      context.beginPath();
      context.arc(x, y, 200, 0, Math.PI * 2, false);
      context.stroke();  
    });
  }
};

canvasSketch(sketch, settings);
