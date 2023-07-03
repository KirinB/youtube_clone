import "./CardItem.css";
import CardItemLive from "./CardItemLive";
import { StickIcon } from "./icon";
import { useEffect, useRef } from "react";
function CardItem({
  avtuser,
  title,
  image,
  channel,
  stick,
  views,
  live,
  isOpen,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (isOpen) {
      element.classList.remove("fullscreen");
    } else {
      element.classList.add("fullscreen");
    }
  }, [isOpen]);

  return (
    <div className="card-item">
      <img src={image} alt="" className="card-thumbnail" ref={ref} />
      <div className="all-info-card">
        {avtuser && (
          <div className="card-user-avt">
            <img src={avtuser} alt="" />
          </div>
        )}
        <div className="info-card">
          <p>{title}</p>
          <div className="info-channel">
            <p>{channel}</p>
            {/* stick check profile */}
            {stick && <StickIcon className={"iconstick"} />}
          </div>
          <span>{views}</span>
          {live && <CardItemLive />}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
