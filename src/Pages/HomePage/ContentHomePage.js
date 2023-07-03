import { useEffect, useRef } from "react";
import images from "../../asset/images";
import CardItem from "../../component/CardItem";
import "./ContentHomePage.css";
import CardShort from "../../component/CardShort";
import { CloseIcon, ShortsIconRed } from "../../component/icon";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const contentHomePage = [
  {
    avtuser: images.avatarLck,
    title:
      "Bình luận Tiếng Việt:HLE vs DK|KT vs KDF|Tuần 4 Ngày 1|LCK Mùa Hè 2023",
    image: images.video1,
    channel: "LCK Tiếng Việt",
    stick: true,
    views: "6,9 N người đang xem",
    live: true,
  },
  {
    avtuser: "",
    title: "Danh sách kết hợp - 2h - MCK",
    image: images.video2,
    channel: "RPT MCK, MCK, Thai VG và nhiều nghệ sĩ khác",
    sitck: false,
    views: "",
    live: false,
  },
  {
    avtuser: images.avatarmixi,
    title:
      "(Perfect Heist 2) Cùng đồng đội Khôi Mõm phá đường dây cướp ngân hàng",
    image: images.video4,
    channel: "MixiGaming",
    stick: true,
    views: "700 N lượt xem. 1 Năm trước",
    live: false,
  },
  {
    avtuser: images.avatarsofm,
    title: "SofM - #LPLCoStream",
    image: images.video3,
    channel: "SofM",
    stick: true,
    views: "121 N lượt xem. Phát trực tiếp 9 ngày trước",
    live: false,
  },
  {
    avtuser: "",
    title: "Danh sách kết hợp - 2h - MCK",
    image: images.video2,
    channel: "RPT MCK, MCK, Thai VG và nhiều nghệ sĩ khác",
    sitck: false,
    views: "",
    live: false,
  },
  {
    avtuser: images.avatarmixi,
    title:
      "(Perfect Heist 2) Cùng đồng đội Khôi Mõm phá đường dây cướp ngân hàng",
    image: images.video4,
    channel: "MixiGaming",
    stick: true,
    views: "700 N lượt xem. 1 Năm trước",
    live: false,
  },
  {
    avtuser: images.avatarsofm,
    title: "SofM - #LPLCoStream",
    image: images.video3,
    channel: "SofM",
    stick: true,
    views: "121 N lượt xem. Phát trực tiếp 9 ngày trước",
    live: false,
  },
  {
    avtuser: images.avatarLck,
    title:
      "Bình luận Tiếng Việt:HLE vs DK|KT vs KDF|Tuần 4 Ngày 1|LCK Mùa Hè 2023",
    image: images.video1,
    channel: "LCK Tiếng Việt",
    stick: true,
    views: "6,9 N người đang xem",
    live: false,
  },
];

const contentShorts = [
  {
    image: images.shorts1,
    title: "If You Don't Understand Short Chircuiting Your App",
    views: "367 N lượt xem",
  },
  {
    image: images.shorts2,
    title: "#shorts Hồng PHunogw bè Dẫu Có Lỗi Lầm cực chill",
    views: "1,4 N lượt xem",
  },
  {
    image: images.shorts3,
    title: "#shorts Chuyển trạng thái nhanh với sơ đồ 4213",
    views: "22 N lượt xem",
  },
  {
    image: images.shorts4,
    title: 'Khi có ông con suốt ngày hỏi "Bố có yêu mẹ không?"',
    views: "1,5 Tr lượt xem",
  },
  {
    image: images.shorts5,
    title: "List Nước Ngọt Ít Calo",
    views: "225 N lượt xem",
  },
  {
    image: images.shorts6,
    title: "Quá là chung thủy .... | #shorts",
    views: "10 N lượt xem",
  },
];

function ContentHomePage({ isOpen }) {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (isOpen) {
      element.classList.remove("fullscreen");
      ref2.current.classList.remove("fullscreen");
    } else {
      element.classList.add("fullscreen");
      ref2.current.classList.add("fullscreen");
    }
  }, [isOpen]);

  const closeBtnToolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Không quan tâm
    </Tooltip>
  );

  return (
    <>
      <div ref={ref} className="contenthome-container">
        <div ref={ref2} className="grid-contenthome">
          {contentHomePage.map((item, index) => {
            return (
              <CardItem
                isOpen={isOpen}
                title={item.title}
                image={item.image}
                channel={item.channel}
                stick={item.stick}
                views={item.views}
                avtuser={item.avtuser}
                live={item.live}
                key={index}
              />
            );
          })}
        </div>

        <div className="shorts-container">
          <div>
            <div className="title-shorts">
              <ShortsIconRed /> <span>Shorts</span>
              <OverlayTrigger placement="left" overlay={closeBtnToolTip}>
                <div>
                  <button className="btn-close-shorts">
                    <CloseIcon />
                  </button>
                </div>
              </OverlayTrigger>
            </div>
            <div className="shorts-content">
              {contentShorts.map((item, index) => {
                return <CardShort item={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHomePage;
