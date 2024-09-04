//----------------------- Hàm cập nhật giỏ hàng -------------------------//
//Các html sử dụng: Sach.html, giohang.html, gioithieu.html, shop.html, taikhoan.html

//Lấy dữ liệu từ local storage vào giỏ hàng.
document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    capNhatGioHang(cart);
});

//cập nhật hiển thị giỏ hàng rỗng hoặc có sách
function capNhatGioHang(cart) {
    if (cart.length === 0) {
        //Nếu giỏ hàng không có bất kì sản phẩm nào
        document.querySelector('.Empty_Cart').style.display = 'block';
        document.querySelector('.Not_empty_cart').style.setProperty('display', 'none', 'important');
    } else {
        //Nếu giỏ hàng có xuất hiện ít nhất một sản phẩm
        document.querySelector('.Empty_Cart').style.display = 'none';
        document.querySelector('.Not_empty_cart').style.display = 'flex';
        

        //Bắt đầu lấy container của phần tử có class .List
        const listContainer = document.querySelector('.List');
        listContainer.innerHTML = '';  
        
        //Tiến hành khởi tạo cấu trúc html cho từng sách trong local storage
        cart.forEach((item, index) => {
            const itemHtml =  `
            <div class="Items">
                 <input type="checkbox" id="item-${index}" name="item-${index}" ${item.checked ? 'checked' : ''}>
                <div class="Items_img">
                    <img src="${item.image}" />
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

        // Xử lý sự kiện khi người dùng muốn xoá sản phẩm
        document.querySelectorAll('.delete-item').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                
                const index = parseInt(this.getAttribute('data-index'));
                if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                    loaiBoSanPham(index);
                }
            });
        });
     
        //Xử lý sự kiện khi người dùng ấn nút giảm số lượng mua sản phẩm đó
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                capNhatSoLuong(index, -1);
            });
        });

          //Xử lý sự kiện khi người dùng ấn nút tăng số lượng mua sản phẩm đó
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                capNhatSoLuong(index, 1);
            });
        });

        //Xử lý sự kiện khi người dùng checkbox sản phẩm cần mua
         document.querySelectorAll('.List .Items input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', capNhatGia);
        });

        //Cập nhật lại giá mỗi hành động của người dùng
         capNhatGia();
    }
}

// Hàm cập nhật số lượng sản phẩm
function capNhatSoLuong(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart[index];
    
    if (!item) //Nếu item không tồn tại (lỗi kĩ thuật)
        return;

    item.quantity = (item.quantity || 1) + change;

    //Xử lý trường hợp giảm số lượng vượt 1
    if (item.quantity < 1) {
        item.quantity = 1; 
    }

    //Tiến thành thêm nội dung vào localStorage
    cart[index] = item;
    localStorage.setItem('cart', JSON.stringify(cart));

    capNhatGioHang(cart);
}


// Hàm cập nhật giá sản phẩm check box
function capNhatGia() {
    //Lấy id checkbox để xem sản phẩm được chọn để mua
    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    //từ checkbox được chọn lấy ra thông tin giá sản phẩm tương ứng
    const selectedIndexes = Array.from(selectedItems).map(checkbox => parseInt(checkbox.id.replace('item-', '')));
    const selectedItemsData = selectedIndexes.map(index => cart[index]);

    //Tính toán số lượng tiền có thuế VAT
    const totalPrice = selectedItemsData.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const vat = 0.1; // 10% VAT
    const totalWithVAT = (totalPrice * (1 + vat)).toFixed(0);

    //Cập nhật lại giá trong html
    document.querySelector('.Pay_Menu p').textContent = `Thành tiền: ${totalPrice} đ`;
    document.querySelector('#VAT').textContent = `Tổng Số Tiền (gồm VAT): ${totalWithVAT} đ`;
}

//Nút cho phép chọn toàn bộ sản phẩm
document.querySelector('#select-all').addEventListener('change', function () {
    const isChecked = this.checked;
    document.querySelectorAll('.List .Items input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    capNhatGia();
});


//Hàm xoá sản phẩm khỏi giỏ hàng
function loaiBoSanPham(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.splice(index, 1);  //Hàm xoá phẩn tử khỏi local storage rút gọn
    
    localStorage.setItem('cart', JSON.stringify(cart)); //Lưu lại phần tử bị xoá thành rỗng trong local storage
    
    capNhatGioHang(cart);
}


// Hàm xử lý quá trình mua của khách hàng
document.querySelector('.Pay_Menu a').addEventListener('click', (e) => {
    e.preventDefault();

    //Lấy các sách được người dùng chọn để mua
    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');

    //Nếu người dùng chưa mua sách nào
    if (selectedItems.length === 0) {
        alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán!');
        return; // Trong trường hợp người dùng không chọn bất kì sản phẩm nào
    }


    if (daDangNhap) {
        // Nếu đăng nhập thì tiếp tục

        //Hiện checkgif thông báo xác nhận thành công
        const checkGif = document.createElement('div');
        checkGif.className = 'check_gif';
        checkGif.innerHTML = `
            <div>
                <img src="../Assest_Gif_Video/preloader_gif/checktool.gif"/>
            </div>
        `;
        document.body.appendChild(checkGif);
        checkGif.style.display = 'flex';


        setTimeout(() => {
            checkGif.style.display = 'none';
            document.body.removeChild(checkGif);
        }, 1800);

        //Thông báo đơn hàng đang được kiểm lại
        setTimeout(() => {
            alert('Đơn hàng đã được xác nhận! Vui lòng kiểm tra mail để xem lại thông tin!'); 

            xoaSanPhamMua();
        }, 2000);

    } else {
        //Thông báo yêu cầu đăng nhập khi người dùng chưa đăng nhập
        alert('Người dùng chưa đăng nhập!');
    }
});

// Hàm xoá sản phẩm đã xác nhận khỏi local storage
function xoaSanPhamMua() {
    const selectedItems = document.querySelectorAll('.List .Items input[type="checkbox"]:checked');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const selectedIndexes = Array.from(selectedItems).map(checkbox => parseInt(checkbox.id.replace('item-', '')));

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

    const updatedCart = cart.filter((_, index) => !selectedIndexes.includes(index));

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    //Cập nhật lại giỏ hàng sau khi xoá sản phẩm đã mua
    capNhatGioHang(updatedCart);
}
