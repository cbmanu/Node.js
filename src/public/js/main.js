// let navbar = document.querySelector(".navbar");
// var banner_height = $("#navscroll").height();
// var lastScrollTop = 0;
// window.scroll(function () {
//   var scroll = $(window).scrollTop();
//   var currScrollTop = $(this).scrollTop();
//   if (scroll >= banner_height && currScrollTop > lastScrollTop) {
//     navbar.style.backgroundColor = "";
//   } else {
//     navbar.style.backgroundColor = "blue";
//   }
//   lastScrollTop = currScrollTop;
// });

let text = document.querySelector(".main-title");
let strText = text.textContent;
let splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(logo, 50);

function logo() {
  let span = text.querySelectorAll("span")[char];
  span.classList.add("animation");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
