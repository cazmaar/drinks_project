import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Input, Space } from "antd";
import axios from "axios";

const initialState = "";

// This is an input component. Gets the cocktail to search for.
function InputField() {
  // useRef to persist a value of false after each render in order to prevent useEffect from running on first render.
  const firstUpdate = useRef(true); 
 const { Search } = Input;

  // useState to set the state for each value you entered.
  const [cocktail, setCocktail] = useState(initialState);
  const [fetcheddata, setFetchedData] = useState([]);

  // This function runs when you click on search.
  const onSearch = (value) => {
    setCocktail(value);
  };

  // An async function to fetch data from API
  const FetchApi = async () => {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    setFetchedData(response.data.drinks);
  };

// useEffect only runs when the value of cocktail changes.
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    FetchApi();
  }, [cocktail]);

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder=" search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
    </div>
  );
}

export default InputField;
