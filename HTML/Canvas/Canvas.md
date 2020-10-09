## Canvas API

> Canvas API는 JavaScript 와 HTML `<canvas>` 엘리먼트를 통해 그래픽을 그리기 위한 수단을 제공한다. <br> 무엇보다도 애니메이션, 게임, 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용됨

- ```html
  <canvas id="my-house" width="300" height="300"></canvas>

  <!-- canvas 태그의 width, height 인라인 속성은 css에서의 width, height와는 다르다.
  1. 인라인 속성은 컨버스의 해상도 (포함된 픽셀 수)를 정의
  2. 인라인 속성을 지정해주지 않으면 default값 300x150
  3. 보통 해상도의 2배 값을 넣어 집적도를 높임 -->

  <script>
    const canvas = document.getElementById("my-house");
    const ctx = canvas.getContext("2d");
    //캔버스의 2D 렌더링 컨텍스트를 가져 오려면 <canvas> 요소에서 getContext ()를 호출하여 '2d'를 인수로 제공합니다.
    //(x, y, width, height)
  </script>
  ```

  #### 그리기

- ```js
  //Rect(사각형)
  context.fillRect(50, 50, 100, 100); // 채워진 사각형
  context.fillStyle = "red"; //선택 색 변경
  context.fillRect(0, 0, 100, 100);
  context.clearRect(80, 80, 50, 50); //지우기
  context.strokeRect(150, 150, 100, 100); // 사각형 윤곽선

  //line(선)
  context.beginPath(); //path를 만듦
  context.moveTo(100, 100); //붓을 그 위치로 옮김
  context.lineTo(300, 200);
  context.stroke(); //선을 칠함
  //context.fill(); //색 채우기
  context.closePath(); //path 닫음

  //원
  //(x, y, 반지름, 호(각도 start), 호 (각도 end), boolean ? 시계축: 반시계축 )

  function toRadian(degree) {
    return (degree * Math.PI) / 180;
  } //radian 각도 함수

  context.beginPath();
  context.arc(300, 200, 50, 0, toRadian(360), false); //호가 기준 (중심점)
  context.stroke();

  context.beginPath();
  context.arc(500, 100, 20, 0, toRadian(360), false);
  context.stroke();
  ```

#### Animation

- reflow()
  - 계산하는 과정
- repaint()

  - 계산된 값으로 그려내는 것

- **requestAnimationFrame()**

  - 브라우저에게 수행하기를 원하는 애니메이션을 알리고, 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 한다.
  - 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받는다.
  - 다음 리페인트에서 그 다음 프레임을 애니메이트하려면 콜백 루틴이 반드시 스스로 requestAnimationFrame()을 호출해야 한다.

- ```js
  const canvas = document.querySelector(".canvas");
  const context = canvas.getContext("2d");
  let xPos = 10;

  //requestAnimation
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); //캔버스 초기화
    context.beginPath();
    context.arc(xPos, 150, 10, 0, Math.PI * 2, false);
    context.fill();
    xPos += 3;
    requestAnimationFrame(draw);
  }

  draw();
  ```

- ```js
  //타이밍 조절
  const canvas = document.querySelector(".canvas");
  const context = canvas.getContext("2d");
  let xPos = 10;
  let count = 0;

  function draw() {
    count++;

    if (count % 30 === 0) {
      context.clearRect(0, 0, canvas.width, canvas.height); //캔버스 초기화
      context.beginPath();
      context.arc(xPos, 150, 10, 0, Math.PI * 2, false);
      context.fill();
      xPos += 3;
    }
    requestAnimationFrame(draw);
  }

  draw();
  ```
