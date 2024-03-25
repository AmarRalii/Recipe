import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Meal from "../Meal";

export default function CategoryMeals() {
  const [Catmeal, setCatMeal] = useState([]); // Initialize as null to handle loading state
  let { strCategory } = useParams();

  async function getCatMeal() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
      );
      if (response?.data?.meals) {
        setCatMeal(response.data.meals);
        console.log(Catmeal);
      }
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  }

  useEffect(() => {
    getCatMeal();
  }, [strCategory]);

  return (
    <div className="container">
      <div className="row">
      {Catmeal.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </div>
    </div>
  );
}
