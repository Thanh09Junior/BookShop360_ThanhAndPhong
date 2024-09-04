//------------------- Hàm Header và đăng nhập cho toàn bài -------------//
//Các html sử dụng: toàn bộ html

//------------------------- Header ---------------------------------//

//-------- Xử lý submenu (các menu con của phần tử a) -------//
let toggleSubMenu = document.querySelectorAll(".toggle-submenu");

toggleSubMenu.forEach(function (item) {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của <a>

        // Lấy submenu hiện tại
        let submenu = this.nextElementSibling;
        let icon = this.querySelector("i");

        // Kiểm tra xem submenu hiện tại có phải là submenu đang mở không
        let isCurrentlyOpen = submenu && submenu.classList.contains("show");

        // Đóng tất cả các submenu khác
        document.querySelectorAll(".submenu").forEach(function (otherSubmenu) {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove("show");
            }
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll(".toggle-submenu i").forEach(function (otherIcon) {
            if (otherIcon !== icon) {
                otherIcon.classList.remove("fa-chevron-down");
                otherIcon.classList.add("fa-chevron-right");
            }
        });

        // Mở hoặc đóng submenu hiện tại
        if (submenu && submenu.classList.contains("submenu")) {
            submenu.classList.toggle("show");
            if (isCurrentlyOpen) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-right");
            } else {
                icon.classList.remove("fa-chevron-right");
                icon.classList.add("fa-chevron-down");
            }
        }
    });
});

//-------- Xử lý sự kiện click chuột ngoài phạm vi subMenu -------//
document.addEventListener("click", function(event) {
    let inSideToggleMenu = event.target.closest(".toggle-submenu");
    let inSideSubMenu = event.target.closest(".submenu");
    if (!inSideToggleMenu && !inSideSubMenu) {
        // Đóng tất cả các submenu
        document.querySelectorAll(".submenu").forEach(function (submenu) {
            submenu.classList.remove("show");
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll(".toggle-submenu i").forEach(function (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-right");
        });
    }
});

//Hàm thêm hiệu ứng active (giữ nguyên hover) cho toggle menu cha
document.querySelectorAll(".menu_left>ul>li>a").forEach(function (link) {
    link.addEventListener("click", function(event) {
        // Kiểm tra nếu hiện tại active đang bật
        if (this.classList.contains("active")) {
            //Tắt active vì người dùng tắt toggle menu (bấm lại chính nó)
            this.classList.remove("active");
        } else {
            //Mặc định bỏ hết tất cả các active của các toggle menu khác
            document.querySelectorAll(".menu_left>ul>li>a").forEach(function (item) {
                item.classList.remove("active");
            });

            // Nếu không thì bật active lên
            this.classList.add("active");
        }
    });
});

//---------- Loại bỏ tình trạng kích hoạt hover của SubMenu được chọn.-------//
document.addEventListener("click", function(event) {
    if (!event.target.closest(".menu_left")) {
        document.querySelectorAll(".menu_left>ul>li>a").forEach(function (item) {
            item.classList.remove("active");
        });
    }
});

//-------------- Ẩn header khi kéo xuống và hiện lên khi kéo lên. -------//
let lastScrollTop = 0;
const header = document.querySelector("header");
header.classList.add("fixed");
const scrollThreshold = 450; // Khoảng cách cuộn để kích hoạt hiệu ứng ẩn hiện

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Cuộn xuống
        header.style.top = "-200px";
        setTimeout(function () {
            header.classList.add("hidden");
            header.classList.remove("fixed");
        }, 300);
    } else {
        // Cuộn lên
        header.style.top = "0px";
        header.classList.remove("hidden");
        header.classList.add("fixed");
    }
    lastScrollTop = scrollTop;
});


