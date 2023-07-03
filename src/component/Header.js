import "./Header.css";
import { BarsIcon, LogoIcon, UploadIcon, Notification } from "./icon";
import HeaderSearch from "./HeaderSearch";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import images from "../asset/images";
import { Link } from "react-router-dom";
import { Wrapper as PopperWrapper } from "./Popper";

import Tippy from "@tippyjs/react/headless";
import SettingButton from "./SettingButton";
import { useState } from "react";

function Header({ toggleNavigation }) {
  const [show, setShow] = useState(false);
  const uploadTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tạo
    </Tooltip>
  );
  const notificationTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Thông báo
    </Tooltip>
  );

  const handleClickBtn = () => {
    setShow(!show);
  };
  const handleHideResult = () => {
    setShow(false);
  };
  return (
    <div className="header-container">
      <div className="start">
        <button className={"btn-bars"} onClick={() => toggleNavigation()}>
          <BarsIcon className={"header-bars-icon"} />
        </button>
        <Link to={"/"}>
          <div className="header-logo">
            <LogoIcon className={"header-logo-icon"} />
            <span className="topbar-logo-renderer">VN</span>
          </div>
        </Link>
      </div>
      <div className="center">
        <HeaderSearch />
      </div>
      <div className="end">
        <OverlayTrigger placement="bottom" overlay={uploadTooltip}>
          <div>
            <UploadIcon className={"header-upload-icon"} />
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={notificationTooltip}>
          <div>
            <div className="header-notification">
              <Notification className={"header-notification-icon"} />
              <div className="number-header-notification">2</div>
            </div>
          </div>
        </OverlayTrigger>
        <Tippy
          interactive
          visible={show}
          placement="bottom-end"
          render={(attrs) => (
            <div className="header-settings" tabIndex="-1" {...attrs}>
              <PopperWrapper className="header-popper-wrapper">
                <SettingButton />
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <button onClick={handleClickBtn}>
            <img
              src={images.avatar}
              alt="avatar"
              className="header-avatar-user"
            />
          </button>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
