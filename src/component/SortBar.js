import "./SortBar.css";

const sortBarItem = [
  "Tất cả",
  "Danh sách kết hợp",
  "Âm nhạc",
  "Trực tiếp",
  "Đọc rap",
  "Trò chơi hành động phiêu lưu",
  "Bóng đá",
  "Mới tải lên gần đây",
  "Đã xem",
  "Đề xuất mới",
];

function SortBar() {
  return (
    <div>
      {sortBarItem.map((item, index) => {
        if (index === 0) {
          return (
            <button className="sort-btn active" key={index}>
              {item}
            </button>
          );
        } else {
          return (
            <button className="sort-btn" key={index}>
              {item}
            </button>
          );
        }
      })}
    </div>
  );
}

export default SortBar;
