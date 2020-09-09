## Animation

> CSS3 애니메이션은 엘리먼트에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 준다.
> <br>애니메이션을 나타내는 CSS 스타일과 애니메이션의 중간 상태를 나타내는 키프레임들로 이루어진다.

### 애니메이션 속성

> CSS 애니메이션을 만드려면 `animation` 속성과 이 속성의 하위 속성을 지정해야 한다.
> <br> 애니메이션의 중간 상태는 `@keyframes` 규칙을 이용하여 기술함

- animation-delay
  - 엘리먼트가 로드되고 나서 어네 애니메이션이 시작될지 지정
- animation-direction
  - 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정함
  - normal(default): 애니메이션은 매 사이클마다 정방향으로 재생됨 즉, 순환할 때마다 애니메이션이 시작상태로 재설정되고 다시시작됨
  - reverse: 애니메이션은 매 사이클마다 역방향으로 재생됨
  - alternate: 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며 진행
  - alternate-reverser: 매 사이클마다 각 주기의 방향을 뒤집으며 첫번쨰 반복을 역방향으로 진행
- animation-duration
  - 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정함
- animation-iteration-count
  - 애니메이션이 몇번 반복될지 지정 (infinite로 지정하면 무한반복)
- animation-name
  - 이 애니메이션의 중간 상태를 지정
  - 중간 상태는 `@keyframes` 규칙을 이용하여 기술
- animation-play-state
  - 애니메이션을 멈추거나 다시 시작할 수 있다.
  - running(default): 애니메이션이 진행됨
  - pause: 애니메이션이 멈춤
- animation-timing-function
  - 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정
  - step-start: steps(1,start)와 같다. 시작하는 지점에 스텝을 끊어준다.
  - step-end: steps(1,end)와 같다. 끝나는 시점에 스텝을 끊어준다.
- animation-fill-mode
  - 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정함
  - none: 애니메이션은 실행되지 않을 때 대상에 스타일을 적용하지 않음
  - forwards: 대상은 실행된 애니메이션의 마지막 `keyframes`에 의해 설정된 계산된 값을 유지함
  - backwards: 대상에 적용되는 즉시 첫번째 관련 keyframes에 정의된 값을 적용하고 `animation-delay` 기간 동안 이 값을 유지함
  - both: 애니메이션은 앞뒤 양쪽 모두의 규칙을 따르므로 애니메이션 속성이 양방향으로 확장됨

### 키프레임을 이용하여 애니메이션의 중간상태 기술하기

> `@keyframes`규칙을 이용해서 두개 이상의 중간 상태를 기술한다.<br> 각 중간 상태는 특정 시점에 엘리먼트가 어떻게 보일지 나타낸다.

- percentage(%)를 이용해 중간상태 등장 지점을 지정한다.
- 0%: 애니메이션이 시작된지점, 100%: 애니메이션이 끝나는 시점을 의미
  - 0%와 100% 대신 `from`과 `to`로 사용할수도 있다.
