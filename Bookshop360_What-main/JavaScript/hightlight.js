document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.sec2');
    const header = document.querySelector('header');
    const links = header.querySelectorAll('a');
    const paragraphs = header.querySelectorAll('p');
    const icons = header.querySelectorAll('i');

    const updateHeaderColors = (color) => {
        links.forEach(link => link.style.color = color);
        paragraphs.forEach(p => p.style.color = color);
        icons.forEach(i => i.style.color = color);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top >= 0 && rect.bottom <= viewportHeight) {
                    updateHeaderColors('black');
                } else {
                    updateHeaderColors('white');
                }
            } else {
                updateHeaderColors('white');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);

    // Thay đổi màu sắc khi con chuột di chuyển vào .sec2
    section.addEventListener('mouseover', () => {
        updateHeaderColors('black');
    });

    // Khôi phục màu sắc khi con chuột rời khỏi .sec2
    section.addEventListener('mouseout', () => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= viewportHeight) {
            updateHeaderColors('black');
        } else {
            updateHeaderColors('white');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var icon = playPauseBtn.querySelector('i');

    // Tự động phát nhạc khi tải trang
    audio.play();

    // Thay đổi biểu tượng khi nhạc đang phát hoặc dừng
    audio.addEventListener('play', function() {
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-pause');
    });

    audio.addEventListener('pause', function() {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-caret-right');
    });

    // Điều khiển phát/dừng nhạc khi nhấp vào biểu tượng
    playPauseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});


document.querySelector('.menu_left a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    const highlightNav = document.querySelector('.Highlight_Navigation');
    highlightNav.classList.toggle('active'); // Thêm hoặc bỏ class 'active'
    
    // Giữ nguyên hiệu ứng hover khi mở navigation
    this.classList.toggle('active');
});

// Thêm sự kiện click cho tất cả các <a> trong .Nav_content
document.querySelectorAll('.Nav_content a').forEach(function(link) {
    link.addEventListener('click', function() {
        const highlightNav = document.querySelector('.Highlight_Navigation');
        highlightNav.classList.remove('active'); // Ẩn Highlight_Navigation
        
        // Bỏ trạng thái active của "Điều hướng" trên header
        document.querySelector('.menu_left a[href="#"]').classList.remove('active');
    });
});



document.querySelectorAll('.Highlight_Navigation .Nav_content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định

        const targetId = this.getAttribute('href').slice(1); // Lấy ID mục tiêu từ href
        const targetElement = document.getElementById(targetId);
        const header = document.querySelector('header'); // Thay đổi theo selector của bạn

        if (targetElement && header) {
            // Cuộn đến mục tiêu
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            const header = document.querySelector('header');
            header.classList.add('fixed');
            // Thay đổi lớp của header sau khi cuộn xong
            setTimeout(() => {
                header.style.top = '0px';
                header.classList.remove('hidden');
                header.classList.add('fixed');
            }, 3000); // Điều chỉnh thời gian nếu cần
        }
    });
});
