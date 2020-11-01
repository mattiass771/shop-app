import React from "react";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { SketchPicker } from "react-color";

export default ({
  setShowJumboColor,
  showJumboColor,
  setJumboColor,
  jumboColor,
  target
}) => {
  const handleJumboColor = (color) => {
    setJumboColor(color.hex);
  };
  return (
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={
        <Popover style={{ backgroundColor: "#333333" }}>
          <Popover.Content>
            <SketchPicker
              disableAlpha
              color={jumboColor}
              onChangeComplete={handleJumboColor}
            />
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="light" onClick={() => setShowJumboColor(true)}>
        Change Color
      </Button>
    </OverlayTrigger>
  );
};

/*
 */
