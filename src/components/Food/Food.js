import React from "react";
import { Link } from "react-router-dom";
import "./Food.css";
const Food = ({ food }) => {
  //   console.log(food.strMeal);
  return (
    <div className="single-food">
      <img className="img" src={food.strMealThumb} alt="" />
      <h3 className="food-title">{food.strMeal}</h3>
      <Link to={`/food/${food.idMeal}`}>
        <button className="btn">
          {" "}
          <span className="btn-text">See Me</span>
        </button>
      </Link>
    </div>
  );
};

export default Food;
