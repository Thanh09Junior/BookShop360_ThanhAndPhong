//------------------- Hàm cho index.html ----------------//

//-------- Hàm SlideShow --------//
let slideIndex = 1; //Số của slide hiện tại 

//Mặc định show slide đầu khi tải trang
showSlides(slideIndex);

//Chuyển next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Cập nhật slide hiện tại
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let bookInfo = [
        {
            tieuDe: "Ori and the Will of The Wisps",
            moTa: "Miêu tả: Trong “Ori and the Will of the Wisps,” Ori là biểu tượng của hy vọng và lòng dũng cảm. Hành trình của Ori đầy thử thách, nhưng ánh sáng của Ori luôn chiếu sáng những góc tối, mang lại niềm tin và sự sống. Mỗi khoảnh khắc đều đong đầy cảm xúc, khiến người chơi rung động trước vẻ đẹp và sự sâu sắc của câu chuyện.",
            tacGia: "Tác giả: Moon Studio",
            giaThanh: "Giá tiền: 300.000đ"
        },
        {
            tieuDe: "Harry Potter",
            moTa: "Miêu tả: Harry Potter là biểu tượng của lòng dũng cảm và sự kiên cường. Từ một cậu bé mồ côi, Harry đã trở thành người hùng (miêu tả rất AI), đối mặt với Voldemort và vượt qua nhiều thử thách. Câu chuyện của cậu là hành trình tìm kiếm bản thân và khám phá sức mạnh của tình yêu và tình bạn.",
            tacGia: "Tác giả: J.K. Rowling",
            giaThanh: "Giá tiền: 200.000đ"
        },
        {
            tieuDe: "Đắc Nhân Tâm",
            moTa: "Miêu tả: Cuốn sách này đã giúp hàng triệu người trên thế giới cải thiện kỹ năng giao tiếp, xây dựng mối quan hệ tốt đẹp và đạt được thành công trong cuộc sống. Với những nguyên tắc đơn giản nhưng sâu sắc, “Đắc Nhân Tâm” khuyến khích chúng ta lắng nghe, thấu hiểu và tôn trọng người khác, từ đó tạo ra sự ảnh hưởng tích cực và bền vững. ",
            tacGia: "Tác giả: Dale Carnegie",
            giaThanh: "Giá tiền: 180.000đ"
        },
        {
            tieuDe: "Thỏ Bảy Màu",
            moTa: "Miêu tả: “Thỏ Bảy Màu” là một loạt truyện tranh ngắn sáng tác từ năm 2014. Nhân vật Thỏ Bảy Màu nổi tiếng với tính cách hài hước, dở hơi nhưng vô cùng đáng yêu. Những câu chuyện của Thỏ thường mang lại tiếng cười và những bài học ý nghĩa về cuộc sống. Tuy đơn sơ nhưng đậm chất tuổi trẻ.",
            tacGia: "Tác giả: Huỳnh Thái Ngọc",
            giaThanh: "Giá tiền: 120.000đ"
        },
        {
            tieuDe: "Tuổi Trẻ đáng giá bao nhiêu",
            moTa: "Miêu tả: “Tuổi trẻ đáng giá bao nhiêu?” là một cuốn sách nổi tiếng. Cuốn sách này không chỉ là những lời khuyên về cách sống và học tập, mà còn là những tâm sự chân thành và gần gũi, giúp người trẻ tìm thấy động lực và hướng đi trong cuộc sống. Được coi là cuốn sách của tâm hồn và được nhiều giới trẻ tìm đọc.",
            tacGia: "Tác giả: Rosie Nguyễn.",
            giaThanh: "Giá tiền: 130.000đ"
        },
        {
            tieuDe: "Tri thức là sức mạnh",
            moTa: "Miêu tả: Cuốn sách về những câu chuyện thành công và bài học kinh doanh của website Bookshop 360. Châm ngôn của tác giả: ` Tri thức là sức mạnh - là tiền đề của sự sáng tạo ` (lưu ý: sách hiện tại đang trong giai đoạn soạn thảo và kiểm tra nội dung nên chưa có mặt trên thị trường sách hiện nay)",
            tacGia: "Tác giả: Bookshop 360 - Junior Thành",
            giaThanh: "Giá tiền: 100.000đ"
        }
    ];

    let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //Trường hợp slide chạm đầu hoặc cuối
    if (n > slides.length) 
        {slideIndex = 1;}
    if (n < 1) 
        {slideIndex = slides.length;}

    //Ẩn tất cả các slideshow
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Bỏ trạng thái kích hoạt của tất cả các dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Hiện slide và dots tương ứng với slideIndex hiện tại
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";


    // Cập nhật thông tin sách theo slideIndex
    document.querySelector(".Book_info h2").innerText = bookInfo[slideIndex-1].tieuDe;
    document.querySelector(".Book_info p:nth-of-type(1)").innerText = bookInfo[slideIndex-1].moTa;
    document.querySelector(".Book_info p:nth-of-type(2)").innerText = bookInfo[slideIndex-1].tacGia;
    document.querySelector(".Book_info p:nth-of-type(3)").innerText = bookInfo[slideIndex-1].giaThanh;
}



