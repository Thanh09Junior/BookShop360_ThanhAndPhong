document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all 'buy-now' links
    document.querySelectorAll('.buy-now').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default link behavior
            const bookId = this.getAttribute('data-id');
            addToCart(bookId);
            alert('Đã thêm vào giỏ hàng thành công!');  // Show success alert
        });
    });
});

function addToCart(bookId) {
    // Load the cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const book = getBookDetails(bookId);
    
    // Add the selected book to the cart
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save the updated cart to localStorage
}

function getBookDetails(bookId) {
    // Replace with actual book details retrieval logic
    const books = {
        "1": { title: "Con mèo Dạy Hải Âu Bay", price: 42000, image: "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp" },
        "2": { title: "Đắc Nhân Tâm", price: 42000, image: "../../Assest/Book/dnt.webp" },
        "3": { title: "Frieren - Tập 1", price: 42000, image: "../../Assest/Book/friren.webp" },
        "4": { title: "Giáo trình Lịch Sử ĐCSVN", price: 42000, image: "../../Assest/Book/lsd.webp" },
        "5": { title: "Harry Potter Và Bảo Bối Tử Thần", price: 42000, image: "../../Assest/Book/harry.webp" },
        "6": { title: "Không Gia Đình", price: 42000, image: "../../Assest/Book/kgd.webp" },
        "7": { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: 42000, image: "../../Assest/Book/mngvtp.webp" },
        "8": { title: "Nhà Giả Kim", price: 42000, image: "../../Assest/Book/ngk.webp" },
        "9": { title: "The Art of Ori", price: 42000, image: "../../Assest/Book/ori.jpg" },
        "10": { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: 42000, image: "../../Assest/Book/su12.webp" },
        "11": { title: "Thỏ Bảy Màu", price: 42000, image: "../../Assest/Book/tbm.webp" },
        "12": { title: "Tiếng Anh 8", price: 42000, image: "../../Assest/Book/ta8.webp" },
        "13": { title: "Toán 10", price: 42000, image: "../../Assest/Book/toan10.webp" },
        "14": { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: 42000, image: "../../Assest/Book/ttdgbn.webp" },

        // Add more books as needed
    };
    return books[bookId];
}
