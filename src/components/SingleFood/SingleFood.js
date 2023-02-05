import React from "react";
import { useLoaderData } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import "./SingleFood.css";

const SingleFood = () => {
  const food = useLoaderData();
  // console.log(food);
  const { strInstructions, strMeal, strMealThumb } = food.meals[0];
  const instructions = strInstructions.split("\r\n");
  // console.log(instructions);
  return (
    <div className="main">
      <h1 className="title">{strMeal}</h1>
      <div className="details">
        <img className="image" src={strMealThumb} alt="" />
        <div>
          {instructions.map((instruct, id) => (
            <div className="recipe">
              <p>{instruct}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
