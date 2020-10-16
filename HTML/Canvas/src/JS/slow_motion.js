const body = document.querySelector('body');
const box = document.querySelector('.box');

let delayedYOffset = 0;
let acc = 0.1;
let rafId;
let rafState;
let ratio;
//console.log(body.offsetHeight); 전체 높이
//console.log(window.innerHeight); 현재 화면의 높이
//console.log(body.offsetHeight - window.innerHeight); 총 스크롤 길이
function loop() {
    console.log('loop');
    let width = window.innerWidth / 100 * ratio;
    
    delayedYOffset = delayedYOffset + (width - delayedYOffset) * acc;
    box.style.width = `${delayedYOffset}px`;
    rafId = requestAnimationFrame(loop);
    
    if(Math.abs(width - delayedYOffset) < 1) {        
        cancelAnimationFrame(rafId);
        rafState = false;
    }
}

window.addEventListener('scroll', () => {
    ratio = Math.round(window.pageYOffset/(body.offsetHeight - window.innerHeight) * 100);
    
    if(!rafState) {
        rafId = requestAnimationFrame(loop);
        rafState = true;
    }
    
});

