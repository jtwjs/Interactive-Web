const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const btnsElem = document.querySelector('.btns');

let imageData;
const particles = [];
let particle;
let colorValue;
let leng;

const videoElem = document.querySelector('.video');
videoElem.addEventListener('canplaythrough', render);

function render() {
    ctx.drawImage(videoElem, 0, 0, 600, 400);
    //drawImage에 넣을수 있는것 1,이미지 2,비디오 3,다른 캔버스
    imageData = ctx.getImageData(0, 0, 600, 400);
    //getImageData() 각 픽셀의 색상정보를 가져옴
    leng = imageData.data.length / 4; //leng === 픽셀수

    for( let i = 0; i < leng; i++) {
        switch(colorValue) {
            case 'red':
                imageData.data[i * 4 + 0] = 255;
            break;
            case 'green':
                imageData.data[i * 4 + 1] = 255;
            break;
            case 'blue':
                 imageData.data[i * 4 + 2] = 255;
            break;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    //바뀐 이미지데이터로 ㄱㄱ
    requestAnimationFrame(render);
}

btnsElem.addEventListener('click', function(e) {
    colorValue = e.target.getAttribute('data-color');

});