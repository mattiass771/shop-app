import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { SketchPicker } from "react-color";

import JumboColor from "./SketchPicker/JumboColor";

// CreateShop.js
export default ({ shopData }) => {
  const [jumboColor, setJumboColor] = useState("#c1c1c1");
  const [jumboTextColor, setJumboTextColor] = useState("#333333");
  const [showJumboColor, setShowJumboColor] = useState(false);
  const { shopName, owner, description, shopItems } = shopData;
  const target = useRef(null);

  const handleJumboTextColor = (color) => {
    setJumboTextColor(color.hex);
  };

  return (
    <>
      <Jumbotron style={{ backgroundColor: jumboColor }} fluid>
        <Container style={{ color: jumboTextColor }} className="text-center">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h2>{shopName}</h2>
              <p>{description}</p>
              <p>Owner: {owner}</p>
            </Col>
            <Col className="text-right" md={{ span: 1, offset: 1 }}>
              <JumboColor
                target={target}
                setShowJumboColor={setShowJumboColor}
                showJumboColor={showJumboColor}
                setJumboColor={setJumboColor}
                jumboColor={jumboColor}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center">
            <SketchPicker
              color={jumboTextColor}
              onChangeComplete={handleJumboTextColor}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
