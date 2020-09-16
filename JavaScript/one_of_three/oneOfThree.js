const stage = document.querySelector(".stage");
let selectDoorElem;

const selectDoor = (elm) => {
  selectDoorElem = elm;
};

const inactive = (elm) => {
  elm.classList.remove("open_door");
};

const active = (elm) => {
  elm.classList.add("open_door");
  selectDoor(elm);
};

const doorHandler = (e) => {
  const targetElem = e.target;

  if (selectDoorElem) {
    inactive(selectDoorElem);
  }
  if (targetElem.classList.contains("door--front")) {
    active(targetElem.parentNode);
  }
};

const init = () => {
  stage.addEventListener("click", doorHandler);
  requestAnimationFrame(function () {
    active(document.querySelector(".door:nth-child(2)"));
  });
};

init();
