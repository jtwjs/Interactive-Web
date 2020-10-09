const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let xPos = 10;
let count = 0;

function draw() {
  count++;

  if (count % 30 === 0) {
    context.clearRect(0, 0, canvas.width, canvas.height); //캔버스 초기화
    context.beginPath();
    context.arc(xPos, 150, 10, 0, Math.PI * 2, false);
    context.fill();
    xPos += 3;
  }
  requestAnimationFrame(draw);
}

draw();
