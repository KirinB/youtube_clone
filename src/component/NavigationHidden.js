import NavItemHidden from "./NavItemHidden";
import { HomeIcon, LibraryIcon, ShortsIcon, SubsIcon } from "./icon";
import "./NavigationHidden.css";
function NavigationHidden() {
  const navigationHiddenlist = [
    {
      name: "Trang chủ",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Shorts",
      icon: <ShortsIcon />,
      link: "/shorts",
    },
    {
      name: "Kênh đăng ký",
      icon: <SubsIcon />,
      link: "/",
    },
    {
      name: "Thư viện",
      icon: <LibraryIcon />,
      link: "/",
    },
  ];
  return (
    <div className="navigation-hidden">
      {navigationHiddenlist.map((item, index) => {
        return <NavItemHidden item={item} key={index} />;
      })}
    </div>
  );
}

export default NavigationHidden;
