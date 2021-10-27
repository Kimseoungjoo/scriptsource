// css 선택자 모든지 가능
// 처음 만나는 container 를 가져옴
let container = document.querySelector(".container");
console.log(container);
// let link = document.querySelector(".page-link");
// console.log(link);
let firstLi = document.querySelector(".pagination li:first-child");
console.log(firstLi);

let secondtLi = document.querySelector(".pagination li:nth-child(2)");
console.log(secondtLi);

// 속성을 이용해서 태그 불러오기
let button = document.querySelector('[data-target="#navbarText"]');
console.log(button);

//전체 요소 가져오기(NodeList >> forEach 가능)
let liList = document.querySelectorAll(".pagination li");
console.log(liList);
