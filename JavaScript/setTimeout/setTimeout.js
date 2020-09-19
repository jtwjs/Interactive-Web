//setTimeout(): 지연시키는 의도.. 또는 비동기테스트
let timeId;
const btn = document.querySelector(".btn");

setTimeout(function () {
  console.log("함수실행!!");
}, 1000); //1000ms 후에  함수를 실행

function sample() {
  console.log("sample");
}

timeId = setTimeout(sample, 3000);

// btn.addEventListener("click", function () {
//   clearTimeout(timeId); // 취소
// });

//setInterval(): 설정한 시간마다 반복실행
timeId2 = setInterval(sample, 1000 / 60);

btn.addEventListener("click", function () {
  clearInterval(timeId2); // 취소
});
