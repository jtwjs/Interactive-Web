## 3D 전용 CSS 속성

> 원근감을 부여해 3D 공간을 설정한 후에, 2D 요소가 그 안에서 어떻게 행동할지 설정해야 한다.

#### perspective (원근감)

> `perspective` 속성은 3D 위치 요소의 관점을 제공하기 위해 z=0 평면과 사용자와의 거리를 결정한다

- 요소가 관찰자에게 멀어질 수록 더 작게 보임
- `perspective: px;`
  - 작은값일수록 눈앞에있는 것처럼 보여짐
  - 부모 container에 적용시 각 childe item들의 입체적관점이 다르게 적용됨
- `perspective-origin`
  - 관찰자의 위치를 정한다.
  - default값은 중앙

#### transform-style: preserve-3d

> html 요소가 여러단계로 중첩되어 있을 경우 각 요소에 3D 효과가 제대로 전달되도록 하는 값

- 요소의 자식이 3D 공간에 배치
-

#### backface-visibility

> 입체저긴 뒷면의 가시성을 결정하는 속성

- 변형이 가해져서 요소의 뒷면(뒤집힌 것)을 숨기거나 보여지게 가능
