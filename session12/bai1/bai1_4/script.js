// Bài 4: Nhập 3 số nguyên
//  và tìm giá trị lớn nhất
//  của ba số nguyên đó
// 
let a = +(prompt("nhập vào số a"));
let b = +(prompt("nhập vào số b"));
let c = +(prompt("nhập vào số c"));

if (a > b && a > c) {
    console.log("số a là số lớn nhất");
} else if (b > a && b > c) {
    console.log("số b là số lớn nhất");
} else if (c > b && c > a) {
    console.log("số c là số lớn nhất");
}