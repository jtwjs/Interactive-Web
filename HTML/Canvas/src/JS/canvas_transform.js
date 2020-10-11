const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let scaleValue = 1;
let rotationValue = 0;
let direction = 1;

function toRadian(degree) {
    return degree * Math.PI/180;
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 255).toString(16);
    const green = Math.floor(Math.random() * 255).toString(16);
    const blue = Math.floor(Math.random() * 255).toString(16);
    return `#${red}${green}${blue}`;
}

function draw() {
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
    direction = direction * -1;
    ctx.save(); //기준점이 transalte 되기전 상태를 저장
    ctx.strokeStyle = getRandomColor();
    ctx.setTransform(1,0,0,1,0,0);
    //setTransform(변환행렬): 변환 초기화
    ctx.translate(250, 250); //기준점을 이동
    ctx.scale(scaleValue, scaleValue);
    ctx.rotate(toRadian(rotationValue*direction));
    
    ctx.strokeRect(-50, -50, 100, 100);//변환이 끝난다음에 그리기
    ctx.restore();
    
    scaleValue -= 0.01;
    rotationValue += 1; //canvas에서 각도는 라디안값으로 해야함

    requestAnimationFrame(draw);
}


draw();