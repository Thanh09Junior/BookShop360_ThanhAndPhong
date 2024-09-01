var x = setInterval(function() {
    // Lấy ngày và giờ hiện tại
    var now = new Date();

    // Lấy các thành phần ngày, giờ, phút, giây
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds()

    // Display the result in the element with id="demo"
    document.getElementById("Timer").innerHTML = "Lịch: " + day + "/" + month + "/" + year + ", Thời gian: " + hours + ":"  + minutes + ":" + seconds;

    }, 1000);

    function showAlert() {
        alert("Gửi thông tin thất bại!");
    }