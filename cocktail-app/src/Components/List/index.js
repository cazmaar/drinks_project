import React from "react";
import "./list.css";
function List({ image, name, id, showModal }) {
  return (
    <div>
      <li>
        <img
          className="image-p"
          onClick={() => {
            showModal(true);
          }}
          src={image}
          alt={`${name} cocktails`}
        />
      </li>
      <li
        onClick={() => {
          showModal(true);
        }}
      >
        {name}
      </li>
    </div>
  );
}

export default List;
