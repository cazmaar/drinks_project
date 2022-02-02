import React from "react";
import List from "../List";
import "./displaylist.css";


function DisplayList({ data }) {
  console.log(data);
  return (
    <ul className="drinks">
      {data.map((drink) => {
        return (
          <List
            image={drink.strDrinkThumb}
            name={drink.strDrink}
            key={drink.idDrink}
            id={drink.idDrink}
          />
        );
      })}
    </ul>
  );
}

export default DisplayList;
