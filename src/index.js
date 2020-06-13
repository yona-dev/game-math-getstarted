const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let start = null;
const FPS = 30;
const frameTime = 1 / FPS;
let frame = 0;
let realtimeFPS = 0;
let prevTimestamp = 0;

const loop = timestamp => {
  const elapsed = (timestamp - prevTimestamp) / 1000;
  if (elapsed <= frameTime) {
    requestAnimationFrame(loop);
    return;
  }
  prevTimestamp = timestamp;
  frame++;
  if (!start) start = timestamp;
  if (timestamp - start >= 1000) {
    realtimeFPS = frame;
    frame = 0;
    start = timestamp;
  }
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillText(`FPS: ${realtimeFPS}`, 10, 10);
  update();
  window.requestAnimationFrame(loop);
};
window.requestAnimationFrame(loop);

// animation logic
let x = 100;
let y = 100;
const update = () => {
  // ctx.clearRect(x, y, 100, 100);
  x += 1;
  ctx.fillRect(x, y, 100, 100);
};
