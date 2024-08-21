let slideIndex = 1;
let isAnimating = false;  // Trạng thái để ngăn chặn chuyển slide quá nhanh
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let bookInfo = [
        {
            title: "Ori and the Will of The Wisps",
            description: "Miêu tả: Trong “Ori and the Will of the Wisps,” Ori là biểu tượng của hy vọng và lòng dũng cảm. Hành trình của Ori đầy thử thách, nhưng ánh sáng của Ori luôn chiếu sáng những góc tối, mang lại niềm tin và sự sống. Mỗi khoảnh khắc đều đong đầy cảm xúc, khiến người chơi rung động trước vẻ đẹp và sự sâu sắc của câu chuyện.",
            author: "Tác giả: Moon Studio",
            price: "Giá tiền: 300.000đ"
        },
        {
            title: "Harry Potter",
            description: "Miêu tả: Harry Potter là biểu tượng của lòng dũng cảm và sự kiên cường. Từ một cậu bé mồ côi, Harry đã trở thành người hùng (miêu tả rất AI), đối mặt với Voldemort và vượt qua nhiều thử thách. Câu chuyện của cậu là hành trình tìm kiếm bản thân và khám phá sức mạnh của tình yêu và tình bạn.",
            author: "Tác giả: J.K. Rowling",
            price: "Giá tiền: 200.000đ"
        },
        {
            title: "Đắc Nhân Tâm",
            description: "Miêu tả: Cuốn sách này đã giúp hàng triệu người trên thế giới cải thiện kỹ năng giao tiếp, xây dựng mối quan hệ tốt đẹp và đạt được thành công trong cuộc sống. Với những nguyên tắc đơn giản nhưng sâu sắc, “Đắc Nhân Tâm” khuyến khích chúng ta lắng nghe, thấu hiểu và tôn trọng người khác, từ đó tạo ra sự ảnh hưởng tích cực và bền vững. ",
            author: "Tác giả: Dale Carnegie",
            price: "Giá tiền: 180.000đ"
        },
        {
            title: "Thỏ Bảy Màu",
            description: "Miêu tả: “Thỏ Bảy Màu” là một loạt truyện tranh ngắn sáng tác từ năm 2014. Nhân vật Thỏ Bảy Màu nổi tiếng với tính cách hài hước, dở hơi nhưng vô cùng đáng yêu. Những câu chuyện của Thỏ thường mang lại tiếng cười và những bài học ý nghĩa về cuộc sống. Tuy đơn sơ nhưng đậm chất tuổi trẻ.",
            author: "Tác giả: Huỳnh Thái Ngọc",
            price: "Giá tiền: 120.000đ"
        },
        {
            title: "Tuổi Trẻ đáng giá bao nhiêu",
            description: "Miêu tả: “Tuổi trẻ đáng giá bao nhiêu?” là một cuốn sách nổi tiếng. Cuốn sách này không chỉ là những lời khuyên về cách sống và học tập, mà còn là những tâm sự chân thành và gần gũi, giúp người trẻ tìm thấy động lực và hướng đi trong cuộc sống. Được coi là cuốn sách của tâm hồn và được nhiều giới trẻ tìm đọc.",
            author: "Tác giả: Rosie Nguyễn.",
            price: "Giá tiền: 130.000đ"
        },
        {
            title: "Tri thức là sức mạnh",
            description: "Miêu tả: Cuốn sách về những câu chuyện thành công và bài học kinh doanh của website Bookshop 360. Châm ngôn của tác giả: ' Tri thức là sức mạnh - là tiền đề của sự sáng tạo ' (lưu ý: sách hiện tại đang trong giai đoạn soạn thảo và kiểm tra nội dung nên chưa có mặt trên thị trường sách hiện nay)",
            author: "Tác giả: Bookshop 360 - Junior Thành",
            price: "Giá tiền: 100.000đ"
        }
    ];

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    

    // Update book info
    document.querySelector(".Book_info h3").innerText = bookInfo[slideIndex-1].title;
    document.querySelector(".Book_info p:nth-of-type(1)").innerText = bookInfo[slideIndex-1].description;
    document.querySelector(".Book_info p:nth-of-type(2)").innerText = bookInfo[slideIndex-1].author;
    document.querySelector(".Book_info p:nth-of-type(3)").innerText = bookInfo[slideIndex-1].price;
}