import "./SettingItem.css";
function SettingItem({ item }) {
  return (
    <div className="setting-item-list">
      <div className="setting-item-icon">{item.icon}</div>
      <div className="setting-item-title">{item.name} </div>
      <div className="setting-item-arrow"> {item.arrow} </div>
    </div>
  );
}

export default SettingItem;
