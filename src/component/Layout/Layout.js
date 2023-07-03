import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";
import NavigationHidden from "../NavigationHidden";

const Layout = ({ isOpen, toggleNavigation }) => {
  return (
    <div className="App">
      <Header toggleNavigation={toggleNavigation} />
      <div className="wrapper">
        {isOpen ? <Navigation /> : <NavigationHidden />}
        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
