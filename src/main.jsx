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
// ==========================================
// BƯỚC 3: CHỨC NĂNG TÌM KIẾM (SEARCHFORM)
// ==========================================
// Mục tiêu: truyền dữ liệu tìm kiếm từ component con → cha → ResultTable
// - SearchForm nhận props onChangeValue (hàm setKeyword từ App)
// - Khi người dùng gõ vào input, gọi callback để cập nhật kw trong App
// - ResultTable nhận keyword qua props (chưa lọc dữ liệu ở bước này, chỉ hiển thị)

// Input -> SearchForm -> gọi onChangeValue -> App cập nhật kw -> truyền xuống ResultTable

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
// BƯỚC 4: Hiển thị danh sách người dùng
// - Fetch dữ liệu API 1 lần bằng useEffect
// - Lưu vào state users
// - Lọc theo keyword từ props
// - Render bảng bằng map()

function ResultTable({ keyword, user, onAdded }) {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    // 1. Tải dữ liệu 1 lần khi mount
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    // 2. Lọc danh sách theo keyword
    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(keyword.toLowerCase()) ||
            u.username.toLowerCase().includes(keyword.toLowerCase())
    );

    if (loading) return <p>Đang tải dữ liệu...</p>;

    return (
        <div>
            <h3>Danh sách người dùng</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.address.city}</td>
                            <td>
                                <button onClick={() => alert("Sửa sẽ làm bước sau")}>Sửa</button>
                                <button onClick={() => alert("Xóa sẽ làm bước sau")}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
