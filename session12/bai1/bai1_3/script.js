// Bài 3: Nhập một số nguyên bất kỳ
//  và in kết quả ra màn hình 
// để nói cho người dùng biết
//  số đó là lớn hay nhỏ hơn 0
let number = +(prompt("mời bạn nhập số"));
if (number > 0) {
    console.log("Số bạn nhập lớn hơn 0");
}
else if (number == 0) {
    console.log("số bạn nhập vào bằng: 0")
} else {
    console.log("số bạn nhập bé hơn 0")
}