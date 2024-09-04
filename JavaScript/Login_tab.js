//------------------------- Hàm xử lý đăng nhập -----------------------------//
//Các html sử dụng: sach.html, giohang.html, gioithieu.html, shop.html, taikhoan.html, index.html

// Khi bấm vào tab "Đăng nhập"
let dangNhap = document.getElementById("loginTab");
dangNhap.addEventListener("click", function() {
    tabDuocChon("login");
});

// Đặt tab "Đăng nhập" là mặc định khi mở popup
tabDuocChon("login");

// Khi bấm vào tab "Đăng ký"
let dangKy = document.getElementById("registerTab");
dangKy.addEventListener("click", function() {
    tabDuocChon("register");
});

// Hàm thiết lập kích hoạt tab hoạt động (đăng nhập hoặc đăng kí)
function tabDuocChon(tab) {
    let loginTab = document.getElementById("loginTab");
    let registerTab = document.getElementById("registerTab");
    let loginContent = document.getElementById("loginInfo");
    let registerContent = document.getElementById("registerInfo");

    if (tab === "login") {
        //Nếu là tab đăng nhập
        loginTab.style.color = "red";
        registerTab.style.color = "black";
        loginContent.style.display = "block";
        registerContent.style.display = "none";
    } else if (tab === "register") {
        //Nếu là tab đăng kí
        loginTab.style.color = "black";
        registerTab.style.color = "red";
        loginContent.style.display = "none";
        registerContent.style.display = "block";
    }
}

// Khi bấm vào icon hình tài khoản ở thanh nav
let getLoginID = document.querySelector("#login");

getLoginID.addEventListener("click", function() {
    let blackGlass = document.getElementById("Black_glass");
    blackGlass.style.display = "block";
    blackGlass.classList.add("Black_glass");

    //Kích hoạt hiệu ứng màng đen mờ và hiện Pop-up đăng nhập
    let accountPopup = document.getElementById("Account");
    accountPopup.style.display = "block";

    setTimeout(function() {
        accountPopup.classList.add("show");
    }, 10);
});

// Khi bấm vào ngoài màn hình Pop-up
let BlackGlass = document.getElementById("Black_glass");
BlackGlass.addEventListener("click", function() {
    //Đóng Pop-up
    dongTabDangNhap();
});

// Khi người dùng bấm vào nút bỏ qua
let getButtonEvent = document.querySelectorAll(".Button a:last-child");
getButtonEvent.forEach(function(skipButton) {
    skipButton.addEventListener("click", function() {
        //Đóng Pop-up
        dongTabDangNhap();
    });
});

// Hàm đóng popup và ẩn Black_glass
function dongTabDangNhap() {
    let accountPopup = document.getElementById("Account");
    let blackGlass = document.getElementById("Black_glass");
    accountPopup.classList.remove("show");
    // Loại bỏ class Black_glass khi đóng popup
    blackGlass.classList.remove("Black_glass");
    
    setTimeout(function () {
        accountPopup.style.display = "none";
        blackGlass.style.display = "none";
    }, 500); // Chờ cho đến khi hiệu ứng kết thúc
}

