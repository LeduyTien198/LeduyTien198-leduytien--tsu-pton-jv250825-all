let chieu_cao = Number(prompt("nhập số chiều cao"));
let can_nang = Number(prompt("nhập số cân nặng"));

let bmi = can_nang / (chieu_cao * chieu_cao);
if (bmi < 18, 5) {
    alert(` gầy`);
} else if (bmi > 18, 5 && bmi <= 22, 4 || bmi > 18, 5 && bmi < 22, 9) {
    alert('Bình thường')
} else if (bmi >= 25 || bmi >= 23) {
    alert('Thừa cân')
} else if (bmi > 25 && bmi <= 29, 9 || bmi > 23 && bmi < 24, 9) {
    alert(` Tiền béo phì`)
} else if (bmi > 30 && bmi < 34, 9 || bmi > 25 && bmi < 29, 9) {
    alert(` Béo phì độ 1`)
} else if (bmi > 35 && bmi < 39, 9 || bmi >= 30) {
    alert(` Béo phì độ 2`)
} else {
    alert(` Cần giảm cân và đi khám sức khỏe`)
}