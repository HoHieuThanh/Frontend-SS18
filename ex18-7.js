let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

let operator = prompt("Nhập phép toán (+, -, *, /):");
let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = (b !== 0) ? (a / b) : "Không thể chia cho 0";
} else {
    result = "Phép toán không hợp lệ!";
}
alert(`Kết quả: ${result}`);
