import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Meal from "../Meal";
import Loading from './../Loading';

export default function MealListByArea() {
  const { id } = useParams();
  const [AreaList, setAreaList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAreaMeals() {
    setLoading(true);
    try {
      const response = await axios.get( `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
      if (response?.data?.meals) {
        setAreaList(response.data.meals.slice(0, 20));
        console.log(AreaList);
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAreaMeals();
  }, [id]);

  return (
    <div className="container">
             {loading && <Loading />}
      <div className="row">
        {AreaList.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

