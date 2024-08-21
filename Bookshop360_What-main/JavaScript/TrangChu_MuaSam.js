const bookInfo = {
    "Book1": {
        img: "./Assest/Home/ori.png",
        title: "Ori and the Will of the Wisps",
        author: "Moon Studio",
        price: "300.000đ",
        genre: "Truyện tranh",
        description: `
            <ul>
                <li><p>- Ori and the Will of the Wisps, một cuốn sách nghệ thuật cao cấp, tập trung hoàn toàn vào nghệ thuật ý tưởng, bản phác thảo và bảng phân cảnh tuyệt vời đã tạo nên một kiệt tác hiện đại thực sự.</p></li>
                <li><p>- Mỗi phần đều có kèm theo lời bình luận của các nghệ sĩ tại Moon Studios và cuốn sách bao gồm một cuộc phỏng vấn chuyên sâu với các nhân vật chính về mặt nghệ thuật của trò chơi, tạo nên một hành trình khai sáng trong suốt quá trình phát triển trò chơi.</p></li>
            </ul>
        `
    },
    "Book2": {
        img: "./Assest/Home/thobaymau.jpg",
        title: "Thỏ Bảy Màu",
        author: "Huỳnh Thái Ngọc",
        price: "120.000đ",
        genre: "Truyện tranh",
        description: `
            <ul>
                <li><p>- “Thỏ Bảy Màu” là một loạt truyện tranh ngắn sáng tác từ năm 2014. Nhân vật Thỏ Bảy Màu nổi tiếng với tính cách hài hước, dở hơi nhưng vô cùng đáng yêu. </p></li>
                <li><p>- Những câu chuyện của Thỏ thường mang lại tiếng cười và những bài học ý nghĩa về cuộc sống.</p></li>
            </ul>
        `
    },
    "Book3": {
        img: "./Assest/Home/harry_potter.webp",
        title: "Harry Potter Trọn Bộ",
        author: "J.K.Rowling",
        price: "200.000đ",
        genre: "Truyện tranh",
        description: `
            <ul>
                <li><p>- Harry Potter là biểu tượng của lòng dũng cảm và sự kiên cường. Từ một cậu bé mồ côi, Harry đã trở thành người hùng (miêu tả rất AI), đối mặt với Voldemort và vượt qua nhiều thử thách. </p></li>
                <li><p>- Câu chuyện của cậu là hành trình tìm kiếm bản thân và khám phá sức mạnh của tình yêu và tình bạn.</p></li>
            </ul>
        `
    },
    "Book4": {
        img: "./Assest/Home/conan.jpg",
        title: "Conan thám tử lừng danh - Trọn Bộ",
        author: "Aoyama Gosho",
        price: "180.000đ",
        genre: "Truyện tranh",
        description: `
            <ul>
                <li><p>- Câu chuyện xoay quanh Kudo Shinichi, một thám tử trung học tài ba, bị thu nhỏ thành cậu bé 6-7 tuổi sau khi uống phải một loại thuốc độc của Tổ chức Áo Đen. </p></li>
                <li><p>- Để che giấu thân phận thật, Shinichi lấy tên là Edogawa Conan và sống cùng gia đình Mori, tiếp tục phá án và tìm cách lấy lại hình dáng ban đầu. Bộ truyện không chỉ hấp dẫn bởi những vụ án ly kỳ mà còn bởi sự thông minh và dũng cảm của Conan</p></li>
            </ul>
        `
    },
    "Book5": {
        img: "./Assest/Home/firen.jpg",
        title: "Fierien - Pháp sư tiển táng",
        author: "Yamada Kanehito",
        price: "200.000đ",
        genre: "Truyện tranh",
        description: `
            <ul>
                <li><p>- Câu chuyện kể về Frieren, một pháp sư elf đã sống hơn một ngàn năm, và hành trình của cô sau khi nhóm mạo hiểm giả của cô đánh bại Ma Vương và mang lại hòa bình cho thế giới.</p></li>
                <li><p>- Sau khi người đồng đội cũ Himmel qua đời, Frieren bắt đầu cuộc hành trình kéo dài mười năm để đến nơi an nghỉ của các linh hồn nhằm đoàn tụ với anh</p></li>
            </ul>
        `
    },
    // Thông tin của các sách khác tương tự
};

function showInfo(bookId) {
    const info = bookInfo[bookId];
    document.getElementById('BookInfo').innerHTML = `
        <div>
            <img src="${info.img}">
        </div>
        <div>
            <h3>${info.title}</h3>
            <p>Tác giả: ${info.author}</p>
            <p>Giá tiền: ${info.price}</p>
            <p>Thể loại: ${info.genre}</p>
            <p>Miêu tả:</p>
            ${info.description}
            <a href="#"><p>Mua ngay</p></a>
        </div>
    `;
}

document.querySelectorAll('.Book_Container ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Ngăn chặn hành vi mặc định của liên kết
        event.preventDefault();
        
        // Xóa lớp 'Red_bold' khỏi tất cả các liên kết
        document.querySelectorAll('.Book_Container ul li a').forEach(function(a) {
            a.classList.remove('Red_bold');
        });

        // Thêm lớp 'Red_bold' vào liên kết được click
        this.classList.add('Red_bold');
    });
});
