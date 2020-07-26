const canvas = document.querySelector('#draw');
const effects = document.querySelector('.effects');
const clear = document.querySelector('.clear');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#F3789A';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.global

let isDrawing = false; 
let lastX = 0, lastY = 0;
let hue = 0;
let direction = true;
let blend = false;

function draw(e) { // handle drawing on canvas, changing linewidth & colors
  if (!isDrawing) return;
  
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) { hue = 0; }

  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) { direction = !direction };
  (direction) ? ctx.lineWidth++ : ctx.lineWidth--;
}

function handleEffect(e) { // handle changing global composite operation
  const fx = effects[effects.selectedIndex].value;
  ctx.globalCompositeOperation = fx;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
effects.addEventListener('change', handleEffect);
clear.addEventListener('click', clearCanvas);