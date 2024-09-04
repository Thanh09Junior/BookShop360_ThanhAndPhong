//----------------- Hàm quản lý tài khoản người dùng -----------------//
//Các html sử dụng: sach.html, giohang.html, gioithieu.html, shop.html, taikhoan.html, index.html

// Lấy dữ liệu từ tab đăng nhập và đăng kí //
const tabDangNhap = document.getElementById('loginTab');
const tabDangKi = document.getElementById('registerTab');
const thongTinDangNhap = document.getElementById('loginInfo');
const thongTinDangKi = document.getElementById('registerInfo');
const popUpDangNhap = document.getElementById('Account');
const nutDangNhap = document.getElementById('login');
const hieuUngMo = document.getElementById('Black_glass');

// Kiểm tra tình trạng đăng nhập
let daDangNhap = false;

// Xử lý chuyển đổi khi người dùng bấm đăng nhập
tabDangNhap.addEventListener('click', () => {
    if (!daDangNhap) { // Nếu chưa login thì hiện popup đăng nhập
        thongTinDangNhap.style.display = 'block';
        thongTinDangKi.style.display = 'none';
        tabDangNhap.style.color = 'red';
        tabDangKi.style.color = 'black';
    }
});

// Xử lý chuyển đổi khi người dùng bấm đăng kí
tabDangKi.addEventListener('click', () => {
    if (!daDangNhap) { // Nếu chưa login thì hiện popup đăng kí
        thongTinDangNhap.style.display = 'none';
        thongTinDangKi.style.display = 'block';
        tabDangKi.style.color = 'red';
        tabDangNhap.style.color = 'black';
    }
});


// Xử lý đăng kí tài khoản của người dùng
document.querySelector('#registerInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();

    //Lấy dữ liệu từ người dùng điền
    const tenTaiKhoan = document.querySelector('#registerInfo input[type="text"]').value;
    const matKhau = document.querySelector('#registerInfo input[type="password"]').value;
    const xacNhanMatKhau = document.getElementById('Repassword').value; 
    
    //Lấy dữ liệu từ database
    const tenTaiKhoan_Local = localStorage.getItem('username');

    //Kiểm tra tính hợp lệ của việc đăng kí
    if (tenTaiKhoan && matKhau && xacNhanMatKhau) {
        if (matKhau !== xacNhanMatKhau) {
            alert('Mật khẩu xác nhận không trùng khớp!');
            return;
        }

        if(tenTaiKhoan === tenTaiKhoan_Local){
            alert('Tài khoản đã tồn tại!');
            return;
        }

        if (tenTaiKhoan && matKhau) {
            
            localStorage.setItem('username', tenTaiKhoan);
            localStorage.setItem('password', matKhau);
            localStorage.setItem('creationTime', new Date().toLocaleString());
            alert('Đăng kí thành công!.');
     
            tabDangNhap.click();
        } else {
            alert('Vui lòng điền hết thông tin cần thiết!.');
        }
    } else {
        alert('Có lỗi trong quá trình nhập xuất!. Vui lòng báo cáo cho admin!');
    }
});


// Xử lý đăng nhập của người dùng
document.querySelector('#loginInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();
    //Lấy dữ liệu đăng nhập của người dùng
    const tenTaiKhoan = document.querySelector('#loginInfo input[type="text"]').value;
    const matKhau = document.getElementById('LoginNow').value;

    const tenTaiKhoan_Local = localStorage.getItem('username');
    const matKhau_Local = localStorage.getItem('password');

    //Kiểm tra tính hợp lệ của đăng nhập
    if (tenTaiKhoan === tenTaiKhoan_Local && matKhau === matKhau_Local) {
        alert('Đăng nhập thành công');
        daDangNhap = true; 

        tabDangNhap.style.pointerEvents = 'none';
        tabDangKi.style.pointerEvents = 'none';
        thongTinDangNhap.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
        thongTinDangKi.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
      
        //Ẩn pop-up đăng nhập khi thành công
        popUpDangNhap.style.display = 'none';
        hieuUngMo.style.display = 'none';
    } else {
        alert('Sai tài khoản hoặc mật khẩu.');
    }
});

// Xử lý sự kiện click chuột thêm màn đen login
nutDangNhap.addEventListener('click', () => {
    if (daDangNhap) { //Nếu đã đăng nhập
        popUpDangNhap.style.display = 'none';
        hieuUngMo.style.display = 'none';
    } else {    //Nếu chưa đăng nhập
        popUpDangNhap.style.display = 'block';
        hieuUngMo.style.display = 'block'; 
    }
});

//Ngăn chặn tình huống điều hướng a href
document.querySelectorAll('a#login').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        if (!daDangNhap) {
            e.preventDefault();
        }
    });
});

