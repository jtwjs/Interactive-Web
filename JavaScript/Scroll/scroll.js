function init() {
  const outputElem = document.querySelector(".output");
  const ilbuniElem = document.querySelector(".ilbuni");
  //이벤트리스너는 최대한 단순하게 만들자!(함수를 이용)
  function showValue() {
    // outputElem.innerHTML = window.pageYOffset; //pageYOffset: 현재 스크롤된 px값 나타냄
    // outputElem.innerHTML = ilbuniElem.offsetTop; //offsetTop: 처음 위치값만 나타냄
    let posY = ilbuniElem.getBoundingClientRect().top;
    //getBoundingClientRect(): element의 위치와 크기를 가지고있는 함수
    outputElem.innerHTML = posY;

    if (posY < window.innerHeight * 0.2) {
      ilbuniElem.classList.add("zoom");
    } else {
      ilbuniElem.classList.remove("zoom");
    }
  }

  window.addEventListener("scroll", function () {
    showValue();
  });
}

init();
