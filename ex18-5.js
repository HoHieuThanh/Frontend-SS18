let n = prompt('Nhập số năm làm việc');
const result = n < 1 ? 'Mới vào nghề' : n >= 1 && n < 3 ? 'Nhân viên có kinh nghiệm' : n >= 3 && n < 6 ? 'Chuyên viên' : 'Quản lý';
console.log(result);