//---------------- Phần mua sắm tự chọn -----------------//
const bookInfo = {
    "Book1": {
        img: "./Assest/Home/ori.webp",
        tieuDe: "Ori and the Will of the Wisps",
        tacGia: "Moon Studio",
        giaThanh: "300.000đ",
        genre: "Truyện tranh",
        moTa: `
            <ul>
                <li><p>- Ori and the Will of the Wisps, một cuốn sách nghệ thuật cao cấp, tập trung hoàn toàn vào nghệ thuật ý tưởng, bản phác thảo và bảng phân cảnh tuyệt vời đã tạo nên một kiệt tác hiện đại thực sự.</p></li>
                <li><p>- Mỗi phần đều có kèm theo lời bình luận của các nghệ sĩ tại Moon Studios và cuốn sách bao gồm một cuộc phỏng vấn chuyên sâu với các nhân vật chính về mặt nghệ thuật của trò chơi, tạo nên một hành trình khai sáng trong suốt quá trình phát triển trò chơi.</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=9"
    },
    "Book2": {
        img: "./Assest/Home/thobaymau.webp",
        tieuDe: "Thỏ Bảy Màu",
        tacGia: "Huỳnh Thái Ngọc",
        giaThanh: "120.000đ",
        genre: "Truyện tranh",
        moTa: `
            <ul>
                <li><p>- “Thỏ Bảy Màu” là một loạt truyện tranh ngắn sáng tác từ năm 2014. Nhân vật Thỏ Bảy Màu nổi tiếng với tính cách hài hước, dở hơi nhưng vô cùng đáng yêu. </p></li>
                <li><p>- Những câu chuyện của Thỏ thường mang lại tiếng cười và những bài học ý nghĩa về cuộc sống.</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=11"

    },
    "Book3": {
        img: "./Assest/Home/harry_potter.webp",
        tieuDe: "Harry Potter phần cuối",
        tacGia: "J.K.Rowling",
        giaThanh: "200.000đ",
        genre: "Truyện tranh",
        moTa: `
            <ul>
                <li><p>- Harry Potter là biểu tượng của lòng dũng cảm và sự kiên cường. Từ một cậu bé mồ côi, Harry đã trở thành người hùng (miêu tả rất AI), đối mặt với Voldemort và vượt qua nhiều thử thách. </p></li>
                <li><p>- Câu chuyện của cậu là hành trình tìm kiếm bản thân và khám phá sức mạnh của tình yêu và tình bạn.</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=5"
    },
    "Book4": {
        img: "./Assest/Home/conan.webp",
        tieuDe: "Conan thám tử lừng danh - Trọn Bộ",
        tacGia: "Aoyama Gosho",
        giaThanh: "180.000đ",
        genre: "Truyện tranh",
        moTa: `
            <ul>
                <li><p>- Câu chuyện xoay quanh Kudo Shinichi, một thám tử trung học tài ba, bị thu nhỏ thành cậu bé 6-7 tuổi sau khi uống phải một loại thuốc độc của Tổ chức Áo Đen. </p></li>
                <li><p>- Để che giấu thân phận thật, Shinichi lấy tên là Edogawa Conan và sống cùng gia đình Mori, tiếp tục phá án và tìm cách lấy lại hình dáng ban đầu. Bộ truyện không chỉ hấp dẫn bởi những vụ án ly kỳ mà còn bởi sự thông minh và dũng cảm của Conan</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=9"
    },
    "Book5": {
        img: "./Assest/Home/firen.webp",
        tieuDe: "Fierien - Pháp sư tiển táng",
        tacGia: "Yamada Kanehito",
        giaThanh: "200.000đ",
        genre: "Truyện tranh",
        moTa: `
            <ul>
                <li><p>- Câu chuyện kể về Frieren, một pháp sư elf đã sống hơn một ngàn năm, và hành trình của cô sau khi nhóm mạo hiểm giả của cô đánh bại Ma Vương và mang lại hòa bình cho thế giới.</p></li>
                <li><p>- Sau khi người đồng đội cũ Himmel qua đời, Frieren bắt đầu cuộc hành trình kéo dài mười năm để đến nơi an nghỉ của các linh hồn nhằm đoàn tụ với anh</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=3"
    },
    "Book6": {
        img: "./Assest/Home/dacnhantam.webp",
        tieuDe: "Đắc nhân tâm",
        tacGia: "Dale Carnegie",
        giaThanh: "100.000đ",
        genre: "Sách nước ngoài",
        moTa: `
            <ul>
                <li><p>- “Đắc Nhân Tâm” không chỉ là nghệ thuật thu phục lòng người, mà còn giúp ta hiểu biết và quan tâm đến những người xung quanh.</p></li>
                <li><p>- Triết lý của cuốn sách là hiểu mình, thành thật với chính mình, từ đó khơi gợi tiềm năng ẩn khuất trong người khác.</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=2"
    },
    "Book7": {
        img: "./Assest/Home/tuoitre.webp",
        tieuDe: "Tuổi Trẻ đáng giá bao nhiêu",
        tacGia: "Yamada Kanehito",
        giaThanh: "130.000đ",
        genre: "Sách trong nước",
        moTa: `
            <ul>
                <li><p>- Rosie Nguyễn, tên thật là Nguyễn Hoàng Nguyên, là một tác giả sách, blogger, giảng viên kỹ năng, và huấn luyện viên yoga.</p></li>
                <li><p>- Cuốn sách “Tuổi Trẻ Đáng Giá Bao Nhiêu” phản ánh tư duy tích cực của Rosie Nguyễn, giúp bạn trẻ mạnh mẽ bước chân vào cuộc sống.</p></li>
            </ul>
        `,
        link: "./HTML/Book/Sach.html?id=14"
    },
    "Book8": {
        img: "./Assest/Home/ad_sach.webp",
        tieuDe: "Tri thức là sức mạnh",
        tacGia: "Junior Thành",
        giaThanh: "60.000đ",
        genre: "Sách không bán",
        moTa: `
            <ul>
                <li><p>- Khi chúng ta học hỏi, nắm vững kiến thức, và áp dụng nó vào cuộc sống, chúng ta trở nên mạnh mẽ và tự tin hơn. </p></li>
                <li><p>- Hãy luôn tìm kiếm tri thức, đọc sách, nghiên cứu, và chia sẻ kiến thức với nhau. Đó là cách chúng ta xây dựng một xã hội thông minh và tiến bộ. 🌟📚</p></li>
            </ul>
        `,
        link: "#"
    }
};


