document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử tương ứng
    const accountLink = document.getElementById('account-link');
    const historyLink = document.getElementById('history-link');
    const editLink = document.querySelector('.Panel_header li:nth-child(3) a');
    const settingsLink = document.querySelector('.Panel_header li:nth-child(4) a');

    const mainInfo = document.querySelector('.Main_info');
    const buyHistory = document.querySelector('.Buy_History');
    const accountEdit = document.querySelector('.Account_Edit');
    const settings = document.querySelector('.Settings');

    // Function để ẩn tất cả các section
    function hideAllSections() {
        mainInfo.style.display = 'none';
        buyHistory.style.display = 'none';
        accountEdit.style.display = 'none';
        settings.style.display = 'none';
    }

    // Function để hiển thị section tương ứng
    function showSection(section, isMainInfo = false) {
        hideAllSections();
        if (isMainInfo) {
            section.style.display = 'flex'; // Nếu là Main_info, dùng flex
        } else {
            section.style.display = 'block'; // Nếu là các phần khác, dùng block
        }
    }

    // Sự kiện khi nhấn vào các liên kết
    accountLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(mainInfo, true);
    });

    historyLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(buyHistory);
    });

    editLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(accountEdit);
    });

    settingsLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(settings);
    });

    // Mặc định hiển thị phần thông tin tài khoản
    showSection(mainInfo, true);
});

/*---------Get sever Data-------*/
// Function to update user info on the page
function updateUserInfo() {
    const usernameElement = document.getElementById('username');
    const creationTimeElement = document.getElementById('creationTime');
    
    const username = localStorage.getItem('username');
    const creationTime = localStorage.getItem('creationTime');
    
    if (username && creationTime) {
        usernameElement.textContent = username;
        creationTimeElement.textContent = creationTime;
    } else {
        usernameElement.textContent = 'Chưa đăng nhập';
        creationTimeElement.textContent = 'Chưa có thông tin';
    }
}

// Function to update purchase history
function updatePurchaseHistory(boughtData) {
    const boughtItemsList = document.querySelector('.Bought_items_list');
    boughtItemsList.innerHTML = ''; // Clear the current list

    if (boughtData.items.length === 0) {
        boughtItemsList.innerHTML = '<p>Chưa có thông tin mua hàng.</p>';
        document.getElementById('totalQuantity').textContent = '0';
    } else {
        boughtData.items.forEach(item => {
            const itemHtml = `
            <div class="Bought_items">
                <div>
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <p>${item.title}</p>
                <p>Số lượng: ${item.quantity}</p>
                <p>Giá tiền: ${item.price} đ</p>
                <p>Ngày mua: ${new Date().toLocaleDateString()}</p>
            </div>
            <hr>`;
            boughtItemsList.innerHTML += itemHtml;
        });
        document.getElementById('totalQuantity').textContent = boughtData.totalQuantity;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Load the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);

    // Load and display the purchase history
    const boughtData = JSON.parse(localStorage.getItem('boughtData')) || { items: [], totalQuantity: 0 };
    updatePurchaseHistory(boughtData);

    // Update user info
    updateUserInfo();
});

const boughtData = JSON.parse(localStorage.getItem('boughtData')) || { items: [], totalQuantity: 0 };
updatePurchaseHistory(boughtData);

// Update user info
updateUserInfo();

//*---------------Get book data-----------------*/
document.getElementById('updateUsernameBtn').addEventListener('click', function() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newUsername = document.getElementById('newUsername').value;
    const confirmNewUsername = document.getElementById('confirmNewUsername').value;
    const storedPassword = localStorage.getItem('password');

    if (currentPassword !== storedPassword) {
        alert('Mật khẩu hiện tại không chính xác. Vui lòng thử lại.');
        return;
    }

    if (newUsername === confirmNewUsername) {
        // Update the username in localStorage
        localStorage.setItem('username', newUsername);
        alert('Tên tài khoản đã được cập nhật thành công!');
        window.location.href = '../HTML/taikhoan.html';
    } else {
        alert('Tên tài khoản không khớp. Vui lòng thử lại.');
    }
});

// Optional: Load the current username (if any) when the page loads
window.onload = function() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('newUsername').value = storedUsername;
    }
};



/*------------- Đăng xuất and đăng nhập ------------------*/
// Get elements for the settings actions
const deleteAccountLink = document.querySelector('.Settings .Settings_content a:nth-child(1)');



// Handle the "Xoá tài khoản" action
deleteAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (isLoggedIn) {
        const action = confirm('Bạn có chắc chắn muốn xoá tài khoản này?');

        if (action) {
            // Clear all data and log out
            localStorage.clear();
            isLoggedIn = false;

            // Re-enable interaction with the login popup
            loginTab.style.pointerEvents = 'auto';
            registerTab.style.pointerEvents = 'auto';
            loginInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'auto');
            registerInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'auto');
            
            // Close the settings menu
            document.querySelector('.Settings').style.display = 'none';

            // Show the login popup
            accountPopup.style.display = 'block';
            blackGlass.style.display = 'block';

            alert('Tài khoản đã được xoá thành công!');
            window.location.href = '../index.html';
        }
    }
});
