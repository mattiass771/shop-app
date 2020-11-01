import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default ({ showAddItem, setShowAddItem }) => {
  return (
    <Modal show={showAddItem} onHide={() => setShowAddItem(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => setShowAddItem(false)}>
          Discard
        </Button>
        <Button variant="dark" onClick={() => setShowAddItem(false)}>
          Save Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
