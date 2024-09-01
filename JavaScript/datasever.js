// Get elements
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginInfo = document.getElementById('loginInfo');
const registerInfo = document.getElementById('registerInfo');
const accountPopup = document.getElementById('Account'); // Assuming this is the popup element
const loginButton = document.getElementById('login');
const blackGlass = document.getElementById('Black_glass'); // Assuming this is the overlay element

// Track login state
let isLoggedIn = false;

// Check if user data exists in localStorage to set login state
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');
if (storedUsername && storedPassword) {
    isLoggedIn = true;
}

// Handle tab switching
loginTab.addEventListener('click', () => {
    if (!isLoggedIn) { // Only allow switching tabs if not logged in
        loginInfo.style.display = 'block';
        registerInfo.style.display = 'none';
        loginTab.style.color = 'red';
        registerTab.style.color = 'black';
    }
});

registerTab.addEventListener('click', () => {
    if (!isLoggedIn) { // Only allow switching tabs if not logged in
        loginInfo.style.display = 'none';
        registerInfo.style.display = 'block';
        registerTab.style.color = 'red';
        loginTab.style.color = 'black';
    }
});

// Handle user registration
document.querySelector('#registerInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('#registerInfo input[type="username"]').value;
    const password = document.querySelector('#registerInfo input[type="password"]').value;
    const repassword = document.querySelector('#registerInfo input[type="repassword"]').value;

    if(password != repassword){
        alert('Mật khẩu xác nhận không trùng khớp!');
        return;
    }

    if (username && password) {
        // Save user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('creationTime', new Date().toLocaleString());
        alert('Đăng kí thành công!.');
        // Switch to login tab
        loginTab.click();
    } else {
        alert('Vui lòng điền hết thông tin cần thiết!.');
    }
});

// Handle user login
document.querySelector('#loginInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();
    const inputUsername = document.querySelector('#loginInfo input[type="text"]').value;
    const inputPassword = document.querySelector('#loginInfo input[type="text"]:nth-child(4)').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert('Đăng nhập thành công');
        isLoggedIn = true; // Set login state
        // Disable interaction with the login popup
        loginTab.style.pointerEvents = 'none';
        registerTab.style.pointerEvents = 'none';
        loginInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
        registerInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
        // Close the popup and hide the overlay after successful login
        accountPopup.style.display = 'none';
        blackGlass.style.display = 'none';
    } else {
        alert('Sai tài khoản hoặc mật khẩu.');
    }
});

// Handle account icon click
loginButton.addEventListener('click', () => {
    if (isLoggedIn) {
        // Hide the overlay and popup when "Cancel" is clicked
        accountPopup.style.display = 'none';
        blackGlass.style.display = 'none';
    } else {
        // If not logged in, show the login popup
        accountPopup.style.display = 'block';
        blackGlass.style.display = 'block'; // Show the overlay when the popup is shown
    }
});


document.querySelectorAll('a#login').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
        }
    });
});
