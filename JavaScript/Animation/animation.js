function init() {
  const ballElem = document.querySelector(".ball");

  /*
animationstart: 애니메이션이 실행되면 이벤트 발생
animationend: 애니메이션이 종료되면 이벤트 발생
animationiteration: 애니메이션이 반복이 되는 시점에 이벤트 발생(처음턴에는 X)
 */
  ballElem.addEventListener("click", function () {
    ballElem.style.animation = "ball-ani 1s 3 alternate forwards";
  });

  ballElem.addEventListener("animationstart", function () {
    ballElem.classList.add("end");
  });

  ballElem.addEventListener("animationiteration", function () {
    console.log("반복");
  });
}
init();
