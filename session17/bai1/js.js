let text = document.querySelector(".text");
// console.log(text)
let hide = document.querySelector(".hide");
//console.log(hide)
let show = document.querySelector(".show");

hide.onclick = function () {
    text.style.display = "none";
};
show.onclick = function () {
    text.style.display = "block";
}