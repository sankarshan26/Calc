import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="App" style={{"background-color":"#E0FFFF"}}>
      <Container className="calculator-container ">
        <Row >
          <Col>
            <div className={`calculator ${darkMode ? "bg-dark" : "bg-light"}`} >
              <div className="toggle-button">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <InputGroup className="mb-3">
                <FormControl
                  value={expression}
                  type="text"
                  className={`calculator-screen ${
                    darkMode ? "bg-dark" : "bg-light"
                  }  ${darkMode ? "text-light" : "text-dark"}`}
                  readOnly
                />
              </InputGroup>
              <div className="calculator-buttons">
                <Row>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("7")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      7
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("8")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      8
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("9")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      9
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("/")}
                      className={`${darkMode ? "bg-dark" : "bg-light"} text-primary fs-5`}
                    >
                      /
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("4")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      4
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("5")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      5
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("6")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      6
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("*")}
                      className={`${darkMode ? "bg-dark" : "bg-light"} text-primary fs-5`}
                    >
                      *
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("1")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      1
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("2")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      2
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("3")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      3
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("-")}
                      className={`${darkMode ? "bg-dark" : "bg-light"} text-primary fs-5`}
                    >
                      -
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("0")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      0
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick(".")}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  ${
                        darkMode ? "text-light" : "text-dark"
                      }`}
                    >
                      .
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleCalculate()}
                      className={`${darkMode ? "bg-dark" : "bg-light"}  text-success`}
                    >
                      =
                    </Button>
                  </Col>
                  <Col style={{ padding: "5px" }}>
                    <Button
                      variant="light"
                      onClick={() => handleButtonClick("+")}
                      className={`${darkMode ? "bg-dark" : "bg-light"} text-primary`}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "5px" }}>
                    <Button variant="danger" onClick={() => handleClear()}>
                      Clear
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
