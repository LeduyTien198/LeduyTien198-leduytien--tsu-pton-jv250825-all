let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));
let nhap = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
let ketqua = 0;
if (nhap === "+") {
    ketqua = a + b
    alert(` Kết quả của phép tính trên: ${a} + ${b} =  ${ketqua}`)
} else if (nhap === "-") {
    ketqua = a - b
    alert(` Kết quả của phép tính trên: ${a} - ${b} =  ${ketqua}`)

} else if (nhap === "*") {
    ketqua = a * b
    alert(` Kết quả của phép tính trên: ${a} * ${b} =  ${ketqua}`)

} else if (nhap === "/") {
    ketqua = a / b
    alert(` Kết quả của phép tính trên: ${a} / ${b} =  ${ketqua}`)

} else {
    alert(` Phép tính không hợp lệ !`)
}
