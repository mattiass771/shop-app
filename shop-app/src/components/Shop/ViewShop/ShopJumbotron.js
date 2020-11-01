import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

import JumboColor from "../SketchPicker/JumboColor";
import JumboTextColor from "../SketchPicker/JumboTextColor";

// CreateShop.js
export default ({ shopData }) => {
  const [jumboColor, setJumboColor] = useState("#c1c1c1");
  const [jumboTextColor, setJumboTextColor] = useState("#333333");
  const [showJumboColor, setShowJumboColor] = useState(false);
  const [showJumboTextColor, setShowJumboTextColor] = useState(false);
  const { shopName, owner, description } = shopData;

  return (
    <Jumbotron style={{ backgroundColor: jumboColor }} fluid>
      <Container style={{ color: jumboTextColor }} className="text-center">
        <Row>
          <Col>
            <div>
              <JumboTextColor
                setShowJumboTextColor={setShowJumboTextColor}
                showJumboTextColor={showJumboTextColor}
                setJumboTextColor={setJumboTextColor}
                jumboTextColor={jumboTextColor}
              />
            </div>
            <div style={{ marginLeft: "90%", marginBottom: "-36px" }}>
              <JumboColor
                setShowJumboColor={setShowJumboColor}
                showJumboColor={showJumboColor}
                setJumboColor={setJumboColor}
                jumboColor={jumboColor}
              />
            </div>
            <h2>{shopName}</h2>
            <p>{description}</p>
            <p>Owner: {owner}</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
