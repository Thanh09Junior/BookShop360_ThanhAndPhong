const myPreloader = document.querySelector('.preloader');
const loadingText = document.querySelector('.progress-text');
const progressBar = document.querySelector('.progress-bar');

let percentLoaded = 0;
let startTime = performance.now();
let minLoadingTime = 2000; // Thời gian tải tối thiểu là 2 giây (có thể điều chỉnh)

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
    if (timeAfterLoad < minLoadingTime) {
        setTimeout(fadeOut, minLoadingTime - timeAfterLoad);
    } else {
        fadeOut();
    }
});

// Bắt đầu cập nhật phần trăm tải khi trang bắt đầu tải
requestAnimationFrame(updateLoading);
