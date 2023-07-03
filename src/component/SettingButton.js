import images from "../asset/images";
import "./SettingButton.css";
import SettingItem from "./SettingItem";
import {
  ArrowRight,
  CoinIcon,
  DataProfileIcon,
  FeedbackIcon,
  HelpIcon,
  KeyboardIcon,
  LanguageIcon,
  LightThemeIcon,
  LimitModeIcon,
  LocationIcon,
  LogoutIcon,
  MyChannelIcon,
  SettingIcon,
  SwtichAccountIcon,
  YouTubeMyStudioIcon,
} from "./icon";

const listSetting1 = [
  {
    name: "Kênh của bạn",
    icon: <MyChannelIcon />,
    arrow: false,
  },
  {
    name: "YouTube Studio",
    icon: <YouTubeMyStudioIcon />,
    arrow: false,
  },
  {
    name: "Chuyển đổi tài khoản",
    icon: <SwtichAccountIcon />,
    arrow: <ArrowRight />,
  },
  {
    name: "Đăng xuất",
    icon: <LogoutIcon />,
    arrow: false,
  },
];
const listSetting2 = [
  {
    name: "Giao dịch mua và gói thành viên",
    icon: <CoinIcon />,
    arrow: false,
  },
  {
    name: "Dữ liệu của bạn trong YouTube",
    icon: <DataProfileIcon />,
    arrow: false,
  },
];
const listSetting3 = [
  {
    name: "Giao diện: Sáng",
    icon: <LightThemeIcon />,
    arrow: <ArrowRight />,
  },
  {
    name: "Ngôn ngữ: Tiếng Việt",
    icon: <LanguageIcon />,
    arrow: <ArrowRight />,
  },
  {
    name: "Chế đọ hạn chế: Đã tắt",
    icon: <LimitModeIcon />,
    arrow: <ArrowRight />,
  },
  {
    name: "Địa điểm: Việt Nam",
    icon: <LocationIcon />,
    arrow: <ArrowRight />,
  },
  {
    name: "Phím tắt",
    icon: <KeyboardIcon />,
    arrow: false,
  },
];
const listSetting4 = [
  {
    name: "Cài Đặt",
    icon: <SettingIcon />,
    arrow: false,
  },
];
const listSetting5 = [
  {
    name: "Trợ giúp",
    icon: <HelpIcon />,
    arrow: false,
  },
  {
    name: "Gửi ý kiến phản hồi",
    icon: <FeedbackIcon />,
    arrow: false,
  },
];

function SettingButton() {
  return (
    <div>
      <div className="info-settings-btn">
        <div className="info-avt-user">
          <img src={images.avatar} alt="avatar" className="SettingBtn-Avt" />
        </div>
        <div className="info-id-user">
          <span>Kirin</span>
          <p>@kirin5890</p>
          <a href="/">Quản lý Tài khoản Google của bạn</a>
        </div>
      </div>
      <div className="setting-item-1">
        {listSetting1.map((item, index) => {
          return <SettingItem item={item} key={index} />;
        })}
      </div>
      <div className="setting-item-1">
        {listSetting2.map((item, index) => {
          return <SettingItem item={item} key={index} />;
        })}
      </div>
      <div className="setting-item-1">
        {listSetting3.map((item, index) => {
          return <SettingItem item={item} key={index} />;
        })}
      </div>
      <div className="setting-item-1">
        {listSetting4.map((item, index) => {
          return <SettingItem item={item} key={index} />;
        })}
      </div>
      <div className="setting-item-1 none">
        {listSetting5.map((item, index) => {
          return <SettingItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SettingButton;
