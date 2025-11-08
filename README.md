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
![step3](./res_imgs/step3.png)

---

## 📦 Bước 4 – Hiển thị danh sách (ResultTable)

- Dùng `useEffect()` để gọi API một lần khi component mount.
- Lưu dữ liệu vào state `users`.
- Dùng `Array.filter()` để lọc theo `keyword`.
- Render bảng bằng `map()`.

📸 **Kết quả:**
![step4](./res_imgs/step4.png)
![step4a](./res_imgs/step4a.png)
![step4b](./res_imgs/step4b.png)

---

## 🏗️ Bước 5 – Thêm người dùng (AddUser)

- Tạo form nhập user (controlled inputs)
- Tạo object `newUser` khi nhấn nút
- Truyền lên App qua `onAdd(newUser)`
- App truyền user xuống `ResultTable`
- ResultTable cập nhật state users và re-render

📸 **Kết quả:** 
![step5](./res_imgs/step5.png)
![step5a](./res_imgs/step5a.png)

---

## ✏️ Bước 6 – Sửa người dùng (Edit)

- Click nút **Sửa** để mở form edit
- Deep Copy object user để tránh mutate dữ liệu gốc
- Update nội dung bằng controlled input
- Lưu lại bằng `Array.map()` để thay user theo id

📸 **Kết quả:** (ảnh step6.png)
![step6](./res_imgs/step6.png)
![step6a](./res_imgs/step6a.png)

