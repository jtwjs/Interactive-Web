function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML = `
    <div class="character">
          <div class="character-face-con character-head">
            <div class="character-face character-head-face face-front"></div>
            <div class="character-face character-head-face face-back"></div>
          </div>
          <div class="character-face-con character-torso">
            <div class="character-face character-torso-face face-front"></div>
            <div class="character-face character-torso-face face-back"></div>
          </div>
          <div class="character-face-con character-arm character-arm-right">
            <div class="character-face character-arm-face face-back"></div>
            <div class="character-face character-arm-face face-front"></div>
          </div>
          <div class="character-face-con character-arm character-arm-left">
            <div class="character-face character-arm-face face-back"></div>
            <div class="character-face character-arm-face face-front"></div>
          </div>
          <div class="character-face-con character-leg character-leg-right">
            <div class="character-face character-leg-face face-back"></div>
            <div class="character-face character-leg-face face-front"></div>
          </div>
          <div class="character-face-con character-leg character-leg-left">
            <div class="character-face character-leg-face face-back"></div>
            <div class="character-face character-leg-face face-front"></div>
          </div>
        </div>`;

  document.querySelector(".stage").appendChild(this.mainElem);
  this.mainElem.style.left = info.xPos + "%";
  //스크롤 중인지 아닌지
  this.scrollState;
  //바로 이전(마지막) 스크롤 위치
  this.lastScrollTop = 0;
  this.xPos = info.xPos;
  this.speed = info.speed;
  this.direction;
  //좌우 이동 중인지 판별
  this.runningState = false;
  this.rafId;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    window.addEventListener("scroll", () => {
      clearTimeout(this.scrollState);
      if (!this.scrollState) {
        this.mainElem.classList.add("running");
      }

      this.scrollState = setTimeout(() => {
        this.scrollState = false;
        this.mainElem.classList.remove("running");
      }, 100);

      if (this.lastScrollTop > pageYOffset) {
        this.mainElem.setAttribute("data-direction", "backward");
      } else {
        this.mainElem.setAttribute("data-direction", "forward");
      }

      this.lastScrollTop = pageYOffset;
    });

    window.addEventListener("keydown", (e) => {
      if (this.runningState) return;
      if (e.keyCode == 37) {
        //왼쪽
        this.mainElem.setAttribute("data-direction", "left");
        this.mainElem.classList.add("running");
        this.direction = "left";
        this.run();
        this.runningState = true;
      } else if (e.keyCode == 39) {
        //오른쪽
        this.mainElem.setAttribute("data-direction", "right");
        this.mainElem.classList.add("running");
        this.direction = "right";
        this.run();
        this.runningState = true;
      }
    });
    window.addEventListener("keyup", () => {
      this.mainElem.classList.remove("running");
      cancelAnimationFrame(this.rafId);
      this.runningState = false;
    });
  },
  run: function () {
    if (this.direction == "left") {
      this.xPos -= this.speed;
    } else if (this.direction == "right") {
      this.xPos += this.speed;
    }

    if (this.xPos < 3) {
      this.xPos = 3;
    }

    if (this.xPos > 87) {
      this.xPos = 87;
    }

    this.mainElem.style.left = this.xPos + "%";

    this.rafId = requestAnimationFrame(this.run.bind(this));
  },
};
