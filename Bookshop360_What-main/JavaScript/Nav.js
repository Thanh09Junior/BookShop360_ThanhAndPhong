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
        header.style.top = '-100px';
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

