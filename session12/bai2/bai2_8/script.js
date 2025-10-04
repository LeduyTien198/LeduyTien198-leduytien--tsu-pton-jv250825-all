// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
// // Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.
let tuoi = +prompt("Nhập số tuổi hiện tại");
if (tuoi > 0 && tuoi <= 120) {
    console.log("Tuổi hiện tại của bạn là: " + tuoi);
} else {
    console.log("Ngươi là ai!")
}