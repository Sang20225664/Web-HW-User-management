// src/components/AddUser.js

function AddUser({ onAdd }) {
    return (
        <div>
            <button onClick={() => alert("Form thêm user sẽ được làm ở bước 5")}>
                Thêm người dùng
            </button>
        </div>
    );
}

export default AddUser;
