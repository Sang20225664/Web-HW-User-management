// ==========================================
// BƯỚC 1: THIẾT LẬP CẤU TRÚC REACT CƠ BẢN
// ==========================================
// - Tạo component gốc App và render vào thẻ <div id="root">
// - Dùng React, ReactDOM, Babel qua CDN (đã thêm trong index.html)

// ==========================================
// BƯỚC 2: TỔ CHỨC COMPONENT VÀ STATE TẬP TRUNG
// ==========================================
// Ứng dụng gồm 4 component: App, SearchForm, AddUser, ResultTable
// Dữ liệu và hàm setState được quản lý tại App (component cha)
// Các component con chỉ nhận props và gọi callback để báo ngược lên

// ---- Component 1: SearchForm ----
// Nhận hàm onChangeValue (tức là setKeyword từ App)
// Khi người dùng nhập từ khóa, kích hoạt callback để cập nhật kw trong App
function SearchForm({ onChangeValue }) {
    return (
        <input
            type="text"
            placeholder="Tìm theo name, username"
            onChange={(e) => onChangeValue(e.target.value)}
        />
    );
}
// ---- Component 2: AddUser ----
// Hiện tại chỉ tạo nút "Thêm người dùng"
// Chức năng thêm thật sẽ làm ở BƯỚC 5
function AddUser({ onAdd }) {
    return <button>Thêm người dùng</button>;
}
// ---- Component 3: ResultTable ----
// Hiển thị bảng kết quả (tạm thời chỉ hiện keyword)
// Sau này sẽ tải danh sách người dùng từ API ở BƯỚC 4
function ResultTable({ keyword, user }) {
    return (
        <div>
            <h3>Kết quả</h3>
            <p>Từ khóa tìm kiếm: {keyword}</p>
        </div>
    );
}
// ---- Component gốc: App ----
// Quản lý toàn bộ state và truyền props xuống các component con
function App() {
    const [kw, setKeyword] = React.useState("");
    const [newUser, setNewUser] = React.useState(null);

    return (
        <div>
            <h1>Quản lý người dùng</h1>
            <SearchForm onChangeValue={setKeyword} />
            <AddUser onAdd={setNewUser} />
            <ResultTable keyword={kw} user={newUser} />
        </div>
    );
}
// ---- Render toàn bộ ứng dụng ----
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
