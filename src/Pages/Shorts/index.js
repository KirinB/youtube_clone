import "./Shorts.css";
import Container from "react-bootstrap/Container";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import Col from 'react-bootstrap/Col';
import images from "../../asset/images";
import {
  CommentShortIcon,
  DislikeShortIcon,
  LikeShortsIcon,
  MoreShortIcon,
  ShareShortIcon,
} from "../../component/icon";
function ShortPage() {
  const likeTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tôi thích video này
    </Tooltip>
  );

  const dislikeTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tôi không thích video này
    </Tooltip>
  );
  const commentTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Bình luận
    </Tooltip>
  );
  const sharetooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Chia sẻ
    </Tooltip>
  );
  const avtTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Âm thanh gốc
    </Tooltip>
  );
  const userProfileTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      @kirin
    </Tooltip>
  );

  return (
    <Container>
      <div className="shortpage">
        <div className="shortpage-image">
          <img src={images.shortsPage1} alt="1" className="img-short-page" />
          <div className="info-shorts-video">
            <div className="text-shorts-page">
              <div className="title-shorts-video">
                <p>Download Any File From URL in HTML and JavaScript</p>
              </div>
            </div>

            <div className="info-channel-shorts">
              <div className="left-info-shorts">
                <img
                  src={images.channelsShorts1}
                  alt=""
                  className="shorts-avt-info"
                />
                <OverlayTrigger placement="top" overlay={userProfileTooltip}>
                  <p>@kirin</p>
                </OverlayTrigger>
              </div>
              <button className="btn-info-shorts">Đăng ký</button>
            </div>
          </div>
        </div>
        <div className="actions">
          <OverlayTrigger placement="left" overlay={likeTooltip}>
            <button className="btn-short">
              <LikeShortsIcon />
            </button>
          </OverlayTrigger>
          <p>231</p>
          <OverlayTrigger placement="left" overlay={dislikeTooltip}>
            <button className="btn-short">
              <DislikeShortIcon />
            </button>
          </OverlayTrigger>
          <p>1</p>
          <OverlayTrigger placement="left" overlay={commentTooltip}>
            <button className="btn-short">
              <CommentShortIcon />
            </button>
          </OverlayTrigger>
          <p>2</p>
          <OverlayTrigger placement="left" overlay={sharetooltip}>
            <button className="btn-short">
              <ShareShortIcon />
            </button>
          </OverlayTrigger>
          <p>Chia sẻ</p>

          <button className="btn-short">
            <MoreShortIcon />
          </button>
          <OverlayTrigger placement="left" overlay={avtTooltip}>
            <img
              src={images.channelsShorts1}
              alt=""
              className="shorts-avt-profile"
            />
          </OverlayTrigger>
        </div>
      </div>
    </Container>
  );
}

export default ShortPage;
