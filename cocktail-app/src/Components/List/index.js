import React from "react";
import "./list.css";
function List({ image, name, idNumber, showModal }) {
  return (
    <div>
      <li>
        <img
          className="image-p"
          onClick={() => {
            showModal(true, idNumber);
          }}
          src={image}
          alt={`${name} cocktails`}
        />
      </li>
      <li
        onClick={() => {
          showModal(true, idNumber);
        }}
        className="drink_name"
      >
        {name}
      </li>
    </div>
  );
}

export default List;
