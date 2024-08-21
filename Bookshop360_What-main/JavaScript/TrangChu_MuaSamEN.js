const bookInfo = {
    "Book1": {
        img: "./Assest/Home/ori.png",
        title: "Ori and the Will of the Wisps",
        author: "Moon Studio",
        price: "12.0$",
        genre: "Comic",
        description: `
            <ul>
                <li><p>- Ori and the Will of the Wisps, a high-end art book, focuses entirely on the concept art, sketches, and storyboards that have created a true modern masterpiece.</p></li>
                <li><p>- Each section is accompanied by commentary from the artists at Moon Studios, and the book includes an in-depth interview with the main artistic figures of the game, creating an enlightening journey throughout the game's development process.</p></li>
            </ul>
        `
    },
    "Book2": {
        img: "./Assest/Home/thobaymau.jpg",
        title: "Thỏ Bảy Màu",
        author: "Huỳnh Thái Ngọc",
        price: "5.7$",
        genre: "Comic",
        description: `
            <ul>
                <li><p>- “Thỏ Bảy Màu” is a series of short comics created since 2014. The character Thỏ Bảy Màu is famous for his humorous, quirky, but extremely lovable personality.</p></li>
                <li><p>- Thỏ's stories often bring laughter and meaningful life lessons.</p></li>
            </ul>
        `
    },
    "Book3": {
        img: "./Assest/Home/harry_potter.webp",
        title: "Harry Potter Complete Series",
        author: "J.K. Rowling",
        price: "4.8$",
        genre: "Comic",
        description: `
            <ul>
                <li><p>- Harry Potter is a symbol of courage and resilience. From an orphaned boy, Harry becomes a hero (very AI description), facing Voldemort and overcoming many challenges.</p></li>
                <li><p>- His story is a journey of self-discovery and exploring the power of love and friendship.</p></li>
            </ul>
        `
    },
   "Book4": {
        img: "./Assest/Home/conan.jpg",
        title: "Detective Conan - Complete Series",
        author: "Aoyama Gosho",
        price: "4.6$",
        genre: "Comic",
        description: `
            <ul>
                <li><p>- The story revolves around Kudo Shinichi, a brilliant high school detective who is shrunk to the size of a 6-7 year old boy after ingesting a poison from the Black Organization.</p></li>
                <li><p>- To conceal his true identity, Shinichi takes the name Edogawa Conan and lives with the Mori family, continuing to solve cases and find a way to return to his original form. The series is captivating not only because of the thrilling cases but also due to Conan's intelligence and bravery.</p></li>
            </ul>
        `
    },

    "Book5": {
        img: "./Assest/Home/firen.jpg",
        title: "Frieren - The Funeral Director Mage",
        author: "Yamada Kanehito",
        price: "4.9$",
        genre: "Comic",
        description: `
            <ul>
                <li><p>- The story follows Frieren, an elf mage who has lived for over a thousand years, and her journey after her adventurer group defeats the Demon King and brings peace to the world.</p></li>
                <li><p>- After her former comrade Himmel passes away, Frieren embarks on a ten-year journey to the resting place of souls to reunite with him.</p></li>
            </ul>
        `
    }

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
            <p>Author: ${info.author}</p>
            <p>Price: ${info.price}</p>
            <p>Type: ${info.genre}</p>
            <p>Description:</p>
            ${info.description}
            <a href="#"><p>Buy now</p></a>
        </div>
    `;
}
