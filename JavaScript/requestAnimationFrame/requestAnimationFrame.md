## window.requestAnimationFrame()

> 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 한다.<br> 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받는다.

- 다음 리페인트에서 그 다음 프레임을 **애니메이트하려면 콜백 루틴이 반드시 스스로 `requestAnimationFrame()`을 호출해야한다**.
- 브라우저가 매번 화면을 그리는데 변화된 화면으르 그릴 준비가 되었을때 그려줌 (최적화해서 애니메이션을 부드럽게)
- 예전에는 setInterval()로 작업을 했었는데 모바일환경에서 프레임 유실이나 배터리절약이 안되는 단점때문에 위 함수가 나오면서 위 함수만 씀

### 구문

> `window.requestAnimationFrame(callback);`

#### 파라미터

- callback
  - 다음 리페인트를 위한 애니메이션을 업데이트할 때 호출할 함수
  - 콜백 함수에는 `requestAnimationFrame()`이 콜백 함수 실행을 시작할 때의 시점을 나타내는<br> `performance.now()` 에 의해 반환되는 것과 유사한 `DOMHightResTimeStamp`단일 인자가 전달됨

#### 반환값

> 콜백 리스트의 항목을 정의하는 고유한 요청 id인 `long`정수 값.0 이 아니라는 것 외에는 다른 추측을 할 수가 없는 값

- **이값을 `window.cancelAnimationFrame()`에 전달해 콜백 요청을 취소할 수 있다.**
