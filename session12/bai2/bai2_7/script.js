// Bài 7: Giải phương trình bậc 2.
// 
let a = +prompt("nhập vào số a");
let b = +prompt("nhập vào số b");
let c = +prompt("nhập vào số c");

let delta = b * b - 4 * a * c;
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm phân biệt:");
    console.log("x1: = " + x1);
    console.log("x2: = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép:");
    console.log("x = " + x);
} else {
    console.log("phương trình vô nghiệm")
}

