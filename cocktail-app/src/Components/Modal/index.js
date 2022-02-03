// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "antd";

import "./modal.css";

const DrinkModal = ({ modal, showModal, data, id }) => {
  const newData = data.filter((drink) => id === drink.idDrink);

  function removeModal() {
    showModal(false);
  }

  return (
    <div data-testid="test-button">
      {modal === true && (
        <div className="calcbackground">
          <div className="minibg">
            <div className="text-img">
              <div>
                <p data-testid="name">{newData[0].strDrink}</p>
                <img src={newData[0].strDrinkThumb} alt="drink-img" />
              </div>
              <div>
                <h3>Ingredients</h3>
                {newData[0].strIngredient1 !== null && (
                  <div>
                    <p data-testid="ingredient">{newData[0].strIngredient1}</p>
                    <p>{newData[0].strMeasure1}</p>
                  </div>
                )}
                {newData[0].strIngredient2 !== null && (
                  <div>
                    <p data-testid="ingredient2">{newData[0].strIngredient2}</p>
                    <p>{newData[0].strMeasure2}</p>
                  </div>
                )}
                {newData[0].strIngredient3 !== null && (
                  <div>
                    <p>{newData[0].strIngredient3}</p>
                    <p>{newData[0].strMeasure3}</p>
                  </div>
                )}
                {newData[0].strIngredient4 !== null && (
                  <div>
                    <p>{newData[0].strIngredient4}</p>
                    <p>{newData[0].strMeasure4}</p>
                  </div>
                )}
                {newData[0].strIngredient5 !== null && (
                  <div>
                    <p>{newData[0].strIngredient5}</p>
                    <p>{newData[0].strMeasure5}</p>
                  </div>
                )}
                {newData[0].strIngredient6 !== null && (
                  <div>
                    <p>{newData[0].strIngredient6}</p>
                    <p>{newData[0].strMeasure6}</p>
                  </div>
                )}
              </div>
            </div>
            <h3>Instructions</h3>
            <p>{newData[0].strInstructions}</p>
            <button data-testid="butt" onClick={removeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DrinkModal;
