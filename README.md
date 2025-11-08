# Bài tập React CRUD

## 🧭 Giới thiệu
Ứng dụng React CRUD cơ bản – làm theo hướng dẫn tài liệu “Lập trình React cơ bản”.

---

## 🚀 Bước 1 – Thiết lập cấu trúc React cơ bản
- Tạo file `index.html` với thẻ `<div id="root"></div>`.
- Thêm CDN React, ReactDOM, Babel.
- Tạo component App và render vào root.

📸 **Kết quả:**
![step1](./res_imgs/step1.png)

---

## ⚙️ Bước 2 – Tổ chức Component và State tập trung
- Tạo 3 component: `SearchForm`, `AddUser`, `ResultTable`.
- Quản lý state tại `App`.
- Dữ liệu truyền 1 chiều cha → con qua props.

📸 **Kết quả:**
![step2](./res_imgs/step2.png)

---

## 🧠 Bước 3 – Chức năng Tìm kiếm
- Tạo input ở `SearchForm`
- Gửi giá trị người dùng nhập lên `App` qua callback `onChangeValue`
- `App` cập nhật state `kw` và truyền xuống `ResultTable`
- Tạm thời chỉ hiển thị keyword (lọc thực hiện ở bước 4)

📸 **Kết quả:**
Không thay đổi giao diện nhiều, nhưng khi nhập text, keyword hiển thị bên dưới bảng.
![step3](.res_imgs/step3.png)