const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const boxes = [];
const mousePos = {x: 0, y: 0};
let panel;
let selectedBox;
let oX;
let oY;
let step;
let ratId;

ctx.font = 'bold 30px sans-serif';

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let box of boxes) {
        // box.x += box.speed;
        // if(box.x > canvas.width) {
        //     box.x = -box.width;
        // }
        box.draw();
    }
    switch(step) {
        case 1: 
        for(let box of boxes) {
            box.x += box.speed;
            if(box.x > canvas.width) {
                box.x = -box.width;
            }
     
        }
        panel.scale = 0;
            break;
        case 2:
            //panel.scale += 0.02;
            //현재크기 = 현재크기 + (목표크기 - 현재크기)*0.1;
            panel.scale = panel.scale + (1 - panel.scale)*0.1;
            // 각도 = 스케일(0~1) * 720(각도);
            panel.angle = panel.scale * 720;
            panel.draw();
            if(panel.scale >= 0.999) {
                panel.scale = 1;
                step = 3;
            }
            break;

      case 3: 
      panel.draw();
      
            break;
    }
    rafId = requestAnimationFrame(render);
    if( step === 3 ) {
        panel.showContent();
        cancelAnimationFrame(rafId);
    }
}

let tempX, tempY, tempSpeed;

function init() {
    step = 1;
    oX = canvas.width / 2;
    oY = canvas.height / 2;
    for (let i = 0; i < 10; i++) {
        tempX = Math.random() * CANVAS_WIDTH * 0.8;
        tempY = Math.random() * CANVAS_HEIGHT * 0.8;
        tempSpeed = Math.random() *4 + 1;
        boxes.push(new Box(i, tempX, tempY, tempSpeed));
    }
    panel = new Panel();
    render();
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
    if(step === 1 && selectedBox){
    step = 2;
    } else if (step === 3) {
        step = 1;
        selectedBox = null;
        render();
    }
});

init();
