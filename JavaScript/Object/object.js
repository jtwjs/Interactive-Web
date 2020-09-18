const person = {
  name: "정태웅",
  age: 26,
  introduce: function () {
    console.log("안녕하세요? 저는 " + this.name + "이고, 나이는 " + this.age + "살이에요.");
  },
};

const person2 = {
  name: "홍언택",
  age: 26,
  introduce: function () {
    // 프로퍼티가 함수이면 메소드
    console.log("안녕하세요? 저는 " + this.name + "이고, 나이는 " + this.age + "살이에요.");
  },
};

person.introduce();
person2.introduce();

// 생성자 (constructor) 첫글자는 대문자!
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log("안녕하세요? 저는 " + this.name + "이고, 나이는" + this.age + "살 이에요.");
};

//인스턴스(instance)
const person3 = new Person("정태웅", 26);
const person4 = new Person("홍언택", 26);

function Card(num, color) {
  this.num = num;
  this.color = color;
}

Card.prototype.width = 100;
Card.prototype.height = 150; //prototype에 넣으면 공통사항

const card1 = new Card(1, "green");
const card2 = new Card(2, "blue");

console.log(card1.color);
console.log(card2.color);
console.log(card1.width);
console.log(card2.width);

function Card2(num, color) {
  this.num = num;
  this.color = color;
  this.init();
}

Card2.prototype = {
  constructor: Card,
  init: function () {
    const mainElem = document.createElement("div");
    mainElem.style.color = this.color;
    mainELem.innerHTML = this.num;
    mainElem.classList.add("card");
  },
};
