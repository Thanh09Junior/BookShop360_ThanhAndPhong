document.addEventListener('DOMContentLoaded', function () {
    // Load the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);
});

function updateCartDisplay(cart) {
    if (cart.length === 0) {
        document.querySelector('.Empty_Cart').style.display = 'block';
        document.querySelector('.Not_empty_cart').style.display = 'none';
    } else {
        document.querySelector('.Empty_Cart').style.display = 'none';
        document.querySelector('.Not_empty_cart').style.display = 'flex';
        
        const listContainer = document.querySelector('.List');
        listContainer.innerHTML = '';  // Clear the current list
        
        cart.forEach((item, index) => {
            let updatedImagePath = item.image.replace(/^\.\.\/\.\.\//, '../');


            const itemHtml =  `
            <div class="Items">
                 <input type="checkbox" id="item-${index}" name="item-${index}" ${item.checked ? 'checked' : ''}>
                <div class="Items_img">
                    <img src="${updatedImagePath}" />
                </div>
                <div class="content">
                    <p>${item.title}</p>
                    <p>Giá: ${item.price} đ</p>
                </div>
                <p>
                    <i class="fa-solid fa-caret-left decrease-quantity" data-index="${index}"></i>
                    <span class="quantity">${item.quantity || 1}</span>
                    <i class="fa-solid fa-caret-right increase-quantity" data-index="${index}"></i>
                </p>
                <p>${item.price * (item.quantity || 1)} đ</p>
                <a href="#" class="delete-item" data-index="${index}"><i class="fa-solid fa-trash"></i></a>
            </div>`;
            
            listContainer.innerHTML += itemHtml;
        });

        // Add event listeners for delete links
        document.querySelectorAll('.delete-item').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default anchor behavior
                const index = parseInt(this.getAttribute('data-index'));
                if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                    removeItemFromCart(index);
                }
            });
        });
     // Add event listeners for quantity buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, -1);
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, 1);
            });
        });

         // Add event listeners for item checkboxes
         document.querySelectorAll('.List .Items input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateTotalPrice);
        });
         updateTotalPrice();
    }
}

function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart[index];
    
    if (!item) return;

    item.quantity = (item.quantity || 1) + change;

    if (item.quantity < 1) {
        item.quantity = 1; // Ensure quantity doesn't go below 1
    }

    cart[index] = item;
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartDisplay(cart);
}


function updateTotalPrice() {
    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const selectedIndexes = Array.from(selectedItems).map(checkbox => parseInt(checkbox.id.replace('item-', '')));
    const selectedItemsData = selectedIndexes.map(index => cart[index]);

    const totalPrice = selectedItemsData.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const vat = 0.1; // 10% VAT
    const totalWithVAT = (totalPrice * (1 + vat)).toFixed(0);

    document.querySelector('.Pay_Menu p').textContent = `Thành tiền: ${totalPrice} đ`;
    document.querySelector('#VAT').textContent = `Tổng Số Tiền (gồm VAT): ${totalWithVAT} đ`;
}

document.querySelector('#select-all').addEventListener('change', function () {
    const isChecked = this.checked;
    document.querySelectorAll('.List .Items input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    updateTotalPrice();
});


function removeItemFromCart(index) {
    // Load the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item from the cart array
    cart.splice(index, 1);
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart display
    updateCartDisplay(cart);
}


// Handle payment button click
document.querySelector('.Pay_Menu a').addEventListener('click', (e) => {
    e.preventDefault();

    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');

    if (selectedItems.length === 0) {
        alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán!');
        return; // Exit the function if no items are selected
    }

    if (isLoggedIn) {
        // Show the GIF for 2 seconds then hide it
        const checkGif = document.createElement('div');
        checkGif.className = 'check_gif';
        checkGif.innerHTML = `
            <div>
                <img src="../Assest_Gif_Video/preloader_gif/checktool.gif"/>
            </div>
        `;
        document.body.appendChild(checkGif);
        checkGif.style.display = 'flex';

        // Hide GIF after 2 seconds and then show the alert
        setTimeout(() => {
            checkGif.style.display = 'none';
            document.body.removeChild(checkGif);
        }, 1800);

        setTimeout(() => {
            alert('Đơn hàng đã được xác nhận! Vui lòng kiểm tra mail để xem lại thông tin!'); 

            // Remove selected items from the cart
            removeSelectedItems();
        }, 2000);

    } else {
        alert('Người dùng chưa đăng nhập!');
    }
});

function removeSelectedItems() {
    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const selectedIndexes = Array.from(selectedItems).map(checkbox => parseInt(checkbox.id.replace('item-', '')));

    // Get details of selected items
    const boughtItems = selectedIndexes.map(index => cart[index]);

    // Save bought items and their quantity to localStorage
    const boughtData = JSON.parse(localStorage.getItem('boughtData')) || { items: [], totalQuantity: 0 };

    selectedIndexes.forEach(index => {
        const item = cart[index];
        const existingItem = boughtData.items.find(boughtItem => boughtItem.title === item.title);
        if (existingItem) {
            existingItem.quantity += item.quantity || 1;
        } else {
            boughtData.items.push({
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: item.quantity || 1
            });
        }
        boughtData.totalQuantity += item.quantity || 1;
    });

    localStorage.setItem('boughtData', JSON.stringify(boughtData));

    // Remove selected items from the cart
    const updatedCart = cart.filter((_, index) => !selectedIndexes.includes(index));

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the cart display
    updateCartDisplay(updatedCart);
}
