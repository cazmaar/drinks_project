import React, { useState, useEffect } from "react";
import List from "../List";
import "./displaylist.css";
import axios from "axios";

function DisplayList({ data, showModal }) {
  const [idData, setIdData] = useState("");

  // An async function to fetch data from API
  const FetchApi = async () => {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${"Apple"}`
    );
    setIdData(response.data.drinks);
  };

  // useEffect only runs when the value of cocktail changes.
  useEffect(() => {
    FetchApi();
  }, []);

  console.log(idData);
  return (
    data.length > 0 && (
      <ul className="drinks">
        {data.map((drink) => {
          return (
            <List
              showModal={showModal}
              image={drink.strDrinkThumb}
              name={drink.strDrink}
              key={drink.idDrink}
              idNumber={drink.idDrink}
            />
          );
        })}
      </ul>
    )
  );
}

export default DisplayList;
