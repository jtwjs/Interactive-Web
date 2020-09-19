const ballElem = document.querySelector(".ball");

window.addEventListener("click", function (e) {
  //   console.log(e.clientX, e.clientY);
  // e.clientX, e.clientY : 현재 이벤트 대상의 위치(x ,y 좌표)
  ballElem.style.transform = "translate(" + (e.clientX - 15) + "px, " + (e.clientY - 15) + "px)";
});

/*transitionstart: 트랜지션이 시작될때 이벤트 발생
transitionend: 트랜지션이 끝날때 이벤트 발생
*/
ballElem.addEventListener("transitionend", function (e) {
  //transition이 끝난 뒤에 무언가를 할때 유용
  ballElem.classList.add("end");

  //transition 완료 이벤트: 트랜지션을 완료하면 발생하는 단일 이벤트
  console.log(e.elapsedTime);
  /*1.elapsedTime: 트랜지션이 재생되는데 얼마나 시간이 경과햇는지 알려줌 == transtion-duration 값
  transition-delay의 영향을 받지 않는다.
  */
  console.log(e.propertyName);
  //propertyName: 트랜지션을 완료한 CSS 속성의 이름을 나타내는 문자열
});
