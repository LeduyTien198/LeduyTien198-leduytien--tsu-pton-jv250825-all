// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra,
//  điểm thi giữa kỳ,
//  điểm thi cuối kỳ 
// (Xuất Sắc, Giỏi, Khá, Trung Bình, Yếu

let finalScore = Number(prompt("nhập vào điểm cuối kỳ")) // điểm cuối kỳ
let midtermScore = Number(prompt("nhập vào điểm giữa kỳ")) // điểm giữa kỳ
let average = (midtermScore + (finalScore * 2)) / 3;
if (average > 9.5 && average < 10) {
    console.log("Xuất xắc")
} else if (average > 8 && average < 9.5) {
    console.log("Giỏi");
} else if (average > 6.5 && average < 8) {
    console.log("Khá");
} else if (average > 5 && average < 6.5) {
    console.log("Trung Bình");
} else {
    console.log("yếu");
}
