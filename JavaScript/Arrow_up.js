//-------------------- Hàm mũi tên hướng lên đầu trang -------------------//
//Các html đang sử dụng hàm: index.html, shop.html, gioithieu.html, giohang.html.

//Ẩn hiện mũi tên kéo lên
function arrowUpAction() {
    let arrowUp = document.getElementById("Arrow_Up");
    let userScroll = document.documentElement.scrollTop; //Lấy số px mà người dùng đã kéo xuống

    //Kéo xuống tầm 500px màn hình sẽ hiện mũi tên
    if (userScroll > 500) {
        arrowUp.style.opacity = "1";
        arrowUp.style.marginBottom = "1%";
    } else {
        arrowUp.style.marginBottom = "-10%";

        //Hiệu ứng làm mờ nút mũi tên
        setTimeout(function () {
            arrowUp.style.opacity = "0";
        }, 500);
    }
}

//Lấy sự kiện là lướt trình duyệt để cập nhật lại hàn
window.onscroll = function () {
    arrowUpAction();
};

//Nếu người dùng click vào mũi tên kéo lên thì đưa người dùng về đầu
document.getElementById("Arrow_Up").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

