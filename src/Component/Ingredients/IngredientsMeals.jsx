import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Meal from "../Meal";

export default function IngredientsMeals() {
  const { id } = useParams();
  const [ingredientList, setIngredientList] = useState([]);

  async function getIngredientMeals() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
      );
      if (response?.data?.meals) {
        setIngredientList(response.data.meals.slice(0, 20));
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  }

  useEffect(() => {
    getIngredientMeals();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        {ingredientList.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
