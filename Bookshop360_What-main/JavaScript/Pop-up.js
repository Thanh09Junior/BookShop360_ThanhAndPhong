function showPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.transform = "translate(-50%, -50%)"; // Hiệu ứng slide-in
    }, 10); // Thời gian chờ ngắn để kích hoạt transition
}

function hidePopup() {
    let popup = document.getElementById("popup");
    popup.style.transform = "translate(-50%, -150%)"; // Hiệu ứng slide-out
    setTimeout(() => {
        popup.style.display = "none";
    }, 500); // Thời gian chờ để hoàn thành hiệu ứng slide-out
}

// Gọi hàm showPopup() để hiển thị pop-up khi cần thiết
// Ví dụ: showPopup();
