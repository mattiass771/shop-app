import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import PageColor from "../SketchPicker/PageColor";
import AddItem from "./AddItem";

import { FiPlusSquare } from "react-icons/fi";

import { Helmet } from "react-helmet";

export default () => {
  const [pageColor, setPageColor] = useState("whitesmoke");
  const [showPageColor, setShowPageColor] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <Container className="text-center">
      <AddItem showAddItem={showAddItem} setShowAddItem={setShowAddItem} />
      <Helmet>
        <style>{`body { background-color: ${pageColor}; }`}</style>
      </Helmet>
      <div style={{ marginLeft: "90%", marginBottom: "-36px" }}>
        <PageColor
          setShowPageColor={setShowPageColor}
          showPageColor={showPageColor}
          setPageColor={setPageColor}
          pageColor={pageColor}
        />
      </div>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Button variant="dark" onClick={() => setShowAddItem(true)}>
              <FiPlusSquare
                style={{
                  margin: "0 auto",
                  height: "18rem",
                  fontSize: "500%"
                }}
              />
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
