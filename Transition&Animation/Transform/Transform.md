## Transform

> transform 속성으로 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.<br> transform은 CSS 시각적 서식 모델의 좌표 공간을 변경한다

- 변환함수를 프로퍼티값으로 쉼표없이 나열한다.
  - 나열순서에 따라 차례대로 효과가 적용된다.
- 하드웨어 가속을 이용하여 성능이 굉장히 좋음
  - GPU를 쓴다는 것

### 2D 트랜스폼 (2D Transform)

> 2D 트랜스폼은 프로퍼티값으로 변환함수(transform function)을 사용한다.

- translate(x,y)
  - 요소에 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킴
  - 단위: px, %, em
- translateX(n)
  - 요소의 위치를 X축으로 x만큼 이동시킴
- translateY(n)
  - 요소의 위치를 Y축으로 y만큼 이동시킴
- scale(x,y)
  - 요소에 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킴
  - 단위: 0과 양수
- scaleX(n)
  - 요소의 크기를 X축으로 n배 확대 또는 축소 시킴
- scaleY(n)
  - 요소의 크기를 Y축으로 n배 확대 또는 축소 시킴
- skew(x-angle,y-angle)
  - 요소를 X축으로 x각도만큼, Y축으로 y각도만큼 기울인다.
  - 단위: +/- 각도(deg)
- skewX(x-angle)
  - 요소를 X축으로 x각도만큼 기울인다.
- skewY(y-angle)
  - 요소를 Y축으로 y각도만큼 기울인다.
- rotate(angle)
  - 요소를 angle만큼 회전시킨다.
  - 단위: +/- 각도(deg)

### transform-origin

> 요소의 기본 기준점을 설정할 때 사용됨

- 기본기준점은 요소의 정중앙이다.(50%,50%)
- 이동은 기준점을 변경하여도 일정 거리만큼 이동하므로 의미가 없다.
- 설정 값으로 %, px, top lef bottom right을 사용할 수 있다.
  - 0 0은 top left, 100% 100%은 bottom right과 같은 값
