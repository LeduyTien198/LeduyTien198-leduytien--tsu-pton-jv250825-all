// Bài 6: Giải phương trình bậc 1.
let a = +prompt("nhập vào số a");
let b = +prompt("nhập vào số b");
let x = -b / a;
if (a != 0) {
    console.log("có nghiệm duy nhất x là: " + x);
} else if (a == 0 && b == 0) {
    console.log("phương trình có vô số nghiệm");
} else {
    console.log("phương trình vô nghiệm");
}
