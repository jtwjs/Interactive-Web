const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const boxes = [];
const mousePos = {x: 0, y: 0};
let selectedBox;
ctx.font = 'bold 30px sans-serif';

class Box {
    constructor(index,x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 100;
        this.height = 100;
        this.draw();
    }

    draw() {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(this.x, this.y, 100, 100);
        ctx.fillStyle = '#fff';
        ctx.fillText(this.index, this.x+30, this.y+30)
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let box of boxes) {
        box.x += box.speed;
        if(box.x > canvas.width) {
            box.x = -box.width;
        }
        box.draw();
    }
    requestAnimationFrame(render);
}

let tempX, tempY;

for (let i = 0; i < 10; i++) {
    tempX = Math.random() * CANVAS_WIDTH * 0.8;
    tempY = Math.random() * CANVAS_HEIGHT * 0.8;
    tempSpeed = Math.random() *4 + 1;
    boxes.push(new Box(i, tempX, tempY, tempSpeed));
}

canvas.addEventListener('click', e => {
    mousePos.x = e.layerX;
    mousePos.y = e.layerY;

    let box;
    for(let i = 0; i <boxes.length; i++) {
        box = boxes[i];
        if (mousePos.x > box.x &&
            mousePos.x < box.x + box.width &&
            mousePos.y > box.y &&
            mousePos.y < box.y + box.height) {
                selectedBox = box;
        } 
    }
    if(selectedBox){
    console.log(selectedBox.index);
    selectedBox = null;
    }
});

render();