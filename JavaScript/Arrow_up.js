window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const arrowUp = document.getElementById("Arrow_Up");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        arrowUp.style.opacity = "1"; // Hiển thị nút với opacity 1
        arrowUp.style.marginBottom = "1%"; // Đảm bảo margin-bottom là 1%
    } else {
        arrowUp.style.marginBottom = "-10%"; // Đổi margin-bottom về -10%
        setTimeout(() => {
            arrowUp.style.opacity = "0"; // Ẩn nút với opacity 0
        }, 500); // Delay hiding to allow transition to complete
    }
}

document.getElementById("Arrow_Up").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
