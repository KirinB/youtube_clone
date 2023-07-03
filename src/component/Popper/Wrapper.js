import "./Popper.css";

function Wrapper({ children, className }) {
  return (
    <div className={`wrapper-popper ${className}`}>
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
