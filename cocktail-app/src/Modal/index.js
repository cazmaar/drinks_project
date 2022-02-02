// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "antd";
import { useRef } from "react";
import "./modal.css";

const DrinkModal = ({ modal, showModal }) => {
  function removeModal() {
    showModal(false);
  }

  return (
    modal === true && (
      <div className="calcbackground">
        <div className="minibg">
          <p>kazeem Mayungbe</p>
          <button onClick={removeModal}>Close</button>
        </div>
      </div>
    )
  );
};
export default DrinkModal;
