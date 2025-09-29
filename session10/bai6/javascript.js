let math = parseInt(prompt("nhâp điểm math"));
let physics = parseInt(prompt("nhập điểm physics"));
let chesmistry = parseInt(prompt("nhập số chesmistry"));

let medium = (math + physics + chesmistry) / 3;
medium = medium.toFixed(1);
console.log("Điểm trung bình: ", medium);