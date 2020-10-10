const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const control = document.querySelector('.control');
const saveBtn = document.querySelector('.save-btn');
const resultImg = document.querySelector('.result-image');
let drawingMode; //true일때만 그리기
let brush = 'color'; // 'color', 'image'
let colorVal = 'black';

const imgElem = new Image();
imgElem.src = "../assets/ilbuni_1.png";

function downHandler(){
  drawingMode = true;
}

function upHandler(){
  drawingMode = false;
}

function moveHandler(e) {
  if(!drawingMode) return;

  switch (brush) {
    case "color":
      context.beginPath();
  context.arc(e.layerX, e.layerY, 10, 0, Math.PI*2, false);
  //clientX, clientY는  브라우저 왼쪽 위를 기준으로 잡음
  //layerX, layerY는 캔버스 기준으로 위치를 잡음
  context.fill();
      break;
    case "image":
      context.drawImage(imgElem, e.layerX, e.layerY, 50, 50);
      break; 
  }

  
}

function setColor(event) {
  brush = event.target.getAttribute('data-type');
  colorVal = event.target.getAttribute('data-color');
  context.fillStyle = colorVal;
}

function createImage() {
  const url = canvas.toDataURL('image/png'); //이미지 저장시킴
  const imgElem = new Image();
  imgElem.src = url;
  resultImg.appendChild(imgElem);
  //canvas.toDataURL(type, encoderOptions);
  console.log(url);
}

canvas.addEventListener('mousedown', downHandler);
canvas.addEventListener('mousemove', moveHandler);
canvas.addEventListener('mouseup', upHandler);
control.addEventListener('click', setColor);
saveBtn.addEventListener('click', createImage);