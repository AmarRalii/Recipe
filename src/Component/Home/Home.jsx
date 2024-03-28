import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Meal from '../Meal';
import Loading from './../Loading';

export default function Home() {
  const [mealList, setMealList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAllMeals() {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
      if (response?.data?.meals) {
        setMealList(response.data.meals);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllMeals();
  }, []); 

  return (
    <div className="container">
      {loading && <Loading />}
      <div className='row'>
        {mealList.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
