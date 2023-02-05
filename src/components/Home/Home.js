import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import "./Home.css";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="title">Welcome To Meal-DB</h1>
      </div>
      <div className="container">
        <h3 className="title">Feature Meal</h3>
        <div className="all-food">
          {foods.meals.map((food) => (
            <Food key={food.idMeal} food={food}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
