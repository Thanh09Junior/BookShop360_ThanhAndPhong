document.querySelectorAll('.toggle-submenu').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

        // Đóng tất cả các submenu khác
        document.querySelectorAll('.submenu').forEach(submenu => {
            if (submenu !== this.nextElementSibling) {
                submenu.classList.remove('show');
            }
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll('.toggle-submenu i').forEach(icon => {
            if (icon !== this.querySelector('i')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });

        // Mở hoặc đóng submenu hiện tại
        const submenu = this.nextElementSibling;
        const icon = this.querySelector('i');
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('show'); // Thêm hoặc loại bỏ lớp 'show'
            if (submenu.classList.contains('show')) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        }
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.toggle-submenu') && !event.target.closest('.submenu')) {
        // Đóng tất cả các submenu
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.classList.remove('show');
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll('.toggle-submenu i').forEach(icon => {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        });
    }
});

document.querySelectorAll('.menu_left>ul>li>a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Check if the clicked link is already active
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            // Remove active class from all links
            document.querySelectorAll('.menu_left>ul>li>a').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');
        }
    });
});

// Remove active class when clicking outside the menu
document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu_left')) {
        document.querySelectorAll('.menu_left>ul>li>a').forEach(item => {
            item.classList.remove('active');
        });
    }
});

let lastScrollTop = 0;
const header = document.querySelector('header');
 header.classList.add('fixed');
 const scrollThreshold = 450; // Khoảng cách cuộn để thay đổi vị trí header

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Cuộn xuống
        header.style.top = '-200px';
        setTimeout(() => {
            header.classList.add('hidden');
            header.classList.remove('fixed');
        }, 300);
    } else {
        // Cuộn lên
        header.style.top = '0px';
        header.classList.remove('hidden');
        header.classList.add('fixed');
    }
    lastScrollTop = scrollTop;
});

// Khi bấm vào tab "Đăng nhập"
document.getElementById('loginTab').addEventListener('click', function() {
    setActiveTab('login');
});

// Khi bấm vào tab "Đăng ký"
document.getElementById('registerTab').addEventListener('click', function() {
    setActiveTab('register');
});

// Hàm thiết lập tab đang hoạt động
function setActiveTab(tab) {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginContent = document.getElementById('loginInfo');
    const registerContent = document.getElementById('registerInfo');

    if (tab === 'login') {
        loginTab.style.color = 'red';
        registerTab.style.color = 'black';
        loginContent.style.display = 'block';
        registerContent.style.display = 'none';
    } else if (tab === 'register') {
        loginTab.style.color = 'black';
        registerTab.style.color = 'red';
        loginContent.style.display = 'none';
        registerContent.style.display = 'block';
    }
}

// Đặt tab "Đăng nhập" là mặc định khi mở popup
setActiveTab('login');



// Khi bấm vào biểu tượng có id là 'login'
document.querySelector('#login').addEventListener('click', function() {
    const blackGlass = document.getElementById('Black_glass');
    blackGlass.style.display = 'block';
    blackGlass.classList.add('Black_glass'); // Thêm class Black_glass
    const accountPopup = document.getElementById('Account');
    accountPopup.style.display = 'block';
    setTimeout(() => accountPopup.classList.add('show'), 10); // Thêm một độ trễ nhỏ để kích hoạt hiệu ứng
});

// Khi bấm vào Black_glass hoặc nút đóng trong popup
document.getElementById('Black_glass').addEventListener('click', function() {
    closeAccountPopup();
});

// Chọn tất cả các nút "Bỏ qua" và thêm sự kiện cho chúng
document.querySelectorAll('.Button a:last-child').forEach(function(skipButton) {
    skipButton.addEventListener('click', function() {
        closeAccountPopup();
    });
});

// Hàm đóng popup và ẩn Black_glass
function closeAccountPopup() {
    const accountPopup = document.getElementById('Account');
    const blackGlass = document.getElementById('Black_glass');
    accountPopup.classList.remove('show');
    blackGlass.classList.remove('Black_glass'); // Loại bỏ class Black_glass khi đóng popup
    setTimeout(() => {
        accountPopup.style.display = 'none';
        blackGlass.style.display = 'none';
    }, 500); // Chờ cho đến khi hiệu ứng kết thúc
}
