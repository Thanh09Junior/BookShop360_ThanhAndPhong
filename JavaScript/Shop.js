// Example data for categories and books
const categories = {
    "tat-ca": "Tất cả",
    "truyen-tranh": "Truyện tranh",
    "sach-trong-nuoc": "Sách trong nước",
    "sach-nuoc-ngoai": "Sách nước ngoài",
    "sach-giao-khoa": "Sách giáo khoa"
};

const books = {
    "tat-ca": [
        { title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/tbm.webp", link: "../HTML/Book/Sach.html?id=11" },
        { title: "Frieren - Pháp Sư Tiễn Táng: Tập 1", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/friren.webp", link: "../HTML/Book/Sach.html?id=3" },
        { title: "Harry Potter Và Bảo Bối Tử Thần", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/harry.webp", link: "../HTML/Book/Sach.html?id=5" },
        { title: "The Art of Ori and the Will of the Wisps", price: "300.200đ", oldPrice: "375.000đ", img: "../Assest/Book/ori.jpg", link: "../HTML/Book/Sach.html?id=9" },
        { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/mngvtp.webp", link: "../HTML/Book/Sach.html?id=7" },
        { title: "Chuyện Con Mèo Dạy Hải Âu Bay", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp", link: "../HTML/Book/Sach.html?id=1" },
        { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ttdgbn.webp", link: "../HTML/Book/Sach.html?id=14" },
        { title: "Đắc Nhân Tâm", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/dnt.webp", link: "../HTML/Book/Sach.html?id=2" },
        { title: "Không Gia Đình", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/kgd.webp", link: "../HTML/Book/Sach.html?id=6" },
        { title: "Nhà Giả Kim", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ngk.webp", link: "../HTML/Book/Sach.html?id=8" },
        { title: "Giáo trình Lịch Sử Đảng CS Việt Nam", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/lsd.webp", link: "../HTML/Book/Sach.html?id=4" },
        { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/su12.webp", link: "../HTML/Book/Sach.html?id= 10" },
        { title: "Tiếng Anh 8", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ta8.webp", link: "../HTML/Book/Sach.html?id=12" },
        { title: "Toán 10", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/toan10.webp", link: "../HTML/Book/Sach.html?id=13" },

    ],

    "truyen-tranh": [
        { title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/tbm.webp", link: "../HTML/Book/Sach.html?id=11" },
        { title: "Frieren - Pháp Sư Tiễn Táng: Tập 1", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/friren.webp", link: "../HTML/Book/Sach.html?id=3" },
        { title: "Harry Potter Và Bảo Bối Tử Thần", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/harry.webp", link: "../HTML/Book/Sach.html?id=5" },
        { title: "The Art of Ori and the Will of the Wisps", price: "300.200đ", oldPrice: "375.000đ", img: "../Assest/Book/ori.jpg", link: "../HTML/Book/Sach.html?id=9" },
        // Add more books for this category
    ],
     "sach-trong-nuoc":[
        { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/mngvtp.webp", link: "../HTML/Book/Sach.html?id=7" },
        { title: "Chuyện Con Mèo Dạy Hải Âu Bay", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp", link: "../HTML/Book/Sach.html?id=1" },
        { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ttdgbn.webp", link: "../HTML/Book/Sach.html?id=14" },
     ],
     "sach-nuoc-ngoai":[
        { title: "Đắc Nhân Tâm", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/dnt.webp", link: "../HTML/Book/Sach.html?id=2" },
        { title: "Không Gia Đình", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/kgd.webp", link: "../HTML/Book/Sach.html?id=6" },
        { title: "Nhà Giả Kim", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ngk.webp", link: "../HTML/Book/Sach.html?id=8" },
     ],
     "sach-giao-khoa":[
        { title: "Giáo trình Lịch Sử Đảng CS Việt Nam", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/lsd.webp", link: "../HTML/Book/Sach.html?id=4" },
        { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/su12.webp", link: "../HTML/Book/Sach.html?id=10" },
        { title: "Tiếng Anh 8", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/ta8.webp", link: "../HTML/Book/Sach.html?id=12" },
        { title: "Toán 10", price: "61.200đ", oldPrice: "72.000đ", img: "../Assest/Book/toan10.webp", link: "../HTML/Book/Sach.html?id=13" },
     ],
    // Add more book arrays for other categories
};

document.addEventListener('DOMContentLoaded', () => {
    const categoryTitle = document.getElementById('category-title');
    const categoryList = document.getElementById('category-list');
    const priceRange = document.getElementById('price-range');
    const booksContent = document.getElementById('books-content');
    let selectedPriceRanges = new Set(); // Use a Set to store selected price ranges

    // Load categories
    for (const [key, value] of Object.entries(categories)) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; // JavaScript will handle the click event
        link.innerHTML = `<p>${value}</p>`;
        link.dataset.categoryKey = key; // Store the category key in a data attribute
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            loadBooks(key, value);
            setActiveCategory(link); // Set the active category
        });
        listItem.appendChild(link);
        categoryList.appendChild(listItem);
    }

    // Load price range filters
    const priceRanges = ["0 - 50.000đ", "50.000đ - 100.000đ", "100.000đ - 150.000đ", "150.000đ - 200.000đ", "200.000đ trở lên"];
    priceRanges.forEach(range => {
        const listItem = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `price-${range.replace(/\s+/g, '-')}`;
        const label = document.createElement('label');
        label.textContent = range;
        label.setAttribute('for', input.id);
        listItem.appendChild(input);
        listItem.appendChild(label);
        priceRange.appendChild(listItem);

        input.addEventListener('change', () => {
            if (input.checked) {
                selectedPriceRanges.add(range);
            } else {
                selectedPriceRanges.delete(range);
            }
            loadBooks(document.querySelector('#category-list a.active').dataset.categoryKey, categories[document.querySelector('#category-list a.active').dataset.categoryKey]);
        });
    });

    // Load initial category (Truyện tranh)
    loadBooks('tat-ca', categories['tat-ca']);

    function loadBooks(categoryKey, categoryName) {
        categoryTitle.textContent = categoryName;
        booksContent.innerHTML = '';

        books[categoryKey].forEach(book => {
            // Parse price to number
            const priceNumber = parsePrice(book.price);
            if (isPriceInRanges(priceNumber, selectedPriceRanges)) {
                const bookLink = document.createElement('a');
                bookLink.href = book.link;
                bookLink.className = 'Book';

                const bookContent = document.createElement('div');
                bookContent.className = 'Book_content';

                const imgDiv = document.createElement('div');
                const img = document.createElement('img');
                img.src = book.img;
                imgDiv.appendChild(img);

                const title = document.createElement('p');
                title.textContent = book.title;

                const price = document.createElement('p');
                price.textContent = book.price;

                const oldPrice = document.createElement('p');
                oldPrice.textContent = book.oldPrice;

                const stars = document.createElement('p');
                stars.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(5);

                bookContent.appendChild(imgDiv);
                bookContent.appendChild(title);
                bookContent.appendChild(price);
                bookContent.appendChild(oldPrice);
                bookContent.appendChild(stars);
                
                bookLink.appendChild(bookContent);
                booksContent.appendChild(bookLink);
            }
        });
    }

    function parsePrice(priceString) {
        return parseInt(priceString.replace(/[^0-9]/g, ''));
    }

    function isPriceInRanges(price, ranges) {
        if (ranges.size === 0) return true; // No filter applied

        const rangeValues = {
            "0 - 50.000đ": [0, 50000],
            "50.000đ - 100.000đ": [50000, 100000],
            "100.000đ - 150.000đ": [100000, 150000],
            "150.000đ - 200.000đ": [150000, 200000],
            "200.000đ trở lên": [200000, Infinity]
        };

        for (let range of ranges) {
            const [min, max] = rangeValues[range];
            if (price >= min && price <= max) {
                return true;
            }
        }
        return false;
    }

    function setActiveCategory(activeLink) {
        // Remove active class from all category links
        const allLinks = categoryList.querySelectorAll('a');
        allLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked link
        activeLink.classList.add('active');
    }
});
