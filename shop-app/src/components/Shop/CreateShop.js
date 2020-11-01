import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// CreateShop.js
export default ({ userData }) => {
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");

  const owner = userData.fullName;
  const ownerId = userData._id;

  const handleOpenShop = () => {
    axios
      .post(`https://mlty7.sse.codesandbox.io/shop/add`, {
        shopName,
        owner,
        ownerId,
        description
      })
      .then((res) => console.log(res.data))
      .catch((err) => err && console.log(`Error catched: ${err}`))
      .then(() => window.location.reload());
  };

  return (
    <Container>
      <br />
      <Row>
        <Col className="text-center">
          <h1>Create your shop!</h1>
          <p>
            Please fill out the form below and shortly after, your very own shop
            will be generated.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6} className="form-group">
          <label htmlFor="shopName">Name your shop:</label>
          <input
            value={shopName}
            className="form-control"
            type="text"
            name="shopName"
            onChange={(e) => setShopName(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6} className="form-group">
          <label htmlFor="setDescription">
            Add a brief description to your shop:
          </label>
          <textarea
            value={description}
            className="form-control"
            type="text"
            name="setDescription"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          <Button variant="dark" onClick={handleOpenShop}>
            Open Shop!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
