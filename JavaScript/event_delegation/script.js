const ilbuniGroup = document.querySelectorAll(".item");
const container = document.querySelector(".container");

const clickHandler = (e) => {
  if (e.target.classList.contains("item")) container.removeChild(e.target);
  //부모 컨테이너에 이벤트를걸고 e.target으로 처리
};

const init = () => {
  container.addEventListener("click", clickHandler); //이벤트 위임
};

init();

/*이벤트 위임시 원하는 자식엘리먼트만 target으로 삼고 싶을 때
1. CSS로 처리하는 방법
  - 나머지 엘리먼트들에게 pointer-events:none; 사용
  - 하위 element들도 이벤트타깃이안됨...
2. JS로 처리하는 방법
  - const clickHandler = (e) => {
    let elem = e.target;
    while(!elm.classList.contains('찾고자 하는 class')) {
      elem = elem.parentNode;

      if(elem.nodeName == 'BODY') {
        elem = null;
        return;
      }
    }
  }
- 이벤트 위임 장점😁
  동적으로 생긴 element들도 이벤트 타깃이되어짐(JS)
*/
