let timeId;
let count = 0;
const btn = document.querySelector(".btn");

function sample() {
  count++;

  if (count % 60 === 0) {
    //반복시간 설정  흉내 가능
    console.log("힘내");
  }
  timerId = requestAnimationFrame(sample);
  //목표가 초당 60번 (상황에 따라 늦쳐질수 있다.)
}

//requestAnimationFrame(sample); 함수바깥에서 실행시 setTimeout처럼 1번말 실행됨

sample();

btn.addEventListener("click", function () {
  cancelAnimationFrame(timeId);
});
