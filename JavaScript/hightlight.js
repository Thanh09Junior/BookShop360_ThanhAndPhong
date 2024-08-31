//------------------------ Highlight Preloader --------------------------//

const myPreloader = document.querySelector('.preloader');
const loadingText = document.querySelector('.progress-text');
const progressBar = document.querySelector('.progress-bar');

let percentLoaded = 0;
let startTime = performance.now();
let minLoadingTime = 1500; // Thời gian tải tối thiểu là 2 giây (có thể điều chỉnh)
let maxFastLoadTime = 100; // If the page loads in less than 500ms, skip preloader

function updateLoading() {
    // Tính toán thời gian đã trôi qua
    let currentTime = performance.now();
    let elapsedTime = currentTime - startTime;

    // Tăng phần trăm tải dựa trên thời gian trôi qua
    percentLoaded = Math.min(100, Math.floor((elapsedTime / minLoadingTime) * 100));
    loadingText.textContent = `${percentLoaded}%`;

    // Cập nhật chiều rộng của thanh tiến độ
    progressBar.style.width = `${percentLoaded}%`;

    // Tiếp tục cập nhật cho đến khi đạt 100%
    if (percentLoaded < 100) {
        requestAnimationFrame(updateLoading);
    } else {
        loadingText.textContent = `Done`;
        setTimeout(() => {
            fadeOut();
        }, 1000);
    }
}

function fadeOut() {
    myPreloader.style.transition = "opacity 1s ease"; // Thêm chuyển tiếp mờ dần trong 1 giây
    myPreloader.style.opacity = 0; // Đặt opacity về 0 để kích hoạt fade out

    // Ẩn preloader sau khi quá trình mờ dần kết thúc
    myPreloader.addEventListener("transitionend", () => {
        myPreloader.style.display = "none";
    });
}

window.addEventListener('load', () => {
    // Đảm bảo preloader hiển thị tối thiểu trong minLoadingTime
    let timeAfterLoad = performance.now() - startTime;

    if (timeAfterLoad < maxFastLoadTime) {
        // If page loaded quickly, skip preloader
        myPreloader.style.display = "none";
    }else{
    let timeAfterLoad = performance.now() - startTime;
        if (timeAfterLoad < minLoadingTime) {
            setTimeout(fadeOut, minLoadingTime - timeAfterLoad);
        } else {
            fadeOut();
        }
    }
});

// Bắt đầu cập nhật phần trăm tải khi trang bắt đầu tải
requestAnimationFrame(updateLoading);

  



 //-------------------------------- Xử lý chuột kéo đen -----------------// 
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.sec2');
    const header = document.querySelector('header');
    const links = header.querySelectorAll('a');
    const paragraphs = header.querySelectorAll('p');
    const icons = header.querySelectorAll('i');

    const updateHeaderColors = (color) => {
        links.forEach(link => link.style.color = color);
        paragraphs.forEach(p => p.style.color = color);
        icons.forEach(i => i.style.color = color);
    };

    // Thay đổi màu sắc khi con chuột di chuyển vào .sec2
    section.addEventListener('mouseover', () => {
        updateHeaderColors('black');
    });

    // Khôi phục màu sắc khi con chuột rời khỏi .sec2
    section.addEventListener('mouseout', () => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= viewportHeight) {
            updateHeaderColors('black');
        } else {
            updateHeaderColors('white');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var icon = playPauseBtn.querySelector('i');
    var originalTitle = document.title; // Store the original title

    // Tự động phát nhạc khi tải trang
    audio.play();

    // Thay đổi biểu tượng khi nhạc đang phát hoặc dừng
    audio.addEventListener('play', function() {
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-pause');
    });

    audio.addEventListener('pause', function() {
        icon.classList.remove('fa-pause');
        document.title = originalTitle;
        icon.classList.add('fa-caret-right');
    });

    // Điều khiển phát/dừng nhạc khi nhấp vào biểu tượng
    playPauseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            document.title = originalTitle;
        }
    });

    // Cập nhật title với thời gian phát hiện tại
    audio.addEventListener('timeupdate', function() {
        var currentTime = formatTime(audio.currentTime);
        var duration = formatTime(audio.duration);
        document.title = `${currentTime} / ${duration}`;
    });

    // Định dạng thời gian thành mm:ss
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});

document.querySelector('.menu_left a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    const highlightNav = document.querySelector('.Highlight_Navigation');
    highlightNav.classList.toggle('active'); // Thêm hoặc bỏ class 'active'
    
    // Giữ nguyên hiệu ứng hover khi mở navigation
    this.classList.toggle('active');
});

// Thêm sự kiện click cho tất cả các <a> trong .Nav_content
document.querySelectorAll('.Nav_content a').forEach(function(link) {
    link.addEventListener('click', function() {
        const highlightNav = document.querySelector('.Highlight_Navigation');
        highlightNav.classList.remove('active'); // Ẩn Highlight_Navigation
        
        // Bỏ trạng thái active của "Điều hướng" trên header
        document.querySelector('.menu_left a[href="#"]').classList.remove('active');
    });
});



document.querySelectorAll('.Highlight_Navigation .Nav_content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định

        const targetId = this.getAttribute('href').slice(1); // Lấy ID mục tiêu từ href
        const targetElement = document.getElementById(targetId);
        const header = document.querySelector('header'); // Thay đổi theo selector của bạn

        if (targetElement && header) {
            // Cuộn đến mục tiêu với hiệu ứng chuyển cảnh
            const targetPosition = targetElement.offsetTop;

            // Bắt đầu hiệu ứng chuyển cảnh
            const elevation = 300; // Điều chỉnh chiều cao bật lên
            header.style.transition = 'top 0.7s ease';
            header.style.top = `-${elevation}px`; // Màn hình bật lên

            setTimeout(() => {
                // Cuộn đến mục tiêu
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Hiệu ứng hạ màn hình xuống và sửa lớp header
                setTimeout(() => {
                    header.style.top = '0px';
                    header.classList.remove('hidden');
                    header.classList.add('fixed');

                     // Thêm lớp để hiển thị đường viền trắng

                }, 2200); // Thời gian cho hiệu ứng hạ màn hình
            }, 800); // Thời gian cho hiệu ứng bật lên
        }
    });
});

