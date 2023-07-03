import images from "../asset/images";
import NavChanel from "./NavChanel";
import NavContainerTab from "./NavContainerTab";
import NavItem from "./NavItem";
import "./Navigation.css";

import {
  FeedbackIcon,
  GameIcon,
  HelpIcon,
  HomeIcon,
  LibraryIcon,
  LikeIcon,
  MusicIcon,
  MyVideoIcon,
  NewsIcon,
  ReportIcon,
  SeenIcon,
  SettingIcon,
  ShortsIcon,
  SportIcon,
  SubsIcon,
  TrendingIcon,
  WatchLaterIcon,
  YouTubeIcon,
  YouTubeKidsIcon,
  YouTubeMusicIcon,
  YouTubeStudioIcon,
} from "./icon";
const navigationItems = [
  {
    name: "Trang chủ",
    icon: <HomeIcon />,
    active: "active",
    link: "/",
  },
  {
    name: "Shorts",
    icon: <ShortsIcon />,
    active: "",
    link: "/shorts",
  },
  {
    name: "Kênh đăng ký",
    icon: <SubsIcon />,
    active: "",
    link: "/",
  },
];
const navigationItems2 = [
  {
    name: "Thư viện",
    icon: <LibraryIcon />,
    active: "",
  },
  {
    name: "Video đã xem",
    icon: <SeenIcon />,
    active: "",
  },
  {
    name: "Video của bạn",
    icon: <MyVideoIcon />,
    active: "",
  },
  {
    name: "Xem sau",
    icon: <WatchLaterIcon />,
    active: "",
  },
  {
    name: "Video đã thích",
    icon: <LikeIcon />,
    active: "",
  },
];

const navigationItems3 = [
  {
    name: "Thịnh hành",
    icon: <TrendingIcon />,
    active: "",
  },
  {
    name: "Âm nhạc",
    icon: <MusicIcon />,
    active: "",
  },
  {
    name: "Trò chơi",
    icon: <GameIcon />,
    active: "",
  },
  {
    name: "Tin tức",
    icon: <NewsIcon />,
    active: "",
  },
  {
    name: "Thể thao",
    icon: <SportIcon />,
    active: "",
  },
];

const navigationItems4 = [
  {
    name: "YouTube Premium",
    icon: <YouTubeIcon />,
    active: "",
  },
  {
    name: "YouTube Studio",
    icon: <YouTubeStudioIcon />,
    active: "",
  },
  {
    name: "YouTube Music",
    icon: <YouTubeMusicIcon />,
    active: "",
  },
  {
    name: "Youtube Kids",
    icon: <YouTubeKidsIcon />,
    active: "",
  },
];

const navigationItems5 = [
  {
    name: "Cài đặt",
    icon: <SettingIcon />,
    active: "",
  },
  {
    name: "Nhặt ký báo cáo",
    icon: <ReportIcon />,
    active: "",
  },
  {
    name: "Trợ giúp",
    icon: <HelpIcon />,
    active: "",
  },
  {
    name: "Gửi ý kiến phản hồi",
    icon: <FeedbackIcon />,
    active: "",
  },
];

const navigationChannel = [
  {
    name: "MixiGaming",
    avt: images.avatarmixi,
    dot: true,
  },
  {
    name: "Nhism",
    avt: images.avatarnhism,
    dot: true,
  },
  {
    name: "Kirin",
    avt: images.avatarkirin,
    dot: true,
  },
  {
    name: "Trúc Nhân",
    avt: images.avatartrucnhan,
    dot: false,
  },
  {
    name: "Đen Vâu Official",
    avt: images.avatardenvau,
    dot: false,
  },
  {
    name: "ChillnFree",
    avt: images.avatarchillnfree,
    dot: false,
  },
];

function Navigation() {
  return (
    <div>
      <div className="Nav-container">
        <NavContainerTab>
          {navigationItems.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </NavContainerTab>
        <NavContainerTab>
          {navigationItems2.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </NavContainerTab>
        <NavContainerTab title={"Kênh đăng ký"}>
          {navigationChannel.map((item, index) => {
            return (
              <NavChanel
                Name={item.name}
                src={item.avt}
                dot={item.dot}
                key={index}
              />
            );
          })}
        </NavContainerTab>

        <NavContainerTab title={"Khám phá"}>
          {navigationItems3.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </NavContainerTab>

        <NavContainerTab title={"Dịch vụ khác của Youtube"}>
          {navigationItems4.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </NavContainerTab>
        <NavContainerTab>
          {navigationItems5.map((item, index) => {
            return <NavItem item={item} key={index} />;
          })}
        </NavContainerTab>
        <NavContainerTab className>
          <div className="Nav-about">
            <p>Giới thiệu: Báo chí Bản quyền Liên hệ chúng tôi</p>
            <p>Người sáng tạo Quảng cáo Nhà phát triển</p>
            <br />
            <p>Điều khoản Quyền riêng tư</p>
            <p>Chính sách và an toàn</p>
            <p>Cách YouTube hoạt động</p>
            <p>Thử các tính nắng mới</p>
            <br />
            <p className="copyright">© 2023 Google LLC</p>
          </div>
        </NavContainerTab>
      </div>
    </div>
  );
}

export default Navigation;
