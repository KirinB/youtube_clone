import "./NavContainerTab.css";

function NavContainerTab({ children, title }) {
  return (
    <div className="Nav-container-tab">
      {title && <p className="Nav-title-tab">{title}</p>}
      {children}
    </div>
  );
}

export default NavContainerTab;
