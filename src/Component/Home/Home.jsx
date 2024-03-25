import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meal from '../Meal';

export default function Home() {
  const [mealList, setMealList] = useState([]);

  async function getAllMeals() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
      if (response?.data?.meals) {
        setMealList(response.data.meals);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  }

  useEffect(() => {
    getAllMeals();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div className="container">
    <div className='row'>
      {mealList.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </div>
    </div>
  );
}
