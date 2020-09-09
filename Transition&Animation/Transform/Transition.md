## Transition

> CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공
> <br> 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있다.

### 트랜지션 정의에 사용되는 CSS 속성

> CSS 트랜지션은 단축(shorthand) 속성 `transition`을 사용하여 제어한다.

- transition-property
  - 트랜지션을 적용해야 하는 CSS 속성의 이름 혹은 이름들을 명시한다.
- transition-duriation
  - 트랜지션이 일어나는 지속시간을 명시
- transition-timing-function
  - 속성의 중간값을 계산하는 방법을 정의하는 함수를 명시
  - linear: 전환효과가 처음부터 끝까지 일정
  - ease: 기본값으로 전환효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 느려짐
  - ease-in: 전환효과가 천천히 시작됨
  - ease-out: 전환효과가 천천히 끝난다
  - ease-in-out: 효과가 천천히 시작되어 천천히 끝남
  - cubic-bezier(n, n, n, n): 전환효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됨
- transition-delay
  - 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의
- 단축속성
  - `transition: <property> <duration> <timing-function> <delay> `
