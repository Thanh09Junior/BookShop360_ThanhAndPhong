let slideIndex = 1;
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
            description: "Description: In “Ori and the Will of the Wisps,” Ori symbolizes hope and courage. Ori journey is filled with challenges, but Ori light always illuminates the darkest corners, bringing faith and life. Each moment is brimming with emotion, leaving players moved by the beauty and depth of the story.",
            author: "Author: Moon Studio",
            price: "Price: 13.0$"
        },
        {
            title: "Harry Potter",
            description: "Description: Harry Potter embodies courage and resilience. From an orphaned boy, he transforms into a hero, confronting Voldemort and overcoming numerous challenges. His story is a journey of self-discovery, exploring the power of love and friendship.",
            author: "Author: J.K. Rowling",
            price: "Price: 8.3$"
        },
        {
            title: "How to Win Friends and Influence People",
            description: "Description: This book has helped millions of people worldwide improve their communication skills, build meaningful relationships, and achieve success in life. With simple yet profound principles, “How to Win Friends and Influence People” encourages us to listen, understand, and respect others, thereby creating a positive and lasting impact.",
            author: "Author: Dale Carnegie",
            price: "Price: 6.9$"
        },
        {
            title: "Thỏ Bảy Màu",
            description: "Description: “Thỏ Bảy Màu” is a series of short comics created since 2014. The character Thỏ Bảy Màu is famous for his humorous, quirky, yet incredibly lovable personality. His stories often bring laughter and meaningful life lessons.",
            author: "Author: Huynh Thai Ngoc",
            price: "Price: 5.4$"
        },
        {
            title: "How Much is Youth Worth?",
            description: "Description: “How Much is Youth Worth?” is a renowned book. It offers not only advice on living and learning but also heartfelt and relatable reflections, helping young people find motivation and direction in life.",
            author: "Author: Rosie Nguyen",
            price: "Price: 5.1$"
        },
        {
            title: "Knowledge is Power",
            description: "Description: This book delves into the success stories and business lessons of the Bookshop 360 website. Currently in the drafting stage, it requires extensive review and refinement. (Note: This book does not exist in real life.)",
            author: "Author: Bookshop 360 - Junior Thành",
            price: "Price: 4.7$"
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