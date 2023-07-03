import "./HomePage.css";
import Container from "react-bootstrap/Container";

import SortBar from "../../component/SortBar";
import ContentHomePage from "./ContentHomePage";

function HomePage({ isOpen }) {
  return (
    <div className="container-fluid">
      <SortBar />
      <Container fluid className="homepage">
        <ContentHomePage isOpen={isOpen} />
      </Container>
    </div>
  );
}

export default HomePage;
