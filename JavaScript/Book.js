//-------------------- Hàm xử lý mua sách vào giỏ hàng ---------------//
//Các html sử dụng: Sach.html;

//Danh sách các thông tin cơ bản của sách theo id
function layThongTinSach(bookId) {
    //Danh sách liệt kê các sách theo bookID
    const danhSach = {
        "1": { title: "Con mèo Dạy Hải Âu Bay", price: 88000, image: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp" },
        "2": { title: "Đắc Nhân Tâm", price: 110200, image: "../Assest/Book/dnt.webp" },
        "3": { title: "Frieren - Tập 1", price: 77200, image: "../Assest/Book/friren.webp" },
        "4": { title: "Giáo trình Lịch Sử ĐCSVN", price: 61200, image: "../Assest/Book/lsd.webp" },
        "5": { title: "Harry Potter Và Bảo Bối Tử Thần", price: 102200, image: "../Assest/Book/harry.webp" },
        "6": { title: "Không Gia Đình", price: 42000, image: "../Assest/Book/kgd.webp" },
        "7": { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: 99200, image: "../Assest/Book/mngvtp.webp" },
        "8": { title: "Nhà Giả Kim", price: 75200, image: "../Assest/Book/ngk.webp" },
        "9": { title: "The Art of Ori", price: 300200, image: "../Assest/Book/ori.webp" },
        "10": { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: 61200, image: "../Assest/Book/su12.webp" },
        "11": { title: "Thỏ Bảy Màu", price: 85500, image: "../Assest/Book/tbm.webp" },
        "12": { title: "Tiếng Anh 8", price: 61200, image: "../Assest/Book/ta8.webp" },
        "13": { title: "Toán 10", price: 61200, image: "../Assest/Book/toan10.webp" },
        "14": { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: 72200, image: "../Assest/Book/ttdgbn.webp" },
    };
    return danhSach[bookId];
}

//Hàm xử lý thêm vào giỏ hàng
//Chú thích "cart" đại diện cho tên sách trong local storage.
function themGioHang(bookId) {
    //Kiểm tra local storage nếu có cart tồn tại hoặc phải khởi tạo mảng mới
    let sach = JSON.parse(localStorage.getItem("cart")) || [];
    let thongTinSach = layThongTinSach(bookId);

    // Thêm id book vào mảng
    sach.push(thongTinSach);
    localStorage.setItem("cart", JSON.stringify(sach));  
}

//Xử lý khi người dùng click vào mua ngay
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".buy-now").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();     //Ngăn chặn hành vị chuyển hướng mặc định của thẻ <a>
            let bookId = this.getAttribute("data-id");  //Lấy id của sách hiện tại

            if(bookId) {
                themGioHang(bookId);
                alert("Đã thêm vào giỏ hàng thành công!"); 
            }
            else{
                //Trong trường hợp người dùng bấm lỗi hoặc trang chưa tải xong
                alert("Có vấn đề trong việc lấy sách! Vui lỏng thử lại!");
                window.location.href = "../index.html"; 
            }
        });
    });
});
