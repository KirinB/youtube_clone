import "./CardShort.css";

function CardShort({ item }) {
  return (
    <div className="cardshort">
      <div className="imageshorts">
        <img src={item.image} alt="" />
      </div>
      <div className="titleshorts">{item.title}</div>
      <div className="viewshorts">{item.views}</div>
    </div>
  );
}

export default CardShort;
