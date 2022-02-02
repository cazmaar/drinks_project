import React from "react";
import "./list.css";
function List({ image, name, id }) {
  return (
    <div>
      <li>
        <img
          className="image-p"
          onClick={() => {
            console.log(id);
          }}
          src={image}
          alt={`${name} cocktails`}
        />
      </li>
      <li
        onClick={() => {
          console.log(id);
        }}
      >
        {name}
      </li>
    </div>
  );
}

export default List;
