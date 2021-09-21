import "./App.css";
import HelloWorld from "./HelloWorld";
import pic from "./worm.jpg";
import bgpic from "./brick.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {
  const wormStyle = {
    width: "100%",
    padding: "2px 4px",
    margin: "20px",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
  };
  const elloText = {
    margin: "20px",
    fontSize: "60px",
    backgroundColor: "red",
    borderRadius: "4px",
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center",
  };
  const backGround = {
    backgroundImage: `url(${bgpic})`
  }
  return (
    <body style={backGround}>
      <div>
        <Container>
          <Row>
            <Col>
              <img src={pic} style={wormStyle} alt="worm" />
            </Col>
            <Col>
              <p style={elloText}>'ello</p>
              <HelloWorld />
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
}

export default App;
