//-------------------- Hàm thực thi hộp tìm kiếm cho người dùng ---------//
//Các html sử dụng: index, sach, giohang, gioithieu, shop, taikhoan

window.onload = function () {
    //Nhận sự kiện click chuột vào icon search (kính lúp)
    let searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function (e) {
        e.preventDefault();

        //Lấy nội dung Search
        let noiDungSearch = document.getElementById("search-input").value;

        //Xử lý nội dung Search
        if (noiDungSearch) {
            if(noiDungSearch !== "BookShop 360")
            {
                let diachiURL = `https://www.google.com/search?q=`;

                //Bổ sung nội dung của người dùng vào URL
                diachiURL += `${encodeURIComponent(noiDungSearch)}`;
                window.open(diachiURL, "_blank");
            }
            else{
                //Easter egg
                window.open("https://vt.tiktok.com/ZS2Ue4YGp/", "_blank");
            }
        } else {
            alert("Vui lòng nhập nội dung cần tìm!");
        }
    });
}
