let name = (prompt('Nhập tên'));
if (name == 'ADMIN') {
    let pass = (prompt('Nhập mật khẩu'));
    if (pass == 'TheMaster') {
        console.log('Welcome');
        
    } else if (pass == '') {
        console.log('Cancelled');
        
    } else {
        console.log('Wrong password.');
        
    }
} else if (name == '') {
    console.log('Cancelled');
} else {
    console.log("I don't know you");
}