//Hàm hiện sách tương ứng khi hover left_bookshelf (Mỗi một tag có function showInfo với id tương ứng)
function showInfo(bookId) {
    let info = bookInfo[bookId];
    document.getElementById("BookInfo").innerHTML = `
        <div>
            <img src="${info.img}">
        </div>
        <div>
            <h3>${info.tieuDe}</h3>
            <p>Tác giả: ${info.tacGia}</p>
            <p>Giá tiền: ${info.giaThanh}</p>
            <p>Thể loại: ${info.genre}</p>
            <p>Miêu tả:</p>
            ${info.moTa}
            <a href=" ${info.link}"><p>Mua ngay</p></a>
        </div>
    `;
}


//----------- Khi bấm vào một sách bất kì trong mua sách tuỳ chọn --------//
function redirect(n){
    let Link = {
        6: "./HTML/Book/Sach.html?id=2",   // DNT
        7: "./HTML/Book/Sach.html?id=14",  // TTDGBN
        1: "./HTML/Book/Sach.html?id=9",   // ORI
        2: "./HTML/Book/Sach.html?id=11",  // TBM
        3: "./HTML/Book/Sach.html?id=5",   // HP
        5: "./HTML/Book/Sach.html?id=3"    // FRIREN
    };

    //Nếu sách có tồn tại url từ link
    if (Link[n]) {
        window.open(Link[n], "_blank");
    } else {
       alert("Không tìm thấy sách!"); 
    }
    
 }