// Bài 1: Nhập vào hai số a và b, 
// và kiểm tra xem a có chia hết cho b hay 
// không và hiển thị ra thông báo
//  bằng console hoặc alert

let a = +(prompt("nhập vào số a"));
let b = +(prompt("nhập vào số b"));
if (a % b == 0) {
    console.log("a chia hết cho b")
} else {
    console.log("a không chia hết cho b")
}