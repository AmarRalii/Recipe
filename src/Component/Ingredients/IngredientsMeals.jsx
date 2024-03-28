import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Meal from "../Meal";
import Loading from "../Loading";

export default function IngredientsMeals() {
  const { id } = useParams();
  const [ingredientList, setIngredientList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getIngredientMeals() {
    setLoading(true)
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
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getIngredientMeals();
  }, [id]);

  return (
    <div className="container">
      {loading && <Loading></Loading>}
      <div className="row">
        {ingredientList.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
